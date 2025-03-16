'use client'

import { motion, useScroll, AnimatePresence } from "framer-motion"
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function AnimatedHeader() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <motion.div 
        className={`transition-all duration-300 mx-4 md:mx-8 ${
          hasScrolled ? 'mx-6 md:mx-12 lg:mx-24' : ''
        }`}
      >
        <div className={`relative flex items-center justify-between transition-all duration-300 backdrop-blur-md ${
          hasScrolled ? 'px-8 py-4 bg-slate-900/20 rounded-2xl mt-4' : 'px-6 py-4'
        }`}>
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300">
              <img 
                src="/logo.png" 
                alt="March Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-medium tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-slate-200">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden backdrop-blur-md p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ zIndex: -1 }}
                />
                
                {/* Menu */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 p-2 bg-slate-900/90 backdrop-blur-xl rounded-2xl md:hidden border border-white/5"
                >
                  {NAVIGATION.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.header>
  )
} 