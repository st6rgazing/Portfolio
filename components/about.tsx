"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, Code, Palette, Zap } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className="container px-4 sm:px-6 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate creative developer with expertise in both interactive media and computer science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue/20 via-purple/20 to-pink/20 rounded-lg blur-md"></div>
                <div className="relative glass rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    I'm a multidisciplinary developer with a passion for creating engaging digital experiences. With a
                    background in both creative interactive media and computer science, I bring a unique perspective to
                    every project I work on.
                  </p>
                  <p className="text-muted-foreground">
                    My work spans from developing complex algorithms and systems to designing immersive interactive
                    experiences. I believe in the power of technology to transform ideas into impactful solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <Card className="border border-blue/20 hover:border-blue/40 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Briefcase className="h-8 w-8 text-blue mb-2" />
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-muted-foreground">5+ Years</p>
                </CardContent>
              </Card>
              <Card className="border border-purple/20 hover:border-purple/40 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <GraduationCap className="h-8 w-8 text-purple mb-2" />
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">MSc in CS</p>
                </CardContent>
              </Card>
              <Card className="border border-pink/20 hover:border-pink/40 transition-colors">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Award className="h-8 w-8 text-pink mb-2" />
                  <h4 className="font-semibold">Awards</h4>
                  <p className="text-sm text-muted-foreground">10+ Projects</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">My Expertise</h3>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-blue/30 rounded-lg blur-sm"></div>
                <Card className="relative border-blue/20">
                  <CardContent className="p-4 flex items-start gap-4">
                    <Code className="h-6 w-6 text-blue mt-1" />
                    <div>
                      <h4 className="font-semibold">Technical Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Building robust, scalable applications with modern technologies
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-purple/30 rounded-lg blur-sm"></div>
                <Card className="relative border-purple/20">
                  <CardContent className="p-4 flex items-start gap-4">
                    <Palette className="h-6 w-6 text-purple mt-1" />
                    <div>
                      <h4 className="font-semibold">Creative Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Crafting visually stunning and intuitive user experiences
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute -inset-0.5 bg-pink/30 rounded-lg blur-sm"></div>
                <Card className="relative border-pink/20">
                  <CardContent className="p-4 flex items-start gap-4">
                    <Zap className="h-6 w-6 text-pink mt-1" />
                    <div>
                      <h4 className="font-semibold">Innovation</h4>
                      <p className="text-sm text-muted-foreground">
                        Pushing boundaries with cutting-edge technologies and ideas
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
