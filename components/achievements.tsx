import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achievements & Activities</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My key achievements and extracurricular activities
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <ul className="text-muted-foreground space-y-2">
                        <li><strong>Winner</strong>, Hack to Crack Hackathon (Edura) — March 2025</li>
                        <li><strong>Finalist</strong>, SurakshaVault — July 2025</li>
                        <li><strong>Finalist</strong>, Odoo Hackathon for QuickCourt — August 2025</li>
                        <li><strong>Senior PR & Marketing Executive</strong>, TechKnow — July 2024 to July 2025</li>
                        <li><strong>Junior PR & Marketing Executive</strong>, TechKnow — September 2023 to September 2024</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
