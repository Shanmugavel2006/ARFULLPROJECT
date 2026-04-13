"use client"

import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Globe, Lightbulb, GraduationCap } from "lucide-react"

const perks = [
  { icon: Globe, label: "Remote-First Culture" },
  { icon: Lightbulb, label: "Innovation Labs" },
  { icon: GraduationCap, label: "Learning Stipend" },
  { icon: Briefcase, label: "Competitive Benefits" },
]

export function CareersSection() {
  return (
    <section id="careers" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#06B6D4]/5 rounded-full blur-[100px]" />
          </div>

          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <ScrollReveal>
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                    Careers
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
                    Build the Future With Us
                  </h2>
                  <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
                    Join a team of world-class engineers, designers, and strategists
                    working on products that impact millions of users globally.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                    {perks.map((perk) => (
                      <div
                        key={perk.label}
                        className="flex items-center gap-3 rounded-xl border border-border bg-secondary/50 px-4 py-3"
                      >
                        <perk.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {perk.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    View Open Positions
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.2} direction="right" className="flex-shrink-0">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-[#06B6D4]/20 rotate-6" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary to-card border border-border flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl lg:text-6xl font-bold text-primary">
                        50+
                      </div>
                      <p className="mt-2 text-muted-foreground font-medium">
                        Open Roles
                      </p>
                      <p className="text-sm text-muted-foreground/70 mt-1">
                        Across 12 countries
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
