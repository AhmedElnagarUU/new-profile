'use client'

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { 
  LayoutDashboard,
  ShoppingCart,
  Sofa,
  Megaphone,
  Rocket,
  Users,
  BarChart3,
  Globe,
  Target,
  Zap,
  ExternalLink
} from "lucide-react"

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  features: string[];
  stats: string;
}

const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable metrics, user tracking, and performance monitoring. Built with Next.js and real-time data streaming.",
    icon: <LayoutDashboard className="w-6 h-6 text-purple-400" />,
    href: "/analytics-dashboard",
    features: [
      "Real-time Metrics",
      "User Tracking",
      "Performance Analytics"
    ],
    stats: "50K+ Active Users"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce solution with inventory management, payment processing, and admin dashboard. Includes product visualization and AR preview.",
    icon: <ShoppingCart className="w-6 h-6 text-purple-400" />,
    href: "/ecommerce-platform",
    features: [
      "Inventory Management",
      "Payment Processing",
      "AR Product Preview"
    ],
    stats: "₱1M+ in Sales"
  },
  {
    title: "Furniture Website",
    description: "Modern furniture e-commerce site with 3D product visualization, AR preview, and seamless checkout process. Features a responsive design and fast performance.",
    icon: <Sofa className="w-6 h-6 text-purple-400" />,
    href: "/furniture-website",
    features: [
      "3D Visualization",
      "AR Preview",
      "Fast Checkout"
    ],
    stats: "98% User Satisfaction"
  },
  {
    title: "Marketing Agency Platform",
    description: "Comprehensive marketing platform with campaign management, analytics, and client reporting. Includes SEO tools and social media integration.",
    icon: <Megaphone className="w-6 h-6 text-purple-400" />,
    href: "/marketing-agency",
    features: [
      "Campaign Analytics",
      "Client Reporting",
      "SEO Tools"
    ],
    stats: "200+ Active Campaigns"
  },
  {
    title: "Product Landing Page",
    description: "High-conversion landing page with Facebook Pixel integration, analytics tracking, and A/B testing capabilities. Optimized for maximum conversion rate.",
    icon: <Target className="w-6 h-6 text-purple-400" />,
    href: "/product-landing",
    features: [
      "FB Pixel Integration",
      "A/B Testing",
      "Conversion Tracking"
    ],
    stats: "15% Conversion Rate"
  }
]

export function LandingProjects() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#0D0B1A]" id="projects">
      {/* Ambient background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our collection of innovative digital solutions and high-performance platforms
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={project.href} className="block group">
                <Card className="relative h-full bg-[#151427] border-purple-500/10 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5">
                  {/* Gradient border effect */}
                  <div className="absolute inset-[1px] bg-gradient-to-br from-purple-500/20 to-purple-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-purple-500/10">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-400 mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    {project.stats && (
                      <div className="text-sm text-purple-400">
                        {project.stats}
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 