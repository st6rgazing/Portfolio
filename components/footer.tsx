"use client"
import { Github, Linkedin, Twitter, Sparkles } from "lucide-react"

export function Footer() {
  // Use hash links for GitHub Pages compatibility
  const scrollToSection = (id) => (e) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState({}, "", `#${id}`)
    }
  }

  return (
    <footer className="border-t py-12 bg-background/80 backdrop-blur-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink mb-2">
              Portfolio
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Showcasing a blend of technical CS projects and interactive media creations. © {new Date().getFullYear()}{" "}
              All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 md:flex md:gap-12">
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-vibrant-purple transition-colors"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-vibrant-purple transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-vibrant-purple transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vibrant-purple transition-colors p-2 rounded-full hover:bg-vibrant-purple/10"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vibrant-pink transition-colors p-2 rounded-full hover:bg-vibrant-pink/10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vibrant-blue transition-colors p-2 rounded-full hover:bg-vibrant-blue/10"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-vibrant-purple transition-colors p-2 rounded-full hover:bg-vibrant-purple/10"
            >
              <Sparkles className="h-5 w-5" />
              <span className="sr-only">Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
