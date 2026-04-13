"use client"

import { ScrollReveal } from "./scroll-reveal"
import { AnimatedGradientBackground } from "./animated-gradient-background"
import { motion } from "framer-motion"

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#ED8B00" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "AWS", color: "#FF9900" },
  { name: "Azure", color: "#0078D4" },
  { name: "GCP", color: "#4285F4" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Docker", color: "#2496ED" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "Go", color: "#00ADD8" },
  { name: "Rust", color: "#CE422B" },
  { name: "GraphQL", color: "#E10098" },
]

// function MarqueeRow({ items, reverse = false }: { items: typeof technologies; reverse?: boolean }) {
//   const doubled = [...items, ...items]
//   return (
//     <div className="relative overflow-hidden py-3">
//       <motion.div
//         className="flex gap-4"
//         animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
//         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//       >
//         {doubled.map((tech, i) => (
//           <div
//             key={`${tech.name}-${i}`}
//             className="flex-shrink-0 flex items-center gap-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm px-6 py-3 hover:border-primary/40 transition-colors"
//           >
//             <div
//               className="h-3 w-3 rounded-full"
//               style={{ backgroundColor: tech.color }}
//               aria-hidden="true"
//             />
//             <span className="text-sm font-medium text-foreground whitespace-nowrap">
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// function GridTech({ items }: { items: typeof technologies }) {
//   return (
//     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//       {items.map((tech) => (
//         <motion.div
//           key={tech.name}
//           whileHover={{ scale: 1.08 }}
//           className="p-5 rounded-xl border border-border bg-card text-center hover:shadow-lg transition"
//         >
//           <div
//             className="h-3 w-3 rounded-full mx-auto mb-2"
//             style={{ backgroundColor: tech.color }}
//           />
//           <p className="text-sm font-medium">{tech.name}</p>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

function WaveRow({ items }: { items: typeof technologies }) {
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {items.map((tech, i) => (
        <motion.div
          key={tech.name}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="flex items-center gap-2 px-5 py-2 bg-card border rounded-xl"
        >
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: tech.color }}
          />
          {tech.name}
        </motion.div>
      ))}
    </div>
  )
}

export function TechStackSection() {
  const firstHalf = technologies.slice(0, 8)
  const secondHalf = technologies.slice(8)

  return (
    <section id="technology" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <AnimatedGradientBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Technology Stack
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
              Powered by Modern Technology
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
              We leverage the best tools and frameworks to build robust, scalable, and
              future-proof solutions for our clients.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* <div className="relative z-10 mt-10">
        <GridTech items={technologies} />
      </div> */}
      <div className="relative z-10 mt-10 space-y-6">
        <WaveRow items={firstHalf} />
        <WaveRow items={secondHalf} />
      </div>
    </section>
  )
}
