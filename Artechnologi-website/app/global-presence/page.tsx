"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function GlobalPresencePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col mb-16">

        {/* MAIN CONTAINER */}
        <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-stretch gap-10">

          {/* LEFT SIDE IMAGE (FULL HEIGHT) */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <Image
              src="https://png.pngtree.com/png-clipart/20250309/original/pngtree-global-network-a-digital-earth-visualization-representing-worldwide-connection-and-technology-png-image_20621167.png"
              alt="Global Presence"
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
              Global Presence
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              We operate across multiple regions to provide local support and global delivery capabilities. 
              Our regional teams ensure projects are delivered on time with strong cultural and domain understanding.
            </motion.p>

            {/* CARD SECTION */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-border"
            >
              <h2 className="text-2xl font-semibold mb-3">Regions</h2>

              <ul className="space-y-2 text-muted-foreground">
                <li>North America</li>
                <li>EMEA</li>
                <li>APAC</li>
                <li>Latin America</li>
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