"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react"
import { useToast } from "../hooks/use-toast"
import { useState } from "react"

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value;

    if (!name || !email || !subject || !message) {
      toast({
        title: "❌ Missing Fields!",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
        style: { background: 'linear-gradient(90deg,#f87171,#fbbf24)', color: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #f87171' },
      });
      setLoading(false);
      return;
    }

    // Construct mailto link
    const mailto = `mailto:2023kucp1128@iiitkota.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
    window.location.href = mailto;
    toast({
      title: "📧 Mail app opened!",
      description: "Your mail application should open with your message ready to send.",
      style: { background: 'linear-gradient(90deg,#38bdf8,#818cf8)', color: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px #818cf8' },
    });
    setLoading(false);
  }
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />, 
      title: "Email",
      value: "2023kucp1128@iiitkota.ac.in",
      link: "mailto:2023kucp1128@iiitkota.ac.in",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />, 
      title: "Location",
      value: "Aligarh (UP)",
      link: "https://maps.google.com/?q=Aligarh,UP",
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />, 
      title: "GitHub",
      value: "Anmol-rocket",
      link: "https://github.com/Anmol-rocket",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />, 
      title: "LinkedIn",
      value: "anmol-upadhyay-2a5805280",
      link: "https://www.linkedin.com/in/anmol-upadhyay-2a5805280",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input id="name" name="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input id="email" name="email" type="email" placeholder="Your email" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input id="subject" name="subject" placeholder="Subject of your message" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                      <noscript>
                        <p className="text-sm text-center text-muted-foreground mt-2">
                          {/* Form-related message removed */}
                        </p>
                      </noscript>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.title === "Location" ? "_blank" : undefined}
                            rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Connect with me</h3>
                    <p className="text-sm text-muted-foreground mb-4">Find me on these platforms</p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/Anmol-rocket" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://www.linkedin.com/in/anmol-upadhyay-2a5805280" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href="mailto:2023kucp1128@iiitkota.ac.in">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
