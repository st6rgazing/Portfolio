"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Github, Mail, ExternalLink, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeProvider } from "@/components/theme-provider"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import Navbar from "./navbar"
import ProjectCard from "./project-card"
import EnhancedHero from "./enhanced-hero"

// Project data
const projects = [
  {
    id: 1,
    title: "Interactive Storybook",
    description: "A digital storybook with interactive elements and animations",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Animation", "Illustration"],
    category: "creative",
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Admin dashboard for managing products and orders",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "technical",
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
  },
  {
    id: 3,
    title: "Digital Art Gallery",
    description: "Showcase of digital illustrations and animations",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Design", "Animation", "Gallery"],
    category: "creative",
    link: "https://example.com/project3",
    github: "https://github.com/username/project3",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather application with beautiful visualizations",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "API", "Data Visualization"],
    category: "technical",
    link: "https://example.com/project4",
    github: "https://github.com/username/project4",
  },
  {
    id: 5,
    title: "Character Design Portfolio",
    description: "Collection of character designs and concept art",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Illustration", "Character Design", "Concept Art"],
    category: "creative",
    link: "https://example.com/project5",
    github: "https://github.com/username/project5",
  },
  {
    id: 6,
    title: "Task Management App",
    description: "Productivity tool for managing tasks and projects",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "TypeScript", "State Management"],
    category: "technical",
    link: "https://example.com/project6",
    github: "https://github.com/username/project6",
  },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [scrolled, setScrolled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const filteredProjects = projects.filter((project) => activeFilter === "all" || project.category === activeFilter)

  const handleContactClick = () => {
    toast({
      title: "Contact Info",
      description: "Feel free to reach out at mariam.shafey@example.com",
    })
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 font-sans">
        <Navbar scrolled={scrolled} />

        {/* Enhanced Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <EnhancedHero />

          <div className="container relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-64 text-center"
            >
              <h2 className="text-2xl font-medium text-pink-700 mb-4 font-display">Creative Developer & Designer</h2>
              <p className="max-w-md mx-auto text-purple-800 mb-8 font-light">
                Crafting delightful digital experiences through code and design
              </p>
              <Button
                className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6 font-medium"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View My Work <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-pink-600 mb-4 font-display">My Projects</h2>
              <p className="text-purple-700 max-w-2xl mx-auto font-light">
                A collection of my creative and technical work. Use the filters to explore different categories.
              </p>
            </motion.div>

            <Tabs defaultValue="all" className="w-full mb-12">
              <div className="flex justify-center">
                <TabsList className="bg-pink-100 rounded-full p-1">
                  <TabsTrigger
                    value="all"
                    onClick={() => setActiveFilter("all")}
                    className={cn(
                      "data-[state=active]:bg-pink-300 data-[state=active]:text-white rounded-full px-6 font-medium",
                    )}
                  >
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="creative"
                    onClick={() => setActiveFilter("creative")}
                    className={cn(
                      "data-[state=active]:bg-pink-300 data-[state=active]:text-white rounded-full px-6 font-medium",
                    )}
                  >
                    Creative
                  </TabsTrigger>
                  <TabsTrigger
                    value="technical"
                    onClick={() => setActiveFilter("technical")}
                    className={cn(
                      "data-[state=active]:bg-pink-300 data-[state=active]:text-white rounded-full px-6 font-medium",
                    )}
                  >
                    Technical
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </TabsContent>

              <TabsContent value="creative" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <AnimatePresence>
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-purple-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-pink-600 mb-4 font-display">About Me</h2>
                <p className="text-purple-700 font-light">Get to know more about my background and skills</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center">
                      <span className="text-pink-600 text-2xl font-display">Mariam Shafey</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-pink-600 mb-4 font-display">Hello there!</h3>
                  <p className="text-purple-700 mb-4 font-light">
                    I'm Mariam, a creative developer and designer passionate about building beautiful, functional
                    digital experiences. I blend technical expertise with artistic vision to create projects that are
                    both visually stunning and technically sound.
                  </p>
                  <p className="text-purple-700 mb-6 font-light">
                    With experience in both creative and technical domains, I enjoy pushing the boundaries of what's
                    possible in digital design and development.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "Three.js", "UI/UX Design", "TypeScript", "Creative Coding", "Illustration"].map(
                      (skill) => (
                        <Badge
                          key={skill}
                          className="bg-pink-200 text-pink-700 hover:bg-pink-300 rounded-full px-4 py-1 font-medium"
                        >
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>

                  <Button
                    className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6 font-medium"
                    onClick={handleContactClick}
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-pink-600 mb-4 font-display">Let's Connect</h2>
              <p className="text-purple-700 max-w-2xl mx-auto font-light">
                Feel free to reach out for collaborations or just a friendly chat
              </p>
            </motion.div>

            <div className="max-w-md mx-auto">
              <Card className="border-pink-200 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <CardContent className="pt-6">
                  <div className="grid gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors"
                    >
                      <Mail className="h-6 w-6 text-pink-500 mr-4" />
                      <div>
                        <h3 className="font-medium text-pink-700 font-display">Email</h3>
                        <p className="text-sm text-purple-600 font-light">mariam.shafey@example.com</p>
                      </div>
                    </motion.div>

                    <motion.a
                      href="https://github.com/mariamshafey"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors"
                    >
                      <Github className="h-6 w-6 text-pink-500 mr-4" />
                      <div>
                        <h3 className="font-medium text-pink-700 font-display">GitHub</h3>
                        <p className="text-sm text-purple-600 font-light">github.com/mariamshafey</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-pink-400 ml-auto" />
                    </motion.a>

                    <motion.a
                      href="https://linkedin.com/in/mariamshafey"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-pink-500 mr-4" />
                      <div>
                        <h3 className="font-medium text-pink-700 font-display">LinkedIn</h3>
                        <p className="text-sm text-purple-600 font-light">linkedin.com/in/mariamshafey</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-pink-400 ml-auto" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-pink-100 text-center">
          <div className="container mx-auto">
            <p className="text-pink-600 font-display">
              © {new Date().getFullYear()} Mariam Shafey. All rights reserved.
            </p>
            <p className="text-sm text-purple-600 mt-2 font-light">Made with ❤️ and creativity</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
