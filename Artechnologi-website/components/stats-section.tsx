"use client"

import { ScrollReveal } from "./scroll-reveal"
import Image from "next/image"
import { motion } from "framer-motion"

import { AnimatedGradientBackground } from "./animated-gradient-background"
import { ArrowRight } from "lucide-react"

export function StatsSection() {

  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedGradientBackground />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Our Solutions
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Enterprise-Grade Digital Solutions
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              We develop powerful and scalable digital products designed to help
              businesses manage their operations more efficiently.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Row 1: Image ERP | Content */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/erp.jpg"
                alt="Enterprise Resource Planning"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              className="flex flex-col justify-center h-full p-8 lg:p-12 bg-card rounded-2xl border border-border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Enterprise Resource Planning
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                Consolidate your entire business operations, from foundational finance and supply chain to manufacturing and human resources. Achieve rapid operational closure with accurate reporting, real-time visibility, and seamless process integration across all departments.
              </p>
              <a
                href="#erp"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </ScrollReveal>

          {/* Row 2: Content | Image CRM */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="flex flex-col justify-center h-full p-8 lg:p-12 bg-card rounded-2xl border border-border lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Customer Relationship Management
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                Set up a customer-focused CRM system right from lead acquisition to post-sales support, along with real-time customer tracking across all touchpoints. With our CRM, you can ensure on-time follow-ups and also step up relationship velocity to maximize customer lifetime value.
              </p>
              <a
                href="#crm"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl lg:order-2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/crm.webp"
                alt="Customer Relationship Management"
                fill
                className="object-cover rounded-2xl"
              />
              <Image
                src="/images/crm.webp"
                alt="Customer Relationship Management"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </ScrollReveal>

          {/* Row 3: Image | Content */}
          <ScrollReveal delay={0.1}>
            <motion.div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl w-full h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/images/bms.jpg"
                alt="Business Management System"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              className="flex flex-col justify-center h-full p-8 lg:p-12 bg-card rounded-2xl border border-border"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Business Process Management
              </h3>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                Accelerate growth with a BPM engine that automates the entire business lifecycle. Design, execute, monitor, and optimize workflows to increase efficiency, reduce operational costs, and improve overall performance across your organization.
              </p>
              <a
                href="#bpm"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
