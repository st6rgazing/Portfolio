"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Cpu,
  Database,
  Figma,
  FileCode2,
  Globe,
  Layers,
  PenTool,
  Smartphone,
  Terminal,
  Wand2,
  Palette,
} from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillsData = [
    {
      category: "Technical",
      color: "blue",
      skills: [
        { name: "Frontend Development", icon: <Code className="h-6 w-6" /> },
        { name: "Backend Development", icon: <Database className="h-6 w-6" /> },
        { name: "Mobile Development", icon: <Smartphone className="h-6 w-6" /> },
        { name: "Algorithms & Data Structures", icon: <Cpu className="h-6 w-6" /> },
        { name: "DevOps", icon: <Terminal className="h-6 w-6" /> },
        { name: "Web Development", icon: <Globe className="h-6 w-6" /> },
      ],
    },
    {
      category: "Creative",
      color: "pink",
      skills: [
        { name: "UI/UX Design", icon: <Figma className="h-6 w-6" /> },
        { name: "3D Modeling", icon: <Layers className="h-6 w-6" /> },
        { name: "Animation", icon: <Wand2 className="h-6 w-6" /> },
        { name: "Graphic Design", icon: <PenTool className="h-6 w-6" /> },
        { name: "Interactive Media", icon: <FileCode2 className="h-6 w-6" /> },
        { name: "Digital Art", icon: <Palette className="h-6 w-6" /> },
      ],
    },
  ]

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

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-gradient">My Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set spanning both technical and creative domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillsData.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={container}
              className="space-y-6"
            >
              <h3 className={`text-2xl font-bold text-center lg:text-left text-${skillGroup.color}`}>
                {skillGroup.category} Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillGroup.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className={`bg-card hover:bg-card/80 border border-${skillGroup.color}/20 hover:border-${skillGroup.color}/40 rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`flex justify-center text-${skillGroup.color} mb-3`}>{skill.icon}</div>
                    <h4 className="font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
