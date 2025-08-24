import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { FileText, Users, Shield, Clock } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Essential documents and guidelines for DOHaD India members and the research community
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-card border border-border rounded-lg p-12 text-center mb-12 shadow-sm">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon: Resources</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We are currently preparing comprehensive resources for our community. This section will include governance
            documents, research guidelines, and essential information for members.
          </p>
        </div>

        {/* Preview of Upcoming Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Governance Structure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detailed information about DOHaD India's organizational structure, leadership roles, and decision-making
              processes.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Code of Conduct</h3>
            <p className="text-muted-foreground leading-relaxed">
              Guidelines for ethical conduct, professional behavior, and community standards for all DOHaD India members
              and participants.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Research Guidelines</h3>
            <p className="text-muted-foreground leading-relaxed">
              Best practices, methodological guidelines, and standards for conducting DOHaD research in the Indian
              context.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Policy Documents</h3>
            <p className="text-muted-foreground leading-relaxed">
              Position papers, policy recommendations, and advocacy materials related to DOHaD research and public
              health initiatives.
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-muted/30 rounded-lg p-8 text-center mt-12 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter to be notified when new resources become available
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
