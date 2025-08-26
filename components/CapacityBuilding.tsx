import React from "react";
import { BookOpen, Users, PenTool } from "lucide-react";

const CapacityBuilding = () => {
  return (
    <section
      id="capacity-building"
      className="relative overflow-hidden py-20 md:py-28"
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
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
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
            <BookOpen className="mx-auto w-12 h-12 text-primary mb-5" />
            <h3 className="font-semibold text-xl">Training Workshops</h3>
            <p className="text-muted-foreground text-base mt-3">
              Comprehensive courses on DOHaD principles and lifecourse epidemiology.
            </p>
          </div>

          <div className="text-center">
            <Users className="mx-auto w-12 h-12 text-primary mb-5" />
            <h3 className="font-semibold text-xl">Mentorship Programs</h3>
            <p className="text-muted-foreground text-base mt-3">
              Pairing early-career researchers with senior DOHaD scientists for guidance.
            </p>
          </div>

          <div className="text-center">
            <PenTool className="mx-auto w-12 h-12 text-primary mb-5" />
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
