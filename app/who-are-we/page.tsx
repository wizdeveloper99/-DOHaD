'use client'

import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import Image from "next/image"

export default function WhoAreWePage() {
  const executiveCouncil = [
    {
      title: "President",
      name: "Prof. Debarati Mukherjee",
      affiliation: "[Institution]",
      description:
        "Leading DOHaD research initiatives and strategic direction for the organization.",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop",
    },
    {
      title: "Secretary and Strategic Partnerships Lead",
      name: "Eunice Lobo",
      affiliation: "[Institution]",
      description:
        "Managing organizational operations and member communications.",
      image:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Research Lead",
      name: "Dr. Deepa Ravi",
      affiliation: "[Institution]",
      description:
        "Coordinating research activities and collaborative projects across India.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop",
    },
    {
      title: "Education Lead",
      name: "Dr. Prafulla Shriyan",
      affiliation: "[Institution]",
      description:
        "Developing educational programs and capacity building initiatives.",
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Communications Lead",
      name: "Dr. Kiruthika Selvaraj",
      affiliation: "[Institution]",
      description:
        "Managing external communications and knowledge dissemination.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=687&auto=format&fit=crop",
    },
    {
      title: "Treasurer",
      name: "Suganya Rajendran",
      affiliation: "[Institution]",
      description:
        "Overseeing financial management and resource allocation.",
      image:
        "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?q=80&w=687&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-max mx-auto px-6 pb-16">
        {/* Hero Section */}
     <section className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
  {/* Background */}
  <Image
    src="/gloval-ind.png"
    alt="World map background"
    fill
    className="object-cover object-center"
    priority
  />

  {/* Overlay to make text readable */}
  <div className="absolute inset-0 bg-background/80" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
      Who Are We
    </h1>
    <p className="text-lg md:text-xl text-muted-foreground mb-10 font-semibold">
      Meet the dedicated team of researchers, clinicians, and advocates
      leading DOHaD India's mission to advance developmental origins of
      health and disease research across the country.
    </p>

    {/* Scrolling tagline */}
    <div className="overflow-hidden w-full relative">
      <div className="animate-scroll gap-6">
    <span className="px-6 py-2 rounded-full text-lg font-semibold mx-2 
  border border-border text-foreground bg-background/40 backdrop-blur-sm">
  Research for a Healthier Future
</span>


        <span className="px-6 py-2 rounded-full text-lg font-semibold mx-2 bg-muted text-foreground">
          Empowering Early-Life Health
        </span>
        <span className="px-6 py-2 rounded-full text-lg font-semibold mx-2 bg-muted text-foreground">
          Building Stronger Communities
        </span>

        {/* Duplicate for seamless loop */}
        <span className="px-6 py-2 rounded-full text-lg font-semibold mx-2 bg-muted text-foreground">
          Research for a Healthier Future
        </span>
        <span className="px-6 py-2 rounded-full text-lg font-semibold mx-2 bg-muted text-foreground">
          Empowering Early-Life Health
        </span>
        <span className="px-6 py-2 rounded-full text-lg font-semibold mx-2 bg-muted text-foreground">
          Building Stronger Communities
        </span>
      </div>

      {/* Optional: fade edges for smooth look */}
     {/* Optional: fade edges for smooth look (light mode only) */}
<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent dark:hidden" />
<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent dark:hidden" />

    </div>
  </div>
</section>




      


        {/* Executive Council Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Executive Council
            </h2>
            <p className="text-muted-foreground text-lg">
              Our leadership team guiding DOHaD India's strategic initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveCouncil.map((member, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Full image */}
                <div className="relative w-full h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Floating pill */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-lg border border-white/20 rounded-full shadow-lg px-6 py-3 text-center">
                  <h3 className="text-sm font-medium text-gray-200">{member.title}</h3>
                  <p className="text-lg font-semibold text-white">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory Group Section */}
        {/* Advisory Group Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advisory Group
            </h2>
            <p className="text-muted-foreground text-lg">
              Distinguished advisors providing strategic guidance and expertise
            </p>
          </div>

         <div className="max-w-4xl mx-auto">
  <div
    className={`
      relative bg-gradient-to-br from-primary/5 via-background to-accent/5
      border border-border/50 rounded-3xl p-12 overflow-hidden
    `}
  >
    {/* Background decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

    <div className="relative z-10 text-center">
      <div className="relative w-32 h-32 mb-8 mx-auto">
        <Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=880&auto=format&fit=crop"
          alt="Prof. Giridhara R Babu"
          fill
          className="object-cover rounded-full shadow-2xl"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
      </div>

      <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
        PATRON
      </div>

      <h3 className="text-3xl font-bold text-foreground mb-3">
        Prof. Giridhara R Babu
      </h3>
      <p className="text-lg text-muted-foreground mb-6 font-medium">
        Distinguished Professor and Research Leader
      </p>

      <div className="max-w-2xl mx-auto">
        <p className="text-muted-foreground leading-relaxed text-lg">
          Providing strategic oversight and guidance to DOHaD India's research
          initiatives, policy advocacy, and capacity building efforts across
          the country.
        </p>
      </div>
    </div>
  </div>
</div>

        </section>

        {/* Mission Statement */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            DOHaD India is committed to fostering excellence in research,
            education, and policy related to the developmental origins of health
            and disease. We work to build a collaborative network of
            researchers, clinicians, and policymakers dedicated to improving
            health outcomes through understanding early life influences on
            lifelong health.
          </p>
        </section>
      </main>

      <FooterSection />
    </div>
  )
}
