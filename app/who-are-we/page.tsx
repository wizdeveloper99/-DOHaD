import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export default function WhoAreWePage() {
  const executiveCouncil = [
    {
      title: "President",
      name: "Prof. Debarati Mukherjee",
      affiliation: "[Institution]",
      description: "Leading DOHaD research initiatives and strategic direction for the organization.",
    },
    {
      title: "Secretary and Strategic Partnerships Lead",
      name: "Eunice Lobo",
      affiliation: "[Institution]",
      description: "Managing organizational operations and member communications.",
    },
    {
      title: "Research Lead",
      name: "Dr. Deepa Ravi",
      affiliation: "[Institution]",
      description: "Coordinating research activities and collaborative projects across India.",
    },
    {
      title: "Education Lead",
      name: "Dr. Prafulla Shriyan",
      affiliation: "[Institution]",
      description: "Developing educational programs and capacity building initiatives.",
    },
    {
      title: "Communications Lead",
      name: "Dr. Kiruthika Selvaraj",
      affiliation: "[Institution]",
      description: "Managing external communications and knowledge dissemination.",
    },
    {
      title: "Treasurer",
      name: "Suganya Rajendran",
      affiliation: "[Institution]",
      description: "Overseeing financial management and resource allocation.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Who Are We</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team of researchers, clinicians, and advocates leading DOHaD India's mission to advance
            developmental origins of health and disease research across the country.
          </p>
        </div>

        {/* Executive Council Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Executive Council</h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team guiding DOHaD India's strategic initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCouncil.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow shadow-sm"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-primary font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground text-center mb-1">{member.title}</h3>
                  <p className="text-primary font-medium text-center mb-1">{member.name}</p>
                  <p className="text-sm text-muted-foreground text-center mb-3">{member.affiliation}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Group Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Advisory Group</h2>
            <p className="text-muted-foreground text-lg">
              Distinguished advisors providing strategic guidance and expertise
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 text-center shadow-sm">
              <div className="w-24 h-24 bg-accent/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-accent-foreground font-bold text-2xl">PG</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Patron</h3>
              <p className="text-xl text-primary font-semibold mb-2">Prof. Giridhara R Babu</p>
              <p className="text-muted-foreground mb-4">Distinguished Professor and Research Leader</p>
              <p className="text-muted-foreground leading-relaxed">
                Providing strategic oversight and guidance to DOHaD India's research initiatives, policy advocacy, and
                capacity building efforts across the country.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 text-center border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            DOHaD India is committed to fostering excellence in research, education, and policy related to the
            developmental origins of health and disease. We work to build a collaborative network of researchers,
            clinicians, and policymakers dedicated to improving health outcomes through understanding early life
            influences on lifelong health.
          </p>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
