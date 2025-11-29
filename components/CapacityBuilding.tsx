import React from "react";
import Image from "next/image";

const capacityBuildingItems = [
  {
    title: "Training Workshops",
    description: "Comprehensive courses on the theory of DOHaD and lifecourse epidemiology.",
    image: "/Layer 2.png",
  },
  {
    title: "Mentorship Programs",
    description: "Pairing early-career researchers with senior DOHaD scientists.",
    image: "/icon 3.png",
  },
  {
    title: "Writing Workshops",
    description: "Best practices in scientific writing, presentation, and communication skills.",
    image: "/icon 2(1).png",
  },
  {
    title: "Internship Programs",
    description: "Short-term hands-on experience with research groups working on DOHaD related research.",
    image: "/icon 2(1).png",
  },
];

const CapacityBuilding = () => {
  return (
    <section
      id="capacity-building"
      className="relative overflow-hidden py-16 md:py-24 bg-background"
    >
      {/* Animated SVG background pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        role="img"
      >
        <defs>
          {/* Pattern with animated translation */}
          <pattern
            id="dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
            <animateTransform
              attributeName="patternTransform"
              type="translate"
              from="0 0"
              to="-24 0"
              dur="3s"
              repeatCount="indefinite"
            />
          </pattern>

          <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.92" />
            <stop offset="60%" stopColor="white" stopOpacity="0.85" />
            <stop offset="100%" stopColor="white" stopOpacity="0.92" />
          </linearGradient>
        </defs>

        {/* Background layers */}
        <rect
          width="100%"
          height="100%"
          fill="currentColor"
          className="text-muted/20"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#dots)"
          className="text-muted/20"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#wash)"
          className="fill-background/80"
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Capacity Building
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We support the next generation of DOHaD researchers through structured training and hands-on experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capacityBuildingItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-primary/10 hover:border-primary/30 overflow-hidden"
            >
              {/* Decorative gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Container with soft background */}
                <div className="w-20 h-20 mb-5 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <div className="relative w-12 h-12">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain drop-shadow-sm"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapacityBuilding;
