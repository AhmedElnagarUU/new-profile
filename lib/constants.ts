export const SITE_CONFIG = {
  name: "Ahmed Youssry",
  title: "Full Stack Developer",
  description: "Building scalable web apps with modern tech. Expert in responsive UI, backend systems, and cloud solutions.",
  links: {
    github: "https://github.com/AhmedElnagarUU",
    linkedin: "https://www.linkedin.com/in/ahmed-elnagar-25561b262/",
    facebook: "https://www.facebook.com/profile.php?id=100094263562406",
    email: "ahmedelnagaruu@gmail.com"
  }
}

export const NAVIGATION = [
  // { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#features" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
]

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with inventory management, payment processing, and admin dashboard",
    tech: ["Next.js", "Express", "PostgreSQL", "AWS"],
    image: "/projects/ecommerce.jpg",
    metrics: { value: "99.9%", label: "Uptime" },
    status: "Live",
    links: {
      github: "https://github.com/yourusername/ecommerce",
      live: "https://project1.com"
    }
  },
  {
    title: "Company Landing Pages",
    description: "Collection of high-performance, SEO-optimized landing pages with modern designs",
    tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
    image: "/projects/landing.jpg",
    metrics: { value: "98", label: "Performance Score" },
    status: "Multiple Live Projects",
    links: {
      github: "https://github.com/yourusername/landing-pages",
      live: "https://project2.com"
    }
  },
  {
    title: "Admin Dashboard System",
    description: "Comprehensive admin panel with real-time analytics, user management, and reporting",
    tech: ["React", "Node.js", "MongoDB", "DigitalOcean"],
    image: "/projects/dashboard.jpg",
    metrics: { value: "50K+", label: "Daily Users" },
    status: "Live",
    links: {
      github: "https://github.com/yourusername/admin-dashboard",
      live: "https://project3.com"
    }
  }
]

export const SKILLS = {
  frontend: [
    "Next.js",
    "React",
    "TailwindCSS",
    "TypeScript",
    "Framer Motion"
  ],
  backend: [
    "Express.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs"
  ],
  devops: [
    "AWS",
    "DigitalOcean",
    "Docker",
    "CI/CD",
    "Nginx"
  ],
  services: [
    "Domain Management",
    "Cloud Hosting",
    "Server Administration",
    "SSL Certificates",
    "CDN Setup"
  ]
} 