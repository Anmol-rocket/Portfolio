import { Card, CardContent } from "@/components/ui/card"
import { Code2, Server, Trophy, BookOpen } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Expertise in Spring Boot, React, MERN stack, Flutter, and PostgreSQL",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend & Cloud",
      description: "Proficient with Spring Boot, PostgreSQL, Firebase, AWS, and WebSocket technologies",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Machine Learning",
      description: "Experience with TensorFlow, scikit-learn, pandas, NumPy, and data visualization",
    },
    {
      icon: <Trophy className="h-10 w-10 text-primary" />,
      title: "Competitive Achievements",
      description: "Winner of HackToCrack 2.0, Top 30 in Canara Bank Suraksha Hackathon",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Computer Science student at Indian Institute of Information Technology, Kota, passionate about building
                innovative solutions with modern technologies and competitive programming.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Skilled in full-stack development with expertise in Spring Boot, React, Flutter, and Machine Learning.
                Proven track record in hackathons and competitive programming, with experience in building scalable
                applications that serve 100+ users. Strong foundation in data structures, algorithms, and modern
                development practices including WebSocket programming, real-time analytics, and cloud deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
