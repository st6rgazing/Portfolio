"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function EnhancedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Set high DPI canvas
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position for interactive effects
    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    }

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    // Particle class for more impressive effects
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      color: string
      speedX: number
      speedY: number
      maxSize: number
      angle: number
      angleSpeed: number
      oscillationRadius: number
      opacity: number
      hue: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 15 + 5
        this.size = this.baseSize
        this.maxSize = this.size * 1.5

        // Pastel colors with hue rotation
        this.hue = Math.random() * 60 + 300 // Pink to purple range
        this.color = `hsla(${this.hue}, 100%, 80%, 0.6)`

        this.speedX = (Math.random() - 0.5) * 0.7
        this.speedY = (Math.random() - 0.5) * 0.7

        // For circular motion
        this.angle = Math.random() * Math.PI * 2
        this.angleSpeed = Math.random() * 0.02 + 0.01
        this.oscillationRadius = Math.random() * 40 + 10

        // For fading effect
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Add slight oscillation
        this.angle += this.angleSpeed
        this.x += Math.sin(this.angle) * 0.3
        this.y += Math.cos(this.angle) * 0.3

        // Mouse interaction - grow when near mouse
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const scale = 1 - distance / maxDistance
          this.size = this.baseSize + (this.maxSize - this.baseSize) * scale

          // Also slightly move away from mouse
          this.x -= dx * 0.01 * scale
          this.y -= dy * 0.01 * scale

          // Increase opacity when near mouse
          this.opacity = Math.min(0.8, this.opacity + 0.01)
        } else {
          this.size = this.baseSize
          this.opacity = Math.max(0.3, this.opacity - 0.01)
        }

        // Slowly shift color
        this.hue += 0.1
        if (this.hue > 360) this.hue = 0
        this.color = `hsla(${this.hue}, 100%, 80%, ${this.opacity})`

        // Bounce off edges
        if (this.x - this.size < 0 || this.x + this.size > canvas.width) {
          this.speedX = -this.speedX
        }

        if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return

        // Draw glowing particle
        ctx.beginPath()

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)

        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 80%, 0)`)

        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw core
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()

        // Add highlight
        ctx.beginPath()
        ctx.arc(this.x - this.size * 0.3, this.y - this.size * 0.3, this.size * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 25; i++) {
      particles.push(new Particle())
    }

    // Function to draw connecting lines between particles
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 182, 236, ${0.1 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return

      // Clear canvas with slight fade for trail effect
      ctx.fillStyle = "rgba(253, 242, 248, 0.1)" // pink-50 with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(253, 242, 248, 0.8)") // pink-50
      gradient.addColorStop(1, "rgba(250, 245, 255, 0.8)") // purple-50

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections between particles
      drawConnections()

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
      })
    }
  }, [])

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const name = "Mariam Shafey"

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="overflow-hidden">
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-display tracking-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2,
              }}
            >
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4"
          >
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
