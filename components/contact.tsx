"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // You would typically send this data to your backend or email service
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple" />,
      title: "Email",
      details: "contact@yourname.com",
      link: "mailto:contact@yourname.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-pink" />,
      title: "Location",
      details: "San Francisco, CA",
      link: "https://maps.google.com",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple/5 to-background"></div>

      <div className="container px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue via-purple to-pink rounded-xl blur opacity-75"></div>
              <Card className="relative border-none">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-blue/20 focus:border-blue/40"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
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
                          className="border-purple/20 focus:border-purple/40"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="border-pink/20 focus:border-pink/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={6}
                        required
                        className="border-purple/20 focus:border-purple/40"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-blue-purple hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative
              ideas, or opportunities.
            </p>

            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute -inset-0.5 bg-${index === 0 ? "purple" : index === 1 ? "blue" : "pink"}/30 rounded-lg blur-sm`}
                  ></div>
                  <Card className="relative border-none">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.details}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
