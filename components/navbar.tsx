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

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Portfolio</span>
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
                  <Link
                    href="/#projects"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#about"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <ModeToggle />
                </nav>
              </motion.div>
            )}
          </>
        ) : (
          <nav className="flex items-center gap-8">
            <Link href="/#projects" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  )
}
