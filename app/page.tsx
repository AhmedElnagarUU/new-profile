'use client'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/header'
import { LandingHero } from '@/components/landing/hero'
import { LandingFeatures } from '@/components/landing/features'
import { LandingSkills } from '@/components/landing/skills'
import { WhatYouGet } from '@/components/landing/whatuget'
import { LandingCTA } from '@/components/landing/cta'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-[120px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-blue-400/5 via-transparent to-purple-400/5 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <LandingHero />
        <LandingFeatures />
        <LandingSkills />
        <WhatYouGet />
        <LandingCTA />
        <Footer />
      </div>

      {/* Backdrop blur effect */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-[100px] pointer-events-none" />
    </main>
  )
}
