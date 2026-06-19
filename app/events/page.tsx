export const revalidate = 60;

import { Header } from "@/components/header"
import { Camera } from "lucide-react"
import Image from "next/image"
import dbConnect from "@/lib/mongodb"
import { headingStyles } from "@/lib/utils"
import Event from "@/lib/models/Event"
import SiteSettings from "@/lib/models/SiteSettings"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import UpcomingEventsGrid from "@/components/upcoming-events-grid"
import { normalizeEventsPageSettings } from "@/lib/events-page-defaults"
import { isPastEvent, isUpcomingEvent } from "@/lib/event-dates"
import { normalizeGalleryImages } from "@/lib/gallery-images"
import PastEventsGalleryVideo from "@/components/past-events-gallery-video"

async function getPageData() {
  try {
    await dbConnect();
    const [events, settings] = await Promise.all([
      Event.find({ published: true }).sort({ startDate: -1 }).lean(),
      SiteSettings.findOne({}).lean(),
    ]);
    return {
      events: JSON.parse(JSON.stringify(events)),
      pageContent: normalizeEventsPageSettings(settings?.eventsPage),
    };
  } catch (error) {
    console.error("Failed to fetch events page data:", error);
    return {
      events: [],
      pageContent: normalizeEventsPageSettings(null),
    };
  }
}

export default async function EventsPage() {
  const { events, pageContent } = await getPageData();

  const upcomingEvents = events
    .filter((e: { startDate: string }) => isUpcomingEvent(e.startDate))
    .reverse();
  const pastEvents = events.filter(
    (e: { startDate: string; galleryImages?: string[] }) =>
      isPastEvent(e.startDate) && Array.isArray(e.galleryImages) && e.galleryImages.length > 0
  );

  type GallerySlide = {
    _id: string;
    title: string;
    startDate: string;
    shortDescription?: string;
    image: string;
    caption?: string;
    imageIndex: number;
    totalImages: number;
  };

  const gallerySlides: GallerySlide[] = pastEvents.flatMap(
    (event: { _id: string; galleryImages?: Array<string | { url: string; caption?: string }>; title: string; startDate: string; shortDescription?: string }) =>
      normalizeGalleryImages(event.galleryImages).map((galleryImage, imageIndex, images) => ({
        _id: event._id,
        title: event.title,
        startDate: event.startDate,
        shortDescription: event.shortDescription,
        image: galleryImage.url,
        caption: galleryImage.caption,
        imageIndex,
        totalImages: images.length,
      }))
  );

  const featuredVideo = pageContent.pastEventsGallery.featuredVideo;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto pb-12">
        <div className="text-center mb-12 px-6 max-w-6xl mx-auto pt-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            {pageContent.pageTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {pageContent.pageDescription}
          </p>
        </div>

        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className={`${headingStyles} mb-3`}>
              {pageContent.upcomingEvents.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.upcomingEvents.subtitle}
            </p>
          </div>
          <UpcomingEventsGrid upcomingEvents={upcomingEvents} />
        </section>

        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className={`${headingStyles} mb-3`}>
              {pageContent.pastEventsGallery.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.pastEventsGallery.subtitle}
            </p>
          </div>

          <div className="w-full px-4 sm:px-0">
            {featuredVideo?.youtubeVideoId && (
              <PastEventsGalleryVideo
                youtubeVideoId={featuredVideo.youtubeVideoId}
                title={featuredVideo.title}
                description={featuredVideo.description}
              />
            )}

            {gallerySlides.length > 0 ? (
              <Carousel className="w-full">
                <CarouselContent>
                  {gallerySlides.map((slide, index) => (
                    <CarouselItem key={`${slide._id}-${slide.imageIndex}`}>
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-[16/10] bg-muted">
                          <Image
                            src={slide.image}
                            alt={
                              slide.caption ||
                              `${slide.title} — photo ${slide.imageIndex + 1}`
                            }
                            fill
                            className="object-contain"
                            priority={index === 0}
                          />
                          {slide.totalImages > 1 && (
                            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                              {slide.imageIndex + 1} / {slide.totalImages}
                            </div>
                          )}
                        </div>

                        <div className="mt-6 sm:mt-8 md:mt-10">
                          <div className="inline-block bg-secondary/10 text-secondary text-sm px-3 py-1 rounded-full mb-3 shadow-sm font-semibold">
                            {new Date(slide.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>

                          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3">
                            {slide.title}
                          </h2>

                          {slide.caption ? (
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                              {slide.caption}
                            </p>
                          ) : slide.shortDescription ? (
                            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                              {slide.shortDescription}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-border text-foreground h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-md backdrop-blur-md" />
                <CarouselNext className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white border border-border text-foreground h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-md backdrop-blur-md" />
              </Carousel>
            ) : !featuredVideo?.youtubeVideoId ? (
              <div className="border border-border rounded-2xl p-8 sm:p-12 text-center min-h-[400px] flex flex-col justify-center mx-4 sm:mx-8 bg-muted/20">
                <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">No Past Events Available</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Photo gallery will be updated with highlights from our events.
                </p>
              </div>
            ) : null}
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-16 px-6">
          <div className="text-center mb-8">
            <h2 className={`${headingStyles} mb-3`}>
              {pageContent.whatWeOffer.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {pageContent.whatWeOffer.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pageContent.whatWeOffer.items.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
