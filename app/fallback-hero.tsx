"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function FallbackHero() {
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
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Bubble class
    class Bubble {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 50 + 20

        // Pastel colors
        const colors = [
          "rgba(249, 168, 212, 0.4)", // pink-300
          "rgba(244, 114, 182, 0.4)", // pink-400
          "rgba(192, 132, 252, 0.4)", // purple-400
          "rgba(167, 139, 250, 0.4)", // violet-400
          "rgba(253, 164, 175, 0.4)", // rose-300
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.speedX = -this.speedX
        }

        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
      }
    }

    // Create bubbles
    const bubbles: Bubble[] = []
    for (let i = 0; i < 15; i++) {
      bubbles.push(new Bubble())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#fdf2f8") // pink-50
      gradient.addColorStop(1, "#faf5ff") // purple-50

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        bubble.update()
        bubble.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-pink-500 text-center"
          initial={{ scale: 0.8, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.4,
          }}
        >
          Mariam Shafey
        </motion.h1>
      </motion.div>
    </div>
  )
}
