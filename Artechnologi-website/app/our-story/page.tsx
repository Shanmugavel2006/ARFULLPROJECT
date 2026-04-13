// "use client"


// import { motion } from "framer-motion"
// import Link from "next/link"
// import PageBackground from "@/components/page-background"
// import Image from "next/image"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"

// export default function OurStoryPage() {
//   return (
//     <>
//       <Navbar />
//       <PageBackground variant="wave">
//         <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col">
//           <div className="max-w-5xl mx-auto flex-1 flex flex-row items-start gap-10">
//             {/* Left Side Image */}
//             <div className="w-full md:w-1/2 flex justify-center items-start">
//               <Image
//                 src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
//                 alt="About AR Technology - IT Team Working"
//                 width={420}
//                 height={420}
//                 className="rounded-2xl shadow-lg object-cover"
//                 priority
//               />
//             </div>
//             {/* Right Side Content */}
//             <div className="w-full md:w-1/2 flex flex-col gap-8">
//               <motion.h1
//                 initial={{ opacity: 0, y: 18, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
//               >
//                 Our Story
//               </motion.h1>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.25 }}
//                 className="text-lg text-muted-foreground leading-relaxed mb-6"
//               >
//                 AR Technology began with a simple belief: that technology should amplify human potential, not replace it. Over the years we've helped organizations transform processes, modernize platforms, and unlock new revenue streams through pragmatic engineering and close collaboration.
//               </motion.p>
//               {/* Card Section */}
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.35, duration: 0.6 }}
//                 className="bg-white rounded-2xl p-8 shadow-lg border border-border"
//               >
//                 <h2 className="text-2xl font-semibold mb-3">Milestones</h2>
//                 <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
//                   <li>Founded with a focus on enterprise-grade solutions</li>
//                   <li>First major ERP product launched</li>
//                   <li>Expanded internationally with regional offices</li>
//                   <li>Built strategic partnerships across cloud and analytics vendors</li>
//                 </ul>
//                 <div className="mt-6">
//                   <Link href="/" className="inline-block text-primary font-semibold">Back to home</Link>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </main>
//       </PageBackground>
//       <Footer />
//     </>
//   )
// }
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import PageBackground from "@/components/page-background"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function OurStoryPage() {
  return (
    <>
      <Navbar />

      <PageBackground variant="wave">
        <main className="min-h-screen pt-32 px-6 lg:px-12 flex flex-col mb-16">
          
          {/* MAIN CONTAINER */}
          <div className="max-w-6xl mx-auto flex-1 flex flex-col md:flex-row items-stretch gap-10">

            {/* LEFT SIDE IMAGE (FULL HEIGHT) */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
              <Image
                src="https://fi-hatchbox-production-uploads.s3.amazonaws.com/posts/laptop-3373638_1280.jpg"
                alt="About AR Technology"
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
                Our Story
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                AR Technology began with a simple belief: that technology should amplify human potential, not replace it. 
                Over the years, we have helped organizations transform processes, modernize platforms, and unlock new 
                revenue streams through pragmatic engineering and close collaboration.
              </motion.p>

              {/* CARD SECTION */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-border"
              >
                <h2 className="text-2xl font-semibold mb-3">Milestones</h2>

                <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                  <li>Founded with a focus on enterprise-grade solutions</li>
                  <li>First major ERP product launched</li>
                  <li>Expanded internationally with regional offices</li>
                  <li>Built strategic partnerships across cloud and analytics vendors</li>
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
      </PageBackground>

      <Footer />
    </>
  )
}