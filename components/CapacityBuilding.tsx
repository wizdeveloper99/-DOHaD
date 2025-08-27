import React from "react";
import { BookOpen, Users, PenTool } from "lucide-react";

const CapacityBuilding = () => {
  return (
    <section
      id="capacity-building"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Subtle SVG background pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
          </pattern>
          <linearGradient id="wash" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.92" />
            <stop offset="60%" stopColor="white" stopOpacity="0.85" />
            <stop offset="100%" stopColor="white" stopOpacity="0.92" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="currentColor" className="text-muted/20" />
        <rect width="100%" height="100%" fill="url(#dots)" className="text-muted/20" />
        <rect width="100%" height="100%" fill="url(#wash)" />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Capacity Building
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We build expertise in DOHaD principles through comprehensive training
            programs, mentorship opportunities, and hands-on research experiences.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-5">
    <BookOpen className="w-8 h-8 text-primary" />
  </div>
            <h3 className="font-semibold text-xl">Training Workshops</h3>
            <p className="text-muted-foreground text-base mt-3">
              Comprehensive courses on DOHaD principles and lifecourse epidemiology.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-5">
            <Users className="w-8 h-8 text-primary" />
                        </div>

            <h3 className="font-semibold text-xl">Mentorship Programs</h3>
            <p className="text-muted-foreground text-base mt-3">
              Pairing early-career researchers with senior DOHaD scientists for guidance.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-5">
            <PenTool  className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-xl">Writing Workshops</h3>
            <p className="text-muted-foreground text-base mt-3">
              Best practices in scientific writing and communication skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapacityBuilding;
