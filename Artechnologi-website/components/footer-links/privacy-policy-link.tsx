"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
return ( <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">


  {/* 🌌 BACKGROUND ANIMATION */}
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
    <div className="absolute w-[500px] h-[500px] bg-green-500/20 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />
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
        Privacy Policy
      </h1>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Your privacy is important to us. This policy explains how AR Technology
        collects, uses, and protects your information when you use our services.
      </p>

      <div className="space-y-4 text-gray-400">
        <p>✔ We collect only necessary user data</p>
        <p>✔ Your data is securely stored and encrypted</p>
        <p>✔ We do not sell or share your personal information</p>
        <p>✔ You have full control over your data</p>
        <p>✔ Compliance with global privacy standards</p>
      </div>

      <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
        Read Full Policy
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
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
        alt="Privacy Illustration"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl"
      />
    </motion.div>
  </div>
</section>


);
}
