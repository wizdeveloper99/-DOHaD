"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingEventsGrid({ upcomingEvents }: { upcomingEvents: any[] }) {
  const [showAll, setShowAll] = useState(false);

  const displayedEvents = showAll ? upcomingEvents : upcomingEvents.slice(0, 3);

  if (upcomingEvents.length === 0) {
    return (
      <div className="border border-border rounded-2xl p-8 sm:p-12 text-center bg-muted/20">
        <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Coming Soon</h3>
        <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
          Stay tuned — upcoming events and workshops will be announced here.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedEvents.map((event: any) => (
          <div key={event._id} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            {event.featuredImage && (
              <div className="relative aspect-video w-full">
                <Image 
                  src={event.featuredImage} 
                  alt={event.title} 
                  fill 
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-xs font-semibold rounded-full border border-secondary/20 capitalize">
                  {event.eventType}
                </span>
                {event.category && (
                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 capitalize">
                    {event.category}
                  </span>
                )}
                {event.featured && (
                  <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800 uppercase tracking-wider">
                    Featured
                  </span>
                )}
                <span className="text-xs text-muted-foreground ml-auto">
                  {new Date(event.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h3 className="text-sm sm:text-base xl:text-xl font-bold text-foreground mb-2 line-clamp-2">{event.title}</h3>
              <p className="text-[11px] sm:text-xs xl:text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                {event.shortDescription}
              </p>
              {event.registrationLink ? (
                <div className="pt-4 border-t mt-auto">
                  <a 
                    href={event.registrationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
                  >
                    Register Now
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      
      {upcomingEvents.length > 3 && (
        <div className="mt-10 text-center">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="rounded-full px-8 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all font-semibold"
          >
            {showAll ? "Show Less" : `Show More (${upcomingEvents.length - 3})`}
          </Button>
        </div>
      )}
    </>
  );
}
