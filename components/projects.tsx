import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSpring, SiPostgresql, SiPython, SiMongodb, SiFirebase, SiDocker, SiAmazon, SiChartdotjs, SiFlutter, SiNodedotjs, SiPandas } from 'react-icons/si';

export default function Projects() {
  const projects = [
    {
      title: "Edura - Learning Platform",
      description:
        "A comprehensive learning platform with WebSocket-powered multiplayer contests, AI-powered Image Detective sessions, and real-time analytics. Winner of HackToCrack 2.0.",
      tags: ["Spring Boot", "PostgreSQL", "Gemini API", "WebSockets", "Chart.js"],
      codeLink: "https://github.com/bruteforce1127/Edura.LearningApp.git",
      liveLink: null,
    },
    {
      title: "Library+ Campus Management",
      description:
        "Flutter app for campus library management with 150+ student registrations, automated seat reservations, and offline sync capabilities.",
      tags: ["Flutter", "Firebase", "Push Notifications", "Offline Sync"],
      codeLink: "#",
      liveLink: null,
    },
    {
      title: "SurakshaVault - Banking Security",
      description:
        "Secure banking data sharing platform with consent middleware, blockchain audit logs, and encrypted storage. Top 30 in Canara Bank Hackathon.",
      tags: ["MERN", "Spring Boot", "Blockchain", "Chart.js", "Encryption"],
      codeLink: "https://github.com/Sahilagarwal623/SurakshaVault_01.git",
      liveLink: null,
    },
    {
      title: "QuickCourt - Sports Booking",
      description:
        "Online sports facility booking platform with QR verification, tournament hosting, and real-time availability tracking.",
      tags: ["MERN", "Kotlin", "Chart.js", "QR Codes"],
      codeLink: "https://github.com/Anmol-rocket/QuickCourt.git",
      liveLink: null,
    },
    {
      title: "Call Center Data Analysis",
      description:
        "This project analyzes call center data to generate insights on key performance metrics, including call volume, wait times, queue lengths, and agent performance. The goal is to help call centers optimize their operations by identifying patterns in call handling and response times.",
      tags: ["Python", "Data Analysis", "Visualization", "Matplotlib", "Pandas"],
  codeLink: "https://github.com/Anmol-rocket/Call-Center-Data-Analysis.git",
      liveLink: null,
      image: "/call_center_analysis.png",
      highlights: [
        "Call Volume by Hour: Number of calls received each hour.",
        "Average Wait Times by Priority: Comparison of wait times based on priority levels.",
        "Queue Length Over Time: Trends in queue length throughout the monitoring period.",
        "Agent Performance: Analysis of agent efficiency based on calls handled and average handling time."
      ],
    },
    {
      title: "🚀 Rocket-UI",
      description:
        "A next-gen CSS library for fast, responsive, and accessible web interfaces. Features modular components, utility classes, instant CDN integration, and offline cache support for seamless user experiences.",
      tags: ["CSS", "CDN", "Offline Cache", "Responsive", "Accessible"],
      codeLink: "https://github.com/Anmol-rocket/Rocket-UI",
      liveLink: null,
    },
    {
      title: "Anime Data Cleaning and Analysis",
      description:
        "Processes and analyzes an anime dataset using Python and pandas. Includes data cleaning, feature extraction, and visualization to gain insights into anime series based on episodes, duration, and popularity.",
      tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Data Cleaning", "Visualization"],
      codeLink: "https://github.com/Anmol-rocket/Anime-Data-Cleaning-and-Analysis",
      liveLink: null,
      image: "/anime_data_analysis.png",
      highlights: [
        "Cleans and preprocesses anime data from CSV.",
        "Extracts episodes, telecast duration, and member count from raw titles.",
        "Calculates duration in months and removes invalid entries.",
        "Exports cleaned data to CSV and generates multiple visualizations (episodes, duration, members).",
        "Identifies and visualizes top 5 anime by episodes, duration, and members."
      ],
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my hackathon-winning projects and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3 flex flex-wrap gap-2 items-center">
                      {project.tags.slice(0, 3).map((tag, i) => {
                        let icon = null;
                        switch (tag) {
                          case "React.js":
                          case "React":
                            icon = <SiReact className="inline mr-1" />; break;
                          case "Next.js": icon = <SiNextdotjs className="inline mr-1" />; break;
                          case "TypeScript": icon = <SiTypescript className="inline mr-1" />; break;
                          case "Tailwind CSS": icon = <SiTailwindcss className="inline mr-1" />; break;
                          case "Spring Boot": icon = <SiSpring className="inline mr-1" />; break;
                          case "PostgreSQL": icon = <SiPostgresql className="inline mr-1" />; break;
                          case "Python": icon = <SiPython className="inline mr-1" />; break;
                          case "MongoDB": icon = <SiMongodb className="inline mr-1" />; break;
                          case "Firebase": icon = <SiFirebase className="inline mr-1" />; break;
                          case "Docker": icon = <SiDocker className="inline mr-1" />; break;
                          case "AWS": icon = <SiAmazon className="inline mr-1" />; break;
                          case "Chart.js": icon = <SiChartdotjs className="inline mr-1" />; break;
                          case "Flutter": icon = <SiFlutter className="inline mr-1" />; break;
                          case "Node.js": icon = <SiNodedotjs className="inline mr-1" />; break;
                          case "Matplotlib": icon = null; break;
                          case "Pandas": icon = <SiPandas className="inline mr-1" />; break;
                          default: icon = null;
                        }
                        return (
                          <span key={i} className="project-tag flex items-center">
                            {icon}
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
