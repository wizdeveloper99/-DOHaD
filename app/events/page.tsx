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
            Upcoming Events & Highlights
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with our conferences, workshops, and community gatherings advancing DOHaD research.
          </p>
        </div>

{/* Full Screen Hero Image Gallery from Contentful */}
<div className="w-full mb-16 px-4 sm:px-6 lg:px-12">
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
    <div className="border border-gray-200 rounded-2xl p-8 sm:p-12 text-center h-[75vh] sm:h-[85vh] min-h-[400px] flex flex-col justify-center mx-4 sm:mx-8">
      <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">No Events Found</h2>
      <p className="text-sm sm:text-base text-gray-500">
        No events are currently available in Contentful.
      </p>
    </div>
  )}
</div>




        {/* Event Highlights Grid */}
        <div className="max-w-6xl mx-auto mb-16 px-6">
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
        </div>

        {/* Coming Soon Section */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="bg-muted border border-border rounded-2xl p-10 sm:p-12 text-center">
            <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              COMING SOON
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Events & Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are planning exciting events and workshops for our community. This section will feature upcoming events, registration information, and a photo gallery of past activities.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Upcoming Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                Annual conferences, research workshops, training sessions, and networking events for the DOHaD India community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Workshops & Training</h3>
              <p className="text-muted-foreground leading-relaxed">
                Capacity building workshops, methodology training, and skill development sessions for researchers at all career stages.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Photo Gallery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visual highlights from past events, conferences, and community gatherings showcasing our vibrant research community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">● Event Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy online registration system for workshops, conferences, and special events with member discounts and early bird pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Coming Soon Section */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="bg-muted border border-border rounded-2xl p-10 sm:p-12 text-center">
            <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              COMING SOON
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are currently preparing comprehensive resources for our community. This section will include governance documents, research guidelines, and essential information for members.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Governance Structure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Detailed information about DOHaD India's organizational structure, leadership roles, and decision-making processes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Code of Conduct</h3>
              <p className="text-muted-foreground leading-relaxed">
                Guidelines for ethical conduct, professional behavior, and community standards for all DOHaD India members and participants.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Research Guidelines</h3>
              <p className="text-muted-foreground leading-relaxed">
                Best practices, methodological guidelines, and standards for conducting DOHaD research in the Indian context.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3">Policy Documents</h3>
              <p className="text-muted-foreground leading-relaxed">
                Position papers, policy recommendations, and advocacy materials related to DOHaD research and public health initiatives.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
