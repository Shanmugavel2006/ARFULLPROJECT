"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CookiePolicyPage() {
return ( <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">


  {/* 🌌 BACKGROUND ANIMATION */}
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
    <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />
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
        Cookie Policy
      </h1>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        This Cookie Policy explains how AR Technology uses cookies and similar
        technologies to enhance your experience on our platform.
      </p>

      <div className="space-y-4 text-gray-400">
        <p>✔ Cookies help improve user experience</p>
        <p>✔ Used for analytics and performance tracking</p>
        <p>✔ You can manage cookie preferences anytime</p>
        <p>✔ No sensitive personal data is stored in cookies</p>
        <p>✔ Compliance with global privacy standards</p>
      </div>

      <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
        Manage Cookies
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
        src="https://images.unsplash.com/photo-1581090700227-1e8a6f4a3a7f"
        alt="Cookie Policy Illustration"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl"
      />
    </motion.div>
  </div>
</section>


);
}
