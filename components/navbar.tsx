"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Use hash links for GitHub Pages compatibility
  const scrollToSection = (id) => (e) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      if (isOpen) setIsOpen(false)
      window.history.pushState({}, "", `#${id}`)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="./" className="font-bold text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-vibrant-purple to-vibrant-pink">
            Portfolio
          </span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-md p-6"
              >
                <nav className="flex flex-col space-y-6 text-lg">
                  <a
                    href="#projects"
                    onClick={scrollToSection("projects")}
                    className="hover:text-vibrant-purple transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#about"
                    onClick={scrollToSection("about")}
                    className="hover:text-vibrant-purple transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#contact"
                    onClick={scrollToSection("contact")}
                    className="hover:text-vibrant-purple transition-colors"
                  >
                    Contact
                  </a>
                  <ModeToggle />
                </nav>
              </motion.div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            <a
              href="#projects"
              onClick={scrollToSection("projects")}
              className="text-sm font-medium transition-colors hover:text-vibrant-purple relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vibrant-purple to-vibrant-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              onClick={scrollToSection("about")}
              className="text-sm font-medium transition-colors hover:text-vibrant-purple relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vibrant-purple to-vibrant-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              onClick={scrollToSection("contact")}
              className="text-sm font-medium transition-colors hover:text-vibrant-purple relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vibrant-purple to-vibrant-pink transition-all duration-300 group-hover:w-full"></span>
            </a>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  )
}
