'use client'

import { motion } from "framer-motion"
import { 
  Globe, 
  Shield, 
  Server, 
  Rocket, 
  Lock,
  Settings,
  Search,
  Zap,
  MonitorSmartphone
} from "lucide-react"

const services = [
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Domain & Hosting",
    description: "Custom domain setup and premium hosting with 99.9% uptime guarantee",
    features: ["Domain Registration", "DNS Management", "Premium Hosting", "CDN Setup"]
  },
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "Security & SSL",
    description: "Enterprise-grade security with SSL certificates and regular updates",
    features: ["SSL Certificate", "DDoS Protection", "Regular Backups", "Security Updates"]
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-purple-400" />,
    title: "Full Stack App",
    description: "Modern, responsive applications built with the latest technologies",
    features: ["Responsive Design", "API Integration", "Database Setup", "User Authentication"]
  },
  {
    icon: <Search className="w-6 h-6 text-yellow-400" />,
    title: "SEO Optimization",
    description: "Search engine optimization to improve your site's visibility",
    features: ["Meta Tags Setup", "Performance Optimization", "Sitemap Generation", "Analytics Integration"]
  },
  {
    icon: <Zap className="w-6 h-6 text-red-400" />,
    title: "Performance",
    description: "Lightning-fast loading speeds and optimal performance",
    features: ["Image Optimization", "Code Minification", "Caching Setup", "Speed Optimization"]
  },
  {
    icon: <Settings className="w-6 h-6 text-cyan-400" />,
    title: "Maintenance",
    description: "Regular updates and maintenance to keep your site running smoothly",
    features: ["Regular Updates", "24/7 Monitoring", "Technical Support", "Content Updates"]
  }
]

export function WhatYouGet() {
  return (
    <section className="py-20 relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            What You Get
          </h2>
          <p className="text-gray-400/80 text-lg max-w-2xl mx-auto">
            Everything you need for a professional web presence, from development to deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 bg-slate-900/20 backdrop-blur-md rounded-2xl overflow-hidden h-full border border-slate-700/20">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2.5 rounded-lg bg-slate-800/30 backdrop-blur-sm relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-50">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-400/90 text-sm mb-4">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-gray-400/80"
                      >
                        <div className="w-1 h-1 rounded-full bg-blue-400/60" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 