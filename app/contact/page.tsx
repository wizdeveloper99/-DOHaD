import { Header } from "@/components/header"
import { LinkedInIcon } from "@/components/linkedin-icon"
import { Mail, MapPin, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { headingStyles } from "@/lib/utils"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For general inquiries, membership questions, and collaboration opportunities reach out to us at{" "}
           <a href="mailto:contact@dohadindia.org" className="text-primary hover:text-primary/80 font-medium">
                    contact@dohadindia.org
                  </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className={`${headingStyles} mb-6`}>Get in Touch</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-1">Email</h3>
                  <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground mb-2">
                    For general inquiries, membership questions, and collaboration opportunities
                  </p>
                  <a href="mailto:contact@dohadindia.org" className="text-primary hover:text-primary/80 font-medium">
                    contact@dohadindia.org
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-1">Secretariat</h3>
                  <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">
                    PHFI-Centre for Developmental and Lifecourse Research
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps?q=PHFI+Centre+for+Developmental+and+Lifecourse+Research+-+Indira+Nagar+I+Stage,+Hoysala+Nagar,+Indiranagar,+Bengaluru,+Karnataka+560038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-1">Address</h3>
                  <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">
                    PHFI Centre for Developmental and Lifecourse Research - Indira Nagar I Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038
                    <span className="text-blue-400 ml-2"><br/>(Show on Map)</span>
                  </p>
                </div>
              </a>

            </div>

            <div className="bg-card border border-border rounded-lg p-5 shadow-sm mt-5">
              <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-2 text-[11px] sm:text-xs xl:text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className={`${headingStyles} mb-6`}>Find us</h2>

            <div className="space-y-5">
              <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-3">Follow Us</h3>
                <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground mb-4">
                  Connect with DOHaD India on LinkedIn for the latest updates, research highlights, and community news.
                </p>

                <a
                  href="https://www.linkedin.com/in/dohad-india-regional-society-2b784240b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-full hover:bg-muted/50 transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium text-foreground">DOHaD India Regional Society</span>
                </a>
              </div>

               <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground">Subscribe</h3>
              </div>

              <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground mb-6">
                Stay updated with the latest DOHaD research, events, and community news. Subscribe to our monthly
                newsletter.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
                />
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Subscribe
                </Button>
              </div>

                <p className="text-xs text-muted-foreground mt-3">We respect your privacy. You may unsubscribe from our newsletter at any time by using the unsubscribe link included in each email, or by contacting us at contact@dohadindia.org to request removal from our mailing list.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-12">
          <h2 className={`${headingStyles} text-center mb-6`}>Send Us a Message</h2>

          <div className="max-w-3xl mx-auto space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
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
                  className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject - What is this regarding?
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-foreground"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10">
                Send Message
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h2 className={`${headingStyles} text-center mb-4`}>
            Visit Our Location
          </h2>

          <p className="text-sm text-muted-foreground text-center mb-4">
            PHFI Centre for Developmental and Lifecourse Research, Indiranagar, Bengaluru, Karnataka 560038
          </p>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mb-4">
            <iframe
              src="https://www.google.com/maps?q=PHFI+Centre+for+Developmental+and+Lifecourse+Research+-+Indira+Nagar+I+Stage,+Hoysala+Nagar,+Indiranagar,+Bengaluru,+Karnataka+560038&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps?q=PHFI+Centre+for+Developmental+and+Lifecourse+Research+-+Indira+Nagar+I+Stage,+Hoysala+Nagar,+Indiranagar,+Bengaluru,+Karnataka+560038"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
