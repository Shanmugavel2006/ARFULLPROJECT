// "use client"

// import { ReactNode } from "react"
// import { motion } from "framer-motion"

// type Props = {
//   title: string
//   imageUrl: string
//   imageAlt?: string
//   children?: ReactNode
// }

// export default function TwoColumnSection({ title, imageUrl, imageAlt = "", children }: Props) {
//   return (
//     <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//       <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="order-1 lg:order-1">
//         <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
//           <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
//         </div>
//       </motion.div>

//       <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-2">
//         <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">{title}</h1>
//         <div className="prose max-w-none text-muted-foreground">{children}</div>
//       </motion.div>
//     </section>
//   )
// }