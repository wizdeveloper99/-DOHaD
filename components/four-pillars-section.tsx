import React from "react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
}

const FeatureCard = ({ number, title, description }: FeatureCardProps) => (
  <div
    className="
      flex items-stretch transition-all duration-300 ease-out
      hover:scale-[1.02] hover:border-primary
    "
  >
    {/* Left border */}
    <div className="border-l-4 border-muted mr-10 transition-colors duration-300 group-hover:border-primary"></div>

    {/* Content */}
    <div className="flex flex-col gap-4">
      <span className="text-xl md:text-2xl font-semibold text-primary">
        {number}
      </span>
      <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold text-foreground leading-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  </div>
)

export function BentoSection() {
 const features = [
  {
    number: "01",
    title: "Maternal Health",
    description:
      "Examining preconception and pregnancy factors that influence child development",
  },
  {
    number: "02",
    title: "Early Childhood",
    description:
      "Understanding critical periods of development and their long-term impacts",
  },
  {
    number: "03",
    title: "Multiomics Research",
    description:
      "Exploring epigenomics, metabolomics, and microbiome influences on health",
  },
];


  return (
    <section className="w-full px-5 md:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20 pt-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Our research spans multiple disciplines to understand how early-life exposures affect long-term health outcomes in Indian populations
          </p>
        </div>

        {/* Grid with spacing between rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((f) => (
            <FeatureCard key={f.number} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
