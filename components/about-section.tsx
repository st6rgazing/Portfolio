"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Lightbulb, Cpu } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-vibrant-purple" />,
      title: "Software Development",
      description: "Proficient in multiple programming languages and frameworks for building robust applications.",
      color: "purple",
    },
    {
      icon: <Palette className="h-8 w-8 text-vibrant-pink" />,
      title: "Creative Design",
      description: "Combining technical skills with artistic vision to create engaging visual experiences.",
      color: "pink",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-vibrant-blue" />,
      title: "Problem Solving",
      description: "Analytical approach to finding innovative solutions to complex challenges.",
      color: "blue",
    },
    {
      icon: <Cpu className="h-8 w-8 text-vibrant-purple" />,
      title: "Technical Innovation",
      description: "Exploring cutting-edge technologies to push the boundaries of what's possible.",
      color: "purple",
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
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots opacity-50"></div>
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-vibrant-purple/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-vibrant-pink/10 blur-3xl"
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
              About Me
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-vibrant-purple/30 to-vibrant-pink/30 mix-blend-overlay z-10"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-vibrant-purple to-vibrant-pink rounded-2xl opacity-50 animate-pulse"></div>
              <Image
                src="placeholder.svg?height=400&width=400"
                alt="Profile"
                fill
                className="object-cover relative z-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-vibrant-purple/20 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink">
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
          className="text-2xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink"
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
          {skills.map((skill, index) => {
            const getColorClasses = () => {
              switch (skill.color) {
                case "pink":
                  return {
                    bg: "bg-vibrant-pink/10",
                    border: "border-vibrant-pink/20",
                    shadow: "shadow-vibrant-pink/10",
                    hover: "hover:border-vibrant-pink/50",
                  }
                case "blue":
                  return {
                    bg: "bg-vibrant-blue/10",
                    border: "border-vibrant-blue/20",
                    shadow: "shadow-vibrant-blue/10",
                    hover: "hover:border-vibrant-blue/50",
                  }
                default:
                  return {
                    bg: "bg-vibrant-purple/10",
                    border: "border-vibrant-purple/20",
                    shadow: "shadow-vibrant-purple/10",
                    hover: "hover:border-vibrant-purple/50",
                  }
              }
            }

            const colorClasses = getColorClasses()

            return (
              <motion.div key={index} variants={item}>
                <Card
                  className={`h-full border ${colorClasses.border} ${colorClasses.bg} backdrop-blur-sm ${colorClasses.hover} hover:shadow-lg transition-all duration-300 ${colorClasses.shadow}`}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4 p-3 rounded-full w-fit">{skill.icon}</div>
                    <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
