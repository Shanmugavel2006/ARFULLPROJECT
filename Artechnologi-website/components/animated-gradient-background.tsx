import React from "react"

export function AnimatedGradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-0 animate-gradient-move"
      style={{
        background:
          "linear-gradient(120deg, #06B6D4 0%, #818CF8 50%, #EC4899 100%)",
        backgroundSize: "200% 200%",
        opacity: 0.18,
      }}
    />
  )
}
