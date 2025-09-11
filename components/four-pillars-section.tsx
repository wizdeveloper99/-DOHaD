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
    "card-hover h-full rounded-xl border border-muted relative z-10", // Added card-hover class, removed manual hover styles
    bgLight,
    bgDark
  )}
>
  <CardContent className="card-hover-content flex flex-col justify-between h-full p-6 overflow-visible"> 
    {/* Added card-hover-content class */}
    <div className="flex flex-col gap-4">
      <span className="card-hover-title text-xl md:text-2xl font-semibold text-primary">
        {/* Added card-hover-title class */}
        {number}
      </span>
      <h3 className="card-hover-title text-xl md:text-2xl font-semibold text-foreground leading-tight">
        {/* Added card-hover-title class */}
        {title}
      </h3>
      <p className="card-hover-text text-base md:text-lg text-muted-foreground leading-relaxed">
        {/* Added card-hover-text class */}
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
            
            {/* Navigation buttons positioned below the carousel */}
            <div className="flex justify-center items-center gap-4 mt-8 -mt-8 pt-8">
              <CarouselPrevious className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out" />
              
              <div className="flex gap-2">
                {/* Optional: Add dots indicator here if needed */}
              </div>
              
              <CarouselNext className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
