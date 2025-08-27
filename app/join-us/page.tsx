import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Network, Calendar } from "lucide-react"
import Image from "next/image"

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
    <div className="bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
<section className="relative bg-background -pt-10 pb-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Right Image (mobile first) */}
    <div className="relative flex justify-center md:justify-center order-1 md:order-2">
      <Image
        src="/family-hanging-out-jetty.png"
        alt="Join DOHaD Community"
        width={450}
        height={450}
        className="object-contain max-h-[480px] h-auto"
        priority
      />
    </div>

    {/* Left Content */}
    <div className="text-left order-2 md:order-1">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
        Join Our Community <br /> & Advance DOHaD Research
      </h1>

      <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
        Be part of India’s leading network of researchers and professionals 
        working on the developmental origins of health and disease. 
        Collaborate, learn, and grow with us.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          variant="primary" 
          className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3">
          Start Membership
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="rounded-full px-8 py-3"
        >
          Learn More
        </Button>
      </div>
    </div>

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

        {/* CTA Section */}
        <section className="text-center bg-muted/30 rounded-lg p-6 md:p-12 border border-border">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
    Ready to Join Our Community?
  </h2>
  <p className="text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
    Take the first step towards advancing DOHaD research in India and connecting with like-minded professionals
    across the country.
  </p>
  <Button
    size="lg"
    className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3"
  >
    Start Your Membership Application
  </Button>
</section>

      </main>

      <FooterSection />
    </div>
  )
}
