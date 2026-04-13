"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Footer } from "@/components/footer"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 px-6 lg:px-12 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Side Image - IT field related */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
              alt="Why Us - IT Team Working"
              width={420}
              height={420}
              className="rounded-2xl shadow-lg object-cover"
              priority
            />
          </div>
          {/* Right Side Content */}
          <div className="w-full md:w-1/2">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Us</motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground leading-relaxed mb-6">
              We combine industry-leading expertise with innovative technology to deliver unparalleled value, ensuring your success is our top priority. Our commitment to excellence is reflected in everything we do.
            </motion.p>
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-semibold mb-3">Our Advantages</h2>
              <ul className="space-y-2 text-muted-foreground list-disc ml-5">
                <li>Quality & Reliability</li>
                <li>Expert Consulting</li>
                <li>24/7 Global Support</li>
                <li>Innovation Lab</li>
              </ul>
              <div className="mt-6">
                <Link href="/" className="inline-block text-primary font-semibold">Back to home</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
