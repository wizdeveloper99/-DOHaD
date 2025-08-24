import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Calendar, Camera, Clock, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Workshops, conferences, and community gatherings advancing DOHaD research in India
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-card border border-border rounded-lg p-12 text-center mb-12">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon: Events & Photo Gallery</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We are planning exciting events and workshops for our community. This section will feature upcoming events,
            registration information, and a photo gallery of past activities.
          </p>
        </div>

        {/* Preview of Upcoming Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Upcoming Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Annual conferences, research workshops, training sessions, and networking events for the DOHaD India
              community.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Workshops & Training</h3>
            <p className="text-muted-foreground leading-relaxed">
              Capacity building workshops, methodology training, and skill development sessions for researchers at all
              career stages.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Photo Gallery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Visual highlights from past events, conferences, and community gatherings showcasing our vibrant research
              community.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Event Registration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Easy online registration system for workshops, conferences, and special events with member discounts and
              early bird pricing.
            </p>
          </div>
        </div>

        {/* Event Types Preview */}
        <div className="bg-muted/30 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Types of Events We'll Host</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Annual Conference</h4>
              <p className="text-sm text-muted-foreground">
                Multi-day research conference with keynote speakers and poster sessions
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Research Workshops</h4>
              <p className="text-sm text-muted-foreground">
                Hands-on training in research methods and data analysis techniques
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Networking Events</h4>
              <p className="text-sm text-muted-foreground">
                Informal gatherings to foster collaboration and knowledge sharing
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card border border-border rounded-lg p-8 text-center mt-12">
          <h3 className="text-xl font-semibold text-foreground mb-4">Get Event Updates</h3>
          <p className="text-muted-foreground mb-6">
            Be the first to know about upcoming events and registration openings
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
