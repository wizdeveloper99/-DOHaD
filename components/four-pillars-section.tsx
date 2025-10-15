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
}

const FeatureCard = ({ title, image }: FeatureCardProps) => (
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
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
      
      {/* Heading Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center leading-tight">
          {title}
        </h3>
      </div>
    </div>
  </motion.div>
)

export function BentoCarousel() {
  const features = [
    {
      title: "Adolescent and maternal health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Early Childhood",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Lifecourse research",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Multiomics Research",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Nutrition & Lifestyle",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Health policy research",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
