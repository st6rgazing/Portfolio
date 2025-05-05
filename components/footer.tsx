import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background"></div>
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="container px-4 sm:px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-gradient">
              Portfolio
            </a>
            <p className="mt-4 text-muted-foreground max-w-md">
              Creating innovative solutions at the intersection of technology and creativity. Specializing in both
              interactive media and computer science projects.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="mailto:contact@yourname.com" className="text-muted-foreground hover:text-pink transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-purple transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-pink transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-blue transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-purple transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gradient">Project Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-pink transition-colors">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-blue transition-colors">
                  Creative Projects
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-purple transition-colors">
                  Technical Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Your Name. All rights reserved.</p>
          <p className="text-sm text-gradient mt-4 sm:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  )
}
