"use client"

import * as React from "react"
import { motion } from "framer-motion"
import clsx from "clsx"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  number: string
  title: string
  description: string
  bgLight: string
  bgDark: string
}

const FeatureCard = ({ number, title, description, bgLight, bgDark }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.35 }}
    className="h-full"
  >
   <Card
  className={clsx(
    "h-full rounded-xl border border-muted transition-all duration-300 hover:shadow-xl relative z-10", // card stays above fade
    bgLight,
    bgDark
  )}
>

  <CardContent className="flex flex-col justify-between h-full p-6 overflow-visible"> 
    {/* ↑ allow shadows to escape */}
    <div className="flex flex-col gap-4">
      <span className="text-xl md:text-2xl font-semibold text-primary">
        {number}
      </span>
      <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  </CardContent>
</Card>

  </motion.div>
)

export function BentoCarousel() {
  const features = [
    {
      number: "01",
      title: "Maternal Health",
      description: "Examining preconception and pregnancy factors that influence child development",
      bgLight: "bg-[#E6F7F5]",
      bgDark: "dark:bg-[#0f2e2d]",
    },
    {
      number: "02",
      title: "Early Childhood",
      description: "Understanding critical periods of development and their long-term impacts",
      bgLight: "bg-[#EDF8E7]",
      bgDark: "dark:bg-[#182618]",
    },
    {
      number: "03",
      title: "Multiomics Research",
      description: "Exploring epigenomics, metabolomics, and microbiome influences on health",
      bgLight: "bg-[#F2F8EC]",
      bgDark: "dark:bg-[#1d2a20]",
    },
    {
      number: "04",
      title: "Nutrition & Lifestyle",
      description: "Studying the role of diet, environment, and lifestyle on lifelong health",
      bgLight: "bg-[#F7FAF8]",
      bgDark: "dark:bg-[#1a1d1c]",
    },
    {
      number: "05",
      title: "Policy & Public Health",
      description: "Translating research into actionable public health interventions",
      bgLight: "bg-[#F5F9FD]",
      bgDark: "dark:bg-[#16202b]",
    },
    {
      number: "06",
      title: "Community Engagement",
      description: "Working with communities to co-create sustainable health solutions",
      bgLight: "bg-[#FDF8F9]",
      bgDark: "dark:bg-[#2b1c1f]",
    },
  ]

  return (
    <section className="relative w-full px-5 md:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            Our research spans multiple disciplines to understand how early-life
            exposures affect long-term health outcomes in Indian populations
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
        <Carousel className="w-full px-4 md:px-8">
  <CarouselContent className="-ml-4 overflow-visible">
    {features.map((f) => (
      <CarouselItem
        key={f.number}
        className="pl-4 basis-[95%] md:basis-[45%] lg:basis-[30%]"
        // mobile → almost full width
        // tablet/desktop → smaller to show peek
      >
        <FeatureCard {...f} />
      </CarouselItem>
    ))}
  </CarouselContent>

  {/* Buttons */}
  <CarouselPrevious 
    className="absolute -left-6 md:-left-16 lg:-left-20 top-1/2 -translate-y-1/2 z-20" 
  />
  <CarouselNext 
    className="absolute -right-6 md:-right-16 lg:-right-20 top-1/2 -translate-y-1/2 z-20" 
  />
</Carousel>



       {/* Left fade */}
<div className="pointer-events-none absolute top-0 left-0 h-full w-16 
  bg-gradient-to-r from-background via-background/60 to-transparent z-0" /> 
  {/* ↓ set z-0 */}

{/* Right fade */}
<div className="pointer-events-none absolute top-0 right-0 h-full w-16 
  bg-gradient-to-l from-background via-background/60 to-transparent z-0" /> 
  {/* ↓ set z-0 */}

        </div>
      </div>
    </section>
  )
}
