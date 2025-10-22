import React from "react";
import { BookOpen, Users, PenTool } from "lucide-react";
import Image from "next/image";

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
            We build expertise in DOHaD principles through comprehensive training programs, mentorship opportunities, and hands-on research experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Training Workshops */}
          <div className="hover-lift-2 text-center">
   <div className="card-hover-content">
          {/* Image Container */}
          <div className="mx-auto w-32 h-32 mb-5 transition-transform duration-300 relative">
            <Image
              src="Layer 2.png"
              alt="Training Workshops"
              fill
              className="object-contain"
            />
          </div>
    <h3 className="card-hover-title font-semibold text-xl text-foreground">
      Training Workshops
    </h3>
    <p className="card-hover-text text-muted-foreground text-base mt-3">
      Comprehensive courses on the theory of DOHaD and lifecourse epidemiology.
    </p>
  </div>
</div>

          {/* Mentorship Programs */}
          <div className="hover-lift-2 text-center">
            <div className="card-hover-content">
             {/* Image Container */}
          <div className="mx-auto w-32 h-32 mb-5 transition-transform duration-300 relative">
            <Image
              src="icon 3.png"
              alt="Training Workshops"
              fill
              className="object-contain"
            />
          </div>
              <h3 className="card-hover-title font-semibold text-xl text-foreground">
                Mentorship Programs
              </h3>
              <p className="card-hover-text text-muted-foreground text-base mt-3">
                Pairing early-career researchers with senior DOHaD scientists.
              </p>
            </div>
          </div>

          {/* Writing Workshops */}
          <div className="hover-lift-2 text-center">
            <div className="card-hover-content">
             {/* Image Container */}
          <div className="mx-auto w-32 h-32 mb-5 transition-transform duration-300 relative">
            <Image
              src="icon 2(1).png"
              alt="Training Workshops"
              fill
              className="object-contain"
            />
          </div>
              <h3 className="card-hover-title font-semibold text-xl text-foreground">
                Writing Workshops
              </h3>
    <p className="card-hover-text text-muted-foreground text-base mt-3">
      Best practices in scientific writing, presentation, and communication skills.
    </p>
            </div>
          </div>

          {/* INTERNSHIP programs */}
          <div className="hover-lift-2 text-center">
            <div className="card-hover-content">
             {/* Image Container */}
          <div className="mx-auto w-32 h-32 mb-5 transition-transform duration-300 relative">
            <Image
              src="icon 2(1).png"
              alt="Intership Programs"
              fill
              className="object-contain"
            />
          </div>
              <h3 className="card-hover-title font-semibold text-xl text-foreground">
                INTERNSHIP programs
              </h3>
              <p className="card-hover-text text-muted-foreground text-base mt-3">
                Short-term hands-on experience with research groups working on DOHaD related research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacityBuilding;
