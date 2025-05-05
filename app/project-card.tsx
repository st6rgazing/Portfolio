"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link: string
  github: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden border-pink-200 h-full rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="flex gap-2">
              <Button size="sm" className="bg-pink-500 hover:bg-pink-600 rounded-full" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" /> View
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" /> Code
                </a>
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg text-pink-600 mb-2 font-display">{project.title}</h3>
          <p className="text-purple-700 text-sm mb-4 font-light">{project.description}</p>
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-pink-50 text-pink-600 border-pink-200 rounded-full">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
