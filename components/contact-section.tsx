"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageSquare, Send, Sparkles } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <motion.div
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-vibrant-purple/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-vibrant-pink/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink">
              Get In Touch
            </span>
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-vibrant-purple to-vibrant-pink"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-vibrant-purple/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink">
              Contact Me
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-vibrant-purple/10 transition-colors"
              >
                <div className="p-3 bg-vibrant-purple/20 rounded-full">
                  <Mail className="h-6 w-6 text-vibrant-purple" />
                </div>
                <span className="text-lg">hello@example.com</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-vibrant-purple/10 transition-colors"
              >
                <div className="p-3 bg-vibrant-purple/20 rounded-full">
                  <MessageSquare className="h-6 w-6 text-vibrant-purple" />
                </div>
                <span className="text-lg">Schedule a call</span>
              </motion.div>

              <div className="flex gap-4 mt-12">
                <motion.div whileHover={{ y: -5 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-vibrant-purple/50 bg-vibrant-purple/10 hover:bg-vibrant-purple/20"
                  >
                    <Github className="h-5 w-5 text-vibrant-purple" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-vibrant-pink/50 bg-vibrant-pink/10 hover:bg-vibrant-pink/20"
                  >
                    <Linkedin className="h-5 w-5 text-vibrant-pink" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -5 }}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-vibrant-blue/50 bg-vibrant-blue/10 hover:bg-vibrant-blue/20"
                  >
                    <Sparkles className="h-5 w-5 text-vibrant-blue" />
                    <span className="sr-only">Portfolio</span>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-vibrant-purple/20 bg-card/30 backdrop-blur-sm overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-vibrant-purple/20 focus:border-vibrant-purple/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="bg-background/50 border-vibrant-purple/20 focus:border-vibrant-purple/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                      className="bg-background/50 border-vibrant-purple/20 focus:border-vibrant-purple/50"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-md opacity-75 blur-sm animate-pulse"></div>
                    <Button
                      type="submit"
                      className="relative w-full bg-gradient-to-r from-vibrant-purple to-vibrant-pink hover:opacity-90 transition-opacity"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
