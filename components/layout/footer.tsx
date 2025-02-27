'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Mail, MapPin } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Social Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg font-medium text-white"
            >
              {SITE_CONFIG.name}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </a>
              <a
                href={SITE_CONFIG.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Location and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Alexandria, Egypt</span>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent rounded-full blur-2xl" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent rounded-full blur-2xl" />
      </div>
    </footer>
  )
} 