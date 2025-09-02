"use client" 
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"
import { Calendar, Camera, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4

  const scrollLeft = () => {
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  const scrollRight = () => {
    const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }

  const goToSlide = (index:any) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Hero Section with Redesigned Carousel */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Upcoming Events & Highlights</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with our conferences, workshops, and community gatherings advancing DOHaD research.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto">
            <div className="relative group">
              {/* Main Carousel Container */}
              <div className="overflow-hidden rounded-2xl bg-card shadow-xl border border-border">
                <div
                  ref={carouselRef}
                  className="flex transition-transform ease-out duration-700"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="relative w-full flex-shrink-0">
                    <img
                      src="/2151426832.jpg"
                      alt="DOHaD Conference 2024"
                      className="w-full h-[300px] sm:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Annual DOHaD Conference</h3>
                      <p className="text-sm sm:text-base opacity-90">Join researchers from across India</p>
                    </div>
                  </div>
                  
                  <div className="relative w-full flex-shrink-0">
                    <img
                      src="/2150461353.jpg"
                      alt="Research Workshop"
                      className="w-full h-[300px] sm:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Research Methods Workshop</h3>
                      <p className="text-sm sm:text-base opacity-90">Hands-on training sessions</p>
                    </div>
                  </div>
                  
                  <div className="relative w-full flex-shrink-0">
                    <img
                      src="/2151663964.jpg"
                      alt="Community Gathering"
                      className="w-full h-[300px] sm:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Community Networking</h3>
                      <p className="text-sm sm:text-base opacity-90">Building research connections</p>
                    </div>
                  </div>
                  
                  <div className="relative w-full flex-shrink-0">
                    <img
                      src="/family-hanging-out-jetty.png"
                      alt="Family Health Initiative"
                      className="w-full h-[300px] sm:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">Family Health Outreach</h3>
                      <p className="text-sm sm:text-base opacity-90">Community engagement programs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:bg-card hover:scale-105 transition-all duration-200"
                onClick={scrollLeft}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm text-foreground p-3 rounded-full shadow-lg hover:bg-card hover:scale-105 transition-all duration-200"
                onClick={scrollRight}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-primary shadow-md scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Message */}
        <div className="bg-muted border border-border rounded-2xl p-12 text-center mb-12">
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
        <div className="grid md:grid-cols-2 gap-8">
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
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Event Registration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Easy online registration system for workshops, conferences, and special events with member discounts and
              early bird pricing.
            </p>
          </div>
        </div>

        {/* Event Types Preview */}
        <div className="bg-muted rounded-2xl p-10 mt-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Types of Events We'll Host</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">Annual Conference</h4>
              <p className="text-sm text-muted-foreground">
                Multi-day research conference with keynote speakers and poster sessions
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">Research Workshops</h4>
              <p className="text-sm text-muted-foreground">
                Hands-on training in research methods and data analysis techniques
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">Networking Events</h4>
              <p className="text-sm text-muted-foreground">
                Informal gatherings to foster collaboration and knowledge sharing
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card border border-border rounded-2xl p-10 text-center mt-12 shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-4">Get Event Updates</h3>
          <p className="text-muted-foreground mb-8">
            Be the first to know about upcoming events and registration openings
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full px-4 py-2 bg-background border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
            />
            <Button className="px-8 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium">
              Subscribe
            </Button>
          </div>
        </div>

      </main>

      <FooterSection />
    </div>
  )
}
