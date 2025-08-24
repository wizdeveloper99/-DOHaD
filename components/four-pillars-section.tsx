import React from "react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
  gradient: string
}

const FeatureCard = ({ number, title, description, gradient }: FeatureCardProps) => (
  <div
    className={`w-full h-[220px] md:h-[240px] lg:h-[260px] 
      bg-card shadow-[0px_4px_12px_rgba(0,0,0,0.08)] 
      overflow-hidden rounded-xl border border-border
      transition-all duration-500 ease-out cursor-pointer relative
      hover:scale-[1.02] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.12)]`}
  >
    {/* Background gradient */}
    <div className={`absolute inset-0 ${gradient} opacity-10`} />
    
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

    <div className="p-6 flex flex-col gap-4 relative z-10 h-full">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {number}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-foreground leading-tight">{title}</h3>
      <p className="text-base leading-relaxed text-muted-foreground flex-1">{description}</p>
    </div>
  </div>
)

export function BentoSection() {
  const features = [
    {
      number: "01",
      title: "Multidisciplinary Research",
      description: "Catalyzing studies on early-life exposures and long-term health across India's diverse contexts.",
      gradient: "bg-gradient-to-br from-primary to-primary/60",
    },
    {
      number: "02",
      title: "Multiomics & Cohorts",
      description: "Supporting harmonized protocols, multi-cohort studies, and omics research to reveal biological pathways.",
      gradient: "bg-gradient-to-br from-secondary to-secondary/60",
    },
    {
      number: "03",
      title: "Capacity Building",
      description: "Training, mentorship, and open-access resources to develop India's next generation of DOHaD scientists.",
      gradient: "bg-gradient-to-br from-accent to-accent/60",
    },
    {
      number: "04",
      title: "Scientific Communication",
      description: "Webinars, newsletters, and regional meetings to share insights and connect the DOHaD India community.",
      gradient: "bg-gradient-to-br from-primary to-secondary",
    },
    {
      number: "05",
      title: "Public Engagement",
      description: "Disseminating knowledge through digital platforms, spotlighting young researchers, and raising awareness.",
      gradient: "bg-gradient-to-br from-secondary to-accent",
    },
    {
      number: "06",
      title: "Advocacy & Policy",
      description: "Engaging governments, civil society, and global DOHaD networks to inform health programs and policies.",
      gradient: "bg-gradient-to-br from-primary to-accent",
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center bg-transparent">
      <div className="w-full py-12 md:py-20 flex flex-col justify-center items-center gap-12">
        {/* Section Heading */}
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="text-center text-4xl md:text-6xl font-semibold text-foreground leading-tight">
            DOHaD India Priorities
          </h2>
          <p className="max-w-[700px] text-center text-muted-foreground text-lg md:text-xl leading-relaxed">
            Driving research, capacity building, communication, and advocacy 
            to strengthen DOHaD science and policy in India.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
