import React from "react";
import Image from "next/image";

const capacityBuildingItems = [
  {
    title: "Training Workshops",
    description: "Hands-on sessions covering lifecourse epidemiology, research methodologies, and specialized DOHaD study designs.",
    image: "/Layer 2.png",
  },
  {
    title: "Mentorship Programs",
    description: "Connecting early-career researchers with senior DOHaD scientists to foster professional growth and collaboration.",
    image: "/icon 3.png",
  },
  {
    title: "Writing Workshops",
    description: "Structured sessions to strengthen scientific writing, grant applications, and publication skills for DOHaD researchers.",
    image: "/icon 2(1).png",
  },
  {
    title: "Internship Programs",
    description: "Providing students and early-career professionals with hands-on research experience within DOHaD India's network.",
    image: "/Layer 2.png",
  },
];

const CapacityBuilding = () => {
  return (
    <section
      id="capacity-building"
      className="relative overflow-hidden py-8 md:py-10 xl:py-20 2xl:py-28 bg-background"
    >
      {/* Animated SVG background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-10"
        aria-hidden="true"
        role="img"
      >
        <defs>
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
              dur="10s"
              repeatCount="indefinite"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" className="text-secondary/20" />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-4 md:mb-5 xl:mb-6 [@media(min-height:768px)]:mb-12 [@media(min-height:850px)]:2xl:mb-20">
          <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground mb-1 xl:mb-2 [@media(min-height:768px)]:mb-4 [@media(min-height:850px)]:mb-6">
            Capacity Building
          </h2>
          <p className="text-[10px] sm:text-xs xl:text-sm [@media(min-height:768px)]:xl:text-lg [@media(min-height:850px)]:2xl:text-xl text-muted-foreground max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
            We support the next generation of DOHaD researchers through structured training and hands-on experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 2xl:gap-10 mb-8 md:mb-10 xl:mb-16 2xl:mb-20">
          {capacityBuildingItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-4 sm:p-5 xl:p-8 2xl:p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 mb-3 xl:mb-6 2xl:mb-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-500 group-hover:scale-110">
                  <div className="relative w-6 h-6 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-bold text-foreground mb-1.5 xl:mb-3 2xl:mb-4">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-xs xl:text-sm 2xl:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5 bg-secondary text-white font-bold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all text-xs sm:text-sm xl:text-base 2xl:text-lg"
          >
            View Upcoming Events &amp; Workshops
          </a>
        </div>
      </div>
    </section>
  );
};

export default CapacityBuilding;
