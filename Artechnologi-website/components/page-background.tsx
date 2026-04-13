"use client"

import React from "react"
import { motion } from "framer-motion"

type Props = {
  variant?: "wave" | "particles" | "radial" | "floating" | "map"
  children?: React.ReactNode
  className?: string
}

export default function PageBackground({ variant = "wave", children, className = "" }: Props) {
  const particles = new Array(8).fill(0)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        {variant === "wave" && (
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full object-cover opacity-30">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,160 C240,220 480,100 720,140 C960,180 1200,100 1440,140 L1440,320 L0,320 Z"
              fill="url(#g1)"
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        )}

        {variant === "particles" && (
          <div className="w-full h-full" aria-hidden>
            {particles.map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/20 rounded-full blur-sm"
                style={{ width: 20 + i * 8, height: 20 + i * 8, left: `${10 + i * 10}%`, top: `${5 + i * 8}%` }}
                animate={{ y: [0, -40 - i * 6, 0], x: [0, 20 - i * 2, 0], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
            ))}
          </div>
        )}

        {variant === "radial" && (
          <div className="w-full h-full" style={{ background: "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 15%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.12), transparent 20%)" }} />
        )}

        {variant === "floating" && (
          <div className="w-full h-full" aria-hidden>
            {[0, 1, 2].map((n) => (
              <motion.div
                key={n}
                className="absolute bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"
                style={{ width: 220 - n * 40, height: 220 - n * 40, right: 20 + n * 60, top: 60 + n * 40 }}
                animate={{ y: [0, -30 - n * 10, 0], x: [0, -20 + n * 6, 0] }}
                transition={{ duration: 8 + n * 2, repeat: Infinity, ease: "easeInOut", delay: n * 0.3 }}
              />
            ))}
          </div>
        )}

        {variant === "map" && (
          <div className="w-full h-full" style={{ background: "linear-gradient(120deg, rgba(14,165,233,0.06), rgba(124,58,237,0.06))" }} />
        )}
      </div>

      {/* Content above background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
