export const revalidate = 60; // Revalidate every minute

import { Header } from "@/components/header"
import { Calendar, Users, Camera, BookOpen, Handshake } from "lucide-react"
import Image from "next/image"
import dbConnect from "@/lib/mongodb"
import { headingStyles } from "@/lib/utils"
import Event from "@/lib/models/Event"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import UpcomingEventsGrid from "@/components/upcoming-events-grid"

async function getInternalEvents() {
  try {
    await dbConnect();
    // Fetch published events, sorted by date (upcoming first)
    const events = await Event.find({ published: true }).sort({ startDate: -1 });
    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error("Failed to fetch events from MongoDB:", error);
    return [];
  }
}

export default async function EventsPage() {
  const events = await getInternalEvents();
  
  // Separate upcoming and past events
  const now = new Date();
  const upcomingEvents = events.filter((e: any) => new Date(e.startDate) >= now).reverse(); // Reverse for chronological order (closest first)
  const pastEvents = events.filter((e: any) => new Date(e.startDate) < now);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto pb-12">
        <div className="text-center mb-12 px-6 max-w-6xl mx-auto pt-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Events & Workshops
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover upcoming opportunities and explore highlights from our conferences, workshops, and community gatherings advancing DOHaD research.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className={`${headingStyles} mb-3`}>
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us at our next events and workshops
            </p>
          </div>
          <UpcomingEventsGrid upcomingEvents={upcomingEvents} />
        </section>

        {/* Photo Gallery from Past Events */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className={`${headingStyles} mb-3`}>
              Past Events Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Highlights and memories from our previous events
            </p>
          </div>

          <div className="w-full px-4 sm:px-0">
            {pastEvents && pastEvents.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {pastEvents.map((event: any, index: number) => (
                    <CarouselItem key={event._id}>
                      <div className="flex flex-col items-center text-center">
                        {/* Image Section */}
                        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg aspect-video md:aspect-[21/9]">
                          <Image
                            src={event.featuredImage || '/placeholder.jpg'}
                            alt={event.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>

                        {/* Content Below */}
                        <div className="mt-6 sm:mt-8 md:mt-10">
                          <div className="inline-block bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full mb-3 shadow-sm font-semibold">
                            {new Date(event.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>

                          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
                            {event.title}
                          </h2>

                          {event.shortDescription && (
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                              {event.shortDescription}
                            </p>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Navigation Buttons */}
                <CarouselPrevious className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-border text-foreground h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-md backdrop-blur-md" />
                <CarouselNext className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-border text-foreground h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-md backdrop-blur-md" />
              </Carousel>
            ) : (
              <div className="border border-border rounded-2xl p-8 sm:p-12 text-center min-h-[400px] flex flex-col justify-center mx-4 sm:mx-8 bg-muted/20">
                <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">No Past Events Available</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Photo gallery will be updated with highlights from our events.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Event Features */}
        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className={`${headingStyles} mb-3`}>
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive event experiences for our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Annual Conferences
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Flagship gatherings bringing together DOHaD researchers from across India for knowledge sharing and networking.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Workshops & Training
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Capacity building workshops, methodology training, and skill development sessions for researchers at all career stages.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Networking Events
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Opportunities to connect with fellow researchers, build collaborations, and strengthen the DOHaD community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Event Registration
              </h3>
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
