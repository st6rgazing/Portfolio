import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample project data - in a real app, this would come from a database or CMS
const projects = [
  {
    id: 1,
    slug: "recommendation-engine",
    title: "AI-Powered Recommendation Engine",
    description:
      "A machine learning algorithm that provides personalized content recommendations based on user behavior.",
    fullDescription:
      "This project implements a sophisticated recommendation system using collaborative filtering and content-based approaches. The system analyzes user interactions and content metadata to generate highly relevant suggestions. Built with Python and TensorFlow, it demonstrates advanced machine learning concepts while maintaining performance at scale.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "cs",
    tags: ["Python", "TensorFlow", "Machine Learning"],
    features: [
      "User behavior analysis",
      "Content-based filtering",
      "Collaborative filtering",
      "Real-time recommendation updates",
      "Performance optimization",
    ],
    technologies: ["Python", "TensorFlow", "NumPy", "Pandas", "Flask", "MongoDB"],
  },
  {
    id: 2,
    slug: "data-visualization",
    title: "Interactive Data Visualization",
    description: "A web-based dashboard for visualizing complex datasets with interactive elements.",
    fullDescription:
      "This data visualization project transforms complex datasets into intuitive, interactive visualizations. Users can explore multi-dimensional data through customizable charts, filters, and drill-down capabilities. The responsive interface adapts to different screen sizes while maintaining performance even with large datasets.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "cs",
    tags: ["D3.js", "React", "Data Visualization"],
    features: [
      "Interactive charts and graphs",
      "Real-time data filtering",
      "Customizable views",
      "Data export capabilities",
      "Responsive design",
    ],
    technologies: ["React", "D3.js", "TypeScript", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    slug: "vr-experience",
    title: "Immersive VR Experience",
    description: "A virtual reality experience exploring abstract concepts through interactive environments.",
    fullDescription:
      "This VR experience creates an immersive journey through abstract conceptual spaces. Users can interact with dynamic environments that respond to movement and gestures. The project explores the boundaries between physical and virtual reality, creating memorable sensory experiences through carefully crafted visual and audio elements.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "creative",
    tags: ["Unity", "VR", "3D Modeling"],
    features: [
      "Full 6DOF movement",
      "Hand tracking interactions",
      "Procedurally generated environments",
      "Spatial audio",
      "Physics-based interactions",
    ],
    technologies: ["Unity", "C#", "Oculus SDK", "Blender", "FMOD", "Shader Graph"],
  },
  {
    id: 4,
    slug: "generative-art",
    title: "Generative Art Installation",
    description: "An algorithm-driven art piece that creates unique visual patterns based on environmental inputs.",
    fullDescription:
      "This generative art installation creates ever-changing visual compositions based on environmental data like sound, movement, and temperature. The algorithms translate these inputs into evolving patterns, colors, and forms that never repeat exactly. The installation bridges technology and artistic expression, creating a unique experience for each viewer.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "creative",
    tags: ["Processing", "Generative Art", "Arduino"],
    features: [
      "Real-time environmental sensing",
      "Algorithm-driven visual generation",
      "Unique compositions for each viewing",
      "Audio-visual synchronization",
      "Interactive elements",
    ],
    technologies: ["Processing", "Arduino", "Custom Sensors", "OpenCV", "Max/MSP"],
  },
  {
    id: 5,
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with inventory management and payment processing.",
    fullDescription:
      "This comprehensive e-commerce platform provides businesses with everything needed to sell products online. Features include inventory management, secure payment processing, customer accounts, and detailed analytics. The system is built with scalability in mind, using modern web technologies and best practices for security and performance.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "cs",
    tags: ["Next.js", "Stripe", "MongoDB"],
    features: [
      "Product catalog management",
      "Secure payment processing",
      "User account management",
      "Order tracking",
      "Analytics dashboard",
      "Mobile-responsive design",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe API", "MongoDB", "Tailwind CSS", "Vercel"],
  },
  {
    id: 6,
    slug: "sound-installation",
    title: "Interactive Sound Installation",
    description: "A physical installation that translates movement into dynamic soundscapes.",
    fullDescription:
      "This interactive sound installation creates immersive audio environments that respond to visitor movement. Using motion sensors and custom software, the installation translates physical gestures into evolving soundscapes. The project explores the relationship between movement, space, and sound, creating a unique sensory experience that changes with each interaction.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "creative",
    tags: ["Max/MSP", "Sound Design", "Motion Sensors"],
    features: [
      "Motion-reactive sound generation",
      "Spatial audio mapping",
      "Custom-designed sound elements",
      "Real-time audio processing",
      "Multi-channel output",
    ],
    technologies: ["Max/MSP", "Ableton Live", "Arduino", "Custom Sensors", "Multichannel Audio System"],
  },
]

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/#projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <div className="relative w-full h-[50vh] mb-12 rounded-lg overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.fullDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Category</h4>
                  <p className="capitalize">{project.category === "cs" ? "Computer Science" : "Creative Media"}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full">View Live Demo</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
