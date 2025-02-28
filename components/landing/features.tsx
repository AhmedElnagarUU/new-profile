'use client'

import { motion, useReducedMotion } from "framer-motion"
import { 
  Code2,
  Database,
  Layout,
  Server,
  Cloud,
  Terminal,
  Boxes,
  Cpu
} from "lucide-react"

const features = [
  {
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    title: "Responsive Interfaces",
    description: "Building modern, responsive web applications with seamless user experiences",
    gradient: "from-blue-500/10 via-blue-400/10 to-blue-300/10"
  },
  {
    icon: <Server className="w-6 h-6 text-purple-400" />,
    title: "Backend Systems",
    description: "Scalable server architectures and robust API development",
    gradient: "from-purple-500/10 via-purple-400/10 to-purple-300/10"
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    title: "Database Design",
    description: "Optimized database structures and efficient data management solutions",
    gradient: "from-cyan-500/10 via-cyan-400/10 to-cyan-300/10"
  },
  {
    icon: <Cloud className="w-6 h-6 text-indigo-400" />,
    title: "Cloud Infrastructure",
    description: "AWS and cloud platform deployment with optimal performance",
    gradient: "from-indigo-500/10 via-indigo-400/10 to-indigo-300/10"
  },
  {
    icon: <Terminal className="w-6 h-6 text-teal-400" />,
    title: "DevOps Integration",
    description: "Automated deployment pipelines and continuous integration workflows",
    gradient: "from-teal-500/10 via-teal-400/10 to-teal-300/10"
  },
  {
    icon: <Boxes className="w-6 h-6 text-sky-400" />,
    title: "System Architecture",
    description: "Scalable and maintainable application architecture design",
    gradient: "from-sky-500/10 via-sky-400/10 to-sky-300/10"
  }
]

export function LandingFeatures() {
  const prefersReducedMotion = useReducedMotion()
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // Simplified animations for mobile/reduced motion
  const baseTransition = { 
    duration: prefersReducedMotion || isMobile ? 0 : 0.5,
    ease: "easeOut"
  }

  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={baseTransition}
          viewport={{ once: true, margin: "-100px" }}
          style={{ willChange: "transform", transform: "translateZ(0)" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-white bg-clip-text text-transparent">
            Full Stack Development Solutions
          </h2>
          <p className="text-gray-400/80 text-lg max-w-2xl mx-auto">
            Comprehensive development services from frontend to backend, with a focus on scalability and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                ...baseTransition,
                delay: prefersReducedMotion ? 0 : index * 0.1
              }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ willChange: "transform", transform: "translateZ(0)" }}
              className="group"
            >
              <div className="relative p-6 bg-slate-900/20 backdrop-blur-sm rounded-2xl overflow-hidden">
                {/* Gradient Background - Simplified for mobile */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} transition-opacity duration-300 ${isMobile ? 'opacity-50' : 'opacity-0 group-hover:opacity-100'}`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-slate-800/30">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-blue-50">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements - Disabled on mobile */}
                {!isMobile && (
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-blue-600/10 transition-colors duration-300" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements - Simplified for mobile */}
      {!isMobile && (
        <>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </>
      )}
    </section>
  )
} 