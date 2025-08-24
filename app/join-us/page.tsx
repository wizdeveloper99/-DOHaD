import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Network, Calendar } from "lucide-react"

export default function JoinUsPage() {
  const membershipCategories = [
    {
      title: "Standard Member",
      price: "Rs. 1,000",
      period: "per year",
      description: "For established researchers, clinicians, and professionals",
      features: [
        "Full access to JDOHAD Journal",
        "Monthly newsletters and updates",
        "Workshop and conference discounts",
        "Networking opportunities",
        "Research collaboration platform",
        "Policy advocacy participation",
      ],
    },
    {
      title: "Training/Early Career Researcher",
      price: "Rs. 500",
      period: "per year",
      description: "For graduate students, postdoctoral, and clinical fellows",
      features: [
        "Access to JDOHAD Journal",
        "Educational newsletters",
        "Reduced workshop fees",
        "Mentorship opportunities",
        "Career development resources",
        "Research networking",
      ],
      popular: true,
    },
    {
      title: "Undergraduate Member",
      price: "Rs. 250",
      period: "per year",
      description: "For undergraduate students interested in DOHaD research",
      features: [
        "Educational resources access",
        "Student newsletters",
        "Workshop participation",
        "Learning opportunities",
        "Academic guidance",
        "Research exposure",
      ],
    },
  ]

  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Global Community",
      description:
        "As a DOHaD India member, you'll be part of a global community advancing developmental origins research",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Training & Career Development",
      description:
        "Joining DOHaD India gives you opportunities for training, capacity building, and advancing your career",
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Networking & Collaboration",
      description:
        "This also leads you to network with peer researchers and collaborate within India and international DOHaD groups",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "International Membership",
      description: "Membership in DOHaD India also includes a free membership for the International DOHaD Society",
    },
  ]

  const steps = [
    {
      step: "1",
      title: "Link to International DOHaD",
      description: "Link to be a member of International DOHaD. Select DOHaD India for regional society membership",
    },
    {
      step: "2",
      title: "Membership Fee Request",
      description: "DOHaD India will reach out to you with a membership fee request, along with payment instructions",
    },
    {
      step: "3",
      title: "Annual Renewal",
      description: "Memberships to DOHaD India are renewed on an annual basis",
    },
    {
      step: "4",
      title: "Welcome Package",
      description: "Receive your welcome package and start accessing member benefits immediately",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Join Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Become part of India's leading community advancing research in developmental origins of health and disease
          </p>
        </div>

        {/* Who Can Be a Member */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who can be a member?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Membership is open to everyone interested in DOHaD research, policy, and practice in India. Membership in
              DOHaD India also includes a free membership for the International DOHaD Society.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why become a member?</h2>
            <p className="text-muted-foreground text-lg">
              Unlock exclusive resources and opportunities as a DOHaD India member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow shadow-sm"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Become a Member */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How to become a member</h2>
            <p className="text-muted-foreground text-lg">Simple steps to join our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose a Membership</h2>
            <p className="text-muted-foreground text-lg">
              Choose the membership that fits your career stage and interests
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {membershipCategories.map((category, index) => (
              <Card key={index} className={`relative bg-card border-border ${category.popular ? "ring-2 ring-secondary" : ""}`}>
                {category.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-foreground">{category.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{category.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-primary">{category.price}</span>
                    <span className="text-muted-foreground ml-2">{category.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted/30 rounded-lg p-8 md:p-12 border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Join Our Community?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards advancing DOHaD research in India and connecting with like-minded professionals
            across the country.
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3">
            Start Your Membership Application
          </Button>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
