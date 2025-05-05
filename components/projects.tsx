"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, CodeIcon, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Project data
const projectsData = [
  {
    id: 1,
    title: "Interactive Data Visualization",
    description:
      "A web-based interactive data visualization platform that transforms complex datasets into engaging visual experiences.",
    image: "./placeholder.png?height=600&width=800",
    category: "creative",
    tags: ["D3.js", "React", "WebGL", "Interactive Media"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "AI-Powered Recommendation Engine",
    description:
      "A machine learning algorithm that analyzes user behavior to provide personalized content recommendations.",
    image: "./placeholder.png?height=600&width=800",
    category: "technical",
    tags: ["Python", "TensorFlow", "Machine Learning", "API"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Immersive VR Experience",
    description:
      "A virtual reality experience that transports users to an interactive digital world with realistic physics and interactions.",
    image: "./placeholder.png?height=600&width=800",
    category: "creative",
    tags: ["Unity", "C#", "3D Modeling", "VR"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Distributed Database System",
    description:
      "A high-performance distributed database system designed for scalability and fault tolerance in enterprise applications.",
    image: "./placeholder.png?height=600&width=800",
    category: "technical",
    tags: ["Go", "Distributed Systems", "Algorithms", "Database"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Interactive Storytelling App",
    description:
      "A mobile application that combines narrative storytelling with interactive elements and user choices.",
    image: "./placeholder.png?height=600&width=800",
    category: "creative",
    tags: ["React Native", "Animation", "UX Design", "Storytelling"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 6,
    title: "Blockchain Smart Contract Platform",
    description: "A platform for creating, testing, and deploying smart contracts on multiple blockchain networks.",
    image: "./placeholder.png?height=600&width=800",
    category: "technical",
    tags: ["Solidity", "Ethereum", "Web3", "JavaScript"],
    links: {
      demo: "#",
      github: "#",
    },
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === filter))
    }
  }, [filter])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  if (!isMounted) {
    return null
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="container px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my creative and technical work
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className="rounded-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
            >
              All Projects
            </Button>
            <Button
              variant={filter === "creative" ? "default" : "outline"}
              onClick={() => setFilter("creative")}
              className={`rounded-full flex items-center gap-2 ${
                filter === "creative" ? "bg-gradient-purple-pink hover:opacity-90" : "border-pink hover:border-pink/80"
              }`}
            >
              <Palette className="h-4 w-4" /> Creative
            </Button>
            <Button
              variant={filter === "technical" ? "default" : "outline"}
              onClick={() => setFilter("technical")}
              className={`rounded-full flex items-center gap-2 ${
                filter === "technical" ? "bg-gradient-blue-purple hover:opacity-90" : "border-blue hover:border-blue/80"
              }`}
            >
              <CodeIcon className="h-4 w-4" /> Technical
            </Button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={item} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue via-purple to-pink rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "./placeholder.png"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-blue/20 hover:bg-blue/30 backdrop-blur-sm"
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-purple/20 hover:bg-purple/30 backdrop-blur-sm"
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl">{project.title}</h3>
                      <Badge
                        variant={project.category === "creative" ? "secondary" : "outline"}
                        className={
                          project.category === "creative"
                            ? "bg-pink/20 text-pink hover:bg-pink/30"
                            : "bg-blue/20 text-blue hover:bg-blue/30"
                        }
                      >
                        {project.category === "creative" ? "Creative" : "Technical"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-muted/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
