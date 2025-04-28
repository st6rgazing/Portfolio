"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Code, Palette } from "lucide-react"

// Sample project data - in a real app, this would come from a database or CMS
const projects = [
  {
    id: 1,
    title: "AI-Powered Recommendation Engine",
    description:
      "A machine learning algorithm that provides personalized content recommendations based on user behavior.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cs",
    tags: ["Python", "TensorFlow", "Machine Learning"],
    link: "/projects/recommendation-engine",
  },
  {
    id: 2,
    title: "Interactive Data Visualization",
    description: "A web-based dashboard for visualizing complex datasets with interactive elements.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cs",
    tags: ["D3.js", "React", "Data Visualization"],
    link: "/projects/data-visualization",
  },
  {
    id: 3,
    title: "Immersive VR Experience",
    description: "A virtual reality experience exploring abstract concepts through interactive environments.",
    image: "/placeholder.svg?height=400&width=600",
    category: "creative",
    tags: ["Unity", "VR", "3D Modeling"],
    link: "/projects/vr-experience",
  },
  {
    id: 4,
    title: "Generative Art Installation",
    description: "An algorithm-driven art piece that creates unique visual patterns based on environmental inputs.",
    image: "/placeholder.svg?height=400&width=600",
    category: "creative",
    tags: ["Processing", "Generative Art", "Arduino"],
    link: "/projects/generative-art",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with inventory management and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cs",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "/projects/ecommerce-platform",
  },
  {
    id: 6,
    title: "Interactive Sound Installation",
    description: "A physical installation that translates movement into dynamic soundscapes.",
    image: "/placeholder.svg?height=400&width=600",
    category: "creative",
    tags: ["Max/MSP", "Sound Design", "Motion Sensors"],
    link: "/projects/sound-installation",
  },
]

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all")
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef(null)

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const handleTabChange = (tab) => {
    if (tab === activeTab) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveTab(tab)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.1),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(var(--secondary-rgb),0.1),transparent_40%)]"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Explore my portfolio of technical and creative work, showcasing a blend of computer science expertise and
          interactive media design.
        </p>

        {/* Custom category selector */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center p-1 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
            <Button
              variant="ghost"
              className={`relative z-10 rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === "all" ? "text-primary-foreground" : "hover:text-primary"
              }`}
              onClick={() => handleTabChange("all")}
            >
              All Projects
            </Button>
            <Button
              variant="ghost"
              className={`relative z-10 rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                activeTab === "cs" ? "text-primary-foreground" : "hover:text-primary"
              }`}
              onClick={() => handleTabChange("cs")}
            >
              <Code className="w-4 h-4" />
              CS Projects
            </Button>
            <Button
              variant="ghost"
              className={`relative z-10 rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                activeTab === "creative" ? "text-primary-foreground" : "hover:text-primary"
              }`}
              onClick={() => handleTabChange("creative")}
            >
              <Palette className="w-4 h-4" />
              Creative Projects
            </Button>
            <motion.div
              className="absolute inset-1 bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={false}
              animate={{
                x: activeTab === "all" ? 0 : activeTab === "cs" ? "33.33%" : "66.66%",
                width: "33.33%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={containerRef}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
