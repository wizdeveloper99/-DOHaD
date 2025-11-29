import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Network, Calendar } from "lucide-react"
import Image from "next/image"

export default function JoinUsPage() {
  const benefits = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Global Community",
      description:
        "As a member of the DOHaD India Regional Society, you'll be part of a global community advancing research on the developmental origins of health and disease",
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
        "Provides you with a platform to network with peer researchers and mentors, and collaborate with Indian and international DOHaD research groups",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "International Membership",
      description: "Membership in DOHaD India also includes a free membership of the International DOHaD Society",
    },
  ]

  return (
    <div className="bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="relative bg-background pb-12">
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
                Join Our Community & Advance DOHaD Research
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Be part of India's leading network of researchers and professionals working on the developmental origins of health and disease. Collaborate, learn, and grow with us.
              </p>
            </div>

          </div>
        </section>

        {/* 1. Join Us (Formerly How to Become a Member) */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Us</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              All new members register through the main International DOHaD website. During registration, simply select DOHaD India as your Regional Society to complete your affiliation.
            </p>
          </div>
        </section>

        {/* 2. Who Can Become a Member */}
        <section className="mb-16">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who Can Become a Member?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Membership is open to anyone interested in DOHaD research, policy, and practice. This includes researchers, clinicians, policymakers, students, and professionals from related fields. Membership in DOHaD India also includes free membership to the International DOHaD Society, connecting you to a global network.
            </p>
          </div>
        </section>

        {/* 3. Membership Tiers and Fees */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Membership Tiers and Fees
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition flex flex-col h-full">
              <h4 className="text-xl font-semibold text-foreground mb-2">Undergraduate Students</h4>
              <p className="text-3xl font-bold text-primary mb-4">₹250</p>
              <p className="text-muted-foreground mb-4">Annual Fee</p>
              <ul className="text-left text-sm space-y-2 mb-6 flex-grow">
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Full access to resources</li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Networking events</li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Training opportunities</li>
              </ul>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition flex flex-col h-full">
              <h4 className="text-xl font-semibold text-foreground mb-2">Early Career/Training Researchers</h4>
              <p className="text-3xl font-bold text-primary mb-4">₹500</p>
              <p className="text-muted-foreground mb-4">Annual Fee</p>
              <ul className="text-left text-sm space-y-2 mb-6 flex-grow">
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> All student benefits</li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Journal access</li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Research collaboration</li>
              </ul>
            </div>
            <div className="bg-card border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition border-primary/20 flex flex-col h-full">
              <h4 className="text-xl font-semibold text-foreground mb-2">Standard Regular Members</h4>
              <p className="text-3xl font-bold text-primary mb-4">₹1000</p>
              <p className="text-muted-foreground mb-4">Annual Fee</p>
              <ul className="text-left text-sm space-y-2 mb-6 flex-grow">
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Full membership benefits</li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Policy involvement</li>
                <li className="flex items-center gap-2"><span className="text-primary text-xs">●</span> Leadership opportunities</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Membership fees will support regional initiatives in India. To join, visit the International DOHaD Society website and select DOHaD India as your regional society.
            </p>
          </div>
        </div>

        {/* 4. Benefits Section (Why become a member?) */}
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

        {/* 5. Other Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Other benefits of Membership</h2>
          </div>
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
            <ul className="text-left text-muted-foreground text-lg space-y-4 max-w-4xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Access to the Journal of Developmental Origins of Health and Disease (open access available for a reduced fee)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Exclusive newsletters and updates on the latest research</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Reduced cost to attend workshops, conferences, and training programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Capacity building and career advancement support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Participation in policy advocacy and collaborative projects</span>
              </li>
            </ul>
          </div>
        </section>

      </main>
    </div>
  )
}