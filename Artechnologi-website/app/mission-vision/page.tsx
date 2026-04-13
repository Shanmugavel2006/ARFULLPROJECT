"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function MissionVisionPage() {
  return (
    <>
      <Navbar />

     <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col mb-16">

        {/* MAIN CONTAINER */}
        <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-stretch gap-10">

          {/* LEFT SIDE IMAGE (FULL HEIGHT) */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <Image
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80"
              alt="Mission & Vision"
              fill
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-foreground"
            >
              Mission & Vision
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our mission is to help organizations harness technology to create sustainable competitive advantage. 
              We envision a future where digital platforms empower every team to deliver value faster.
            </motion.p>

            {/* CARD SECTION */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-semibold mb-3">Principles</h2>

              <ol className="list-decimal ml-5 space-y-2 text-muted-foreground">
                <li>Customer-first problem solving</li>
                <li>Engineering excellence</li>
                <li>Data-driven decisions</li>
                <li>Long-term partnerships</li>
              </ol>

              <div className="mt-6">
                <Link href="/" className="text-primary font-semibold">
                  Back to home →
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}