export const revalidate = 300; // Revalidate every 5 minutes

import { Header } from "@/components/header"
import { Calendar, Users, Camera, Mail, Sparkles, BookOpen, Handshake } from "lucide-react"
import Image from "next/image"
import { getEvents } from "@/lib/contentful-simple"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto pb-12">
        <div className="text-center mb-12 px-6 max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Events & Workshops
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover upcoming opportunities and explore highlights from our conferences, workshops, and community gatherings advancing DOHaD research.
          </p>
        </div>

        {/* Upcoming Events - Now at the Top */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us at our next events and workshops
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Annual DOHaD Conference</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Join researchers from across India
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Research Methods Workshop</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hands-on training sessions
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Networking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building research connections
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Family Health Outreach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Community engagement programs
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery from Past Events - Now Below Upcoming Events */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Past Events Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Highlights and memories from our previous events
            </p>
          </div>

          <div className="w-full px-4 sm:px-0">
            {events && events.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {events.map((event: any, index: number) => (
                    <CarouselItem key={event.sys.id}>
                      <div className="flex flex-col items-center text-center">
                        
                        {/* Image Section */}
                        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg">
                          <Image
                            src={event.fields.image?.fields?.file?.url ? `https:${event.fields.image.fields.file.url}` : '/placeholder.jpg'}
                            alt={event.fields.image?.fields?.file?.url ? (event.fields.image.fields.title || event.fields.title) : 'Event placeholder'}
                            width={1600}
                            height={900}
                            className="w-full h-[400px] sm:h-[600px] object-cover sm:object-contain bg-transparent"
                            priority={index === 0}
                            sizes="100vw"
                          />
                        </div>

                        {/* Content Below */}
                        <div className="mt-6 sm:mt-8 md:mt-10">
                          <div className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mb-3 shadow-sm">
                            {new Date(event.fields.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>

                          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3">
                            {event.fields.title}
                          </h2>

                          {event.fields.description && (
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                              {event.fields.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Navigation Buttons */}
                <CarouselPrevious className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-gray-300 text-gray-700 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-md backdrop-blur-md" />
                <CarouselNext className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-gray-300 text-gray-700 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-md backdrop-blur-md" />
              </Carousel>
            ) : (
              <div className="border border-gray-200 rounded-2xl p-8 sm:p-12 text-center min-h-[400px] flex flex-col justify-center mx-4 sm:mx-8">
                <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">No Past Events Available</h3>
                <p className="text-sm sm:text-base text-gray-500">
                  Photo gallery will be updated with highlights from our events.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Event Features */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive event experiences for our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Annual Conferences</h3>
              <p className="text-muted-foreground leading-relaxed">
                Flagship gatherings bringing together DOHaD researchers from across India for knowledge sharing and networking.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Workshops & Training</h3>
              <p className="text-muted-foreground leading-relaxed">
                Capacity building workshops, methodology training, and skill development sessions for researchers at all career stages.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Networking Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                Opportunities to connect with fellow researchers, build collaborations, and strengthen the DOHaD community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Event Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy online registration system for workshops and conferences with member discounts and early bird pricing.
              </p>
            </div>
          </div>
        </section>


      </main>
    </div>
  )
}
