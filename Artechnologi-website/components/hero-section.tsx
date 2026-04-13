"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { ParticleBackground } from "./particle-background"
import { LogoFormation } from "./logo-formation"

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-32">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06B6D4]/8 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <ParticleBackground />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: text + CTAs */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance"
            >
              Building Scalable Digital
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                Products for the Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty lg:mx-0"
            >
              We engineer next-generation digital platforms and AI-powered products that
              drive innovation, accelerate growth, and transform enterprises across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => handleScroll("#products")}
                className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-all backdrop-blur-sm"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Right: logo particle formation */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            {/* Mobile: smaller dimensions */}
            <div className="block lg:hidden w-full max-w-[400px] aspect-square">
              <LogoFormation width={400} height={400} particleLimit={3000} />
            </div>
            {/* Desktop: larger dimensions */}
            <div className="hidden lg:block">
              <LogoFormation width={750} height={750} particleLimit={8000} />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
