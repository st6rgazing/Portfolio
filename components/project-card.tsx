"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, ArrowUpRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link: string
  color?: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Get color based on project.color or default to purple
  const getColorClasses = () => {
    switch (project.color) {
      case "blue":
        return {
          bg: "bg-vibrant-blue/20",
          text: "text-vibrant-blue",
          border: "border-vibrant-blue/20",
          shadow: "shadow-vibrant-blue/10",
          hover: "group-hover:text-vibrant-blue",
          gradient: "from-vibrant-blue/80 to-vibrant-purple/80",
        }
      case "pink":
        return {
          bg: "bg-vibrant-pink/20",
          text: "text-vibrant-pink",
          border: "border-vibrant-pink/20",
          shadow: "shadow-vibrant-pink/10",
          hover: "group-hover:text-vibrant-pink",
          gradient: "from-vibrant-pink/80 to-vibrant-purple/80",
        }
      default:
        return {
          bg: "bg-vibrant-purple/20",
          text: "text-vibrant-purple",
          border: "border-vibrant-purple/20",
          shadow: "shadow-vibrant-purple/10",
          hover: "group-hover:text-vibrant-purple",
          gradient: "from-vibrant-purple/80 to-vibrant-blue/80",
        }
    }
  }

  const colorClasses = getColorClasses()

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }}>
      <Link href={project.link} className="block h-full">
        <Card
          className={`overflow-hidden h-full flex flex-col group border ${colorClasses.border} bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${colorClasses.shadow}`}
        >
          <div className="relative h-56 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div
              className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-20 mix-blend-overlay`}
            ></div>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 z-20">
              {project.category === "cs" ? (
                <Badge variant="secondary" className={`${colorClasses.bg} ${colorClasses.text} backdrop-blur-sm`}>
                  <Code className="w-3 h-3 mr-1" /> CS Project
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-vibrant-pink/20 text-vibrant-pink backdrop-blur-sm">
                  <Palette className="w-3 h-3 mr-1" /> Creative
                </Badge>
              )}
            </div>
            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-background/90 backdrop-blur-sm text-foreground p-2 rounded-full"
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
          <CardContent className="flex-grow pt-6 relative">
            <h3 className={`text-xl font-bold mb-2 ${colorClasses.hover} transition-colors duration-300`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 pt-0 pb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className={`${colorClasses.bg}`}>
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
