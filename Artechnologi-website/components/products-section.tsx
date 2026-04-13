"use client"

import { ParticleBackground } from "./particle-background"
import { FloatingBoxesBackground } from "./floating-boxes-background"
import { AnimatedGradientBackground } from "./animated-gradient-background"
import { AboutPageBackground } from "./about-page-background"
// "use client"

// import { ScrollReveal } from "./scroll-reveal"
// import {
//   Brain,
//   Cloud,
//   ShieldCheck,
//   BarChart3,
//   Workflow,
//   Smartphone,
// } from "lucide-react"
// import { motion } from "framer-motion"
// import Image from "next/image"

// const products = [
//   {
//     icon: Brain,
//     title: "AR Mind AI",
//     description:
//       "Enterprise AI platform with predictive analytics, NLP-powered insights, and automated decision engines for data-driven organizations.",
//     tag: "AI / ML",
//   },
//   {
//     icon: Cloud,
//     title: "CloudNexus",
//     description:
//       "Multi-cloud management suite with automated provisioning, cost optimization, and security compliance across AWS, Azure, and GCP.",
//     tag: "Cloud",
//   },
//   {
//     icon: ShieldCheck,
//     title: "SecureVault",
//     description:
//       "Zero-trust cybersecurity platform providing real-time threat detection, identity governance, and enterprise compliance automation.",
//     tag: "Security",
//   },
//   {
//     icon: BarChart3,
//     title: "DataPulse",
//     description:
//       "Real-time business intelligence platform with interactive dashboards, custom KPIs, and cross-platform data unification.",
//     tag: "Analytics",
//   },
//   {
//     icon: Workflow,
//     title: "FlowEngine",
//     description:
//       "Low-code workflow automation platform enabling enterprises to digitize processes, reduce manual work, and scale operations efficiently.",
//     tag: "Automation",
//   },

//     icon: Smartphone,
//     title: "MobileFirst SDK",
//     description:
//       "Cross-platform mobile development toolkit with native performance, built-in analytics, and enterprise-grade security features.",
//     tag: "Mobile",
//   },
// ]

// export function ProductsSection() {
//   return (
//     <section id="products" className="relative py-24 lg:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="text-center mb-16">
//             <span className="text-sm font-semibold text-primary uppercase tracking-widest">
//               Our Products
//             </span>
//             <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
//               Enterprise-Grade Digital Solutions
//             </h2>
//             <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
//               We develop powerful and scalable digital products designed to help
//                businesses manage their operations more efficiently. Our solutions focus on improving productivity, streamlining workflows, and enhancing
//                customer relationships through modern technology.
//             </p>
//           </div>
//         </ScrollReveal>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product, i) => (
//             <ScrollReveal key={product.title} delay={i * 0.1}>
//               <motion.div
//                 whileHover={{ y: -6, scale: 1.01 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-300 cursor-pointer h-full"
//               >
//                 {/* Glow effect on hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//                 <div className="relative">
//                   <div className="flex items-center justify-between mb-5">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
//                       <product.icon className="h-6 w-6" />
//                     </div>
//                     <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
//                       {product.tag}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold text-foreground mb-3">
//                     {product.title}
//                   </h3>
//                   <p className="text-muted-foreground leading-relaxed mb-5">
//                     {product.description}
//                   </p>

//                   <button className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all">
//                     Learn More
//                     <svg
//                       className="h-4 w-4 transition-transform group-hover:translate-x-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </motion.div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import { useEffect, useState } from "react"
// import { ScrollReveal } from "./scroll-reveal"
// import {
// Brain,
// Cloud,
// ShieldCheck,
// BarChart3,
// Workflow,
// Smartphone,
// } from "lucide-react"
// import { motion } from "framer-motion"
// import Image from "next/image"

// // 👇 Default icons (since backend doesn't send icons)
// const icons = [Brain, Cloud, ShieldCheck, BarChart3, Workflow, Smartphone]

// export function ProductsSection() {
// const [products, setProducts] = useState<any[]>([])
// const [debugCount, setDebugCount] = useState<number | null>(null)
// const [circlePos, setCirclePos] = useState(0)

// useEffect(() => {
//   fetch("/api/projects")
//     .then((res) => res.json())
//     .then((payload) => {
//       console.debug("/api/projects payload:", payload)

//       // If API reports a fallback (backend unreachable), do not fabricate projects.
//       if (payload && payload._fallback) {
//         console.warn("Backend unreachable — not displaying fake projects:", payload.message)
//         setProducts([])
//         setDebugCount(0)
//         return
//       }

//       // support multiple payload shapes
//       let list: any[] = []
//       if (!payload) list = []
//       else if (Array.isArray(payload)) list = payload
//       else if (Array.isArray(payload.data)) list = payload.data
//       else if (Array.isArray((payload as any).projects)) list = (payload as any).projects
//       else {
//         // try to find array value on object
//         const maybeArray = Object.values(payload).find((v) => Array.isArray(v))
//         if (Array.isArray(maybeArray)) list = maybeArray as any[]
//       }

//       // normalize fields so UI always has title/description/image/tech
//       const normalized = list.map((p, idx) => ({
//         _id: p._id || p.id || `project-${idx}`,
//         title: p.title || p.name || "Untitled",
//         description: p.description || p.desc || "",
//         image: p.image || p.img || p.imageUrl || "",
//         tech: p.tech || p.tag || "",
//       }))

//       // Prefix relative image paths with backend URL when necessary
//       const backendBase = process.env.NEXT_PUBLIC_BACKEND_URL || ""
//       const normalizedWithImages = normalized.map((p) => {
//         let img = p.image || ""
//         if (img && !/^https?:\/\//i.test(img) && backendBase) {
//           img = `${backendBase.replace(/\/$/, "")}/${img.replace(/^\/*/, "")}`
//         }
//         return { ...p, image: img }
//       })

//       console.debug("Normalized projects:", normalizedWithImages)
//       setProducts(normalizedWithImages)
//       setDebugCount(normalizedWithImages.length)
//     })
//     .catch((err) => {
//       console.error("Failed to fetch projects", err)
//       setProducts([])
//       setDebugCount(0)
//     })
// }, [])

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCirclePos((pos) => (pos + 2) % 360)
//   }, 16)
//   return () => clearInterval(interval)
// }, [])

// return (
//   <section id="products" className="relative py-24 lg:py-32">
//     <div className="mx-auto max-w-7xl px-6 lg:px-8">
//       <ScrollReveal>
//         <div className="text-center mb-16">
//           <span className="text-sm font-semibold text-primary uppercase tracking-widest">
//             Our Products
//           </span>
//           <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
//             Enterprise-Grade Digital Solutions
//           </h2>
//           <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
//            We design and build scalable digital solutions tailored to modern business needs.  
// Our products streamline operations and eliminate complexity across workflows.  
// We focus on performance, reliability, and seamless user experiences.  
// Our solutions empower businesses to make smarter, data-driven decisions.  
// We help organizations innovate, grow faster, and stay ahead in the digital era.
//           </p>
//         </div>
//       </ScrollReveal>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product, i) => {
//           const Icon = icons[i % icons.length]

//           return (
//             <ScrollReveal key={i} delay={i * 0.1}>
//               <a href={`/projects/${product._id}`}>
//                 <motion.div
//                 whileHover={{ y: -6, scale: 1.01 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-300 cursor-pointer h-full"
//               >
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//                 <div className="relative">
//                   <div className="flex items-center justify-between mb-5">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
//                       <Icon className="h-6 w-6" />
//                     </div>

//                     <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
//                       {product.tech || "Project"}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-semibold text-foreground mb-3">
//                     {product.title}
//                   </h3>

//                   <p className="text-muted-foreground leading-relaxed mb-5">
//                     {product.description}
//                   </p>

//                   {product.image && (
//                     <Image
//                       src={product.image}
//                       alt="project"
//                       width={300}
//                       height={200}
//                       className="rounded-lg mb-4"
//                     />
//                   )}

//                   <button className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all">
//                     Learn More
//                   </button>
//                 </div>
//                 </motion.div>
//               </a>
//             </ScrollReveal>
//           )
//         })}
//       </div>

//       {/* ANIMATION VIDEO RIGHT SIDE */}
//       <div className="hidden md:flex justify-center items-center w-full h-full">
//         <svg width="320" height="320" viewBox="0 0 320 320">
//           <defs>
//             <radialGradient id="grad" cx="50%" cy="50%" r="50%">
//               <stop offset="0%" stopColor="#60a5fa" />
//               <stop offset="100%" stopColor="#a78bfa" />
//             </radialGradient>
//           </defs>
//           <circle cx="160" cy="160" r="120" fill="#18181b" stroke="#6366f1" strokeWidth="8" />
//           <circle
//             cx={160 + 90 * Math.cos((circlePos * Math.PI) / 180)}
//             cy={160 + 90 * Math.sin((circlePos * Math.PI) / 180)}
//             r="24"
//             fill="url(#grad)"
//             stroke="#fff"
//             strokeWidth="4"
//             style={{ filter: 'drop-shadow(0 0 16px #818cf8)' }}
//           />
//           <text x="160" y="170" textAnchor="middle" fontSize="28" fill="#fff" fontWeight="bold" fontFamily="sans-serif">
//             AR Tech
//           </text>
//         </svg>
//       </div>
//       {/* END ANIMATION VIDEO */}
//     </div>
//   </section>
// )
// }



// "use client"

import { useEffect, useState } from "react"
import { ScrollReveal } from "./scroll-reveal"
import {
Brain,
Cloud,
ShieldCheck,
BarChart3,
Workflow,
Smartphone,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

// 👇 Default icons
const icons = [Brain, Cloud, ShieldCheck, BarChart3, Workflow, Smartphone]

export function ProductsSection() {
const [products, setProducts] = useState<any[]>([])
const [debugCount, setDebugCount] = useState<number | null>(null)

// FETCH PRODUCTS
useEffect(() => {
fetch("/api/projects")
.then((res) => res.json())
.then((payload) => {
console.debug("/api/projects payload:", payload)


    if (payload && payload._fallback) {
      console.warn("Backend unreachable:", payload.message)
      setProducts([])
      setDebugCount(0)
      return
    }

    let list: any[] = []
    if (!payload) list = []
    else if (Array.isArray(payload)) list = payload
    else if (Array.isArray(payload.data)) list = payload.data
    else if (Array.isArray((payload as any).projects)) list = (payload as any).projects
    else {
      const maybeArray = Object.values(payload).find((v) => Array.isArray(v))
      if (Array.isArray(maybeArray)) list = maybeArray as any[]
    }

    const normalized = list.map((p, idx) => ({
      _id: p._id || p.id || `project-${idx}`,
      title: p.title || p.name || "Untitled",
      description: p.description || p.desc || "",
      image: p.image || p.img || p.imageUrl || "",
      tech: p.tech || p.tag || "",
    }))

    const backendBase = process.env.NEXT_PUBLIC_BACKEND_URL || ""
    const normalizedWithImages = normalized.map((p) => {
      let img = p.image || ""
      if (img && !/^https?:\/\//i.test(img) && backendBase) {
        img = `${backendBase.replace(/\/$/, "")}/${img.replace(/^\/*/, "")}`
      }
      return { ...p, image: img }
    })

    setProducts(normalizedWithImages)
    setDebugCount(normalizedWithImages.length)
  })
  .catch((err) => {
    console.error("Failed to fetch projects", err)
    setProducts([])
    setDebugCount(0)
  })


}, [])

return (
  <section id="products" className="relative py-24 lg:py-32 overflow-hidden">
  <AboutPageBackground />
  <ParticleBackground />
  <FloatingBoxesBackground />
    <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">


    {/* HEADER */}
    <ScrollReveal>
      <div className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">
          Our Products
        </span>

        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
          Enterprise-Grade Digital Products
        </h2>

        <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
          We design and build scalable digital solutions tailored to modern business needs.
          Our products streamline operations and eliminate complexity across workflows.
          We focus on performance, reliability, and seamless user experiences.
          Our solutions empower businesses to make smarter, data-driven decisions.
          We help organizations innovate, grow faster, and stay ahead in the digital era.
        </p>
      </div>
    </ScrollReveal>

    {/* PRODUCTS GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, i) => {
        const Icon = icons[i % icons.length]

        return (
          <ScrollReveal key={i} delay={i * 0.1}>
            <a href={`/projects/${product._id}`}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 transition-all duration-300 cursor-pointer h-full"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {product.tech || "Project"}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {product.description}
                  </p>

                  {product.image && (
                    <Image
                      src={product.image}
                      alt="project"
                      width={300}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                  )}

                  <button className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1.5 transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </a>
          </ScrollReveal>
        )
      })}
    </div>

  </div>
</section>


)
}










