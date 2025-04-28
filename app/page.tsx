import { Hero } from "@/components/hero"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
