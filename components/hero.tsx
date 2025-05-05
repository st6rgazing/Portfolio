"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin } from "lucide-react"

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    setIsMounted(true)

    // Canvas animation
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Particle[] = []
    const particleCount = 100
    const colors = ["#3B82F6", "#8B5CF6", "#EC4899"]

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = Math.random() * 2 - 1
        this.vy = Math.random() * 2 - 1
        this.radius = Math.random() * 3 + 1
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > width) this.vx = -this.vx
        if (this.y < 0 || this.y > height) this.vy = -this.vy
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 - distance / 1500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      connectParticles()
    }

    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 max-w-3xl"
          >
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
              >
                <span className="block">Hi, I'm</span>
                <span className="block text-gradient glow-text animate-gradient-x">Your Name</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Creative Developer & Computer Scientist
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue via-purple to-pink rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative glass rounded-lg p-6">
                <p className="text-lg text-muted-foreground">
                  I create innovative digital experiences at the intersection of technology and creativity. Specializing
                  in both interactive media and computer science, I bring ideas to life with code and imagination.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-blue-purple hover:opacity-90 transition-opacity"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-purple hover:border-pink transition-colors"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-4 justify-center"
            >
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-blue/10 hover:text-blue transition-colors"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-purple/10 hover:text-purple transition-colors"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue via-purple to-pink rounded-full blur opacity-75"></div>
              <div className="relative h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full w-2/3 animated-gradient rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
