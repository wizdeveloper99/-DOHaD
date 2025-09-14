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

      <main className="mx-auto px-6 pb-12">
        <div className="text-center mb-8 sm:mb-10 px-6 max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Events from Contentful
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simple showcase of events fetched directly from Contentful.
          </p>
        </div>

       {/* Dynamic Events Carousel/Gallery from Contentful */}
        {/* Dynamic Events Carousel/Gallery from Contentful */}
          {/* Dynamic Events Carousel/Gallery from Contentful */}
        <div className="w-full mb-16 px-2 sm:px-4">
          {events && events.length > 0 ? (
            <Carousel className="w-full max-w-7xl mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {events.map((event: any, index: number) => (
                  <CarouselItem key={event.sys.id} className="pl-2 md:pl-4">
                    <div className="w-full rounded-lg sm:rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
                      {/* Image Container - Responsive heights */}
                      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full">
                        {event.fields.image && (
                          <Image
                            src={`https:${event.fields.image.fields.file.url}`}
                            alt={event.fields.image.fields.title || event.fields.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 90vw"
                          />
                        )}
                      </div>
                      
                      {/* Content Below Image - Responsive padding and text sizes */}
                      <div className="p-4 sm:p-6 lg:p-8 text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4 leading-tight">
                          {event.fields.title}
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-3 sm:mb-4 lg:mb-6">
                          {new Date(event.fields.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        {event.fields.description && (
                          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                            {event.fields.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Responsive Navigation Buttons */}
              <CarouselPrevious className="absolute left-1 sm:left-2 md:left-4 top-1/4 sm:top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <CarouselNext className="absolute right-1 sm:right-2 md:right-4 top-1/4 sm:top-1/3 -translate-y-1/2 bg-white/90 hover:bg-white border-gray-200 text-gray-700 hover:text-gray-900 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            </Carousel>
          ) : (
            <div className="bg-muted border border-border rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex flex-col justify-center mx-2 sm:mx-4">
              <Calendar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-muted-foreground mx-auto mb-3 sm:mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">No Events Found</h2>
              <p className="text-sm sm:text-base text-muted-foreground">No events are currently available in Contentful.</p>
            </div>
          )}
        </div>

        {/* --- New Sections Added Below --- */}

        {/* Why Attend Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Join Our Events?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a range of programs designed to empower and connect the DOHaD research community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Upcoming Events</h3>
              <p className="text-muted-foreground leading-relaxed">
                Annual conferences, research workshops, training sessions, and networking events for the DOHaD India community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Workshops & Training</h3>
              <p className="text-muted-foreground leading-relaxed">
                Capacity building workshops, methodology training, and skill development sessions for researchers at all career stages.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Photo Gallery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visual highlights from past events, conferences, and community gatherings showcasing our vibrant research community.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Event Registration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Easy online registration system for workshops, conferences, and special events with member discounts and early bird pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Events We'll Host Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Types of Events We'll Host</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse event calendar is crafted to meet the needs of every researcher and enthusiast.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Annual Conference</h3>
              <p className="text-sm text-muted-foreground">Multi-day research conference with keynote speakers and poster sessions.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Research Workshops</h3>
              <p className="text-sm text-muted-foreground">Hands-on training in research methods and data analysis techniques.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Networking Events</h3>
              <p className="text-sm text-muted-foreground">Informal gatherings to foster collaboration and knowledge sharing.</p>
            </div>
          </div>
        </section>



      </main>
    </div>
  )
}