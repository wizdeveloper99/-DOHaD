"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface FeatureCardProps {
  title: string
  image: string
  description: string
}

const FeatureCard = ({ title, image, description }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.35 }}
    className="h-full"
  >
    <div className="relative w-full aspect-square rounded-xl overflow-hidden group">
      {/* Full Card Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
      
      {/* Desktop: Heading & Description on Hover */}
      <div className="absolute inset-0 p-6 hidden md:flex flex-col items-center justify-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-white text-center leading-tight mb-3 transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-white/90 text-center leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
          {description}
        </p>
      </div>

      {/* Mobile: Title at bottom, tap to expand */}
      <div className="absolute inset-0 md:hidden flex flex-col">
        <div className="flex-1"></div>
        <div className="bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-xl font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

export function BentoCarousel() {
  const features = [
    {
      title: "Adolescent and maternal health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Comprehensive research on maternal nutrition, prenatal care, and adolescent health factors that influence lifelong wellbeing and disease risk."
    },
    {
      title: "Early Childhood",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Investigating critical early childhood development factors and their impact on physical and cognitive health outcomes throughout life."
    },
    {
      title: "Lifecourse research",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Longitudinal studies tracking health trajectories from conception through adulthood to understand cumulative life experiences."
    },
    {
      title: "Multiomics Research",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Advanced molecular analysis integrating genomics, proteomics, and metabolomics to understand disease mechanisms at multiple biological levels."
    },
    {
      title: "Nutrition & Lifestyle",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Research on dietary patterns, lifestyle factors, and their role in modulating developmental programming and long-term health outcomes."
    },
    {
      title: "Health policy research",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Evidence-based policy research to translate scientific findings into actionable health policies and interventions for population health."
    },
  ]

  return (
    <section className="relative w-full px-5 md:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Main Heading */}
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
            {/* Navigation buttons - positioned above carousel content */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <CarouselPrevious className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out relative static" />
              <CarouselNext className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out relative static" />
            </div>
            
            <CarouselContent className="-ml-4">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-[95%] md:basis-[45%] lg:basis-[30%]"
                >
                  <FeatureCard {...feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
