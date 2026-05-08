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

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="relative bg-background pb-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Join Our Community & Advance DOHaD Research
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Be part of India's leading network of researchers and professionals working on the developmental origins of health and disease. Collaborate, learn, and grow with us.
              </p>
            </div>
          </div>
        </section>

        {/* 1. Who Can Become a Member */}
        <section className="mb-24">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center shadow-sm">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Who Can Become a Member?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Membership is open to anyone interested in DOHaD research, policy, and practice. This includes researchers, clinicians, policymakers, students, and professionals from related fields. Membership in DOHaD India also includes free membership to the International DOHaD Society, connecting you to a global network.
            </p>
          </div>
        </section>

        {/* 2. Membership Tiers and Fees */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Membership Tiers and Fees</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <h4 className="text-xl font-bold text-foreground mb-2">Undergraduate Students</h4>
              <p className="text-4xl font-extrabold text-secondary mb-4">₹250</p>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Annual Fee</p>
              <ul className="text-left text-sm space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Full access to resources</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Networking events</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Training opportunities</li>
              </ul>
            </div>
            <div className="bg-card border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border-secondary/30 bg-secondary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Popular</div>
              <h4 className="text-xl font-bold text-foreground mb-2">Early Career Researchers</h4>
              <p className="text-4xl font-extrabold text-secondary mb-4">₹500</p>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Annual Fee</p>
              <ul className="text-left text-sm space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> All student benefits</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Journal access</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Research collaboration</li>
              </ul>
            </div>
            <div className="bg-card border rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <h4 className="text-xl font-bold text-foreground mb-2">Standard Regular Members</h4>
              <p className="text-4xl font-extrabold text-secondary mb-4">₹1000</p>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">Annual Fee</p>
              <ul className="text-left text-sm space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Full membership benefits</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Policy involvement</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-secondary" /> Leadership opportunities</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-12 italic">
            Membership fees will be solely utilized to support regional society activities in India.
          </p>
        </div>

        {/* 3. How to Become a Member (Join Us) */}
        <section className="mb-24">
          <div className="bg-secondary text-white rounded-3xl p-10 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">How to Become a Member</h2>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-10">
                Join the DOHaD India community and help advance research, collaboration, and awareness across the region.
              </p>
              <p className="text-lg opacity-80 mb-12">
                To join, visit the <a href="https://dohadsoc.org/membership/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">International DOHaD Society</a> website and select <strong>DOHaD India</strong> as your Regional Society. A nominal membership fee applies.
              </p>
              <a 
                href="https://dohadsoc.org/membership/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-5 bg-white text-secondary hover:bg-white/90 font-black rounded-full transition-all shadow-xl hover:scale-105 text-lg uppercase tracking-wider"
              >
                Go to Registration
              </a>
            </div>
          </div>
        </section>

        {/* 4. Why become a member? */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why become a member?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 shadow-sm border-t-4 border-t-secondary"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary transform rotate-3 group-hover:rotate-0 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Other Benefits Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Other Benefits of Membership</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="bg-card border border-border rounded-3xl p-10 md:p-16 shadow-sm">
            <ul className="text-left text-muted-foreground text-lg space-y-6 max-w-4xl mx-auto">
              {[
                "Access to the Journal of Developmental Origins of Health and Disease (reduced fee for OA)",
                "Exclusive newsletters and updates on the latest research",
                "Reduced cost to attend workshops, conferences, and training programs",
                "Capacity building and career advancement support",
                "Participation in policy advocacy and collaborative projects"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-foreground/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}