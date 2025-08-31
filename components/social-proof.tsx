"use client"

export function SocialProofStats() {
  const stats = [
    { number: "100+", label: "Active Members" },
    { number: "5K+", label: "Website Visitors" },
    { number: "50+", label: "Research Collaborations" },
    { number: "20+", label: "Training Sessions" },
  ]

  return (
    <section className="relative pt-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-center text-foreground text-2xl font-medium leading-tight mb-12 transition-transform duration-200 hover:scale-105">
          DOHaD India at a Glance
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold text-muted-foreground tracking-tight">
                {stat.number}
              </span>
              <span className="text-sm md:text-base text-muted-foreground mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
