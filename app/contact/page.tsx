import { Header } from "@/components/header"
import { Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

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
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    For general inquiries, membership questions, and collaboration opportunities
                  </p>
                  <a href="mailto:contact@dohadindia.org" className="text-primary hover:text-primary/80 font-medium">
                    contact@dohadindia.org
                  </a>
                </div>
              </div>

              {/* Address */}
              <a
                href="https://maps.app.goo.gl/JA3PrY2vCjXo9uHB7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    PHFI Centre for Developmental and Lifecourse Research - Indira Nagar I Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 shadow-sm mt-5">
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

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Find us</h2>

            <div className="space-y-5">
              <div className="bg-card border border-border rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-foreground mb-3">Social Media</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Follow us on social media for the latest updates, research highlights, and community news
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-full hover:bg-muted/50 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium text-foreground">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-full hover:bg-muted/50 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-red-700" />
                    <span className="text-sm font-medium text-foreground">YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-full hover:bg-muted/50 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="text-sm font-medium text-foreground">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 bg-background border border-border rounded-full hover:bg-muted/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    <span className="text-sm font-medium text-foreground">LinkedIn</span>
                  </a>
                </div>
              </div>

               <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-sm">
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
                  className="w-full px-4 py-3 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm text-foreground"
                />
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Subscribe to Newsletter
                </Button>
              </div>

                <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-6">Send Us a Message</h2>

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
          <h2 className="text-2xl font-bold text-foreground text-center mb-4">
            Visit Our Location
          </h2>

          <p className="text-sm text-muted-foreground text-center mb-4">
            Located beside Swami Vivekananda Road Metro Station, Indiranagar
          </p>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7960433723644!2d77.63702427507695!3d12.923620887389387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d8d3f9a7f1%3A0xceb32e2ed5d2fcd2!2sSwami%20Vivekananda%20Rd%20Metro%20Station!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
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
              href="https://maps.app.goo.gl/JA3PrY2vCjXo9uHB7"
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
