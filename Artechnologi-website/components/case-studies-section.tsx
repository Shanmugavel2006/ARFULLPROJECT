"use client"

import { ScrollReveal } from "./scroll-reveal"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const caseStudies = [
  {
    title: "AI-Driven Supply Chain Optimization",
    client: "Global Logistics Corp",
    industry: "Logistics & Supply Chain",
    description:
      "Implemented a predictive analytics engine that reduced operational costs by 32% and improved delivery accuracy to 99.7% across 40+ distribution centers worldwide.",
    metrics: ["32% Cost Reduction", "99.7% Accuracy", "40+ Centers"],
    gradient: "from-primary/20 to-[#06B6D4]/20",
  },
  {
    title: "Digital Banking Platform Transformation",
    client: "NextGen Financial Services",
    industry: "Banking & Finance",
    description:
      "Built a cloud-native digital banking platform serving 12M+ users with 99.99% uptime, real-time transactions, and AI-powered fraud detection.",
    metrics: ["12M+ Users", "99.99% Uptime", "< 200ms Latency"],
    gradient: "from-[#06B6D4]/20 to-[#10B981]/20",
  },
  {
    title: "Smart Healthcare Ecosystem",
    client: "MedTech Innovations",
    industry: "Healthcare & Life Sciences",
    description:
      "Designed a HIPAA-compliant healthcare platform integrating IoT devices, patient management, and predictive diagnostics for 200+ healthcare facilities.",
    metrics: ["200+ Facilities", "50% Faster Diagnostics", "HIPAA Compliant"],
    gradient: "from-[#10B981]/20 to-primary/20",
  },
  {
    title: "Booking Management System",
    client: "TravelTech Solutions",
    industry: "Travel & Hospitality",
    description:
      "Developed a comprehensive booking management system that streamlined reservations, automated confirmations, and provided real-time availability across multiple channels.",
    metrics: ["50% Faster Bookings", "99.9% Uptime", "Multi-Channel Integration"],
    gradient: "from-primary/20 to-[#8B5CF6]/20",
    image: "/images/bmimage.png",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Case Studies
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Delivering Real-World Impact
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              Explore how we have helped leading enterprises transform their
              operations and achieve extraordinary results.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/40 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="relative flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 min-h-[200px] lg:min-h-[300px] bg-gradient-to-br from-secondary to-card flex items-center justify-center overflow-hidden">
                    {study.image ? (
                      <Image
                        src={study.image}
                        alt={study.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-3 p-8">
                        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <ExternalLink className="h-8 w-8 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {study.industry}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {study.client}
                    </span>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      {study.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {study.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
