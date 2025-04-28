"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Palette, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
      window.history.pushState({}, "", "#projects")
    }
  }

  // Floating elements animation variants
  const floatingElements = Array(15)
    .fill(null)
    .map((_, i) => ({
      size: Math.random() * 20 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }))

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Colorful background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-dots">
        <div className="absolute inset-0 bg-gradient-radial from-vibrant-purple/10 via-transparent to-transparent"></div>

        {/* Floating elements */}
        {floatingElements.map((el, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-vibrant-purple/30 to-vibrant-pink/30 backdrop-blur-md"
            style={{
              width: el.size,
              height: el.size,
              left: `${el.x}%`,
              top: `${el.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: el.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: el.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-2 bg-vibrant-purple/20 text-vibrant-purple px-4 py-2 rounded-full backdrop-blur-sm border border-vibrant-purple/20 shadow-lg shadow-vibrant-purple/10"
            >
              <Code className="h-5 w-5" />
              <span className="font-medium">CS Projects</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-2 bg-vibrant-pink/20 text-vibrant-pink px-4 py-2 rounded-full backdrop-blur-sm border border-vibrant-pink/20 shadow-lg shadow-vibrant-pink/10"
            >
              <Palette className="h-5 w-5" />
              <span className="font-medium">Creative Work</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-2 bg-vibrant-blue/20 text-vibrant-blue px-4 py-2 rounded-full backdrop-blur-sm border border-vibrant-blue/20 shadow-lg shadow-vibrant-blue/10"
            >
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Innovation</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mb-8"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-rainbow opacity-75 blur-xl"
              animate={{
                rotate: [0, 360],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            />
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple via-vibrant-blue to-vibrant-pink leading-tight">
              Creative Developer & Designer
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-12 text-foreground/80 max-w-2xl mx-auto"
          >
            Showcasing a blend of technical CS projects and interactive media creations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-full opacity-75 blur-sm animate-pulse"></div>
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="relative bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:opacity-90 transition-all duration-300 shadow-lg shadow-vibrant-purple/20"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="p-2 rounded-full bg-vibrant-purple/20 backdrop-blur-sm border border-vibrant-purple/30 shadow-lg shadow-vibrant-purple/10">
          <ArrowDown className="h-6 w-6 text-vibrant-purple" />
        </div>
      </motion.div>
    </section>
  )
}
