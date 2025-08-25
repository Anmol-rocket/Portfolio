import "./skills-marquee.css"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSpring, SiPostgresql, SiPython, SiMongodb, SiFirebase, SiDocker, SiAmazon, SiChartdotjs, SiFlutter, SiNodedotjs, SiPandas } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "React.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "PHP", "Laravel", "Express.js", "RESTful APIs"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GitHub Actions", "Travis-CI", "Docker", "CI/CD"],
    },
    {
      category: "Tools & Methodologies",
      skills: ["Git", "Agile", "Scrum", "JIRA", "Figma"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Marquee of tech stack icons */}
        <div className="overflow-hidden py-4 mb-8">
          <div className="flex gap-10 animate-marquee whitespace-nowrap text-4xl text-primary">
            <SiReact />
            <SiNextdotjs />
            <SiTypescript />
            <SiTailwindcss />
            <SiSpring />
            <SiPostgresql />
            <SiPython />
            <SiMongodb />
            <SiFirebase />
            <SiDocker />
            <SiAmazon />
            <SiChartdotjs />
            <SiFlutter />
            <SiNodedotjs />
            <SiPandas />
          </div>
        </div>
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My expertise and technical proficiencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card">
                <Card className="h-full border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
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
