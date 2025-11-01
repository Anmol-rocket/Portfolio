import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: (
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true"></span>
          App Development — FastFood Vendor Onboarding App
        </span>
      ),
      company: "Startup (Vendor Onboarding Platform)",
      period: "Nov 2025 - Present",
      location: "Remote",
      achievements: [
        "Building a mobile app to onboard fast-food vendors so they can sell via the platform and reach city-wide customers.",
        "Providing consumers with seamless ordering, payment, and delivery experiences by integrating payments and delivery logistics.",
        "Leading development and vendor pilot onboarding — currently in active development (vendor integration and user onboarding)."
      ],
      tags: ["product", "mobile", "in-progress"]
    },
    {
      title: "Oddo",
      company: "Odoo Hackathon Finalist",
      period: "August 2025",
      location: "IIIT Kota",
      achievements: [
        "Finalist, Odoo Hackathon for Oddo — August 2025",
        "Devised an online sports-facility booking platform with role-based access, multi-filter search and tournament hosting.",
        "Optimized booking flows with QR verification and live availability, increasing conversions by 35% and reducing no-shows by 25%."
      ],
      tags: ["leadership"]
    },
    {
      title: "SurakshaVault",
      company: "Secure Banking Data Sharing",
      period: "July 2025",
      location: "IIIT Kota",
      achievements: [
        "Finalist for SurakshaVault — July 2025",
        "Designed consent middleware for secure banking-data sharing using masking, hashing, encryption, and blockchain audit logs.",
        "Implemented auto-expiry and revoke flows plus encrypted storage, reducing unauthorized sharing by 85%.",
        "Deployed dashboards to surface audit and usage metrics, improving transparency and trust for admins."
      ],
      tags: ["security"]
    },
    {
      title: "Library Plus",
      company: "Local Library App",
      period: "June 2025",
      location: "Aligarh",
      achievements: [
        "Deployed for 150+ students to manage registrations, payments, and seat reservations.",
        "Automated seat-overlap handling and receipt generation, reducing manual processing time by 60%.",
        "Enabled offline sync and push notifications for reliable on-campus use; improved seat utilization by 30%."
      ],
      tags: ["education"]
    },
    {
      title: (
        <span className="flex items-center gap-2">
          Edura <span className="text-yellow-500">🏆</span>
        </span>
      ),
      company: "HackToCrack Hackathon Winner (Education Domain)",
      period: "March 2025",
      location: "IIIT Kota",
      achievements: [
        "Won 1st place in HackToCrack Hackathon (Education Domain)",
        "Engineered a WebSocket engine for multiplayer contests and AI 'Image Detective' sessions with sub-100ms response.",
        "Hardened 20+ Spring Boot REST endpoints for a 25-user pilot, delivering 99.5% availability.",
        "Leveraged Gemini API and PostgreSQL for personalized content and real-time analytics.",
        "Mobilized a 4-member squad to deliver 10+ prioritized features.",
        "Constructed a parent dashboard with live progress charts and alert workflows, increasing engagement by 40%."
      ],
      tags: ["leadership", "education"]
    },
    {
      title: "PR and Marketing Senior Executive",
      company: "TeckKnow (College Technical Society)",
      period: "Sept 2024 - Aug 2025",
      location: "IIIT Kota",
      achievements: [
        "Led a team of juniors to provide funding and sponsorships for college events.",
        "Oversaw PR and marketing strategies, secured partnerships and sponsorships for major college events."
      ],
      tags: ["leadership", "marketing"]
    },
    {
      title: "PR and Marketing Junior Executive",
      company: "TeckKnow (College Technical Society)",
      period: "Sept 2023 - July 2024",
      location: "IIIT Kota",
      achievements: [
        "PR and Marketing Junior Executive for TeckKnow (College Technical Society)",
        "Assisted in organizing and promoting college technical events, managed outreach and communications."
      ],
      tags: ["marketing"]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achievements & Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey, key accomplishments, and leadership roles
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                        {experience.tags && (
                          <div className="flex gap-2 mt-2">
                            {experience.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    {Array.isArray(experience.achievements) && experience.achievements.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
