"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold text-pink-600 font-display">
          Mariam Shafey
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-purple-700 hover:text-pink-500 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-pink-400 hover:bg-pink-500 text-white rounded-full px-6 font-medium">Resume</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6 text-pink-600" /> : <Menu className="h-6 w-6 text-pink-600" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-purple-700 hover:text-pink-500 transition-colors py-2 font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                  setIsOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-pink-400 hover:bg-pink-500 text-white w-full rounded-full font-medium">Resume</Button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
