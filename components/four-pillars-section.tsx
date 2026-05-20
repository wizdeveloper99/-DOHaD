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
import { 
  ArrowLeft, 
  ArrowRight, 
  Baby, 
  Blocks, 
  TrendingUp, 
  Dna, 
  Apple, 
  FileText 
} from "lucide-react"

interface FeatureCardProps {
  title: string
  image: string
  description: string
  icon?: React.ElementType
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
      
      {/* Mobile: Title at bottom, tap to expand */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1"></div>
        <div className="bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 xl:p-6">
          <h3 className="text-sm sm:text-base xl:text-xl font-bold text-white mb-1 xl:mb-2">
            {title}
          </h3>
          <p className="text-[11px] sm:text-xs xl:text-sm text-white/90 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
)

const GridFeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="group relative flex flex-col items-start p-4 sm:p-5 xl:p-8 2xl:p-10 h-full bg-white dark:bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
  >
    <div className="w-10 h-10 xl:w-14 xl:h-14 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center rounded-xl xl:rounded-2xl mb-3 xl:mb-6 transition-all duration-300 group-hover:scale-110 shrink-0">
      {Icon && <Icon className="w-5 h-5 xl:w-6 xl:h-6" />}
    </div>
    
    <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-1.5 xl:mb-3 2xl:mb-4 group-hover:text-secondary transition-colors duration-300">
      {title}
    </h3>
    
    <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed line-clamp-3">
      {description}
    </p>
  </motion.div>
)

export function BentoCarousel() {
  const features = [
    {
      title: "Adolescent & Maternal Health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Comprehensive research on maternal nutrition, prenatal care, and adolescent health factors that influence lifelong wellbeing and disease risk.",
      icon: Baby
    },
    {
      title: "Early Childhood",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Investigating critical early childhood development factors and their impact on physical and cognitive health outcomes throughout life.",
      icon: Blocks
    },
    {
      title: "Lifecourse Research",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Longitudinal studies tracking health trajectories from conception through adulthood to understand cumulative life experiences.",
      icon: TrendingUp
    },
    {
      title: "Multiomics Research",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Advanced molecular analysis integrating genomics, proteomics, and metabolomics to understand disease mechanisms at multiple biological levels.",
      icon: Dna
    },
    {
      title: "Nutrition & Lifestyle",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Research on dietary patterns, lifestyle factors, and their role in modulating developmental programming and long-term health outcomes.",
      icon: Apple
    },
    {
      title: "Health Policy Research",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Evidence-based policy research to translate scientific findings into actionable health policies and interventions for population health.",
      icon: FileText
    },
  ]

  return (
    <section className="relative w-full px-5 md:px-6 lg:px-8 bg-background py-8 md:py-10 xl:py-20 2xl:py-28">
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Main Heading */}
        <div className="text-center mb-4 md:mb-5 xl:mb-6 [@media(min-height:768px)]:mb-12 [@media(min-height:850px)]:2xl:mb-20">
          <h2 className="text-xl md:text-2xl xl:text-3xl [@media(min-height:768px)]:xl:text-5xl [@media(min-height:850px)]:2xl:text-6xl font-bold text-foreground mb-1 xl:mb-2 [@media(min-height:768px)]:mb-4 [@media(min-height:850px)]:mb-6">
            Research Focus Areas
          </h2>
          <p className="text-[10px] sm:text-xs xl:text-sm [@media(min-height:768px)]:xl:text-lg [@media(min-height:850px)]:2xl:text-xl text-muted-foreground max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
            Our research spans multiple disciplines to understand how early-life exposures affect long-term health outcomes in Indian populations
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative block md:hidden">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: "auto",
            }}
            className="w-full px-4"
          >
            {/* Navigation buttons - positioned above carousel content */}
            <div className="flex justify-center items-center gap-4 mb-4">
              <CarouselPrevious className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out relative static">
                <ArrowLeft className="w-5 h-5" />
                <span className="sr-only">Previous slide</span>
              </CarouselPrevious>
              <CarouselNext className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-md hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out relative static">
                <ArrowRight className="w-5 h-5" />
                <span className="sr-only">Next slide</span>
              </CarouselNext>
            </div>
            
            <CarouselContent className="-ml-4">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full"
                >
                  <FeatureCard {...feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-8 2xl:gap-10">
          {features.map((feature, index) => (
            <GridFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
