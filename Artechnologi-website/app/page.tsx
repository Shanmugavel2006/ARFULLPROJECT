"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { StatsSection } from "@/components/stats-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import { ParticleBackground } from "@/components/particle-background"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      {/* global particle animation - sits beneath all content */}
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProductsSection />
        <TechStackSection />
        <ContactSection />
        {/* Booking Management Section removed */}
      </main>
      <Footer />
    </>
  )
}
