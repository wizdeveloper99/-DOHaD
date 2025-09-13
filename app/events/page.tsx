"use client" 
import { Header } from "@/components/header"
import { Calendar, Camera, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const totalSlides = 4

  const scrollLeft = () => {
    setIsAutoPlaying(false)
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  const scrollRight = () => {
    setIsAutoPlaying(false)
    const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto px-6 pb-12">

        {/* Hero Section with Full-Screen Image Carousel */}
        <section className="mb-12 sm:mb-20 -mx-6">
          <div className="relative group">
            {/* Full-Screen Image Carousel */}
            <div className="overflow-hidden bg-black">
              <div
                ref={carouselRef}
                className="flex transition-transform ease-out duration-700"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="relative w-full flex-shrink-0">
                  <img
                    src="/2151426832.jpg"
                    alt="DOHaD Conference 2024"
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                        Annual DOHaD Conference
                      </h3>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                        Join researchers from across India in advancing developmental origins of health and disease research
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full flex-shrink-0">
                  <img
                    src="/2150461353.jpg"
                    alt="Research Workshop"
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                        Research Methods Workshop
                      </h3>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                        Hands-on training sessions covering cutting-edge methodologies in DOHaD research
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full flex-shrink-0">
                  <img
                    src="/2151663964.jpg"
                    alt="Community Gathering"
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                        Community Networking
                      </h3>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                        Building lasting research connections and collaborative opportunities
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full flex-shrink-0">
                  <img
                    src="/family-hanging-out-jetty.png"
                    alt="Family Health Initiative"
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                      <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                        Family Health Outreach
                      </h3>
                      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                        Community engagement programs promoting health awareness and intervention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Navigation Arrows - Hidden on small screens */}
            <Button
              className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg text-white border-0 p-2 sm:p-3 md:p-5 rounded-full shadow-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              onClick={scrollLeft}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </Button>
            <Button
              className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg text-white border-0 p-2 sm:p-3 md:p-5 rounded-full shadow-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              onClick={scrollRight}
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </Button>

            {/* Floating Indicator Dots */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2 sm:gap-3 md:gap-4 z-10">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  className={`transition-all duration-300 ${
                    currentSlide === index 
                      ? 'w-8 sm:w-12 md:w-16 h-2 sm:h-3 md:h-4 bg-white/90 rounded-full shadow-lg' 
                      : 'w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-white/50 rounded-full hover:bg-white/70 hover:scale-125'
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Touch indicators for mobile */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white/50 text-xs sm:hidden">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
                  <ChevronLeft className="w-3 h-3" />
                </div>
                <span>Swipe</span>
                <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mb-8 sm:mb-10 px-6 max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Event Gallery & Highlights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our vibrant community through event photos and upcoming conferences.
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-muted border border-border rounded-2xl p-12 text-center mb-12 max-w-6xl mx-auto">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Coming Soon: Events & Photo Gallery</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            We are planning exciting events and workshops for our community. This section will feature upcoming events,
            registration information, and a photo gallery of past activities.
          </p>
        </div>

        {/* Preview of Upcoming Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Upcoming Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Annual conferences, research workshops, training sessions, and networking events for the DOHaD India
              community.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Workshops & Training</h3>
            <p className="text-muted-foreground leading-relaxed">
              Capacity building workshops, methodology training, and skill development sessions for researchers at all
              career stages.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Photo Gallery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Visual highlights from past events, conferences, and community gatherings showcasing our vibrant research
              community.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Community Engagement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Outreach programs, public awareness campaigns, and community health initiatives promoting DOHaD research.
            </p>
          </div>
        </div>

      </main>
    </div>
  )
}
