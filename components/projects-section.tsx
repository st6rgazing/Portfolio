"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Filter } from "lucide-react"

// Sample project data - in a real app, this would come from a database or CMS
const projects = [
  {
    id: 1,
    title: "AI-Powered Recommendation Engine",
    description:
      "A machine learning algorithm that provides personalized content recommendations based on user behavior.",
    image: "placeholder.svg?height=400&width=600",
    category: "cs",
    tags: ["Python", "TensorFlow", "Machine Learning"],
    link: "./projects/recommendation-engine",
    color: "purple",
  },
  {
    id: 2,
    title: "Interactive Data Visualization",
    description: "A web-based dashboard for visualizing complex datasets with interactive elements.",
    image: "placeholder.svg?height=400&width=600",
    category: "cs",
    tags: ["D3.js", "React", "Data Visualization"],
    link: "./projects/data-visualization",
    color: "blue",
  },
  {
    id: 3,
    title: "Immersive VR Experience",
    description: "A virtual reality experience exploring abstract concepts through interactive environments.",
    image: "placeholder.svg?height=400&width=600",
    category: "creative",
    tags: ["Unity", "VR", "3D Modeling"],
    link: "./projects/vr-experience",
    color: "purple",
  },
  {
    id: 4,
    title: "Generative Art Installation",
    description: "An algorithm-driven art piece that creates unique visual patterns based on environmental inputs.",
    image: "placeholder.svg?height=400&width=600",
    category: "creative",
    tags: ["Processing", "Generative Art", "Arduino"],
    link: "./projects/generative-art",
    color: "pink",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with inventory management and payment processing.",
    image: "placeholder.svg?height=400&width=600",
    category: "cs",
    tags: ["Next.js", "Stripe", "MongoDB"],
    link: "./projects/ecommerce-platform",
    color: "blue",
  },
  {
    id: 6,
    title: "Interactive Sound Installation",
    description: "A physical installation that translates movement into dynamic soundscapes.",
    image: "placeholder.svg?height=400&width=600",
    category: "creative",
    tags: ["Max/MSP", "Sound Design", "Motion Sensors"],
    link: "./projects/sound-installation",
    color: "pink",
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

  // Calculate the position and width for the sliding indicator
  const getIndicatorStyles = () => {
    if (activeTab === "all") {
      return { left: "0%", width: "33.33%" }
    } else if (activeTab === "cs") {
      return { left: "33.33%", width: "33.33%" }
    } else {
      return { left: "66.66%", width: "33.33%" }
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-50"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-vibrant-purple/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-vibrant-pink/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-center mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink">
              My Projects
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-vibrant-purple to-vibrant-pink"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Explore my portfolio of technical and creative work, showcasing a blend of computer science expertise and
            interactive media design.
          </p>
        </motion.div>

        {/* Custom category selector with fixed indicator positioning */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative flex items-center p-1 bg-background/50 backdrop-blur-md rounded-full border border-vibrant-purple/20 shadow-lg shadow-vibrant-purple/5">
            <Button
              variant="ghost"
              className={`relative z-10 rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === "all" ? "text-white" : "hover:text-vibrant-purple"
              }`}
              onClick={() => handleTabChange("all")}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Projects
            </Button>
            <Button
              variant="ghost"
              className={`relative z-10 rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                activeTab === "cs" ? "text-white" : "hover:text-vibrant-purple"
              }`}
              onClick={() => handleTabChange("cs")}
            >
              <Code className="w-4 h-4" />
              CS Projects
            </Button>
            <Button
              variant="ghost"
              className={`relative z-10 rounded-full px-6 py-2 transition-all duration-300 flex items-center gap-2 ${
                activeTab === "creative" ? "text-white" : "hover:text-vibrant-purple"
              }`}
              onClick={() => handleTabChange("creative")}
            >
              <Palette className="w-4 h-4" />
              Creative Projects
            </Button>

            {/* Animated indicator */}
            <motion.div
              className="absolute inset-y-1 bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-full"
              initial={false}
              animate={getIndicatorStyles()}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </motion.div>

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
