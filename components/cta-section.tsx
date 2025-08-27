"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full relative flex flex-col justify-center items-center overflow-visible">
      {/* Decorative Background */}
      <div className="absolute inset-0 top-[-90px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1388 825"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask
            id="mask0"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="269"
            y="27"
            width="850"
            height="493"
          >
            <rect x="269.215" y="27.4062" width="849.57" height="492.311" fill="url(#paint0)" />
          </mask>
          <g mask="url(#mask0)">
            <g filter="url(#filter0)">
              <ellipse
                cx="694"
                cy="-93.0414"
                rx="670.109"
                ry="354.908"
                fill="url(#paint1)"
                fillOpacity="0.8"
              />
            </g>
            <ellipse cx="694" cy="-91.5385" rx="670.109" ry="354.908" fill="url(#paint2)" />
            <ellipse cx="694" cy="-93.0414" rx="670.109" ry="354.908" fill="url(#paint3)" />
          </g>
          <defs>
            <filter
              id="filter0"
              x="-234.109"
              y="-705.949"
              width="1856.22"
              height="1225.82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient id="paint0" x1="1118.79" y1="273.562" x2="269.215" y2="273.562" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)"
            >
              <stop offset="0.1294" stopColor="hsl(var(--primary-dark))" />
              <stop offset="0.2347" stopColor="hsl(var(--primary))" />
              <stop offset="0.3" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="paint2" x1="694" y1="-446.446" x2="694" y2="263.369" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="paint3" x1="694" y1="-447.949" x2="694" y2="261.866" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--background))" />
              <stop offset="1" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-start items-center gap-8 max-w-4xl mx-auto">
        {/* Heading and description */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Building a Healthier Future, Together
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
            Join DOHaD India in advancing research, advocacy, and community programs to improve lifelong health
            by focusing on the earliest stages of life.
          </p>
        </div>

        {/* Call to action button */}
        <Link href="/join-us" passHref>
          <Button
            className="px-8 py-3 bg-secondary text-secondary-foreground text-base font-medium rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.15)] hover:bg-secondary/90 transition-all duration-300"
            size="lg"
          >
            Become a Member Today
          </Button>
        </Link>
      </div>
    </section>
  );
}
