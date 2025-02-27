'use client'

import { motion } from "framer-motion"
import { 
  Code2, 
  Server, 
  Cloud, 
  Database,
  Layout,
  Box,
  Layers,
  GitBranch,
  Cpu,
  Globe,
  Paintbrush,
  Boxes,
  Workflow,
  Container,
  Settings,
  Repeat,
  Gauge,
  FileCode,
  Blocks
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: "Next.js", icon: <Blocks className="w-4 h-4" /> },
      { name: "TailwindCSS", icon: <Paintbrush className="w-4 h-4" /> },
      { name: "Radix UI", icon: <Box className="w-4 h-4" /> },
      { name: "Redux", icon: <Repeat className="w-4 h-4" /> }
    ],
    gradient: "from-blue-500/10 via-blue-400/10 to-blue-300/10"
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: "Node.js", icon: <Workflow className="w-4 h-4" /> },
      { name: "Express.js", icon: <Gauge className="w-4 h-4" /> },
      { name: "API Design", icon: <FileCode className="w-4 h-4" /> },
      { name: "Clean Code", icon: <Code2 className="w-4 h-4" /> }
    ],
    gradient: "from-purple-500/10 via-purple-400/10 to-purple-300/10"
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    skills: [
      { name: "AWS", icon: <Cloud className="w-4 h-4" /> },
      { name: "DigitalOcean", icon: <Globe className="w-4 h-4" /> },
      { name: "Docker", icon: <Container className="w-4 h-4" /> },
      { name: "CI/CD", icon: <Settings className="w-4 h-4" /> }
    ],
    gradient: "from-cyan-500/10 via-cyan-400/10 to-cyan-300/10"
  }
]

export function LandingSkills() {
  return (
    <section className="py-20 relative overflow-hidden" id="skills">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise in modern web technologies and development practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden h-full border border-slate-700/30">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-slate-800/50 backdrop-blur-sm relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10">
                        {category.icon}
                      </div>
                      <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-2 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all group"
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                            {skill.icon}
                          </div>
                          <span className="text-sm text-gray-300">{skill.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            { icon: <GitBranch className="w-5 h-5" />, label: "Version Control" },
            { icon: <Layers className="w-5 h-5" />, label: "System Design" },
            { icon: <Globe className="w-5 h-5" />, label: "RESTful APIs" },
            // { icon: <Box className="w-5 h-5" />, label: "Microservices" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-xl bg-slate-800/40 backdrop-blur-md border border-slate-700/30 hover:border-slate-600/50 transition-all group"
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-700/50 backdrop-blur-sm relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 text-blue-400 group-hover:text-purple-400 transition-colors">
                    {item.icon}
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}