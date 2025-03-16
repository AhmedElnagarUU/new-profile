'use client'

import { motion, useReducedMotion } from "framer-motion"
import { SITE_CONFIG } from "@/lib/constants"
import { Building2, Network, Lightbulb } from "lucide-react"
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
      const particleCount = isMobile ? 20 : 50
      return Array.from({ length: particleCount }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: 0.1 + Math.random() * 0.5
      }))
    }
    setParticles(generateParticles())
  }, [isMobile])

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
            {/* March Logo */}
            <div className="mb-8">
              <motion.img
                src="/logo.png"
                alt="March Logo"
                className="h-24 mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={baseTransition}
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
              <span className="bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 bg-clip-text text-transparent mt-2 block">
                With Digital Innovation
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

          {/* Service Highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Enterprise Solutions" },
              { icon: <Network className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Cloud Infrastructure" },
              { icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />, label: "Digital Innovation" },
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
    </section>
  )
} 