"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Plus,
  Edit2,
  Trash2,
  Calendar,
  MapPin,
  Loader2,
  Images,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';
import {
  DEFAULT_EVENTS_PAGE,
  normalizeEventsPageSettings,
  type EventsPageSettings,
} from '@/lib/events-page-defaults';

type EventRecord = {
  _id: string;
  title: string;
  slug: string;
  startDate: string;
  location?: string;
  featuredImage?: string;
  galleryImages?: string[];
  published: boolean;
  eventType: string;
};

function SaveStatus({ isSaving, isSaved }: { isSaving: boolean; isSaved: boolean }) {
  if (isSaving) {
    return (
      <span className="flex items-center gap-2 text-amber-600">
        <Loader2 size={16} className="animate-spin" />
        Saving...
      </span>
    );
  }
  if (isSaved) {
    return (
      <span className="flex items-center gap-2 text-emerald-600">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        All changes saved
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2 text-amber-600">
      <span className="w-2 h-2 rounded-full bg-amber-500" />
      Unsaved changes
    </span>
  );
}

function SectionHeadingFields({
  titleLabel,
  subtitleLabel,
  title,
  subtitle,
  onTitleChange,
  onSubtitleChange,
}: {
  titleLabel: string;
  subtitleLabel: string;
  title: string;
  subtitle: string;
  onTitleChange: (value: string) => void;
  onSubtitleChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:p-5 rounded-xl bg-muted/30 border border-border">
      <div className="space-y-2">
        <Label>{titleLabel}</Label>
        <Input
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="text-base"
        />
      </div>
      <div className="space-y-2">
        <Label>{subtitleLabel}</Label>
        <Textarea
          rows={2}
          value={subtitle}
          onChange={(e) => onSubtitleChange(e.target.value)}
          className="text-base resize-none"
        />
      </div>
    </div>
  );
}

function EventRow({
  event,
  onDelete,
}: {
  event: EventRecord;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white hover:border-secondary/30 transition-colors">
      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0">
        {event.featuredImage ? (
          <Image src={event.featuredImage} alt={event.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Calendar className="text-muted-foreground" size={22} />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground truncate">{event.title}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm text-muted-foreground">
          <span>
            {new Date(event.startDate).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            {event.location || 'Online'}
          </span>
          {!event.published && <span className="text-amber-600 font-medium">Draft</span>}
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0">
        <Button variant="ghost" size="icon" className="h-9 w-9" asChild>
          <Link href={`/admin/events/${event._id}/edit`} aria-label={`Edit ${event.title}`}>
            <Edit2 size={18} />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-destructive hover:text-destructive"
          onClick={() => onDelete(event._id)}
          aria-label={`Delete ${event.title}`}
        >
          <Trash2 size={18} />
        </Button>
      </div>
    </div>
  );
}

function EmptyEvents({ message }: { message: string }) {
  return (
    <div className="text-center py-10 px-4 rounded-xl border border-dashed border-border bg-muted/20">
      <Calendar className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
}

export default function EventsAdminPage() {
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [pageContent, setPageContent] = useState<EventsPageSettings>(DEFAULT_EVENTS_PAGE);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const pageContentRef = useRef(pageContent);
  pageContentRef.current = pageContent;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [eventsRes, settingsRes] = await Promise.all([
        fetch('/api/events?admin=true'),
        fetch('/api/settings'),
      ]);
      const eventsData = await eventsRes.json();
      const settingsData = await settingsRes.json();
      setEvents(eventsData);
      setPageContent(normalizeEventsPageSettings(settingsData?.eventsPage));
      setHasLoaded(true);
    } catch {
      toast.error('Failed to load events page');
    } finally {
      setIsLoading(false);
    }
  };

  const savePageContent = useCallback(async () => {
    const content = pageContentRef.current;
    setIsSaving(true);
    try {
      const updateRes = await fetch('/api/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventsPage: content }),
      });
      if (updateRes.ok) {
        setIsSaved(true);
      } else {
        toast.error('Failed to save section text');
      }
    } catch {
      toast.error('An error occurred while saving');
    } finally {
      setIsSaving(false);
    }
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;
    setIsSaved(false);
    const timer = setTimeout(() => savePageContent(), 1500);
    return () => clearTimeout(timer);
  }, [pageContent, hasLoaded, savePageContent]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;
    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Event deleted');
        setEvents(events.filter((e) => e._id !== id));
      } else {
        toast.error('Delete failed');
      }
    } catch {
      toast.error('An error occurred');
    }
  };

  const { upcomingEvents, pastEvents } = useMemo(() => {
    const now = new Date();
    const upcoming = events
      .filter((e) => new Date(e.startDate) >= now)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    const past = events
      .filter(
        (e) =>
          new Date(e.startDate) < now &&
          Array.isArray(e.galleryImages) &&
          e.galleryImages.length > 0
      )
      .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
    return { upcomingEvents: upcoming, pastEvents: past };
  }, [events]);

  const updateOfferItem = (index: number, field: 'title' | 'description', value: string) => {
    setPageContent((prev) => ({
      ...prev,
      whatWeOffer: {
        ...prev.whatWeOffer,
        items: prev.whatWeOffer.items.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      },
    }));
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-12 flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        <p className="text-muted-foreground">Loading events page...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <header className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Events</h1>
            <p className="text-base text-muted-foreground mt-1">
              Edit the sections visitors see on{' '}
              <Link href="/events" target="_blank" className="text-secondary hover:underline">
                your events page
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-full border border-border shrink-0">
            <SaveStatus isSaving={isSaving} isSaved={isSaved} />
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-xl border border-border bg-white space-y-4">
          <p className="text-sm font-medium text-muted-foreground">Page intro (top of events page)</p>
          <div className="space-y-2">
            <Label>Main heading</Label>
            <Input
              value={pageContent.pageTitle}
              onChange={(e) => setPageContent({ ...pageContent, pageTitle: e.target.value })}
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label>Intro text</Label>
            <Textarea
              rows={2}
              value={pageContent.pageDescription}
              onChange={(e) => setPageContent({ ...pageContent, pageDescription: e.target.value })}
              className="text-base resize-none"
            />
          </div>
        </div>
      </header>

      {/* Upcoming Events */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
              <Calendar size={22} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>
              <p className="text-sm text-muted-foreground">Events with a future date appear here</p>
            </div>
          </div>
          <Link href="/admin/events/new">
            <Button className="rounded-full bg-secondary hover:bg-secondary/90 gap-2 w-full sm:w-auto">
              <Plus size={18} />
              Add event
            </Button>
          </Link>
        </div>

        <SectionHeadingFields
          titleLabel="Section heading (shown on website)"
          subtitleLabel="Section subtitle"
          title={pageContent.upcomingEvents.title}
          subtitle={pageContent.upcomingEvents.subtitle}
          onTitleChange={(value) =>
            setPageContent({
              ...pageContent,
              upcomingEvents: { ...pageContent.upcomingEvents, title: value },
            })
          }
          onSubtitleChange={(value) =>
            setPageContent({
              ...pageContent,
              upcomingEvents: { ...pageContent.upcomingEvents, subtitle: value },
            })
          }
        />

        <div className="space-y-3">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <EventRow key={event._id} event={event} onDelete={handleDelete} />
            ))
          ) : (
            <EmptyEvents message="No upcoming events yet. Add an event with a future date to show it here." />
          )}
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="space-y-4 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
            <Images size={22} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Past Events Gallery</h2>
            <p className="text-sm text-muted-foreground">
              Past events appear as a photo carousel on your website
            </p>
          </div>
        </div>

        <SectionHeadingFields
          titleLabel="Section heading (shown on website)"
          subtitleLabel="Section subtitle"
          title={pageContent.pastEventsGallery.title}
          subtitle={pageContent.pastEventsGallery.subtitle}
          onTitleChange={(value) =>
            setPageContent({
              ...pageContent,
              pastEventsGallery: { ...pageContent.pastEventsGallery, title: value },
            })
          }
          onSubtitleChange={(value) =>
            setPageContent({
              ...pageContent,
              pastEventsGallery: { ...pageContent.pastEventsGallery, subtitle: value },
            })
          }
        />

        <div className="space-y-3">
          {pastEvents.length > 0 ? (
            pastEvents.map((event) => (
              <EventRow key={event._id} event={event} onDelete={handleDelete} />
            ))
          ) : (
            <EmptyEvents message="No past events yet. Only events with a past date and uploaded gallery photos appear in the carousel." />
          )}
        </div>
      </section>

      {/* What We Offer */}
      <section className="space-y-4 pt-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
            <Sparkles size={22} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">What We Offer</h2>
            <p className="text-sm text-muted-foreground">
              Four highlight cards at the bottom of your events page
            </p>
          </div>
        </div>

        <SectionHeadingFields
          titleLabel="Section heading (shown on website)"
          subtitleLabel="Section subtitle"
          title={pageContent.whatWeOffer.title}
          subtitle={pageContent.whatWeOffer.subtitle}
          onTitleChange={(value) =>
            setPageContent({
              ...pageContent,
              whatWeOffer: { ...pageContent.whatWeOffer, title: value },
            })
          }
          onSubtitleChange={(value) =>
            setPageContent({
              ...pageContent,
              whatWeOffer: { ...pageContent.whatWeOffer, subtitle: value },
            })
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pageContent.whatWeOffer.items.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-xl border border-border bg-white space-y-3"
            >
              <p className="text-sm font-medium text-muted-foreground">Card {index + 1}</p>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input
                  value={item.title}
                  onChange={(e) => updateOfferItem(index, 'title', e.target.value)}
                  className="text-base"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  rows={3}
                  value={item.description}
                  onChange={(e) => updateOfferItem(index, 'description', e.target.value)}
                  className="text-base resize-none"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-end pt-2">
        <Link
          href="/events"
          target="_blank"
          className="inline-flex items-center gap-2 text-base font-medium text-secondary hover:underline"
        >
          Preview events page
          <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}
