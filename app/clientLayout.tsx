"use client"

import type React from "react"

import { useEffect } from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Handle GitHub Pages client-side routing
  useEffect(() => {
    // This helps with GitHub Pages routing by handling 404 redirects
    const path = window.location.pathname
    const hash = window.location.hash

    // Check if we're on the base path or index.html
    if (hash && (path === "/Portfolio/" || path === "/Portfolio/index.html")) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Portfolio | Creative & Technical Projects</title>
        <meta
          name="description"
          content="A showcase of creative and technical projects in interactive media and computer science"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Portfolio/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
