"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  tx: number
  ty: number
  vx: number
  vy: number
  size: number
  color: string
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "")
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

function lerpColor(a: string, b: string, t: number) {
  const A = hexToRgb(a)
  const B = hexToRgb(b)
  const r = Math.round(lerp(A[0], B[0], t))
  const g = Math.round(lerp(A[1], B[1], t))
  const bl = Math.round(lerp(A[2], B[2], t))
  return `rgb(${r}, ${g}, ${bl})`
}

export function LogoFormation({
  width = 360,
  height = 360,
  particleLimit = 2500,
}: {
  width?: number
  height?: number
  particleLimit?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    // set canvas physical size
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    let animationId = 0
    let cancelled = false
    const particles: Particle[] = []

    // Use the raster logo (logo.jpeg) for accurate stylized colors and details
    const loadAndSample = async () => {
      const img = new Image()
      img.src = "/logo.jpeg"
      await new Promise<void>((res, rej) => {
        img.onload = () => res()
        img.onerror = () => rej(new Error("Failed to load logo image"))
      })

      // offscreen canvas: use higher resolution for detailed sampling
      const off = document.createElement("canvas")
      const sampleScale = 3
      const ow = width * sampleScale
      const oh = height * sampleScale
      off.width = ow
      off.height = oh
      const octx = off.getContext("2d")!
      octx.clearRect(0, 0, ow, oh)

      // draw the logo to fill the offscreen canvas
      octx.drawImage(img, 0, 0, ow, oh)

      const imgData = octx.getImageData(0, 0, ow, oh)

      // sample on an integer grid so ImageData indexing is valid
      const spacing = 2

      const points: { x: number; y: number; color: string }[] = []
      for (let y = 0; y < oh; y += spacing) {
        for (let x = 0; x < ow; x += spacing) {
          const idx = ((y | 0) * ow + (x | 0)) * 4
          const r = imgData.data[idx]
          const g = imgData.data[idx + 1]
          const b = imgData.data[idx + 2]
          const a = imgData.data[idx + 3]

          // capture all non-background pixels with low thresholds
          const brightness = (r + g + b) / 3
          if (a > 10 && brightness < 250) {
            // scale sampled coordinate back to target canvas size
            const tx = (x / sampleScale) / width * width
            const ty = (y / sampleScale) / height * height
            points.push({ x: tx, y: ty, color: `rgb(${r},${g},${b})` })
          }
        }
      }

      if (cancelled || points.length === 0) return

      // limit particle count for performance using random index picks
      const targetCount = Math.min(points.length, particleLimit)
      const used: { x: number; y: number; color: string }[] = []
      const seen = new Set<number>()
      while (used.length < targetCount) {
        const randomIndex = Math.floor(Math.random() * points.length)
        if (seen.has(randomIndex)) continue
        seen.add(randomIndex)
        used.push(points[randomIndex])
      }

      for (let i = 0; i < used.length; i++) {
        const t = used[i]
        // vary size slightly based on sampled brightness for depth
        const [r, g, b] = t.color.match(/\d+/g)!.map(Number)
        const brightness = (r + g + b) / 3
        const sizeVar = 0.8 + (brightness / 255) * 0.4
        const baseSize = 2
        const size = baseSize * sizeVar

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          tx: t.x,
          ty: t.y,
          vx: 0,
          vy: 0,
          size,
          color: t.color,
        })
      }

      // animate with smooth spring motion to form logo
      let animationStartTime = Date.now()
      const formDuration = 5000 // 5 seconds to form
      const holdDuration = 2000 // 2 seconds to hold
      const collapseDuration = 3000 // 3 seconds to collapse/disperse
      const cycleDuration = formDuration + holdDuration + collapseDuration
      let loopCount = 0

      const tick = () => {
        const elapsed = Date.now() - animationStartTime
        const cycleProgress = (elapsed % cycleDuration) / cycleDuration
        let phase: "forming" | "holding" | "collapsing" = "forming"
        let phaseProgress = 0

        if (elapsed % cycleDuration < formDuration) {
          phase = "forming"
          phaseProgress = (elapsed % cycleDuration) / formDuration
        } else if (elapsed % cycleDuration < formDuration + holdDuration) {
          phase = "holding"
          phaseProgress = ((elapsed % cycleDuration) - formDuration) / holdDuration
        } else {
          phase = "collapsing"
          phaseProgress = ((elapsed % cycleDuration) - formDuration - holdDuration) / collapseDuration
        }

        ctx.clearRect(0, 0, width, height)

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i]
          
          if (phase === "forming" || phase === "holding") {
            // Pull toward target (form position)
            const dx = p.tx - p.x
            const dy = p.ty - p.y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist > 0.1) {
              p.vx += (dx / dist) * 0.2 * Math.min(dist / 50, 1)
              p.vy += (dy / dist) * 0.2 * Math.min(dist / 50, 1)
            }
          } else if (phase === "collapsing") {
            // Push away from target (collapse/disperse)
            const dx = p.x - p.tx
            const dy = p.y - p.ty
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist > 0.1) {
              p.vx += (dx / dist) * 0.15
              p.vy += (dy / dist) * 0.15
            } else {
              // Accelerate outward even from center
              const angle = Math.random() * Math.PI * 2
              p.vx += Math.cos(angle) * 0.3
              p.vy += Math.sin(angle) * 0.3
            }
          }

          // damping
          p.vx *= 0.85
          p.vy *= 0.85

          // step position with small orbital noise
          const angle = Math.atan2(p.ty - p.y, p.tx - p.x)
          const noise = Math.sin(Date.now() * 0.001 + i) * 0.2
          p.x += p.vx + Math.cos(angle + noise) * 0.1
          p.y += p.vy + Math.sin(angle + noise) * 0.1

          // Boundary wrapping to keep particles on screen
          if (p.x < -10) p.x = width + 10
          if (p.x > width + 10) p.x = -10
          if (p.y < -10) p.y = height + 10
          if (p.y > height + 10) p.y = -10

          // draw particle
          ctx.beginPath()
          ctx.fillStyle = p.color
          ctx.globalAlpha = 0.95
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
          ctx.fill()
        }

        animationId = requestAnimationFrame(tick)
      }

      if (!cancelled) tick()
    }

    loadAndSample().catch((err) => {
      console.error("[LogoFormation]", err)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(animationId)
    }
  }, [width, height, particleLimit])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  )
}
