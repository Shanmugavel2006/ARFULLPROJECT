"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import PageBackground from "@/components/page-background"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ExpertConsulting() {
  return (
    <>
      <Navbar />

      <PageBackground variant="floating">
        <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col mb-16">

          {/* MAIN CONTAINER */}
          <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-stretch gap-10">

            {/* LEFT SIDE IMAGE (FULL HEIGHT) */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
              <Image
                src="https://st5.depositphotos.com/62628780/68716/i/450/depositphotos_687160162-stock-photo-business-people-presentation-whiteboard-man.jpg"
                alt="Expert Consulting"
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
                Expert Consulting
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-lg text-muted-foreground"
              >
                Our consulting teams combine domain expertise with practical engineering 
                to guide strategy, architecture, and delivery for complex digital programs.
              </motion.p>

              {/* CARD */}
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border"
              >
                <h2 className="text-2xl font-semibold mb-3">Services</h2>

                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>Cloud strategy & migration</li>
                  <li>Platform architecture and modernization</li>
                  <li>Security and compliance advisory</li>
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