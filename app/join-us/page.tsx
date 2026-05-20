import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Network, Calendar } from "lucide-react"
import Image from "next/image"
import { headingStyles } from "@/lib/utils"

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

      <main className="w-full">
        <section className="w-full relative overflow-hidden flex items-center bg-background py-8 md:py-10 xl:py-20 2xl:py-28">
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-16 2xl:gap-24 items-center">

                {/* Right Image (mobile first, but visual order 2) */}
                <div className="flex flex-col items-center justify-center w-full order-1 lg:order-2">
                  <Image
                    src="/join-us-community.png" alt="Join DOHaD Community"
                    width={600}
                    height={600}
                    className="object-contain w-auto h-auto max-h-[250px] md:max-h-[300px] lg:max-h-[380px] xl:max-h-[450px]"
                    priority
                  />
                </div>

                {/* Left Content */}
                <div className="flex flex-col justify-center items-start text-left order-2 lg:order-1">
                  <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                    Join Our Community & Advance DOHaD Research
                  </h1>

                  <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed max-w-xl">
                    Be part of India's leading network of researchers and professionals working on the developmental origins of health and disease. Collaborate, learn, and grow with us.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 1. Who Can Become a Member */}
        {/* 1. Who Can Become a Member */}
        {/* 1. Who Can Become a Member */}
        <section className="py-6 md:py-8 xl:py-12 2xl:py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-6 md:p-10 xl:p-16 text-center shadow-sm">
            <h2 className={`${headingStyles} mb-4 md:mb-6`}>Who Can Become a Member?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6 md:mb-8" />
            <p className="text-sm md:text-base xl:text-lg 2xl:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Membership is open to anyone interested in DOHaD research, policy, and practice. This includes researchers, clinicians, policymakers, students, and professionals from related fields. Membership in DOHaD India also includes free membership to the International DOHaD Society, connecting you to a global network.
            </p>
          </div>
        </section>

        {/* 2. Membership Tiers and Fees */}
        {/* 2. Membership Tiers and Fees */}
        <section className="py-6 md:py-8 xl:py-12 2xl:py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 xl:mb-16">
            <h2 className={`${headingStyles} mb-4`}>Membership Tiers and Fees</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 xl:gap-8 max-w-4xl mx-auto">
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
          <p className="text-center text-xs md:text-sm xl:text-base text-muted-foreground mt-8 xl:mt-12 italic">
            Membership fees will be solely utilized to support regional society activities in India.
          </p>
        </section>

        {/* 3. How to Become a Member (Join Us) */}
        {/* 3. How to Become a Member (Join Us) */}
        <section className="py-6 md:py-8 xl:py-12 2xl:py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="bg-secondary text-white rounded-3xl p-6 md:p-10 xl:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className={`${headingStyles} text-white mb-4 md:mb-8`}>How to Become a Member</h2>
              <p className="text-sm md:text-base xl:text-xl 2xl:text-2xl opacity-90 leading-relaxed mb-6 md:mb-10">
                Join the DOHaD India community and help advance research, collaboration, and awareness across the region.
              </p>
              <p className="text-xs md:text-sm xl:text-lg 2xl:text-xl opacity-80 mb-8 md:mb-12">
                To join, visit the <a href="https://dohadsoc.org/membership/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-white transition-colors">International DOHaD Society</a> website and select <strong>DOHaD India</strong> as your Regional Society. A nominal membership fee applies.
              </p>
              <a
                href="https://dohadsoc.org/membership/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 md:px-10 py-3 md:py-5 bg-white text-secondary hover:bg-white/90 font-black rounded-full transition-all shadow-xl hover:scale-105 text-sm md:text-lg uppercase tracking-wider"
              >
                Go to Registration
              </a>
            </div>
          </div>
        </section>

        {/* 4. Why become a member? */}
        {/* 4. Why become a member? */}
        <section className="py-6 md:py-8 xl:py-12 2xl:py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 xl:mb-16">
            <h2 className={`${headingStyles} mb-4`}>Why become a member?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 xl:p-8 text-center hover:shadow-2xl transition-all duration-300 shadow-sm border-t-4 border-t-secondary"
              >
                <div className="w-12 h-12 xl:w-16 xl:h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 xl:mb-6 text-secondary transform rotate-3 hover:rotate-0 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-2 xl:mb-4">{benefit.title}</h3>
                <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Other Benefits Section */}
        {/* 5. Other Benefits Section */}
        <section className="py-6 md:py-8 xl:py-12 2xl:py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12 xl:mb-16">
            <h2 className={`${headingStyles} mb-4`}>Other Benefits of Membership</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="bg-card border border-border rounded-3xl p-6 md:p-10 xl:p-16 shadow-sm">
            <ul className="text-left text-muted-foreground text-sm md:text-base xl:text-lg space-y-4 md:space-y-6 max-w-4xl mx-auto">
              {[
                "Access to the Journal of Developmental Origins of Health and Disease (reduced fee for OA)",
                "Exclusive newsletters and updates on the latest research",
                "Reduced cost to attend workshops, conferences, and training programs",
                "Capacity building and career advancement support",
                "Participation in policy advocacy and collaborative projects"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-secondary" />
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