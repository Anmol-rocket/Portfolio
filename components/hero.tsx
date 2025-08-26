"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import Galaxy from "./Galaxy"
import RippleGrid from "./RippleGrid"
import Ribbons from "./Ribbons"
import { useRef } from "react"

export default function Hero() {
  const rippleRef = useRef<HTMLDivElement>(null);
  const galaxyRef = useRef<HTMLDivElement>(null);

  // Helper to forward mouse events to background
  const forwardMouseEvent = (type: string, e: React.MouseEvent) => {
    const ref = document.body.classList.contains('dark') ? galaxyRef : rippleRef;
    const container = ref.current;
    if (!container) return;
    const evt = new MouseEvent(type, {
      bubbles: true,
      clientX: e.clientX,
      clientY: e.clientY,
    });
    container.dispatchEvent(evt);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 md:py-32">
      {/* Full-page Ribbons background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}>
        <Ribbons
          baseThickness={30}
          colors={["#ffffff"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
      {/* Aurora background */}
      {/* Aurora background with theme colors */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Galaxy background for both light and dark mode */}
        <div className="w-full h-full">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            {/* Light mode: RippleGrid, Dark mode: Galaxy */}
            <div className="block dark:hidden" style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
              <div ref={rippleRef} style={{width:'100%',height:'100%'}}>
                <RippleGrid
                  enableRainbow={false}
                  gridColor="#e0e0e0"
                  rippleIntensity={0.05}
                  gridSize={10}
                  gridThickness={15}
                  mouseInteraction={true}
                  mouseInteractionRadius={1.2}
                  opacity={0.4}
                />
              </div>
            </div>
            <div className="hidden dark:block" style={{ width: '100%', height: '600px', position: 'relative' }}>
              <div ref={galaxyRef} style={{width:'100%',height:'100%'}}>
                <Galaxy />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I&apos;m <span className="gradient-text">Anmol Upadhyay</span>
            </h1>
            <p
              className="mx-auto max-w-[700px] text-xl md:text-2xl"
              onMouseEnter={e => forwardMouseEvent('mouseenter', e)}
              onMouseMove={e => forwardMouseEvent('mousemove', e)}
              onMouseLeave={e => forwardMouseEvent('mouseleave', e)}
            >
              <span className="js-only">
                <span className="dark:text-white text-black">
                  Computer Science Student & Software Developer<br/>
                  Building innovative solutions with Spring Boot, React, Flutter, and Machine Learning
                </span>
              </span>
              <noscript>
                <span>Computer Science Student | Full Stack Developer | Machine Learning Enthusiast | IIIT Kota</span>
              </noscript>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Anmol-rocket" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/anmol-upadhyay-2a5805280"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:2023KUCP1128@iiitkota.ac.in">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="fixed bottom-6 right-6 z-50 hidden md:block js-only">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
