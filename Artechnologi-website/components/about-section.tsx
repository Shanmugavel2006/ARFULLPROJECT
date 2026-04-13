"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"
import aboutImage from "@/images/about.webp"
import misionImage from "@/images/mision.webp"
import coreValuesImage from "@/images/cv.webp"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
// comment
const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver innovative digital products that help businesses improve efficiency, enhance customer experiences, and achieve sustainable growth through technology.",
    image: misionImage,
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Innovation-first mindset, unwavering quality, client-centric approach, continuous learning, and responsible technology stewardship.",
    image: coreValuesImage,
  },
]

const timeline = [
  { year: "2018", event: "Founded with a vision to build scalable digital products" },
  { year: "2020", event: "Launched flagship AI analytics platform, securing Series A" },
  { year: "2022", event: "Expanded to 12 countries with 500+ enterprise clients" },
  { year: "2024", event: "Recognized as a Gartner Cool Vendor in Product Engineering" },
  { year: "2026", event: "Serving Fortune 500 clients across 30+ industries" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Full Coverage Animated Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Base gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/50 to-purple-50/40" />
        
        {/* Large animated waves */}
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#2563EB', stopOpacity: 0.10 }} />
                <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 0.10 }} />
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.08 }} />
                <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 0.08 }} />
              </linearGradient>
            </defs>
            <path d="M0,160 Q400,100 800,160 T1600,160 L1600,0 L0,0 Z" fill="url(#wave-gradient-1)">
              <animate attributeName="d" dur="15s" repeatCount="indefinite"
                values="M0,160 Q400,100 800,160 T1600,160 L1600,0 L0,0 Z;
                        M0,140 Q400,180 800,140 T1600,140 L1600,0 L0,0 Z;
                        M0,160 Q400,100 800,160 T1600,160 L1600,0 L0,0 Z" />
            </path>
            <path d="M0,1000 Q400,950 800,1000 T1600,1000 L1600,1200 L0,1200 Z" fill="url(#wave-gradient-2)">
              <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values="M0,1000 Q400,950 800,1000 T1600,1000 L1600,1200 L0,1200 Z;
                        M0,980 Q400,1020 800,980 T1600,980 L1600,1200 L0,1200 Z;
                        M0,1000 Q400,950 800,1000 T1600,1000 L1600,1200 L0,1200 Z" />
            </path>
          </svg>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-[10%] w-32 h-32 border-2 border-primary/35 rounded-lg rotate-12 animate-float-slow" />
        <div className="absolute top-[15%] left-[25%] w-24 h-24 border-[1.5px] border-cyan-400/30 rounded-md rotate-[25deg] animate-float-medium" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-[15%] w-24 h-24 border-2 border-cyan-500/35 rounded-full animate-float-medium" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[45%] right-[8%] w-28 h-28 border-2 border-blue-400/30 rounded-lg -rotate-[20deg] animate-float-slow" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-1/3 left-[20%] w-20 h-20 border-2 border-purple-500/35 rotate-45 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[35%] left-[35%] w-16 h-16 border-[1.5px] border-primary/25 rounded-md rotate-[15deg] animate-float-medium" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/4 right-[25%] w-28 h-28 border-2 border-primary/30 rounded-lg -rotate-12 animate-float-medium" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[15%] right-[40%] w-20 h-20 border-2 border-cyan-500/30 rounded-md rotate-[30deg] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[55%] left-[5%] w-16 h-16 border-[1.5px] border-purple-400/30 rounded-lg -rotate-[35deg] animate-float-medium" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[25%] right-[35%] w-20 h-20 border-2 border-blue-500/25 rounded-md rotate-[18deg] animate-float-slow" style={{ animationDelay: '1.2s' }} />
        
        {/* Animated gradient orbs - larger and more vibrant */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-drift-1" />
        <div className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-full blur-3xl animate-drift-2" />
        <div className="absolute -bottom-32 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-purple-500/25 to-transparent rounded-full blur-3xl animate-drift-3" />
      </div>
      
      {/* Header Section */}
      <div className="relative py-6 lg:py-12">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                About Us
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
                Transforming Ideas into Digital Products
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative py-8 lg:py-12">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <Image
                  src={aboutImage}
                  alt="About Artechnologi"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Shimmer effect */}
                <div className="pointer-events-none absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }} />
                </div>
              </div>

              <div className="text-left lg:-translate-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We are a product-driven technology company focused on building innovative digital solutions that help businesses grow and succeed. Our goal is to create scalable, reliable, and user-friendly products using modern technologies and smart development practices.
                </p>

                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  Our team works together to turn ideas into powerful digital products, delivering secure and high-performance solutions. We focus on innovation and quality to ensure every product adds real value and supports long-term business success.
                </p>

                <Button asChild size="lg" className="mt-6">
                  <a href="#about-why-us">Why Us</a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

        {/* Timeline with Animation */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h3>
        </ScrollReveal>
        <div className="relative pb-8 mb-0">
          {/* Animated Timeline Line - stops before the endpoint */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/20 transform -translate-x-1/2" style={{height: 'calc(100% - 180px)'}} aria-hidden="true">
            {/* Animated Arrow flowing down */}
            <div className="absolute top-0 left-1/2 w-0 h-0 transform -translate-x-1/2 animate-arrow-flow">
              <svg className="w-4 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <ScrollReveal
                key={item.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="group relative inline-block rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                      <span className="text-sm font-bold text-primary">{item.year}</span>
                      <p className="mt-1 text-foreground">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex h-5 w-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20 flex-shrink-0 z-10 pulse-dot" />
                  <div className="flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Continuing to the Future - Endpoint */}
          <ScrollReveal delay={0.5}>
            <div className="relative mt-12 flex flex-col items-center">
              {/* Timeline endpoint connector */}
              <div className="hidden md:block w-0.5 h-12 bg-gradient-to-b from-primary/20 to-transparent mb-4" />
              
              {/* Endpoint marker */}
              <div className="hidden md:flex h-6 w-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20 mb-4 pulse-dot" />
              
              {/* Badge */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border-2 border-primary/40 bg-primary/10 px-8 py-4 backdrop-blur-sm shadow-lg">
                  <svg className="w-5 h-5 text-primary animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span className="text-sm font-bold text-primary uppercase tracking-wider">
                    Continuing to the Future
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Values Carousel Slideshow */}
        <div id="about-why-us" className="mt-8 mb-12">
          <ValuesCarousel />
        </div>
        </div>
      </div>

    </section>
  )
}

function ValuesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right")
      setCurrentIndex((prev) => (prev + 1) % values.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handlePrev = () => {
    setDirection("left")
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length)
  }

  const handleNext = () => {
    setDirection("right")
    setCurrentIndex((prev) => (prev + 1) % values.length)
  }

  const currentValue = values[currentIndex]

  return (
    <div className="relative">
      <ScrollReveal>
        {/* Full Slide Carousel Container - Compact */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
          <div
            className={`transition-all duration-300 ease-in-out ${
              direction === "right"
                ? "translate-x-0 animate-slide-in-right"
                : "translate-x-0 animate-slide-in-left"
            }`}
            key={currentIndex}
          >
            {/* Grid Content: Desktop 2-col equal split, Mobile 1-col */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0 lg:gap-8 p-4 lg:p-8">
              {/* Left: Image - 50% width - Full image visible */}
              <div className="relative overflow-hidden rounded-xl bg-secondary/20 flex items-center justify-center">
                <Image
                  src={currentValue.image}
                  alt={currentValue.title}
                  className="h-56 sm:h-72 lg:h-80 w-full object-contain"
                />
              </div>

              {/* Right: Content - 50% width */}
              <div className="flex flex-col justify-center py-4 lg:py-8 px-2 lg:px-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <currentValue.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {currentValue.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                  {currentValue.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-3 flex justify-center gap-2">
          {values.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? "right" : "left")
                setCurrentIndex(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-primary" : "w-2 bg-primary/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="mt-3 flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="rounded-lg border border-border bg-card/50 p-2 text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="rounded-lg border border-border bg-card/50 p-2 text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </ScrollReveal>

      {/* CSS Animation for slide-in effects and timeline */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes arrowFlow {
          0% {
            top: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes pulseDot {
          0%, 100% {
            box-shadow: 0 0 0 0 hsl(var(--primary) / 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px hsl(var(--primary) / 0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.7s ease-in-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.7s ease-in-out forwards;
        }
        .animate-arrow-flow {
          animation: arrowFlow 3s ease-in-out infinite;
        }
        .pulse-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
