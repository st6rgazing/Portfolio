"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Lightbulb, Cpu } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Software Development",
      description: "Proficient in multiple programming languages and frameworks for building robust applications.",
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Creative Design",
      description: "Combining technical skills with artistic vision to create engaging visual experiences.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Analytical approach to finding innovative solutions to complex challenges.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Technical Innovation",
      description: "Exploring cutting-edge technologies to push the boundaries of what's possible.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(var(--primary-rgb),0.1),transparent_40%),radial-gradient(circle_at_top_left,rgba(var(--secondary-rgb),0.1),transparent_40%)]"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent -z-10"></div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Creative Developer with a Passion for Innovation
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              I'm a multidisciplinary developer with expertise in both computer science and interactive media. My
              background spans software engineering, creative coding, and digital art, allowing me to approach problems
              from both technical and creative perspectives.
            </p>
            <p className="text-muted-foreground text-lg">
              With a focus on creating engaging user experiences, I strive to blend functionality with aesthetics in
              every project. I'm constantly exploring new technologies and creative techniques to push the boundaries of
              digital expression.
            </p>
          </motion.div>
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">{skill.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
