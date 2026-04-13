"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function CultureValuesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col mb-16">

        {/* MAIN CONTAINER */}
        <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-stretch gap-10">

          {/* LEFT SIDE IMAGE (FULL HEIGHT) */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <Image
              src="https://blog.kintone.com/hubfs/AdobeStock_97732969%20%281%29.jpeg"
              alt="Culture & Values"
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
              Culture & Values
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Our culture is built on openness, curiosity, and a relentless focus on customer outcomes. 
              We believe in empowering individuals, fostering collaboration, and creating an environment 
              where innovation thrives.
            </motion.p>

            {/* CARD SECTION */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-semibold mb-3">Values</h2>

              <ul className="space-y-2 text-muted-foreground">
                <li>Customer obsession</li>
                <li>Continuous learning</li>
                <li>Ownership and accountability</li>
                <li>Collaboration and respect</li>
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

      <Footer />
    </>
  )
}