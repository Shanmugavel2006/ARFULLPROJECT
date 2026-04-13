"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ApiReferencePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🌌 BACKGROUND ANIMATION */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />
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
            API Reference
          </h1>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Explore our comprehensive API documentation designed to help developers
            seamlessly integrate powerful features into their applications.
          </p>

          <ul className="space-y-4 text-gray-400">
            <li>✔ RESTful API endpoints</li>
            <li>✔ Secure authentication methods</li>
            <li>✔ Real-time data integration</li>
            <li>✔ Scalable and high-performance architecture</li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition">
            Explore Docs
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
            alt="API Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
