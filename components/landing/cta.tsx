'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui"
import { Github, Linkedin, Mail, Facebook } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function LandingCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto tracking-wide">
            I'm currently available for freelance projects and full-time opportunities.
            Let's build something amazing together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors">
                    <Github className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1 tracking-wide">GitHub</h3>
                    <p className="text-sm text-gray-400">View Projects</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1 tracking-wide">LinkedIn</h3>
                    <p className="text-sm text-gray-400">Connect with me</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={SITE_CONFIG.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1 tracking-wide">Facebook</h3>
                    <p className="text-sm text-gray-400">Follow me</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="block p-6 rounded-2xl bg-blue-950/30 border border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-950/50 group-hover:bg-blue-900/50 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-1 tracking-wide">Email</h3>
                    <p className="text-sm text-gray-400">Get in touch</p>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  )
} 