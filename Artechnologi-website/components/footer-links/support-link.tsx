"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SupportPage() {
return ( <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">


  {/* 🌌 BACKGROUND ANIMATION */}
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
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
        Support Center
      </h1>

      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Need help? Our support team is here to assist you with any issues,
        questions, or guidance related to our platform and services.
      </p>

      <div className="space-y-4 text-gray-400">
        <p>✔ 24/7 Customer Support</p>
        <p>✔ Technical Assistance & Troubleshooting</p>
        <p>✔ Account & Billing Help</p>
        <p>✔ Integration & API Support</p>
        <p>✔ Fast Response & Reliable Service</p>
      </div>

      <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
        Contact Support
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
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
        alt="Support Illustration"
        width={500}
        height={400}
        className="rounded-xl shadow-2xl"
      />
    </motion.div>
  </div>
</section>


);
}
