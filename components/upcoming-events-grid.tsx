"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UpcomingEventsGrid({ upcomingEvents }: { upcomingEvents: any[] }) {
  const [showAll, setShowAll] = useState(false);

  const displayedEvents = showAll ? upcomingEvents : upcomingEvents.slice(0, 3);

  if (upcomingEvents.length === 0) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Annual DOHaD Conference</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Join researchers from across India for our flagship gathering.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Research Methods Workshop</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hands-on training sessions for developmental research.
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Community Networking</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Building connections across scientific disciplines.
          </p>
        </div>
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
              <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                {event.shortDescription}
              </p>
              <div className="pt-4 border-t flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users size={14} className="text-secondary" />
                  <span>{event.speakerNames?.[0] ? `${event.speakerNames[0]}${event.speakerNames.length > 1 ? ' + others' : ''}` : 'DOHaD Team'}</span>
                </div>
                {event.registrationLink && (
                  <a 
                    href={event.registrationLink} 
                    target="_blank" 
                    className="text-xs font-bold text-secondary hover:underline flex items-center gap-1"
                  >
                    Register Now
                  </a>
                )}
              </div>
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
