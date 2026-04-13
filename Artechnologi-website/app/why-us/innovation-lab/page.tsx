"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import PageBackground from "@/components/page-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function InnovationLab() {
  return (
    <>
      <Navbar />

      <PageBackground variant="wave">
        <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col mb-16">

          {/* MAIN CONTAINER */}
          <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-stretch gap-10">

            {/* LEFT SIDE IMAGE (FULL HEIGHT) */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                alt="Innovation Lab"
                fill
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">

              {/* TITLE */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl lg:text-5xl font-bold"
              >
                Innovation Lab
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-muted-foreground"
              >
                Our Innovation Lab incubates new ideas — exploring AI, low-code platforms, 
                analytics, and integration patterns that accelerate time-to-value.
              </motion.p>

              {/* CARD */}
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border"
              >
                <h2 className="text-2xl font-semibold mb-3">Capabilities</h2>

                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>Prototype & proof-of-concept delivery</li>
                  <li>Data science and ML engineering</li>
                  <li>UX experimentation and rapid iteration</li>
                </ul>

                <div className="mt-6">
                  <Link href="/" className="text-primary font-semibold">
                    Back to home →
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </main>
      </PageBackground>

      <Footer />
    </>
  )
}