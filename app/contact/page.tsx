import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Mail, MapPin, Twitter, Linkedin, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For enquiries, collaborations, or membership, please reach out to us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>

            <div className="space-y-6">
              {/* Email Contact */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    For general inquiries, membership questions, and collaboration opportunities
                  </p>
                  <a href="mailto:XXXX" className="text-primary hover:text-primary/80 font-medium">
                    XXXX
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    PHFI Centre for Developmental and Lifecourse Research
                    <br />
                    Epidemic Diseases Hospital Compound
                    <br />
                    Old Madras Road, Beside Swami Vivekananda Road Metro Station
                    <br />
                    Indiranagar, Bengaluru - 560038
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-card border border-border rounded-lg p-6 mt-8 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Find Us Section */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Find us</h2>

            {/* Social Media Links */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4">Social Media</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Follow us on social media for the latest updates, research highlights, and community news
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Newsletter Subscription</h3>
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                Stay updated with the latest DOHaD research, events, and community news. Subscribe to our monthly
                newsletter.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
                />
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Subscribe to Newsletter
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Send Us a Message</h2>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-foreground"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
