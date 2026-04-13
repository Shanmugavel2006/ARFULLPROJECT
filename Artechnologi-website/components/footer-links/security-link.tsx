"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SecurityPage() {
return ( <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">


  {/* 🌌 BACKGROUND ANIMATION */}
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[600px] h-[600px] bg-red-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
    <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Security & Compliance
      </h1>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        We prioritize the security of your data and systems. Our platform is
        built with advanced security measures and compliance standards to
        ensure maximum protection and reliability.
      </p>

      <div className="space-y-4 text-gray-400">
        <p>✔ End-to-End Data Encryption</p>
        <p>✔ Secure Authentication & Access Control</p>
        <p>✔ Regular Security Audits</p>
        <p>✔ GDPR & Compliance Standards</p>
        <p>✔ Continuous Monitoring & Threat Detection</p>
      </div>

      <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
        Learn More
      </button>
    </motion.div>

    {/* RIGHT SIDE IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <Image
        src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87"
        alt="Security Illustration"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl"
      />
    </motion.div>
  </div>
</section>


);
}
