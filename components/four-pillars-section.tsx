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
      title: "Remodel construction",
      description:
        "Velit sagittis fringilla neque dolor id et ac eu mattis ipsum morbi enim.",
    },
    {
      number: "02",
      title: "General construction",
      description:
        "Phasellus orci nullam orci ultrices vulputate at sodales tempor malesuada libero.",
    },
    {
      number: "03",
      title: "Project planning",
      description:
        "Egestas integer sollicitudin volutpat duis mauris pulvinar molestie neque nibh.",
    },
    {
      number: "04",
      title: "Space planning",
      description:
        "Eget vitae non habitant blandit in eu pellentesque nulla facilisis leo donec.",
    },
    {
      number: "05",
      title: "Exterior design",
      description:
        "Sed massa morbi turpis enim sed suspendisse massa ut a ultrices ut nisi in tellus.",
    },
    {
      number: "06",
      title: "Interior design",
      description:
        "Praesent a porttitor adipiscing urna convallis non ipsum aenean magna enim.",
    },
  ]

  return (
    <section className="w-full px-5 md:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            DOHaD India Priorities
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-muted-foreground text-lg md:text-xl lg:text-2xl leading-relaxed">
            Driving research, capacity building, communication, and advocacy to strengthen
            DOHaD science and policy in India.
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
