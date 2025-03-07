'use client'

import { motion, useReducedMotion } from "framer-motion"
import { SITE_CONFIG } from "@/lib/constants"
import { Code2, Server, Cloud } from "lucide-react"
import { useEffect, useState } from "react"

interface StarParticle {
  left: string
  top: string
  opacity: number
}

export function LandingHero() {
  const [particles, setParticles] = useState<StarParticle[]>([])
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  useEffect(() => {
    setMounted(true)
    const generateParticles = () => {
      // Reduce particle count on mobile
      const particleCount = isMobile ? 20 : 50
      return Array.from({ length: particleCount }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.1 + Math.random() * 0.5
      }))
    }
    setParticles(generateParticles())
  }, [isMobile])

  // Simplified animations for reduced motion/mobile
  const baseTransition = { duration: prefersReducedMotion ? 0 : 0.8 }
  const orbTransition = { 
    duration: prefersReducedMotion ? 0 : 8, 
    repeat: Infinity,
    ease: "linear"
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" id="hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Stars */}
        {mounted && !prefersReducedMotion && (
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                  opacity: particle.opacity,
                  willChange: "transform, opacity",
                  transform: "translateZ(0)"
                }}
                initial={false}
                animate={{ 
                  opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}
        
        {/* Glowing orbs - simplified for mobile */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={orbTransition}
            />
            <motion.div
              className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ ...orbTransition, delay: 4 }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={baseTransition}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
              <span className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 bg-clip-text text-transparent mt-2 block">
                Building Digital Experiences
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...baseTransition, delay: 0.2 }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-400/80 leading-8"
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* Tech Stack Icons */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Frontend Development" },
              { icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Backend Systems" },
              { icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Cloud Infrastructure" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...baseTransition, delay: 0.4 + index * 0.1 }}
                style={{ willChange: "transform", transform: "translateZ(0)" }}
                className="relative group px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-blue-950/30 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-medium">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated connection lines - disabled on mobile and reduced motion */}
      {!isMobile && !prefersReducedMotion && (
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <motion.path
            d="M 100 100 Q 300 0, 500 100 T 900 100"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </section>
  )
} 