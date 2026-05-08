"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Calendar,
  MapPin,
  CheckCircle2,
  XCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';
import Image from 'next/image';

export default function EventsAdminPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/events');
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      toast.error('Failed to fetch events');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Event deleted');
        setEvents(events.filter(e => e._id !== id));
      } else {
        toast.error('Delete failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (event.location && event.location.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Events</h1>
          <p className="text-muted-foreground mt-1">Manage workshops, webinars, and conferences.</p>
        </div>
        <Link href="/admin/events/new">
          <Button className="rounded-full bg-secondary hover:bg-secondary/90 gap-2">
            <Plus size={18} />
            Create Event
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search events..." 
            className="pl-10 border-none bg-muted/30 focus-visible:ring-secondary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            <p className="text-muted-foreground">Loading events...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-muted-foreground" size={32} />
            </div>
            <h3 className="text-lg font-semibold">No events found</h3>
            <p className="text-muted-foreground">Try adjusting your search or create a new event.</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="w-[300px]">Event</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event._id} className="hover:bg-muted/10 transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        {event.featuredImage ? (
                          <Image 
                            src={event.featuredImage} 
                            alt={event.title} 
                            fill 
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Calendar className="text-muted-foreground" size={20} />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground line-clamp-1">{event.title}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                          <MapPin size={12} />
                          <span className="line-clamp-1">{event.location || 'Online'}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="capitalize px-2.5 py-0.5 bg-secondary/10 text-secondary text-xs font-semibold rounded-full border border-secondary/20">
                      {event.eventType}
                    </span>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">
                      {new Date(event.startDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </TableCell>
                  <TableCell>
                    {event.published ? (
                      <div className="flex items-center gap-1.5 text-green-600 text-xs font-medium">
                        <CheckCircle2 size={14} />
                        Published
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
                        <XCircle size={14} />
                        Draft
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40 rounded-xl">
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/events/${event._id}/edit`} className="flex items-center gap-2 cursor-pointer">
                            <Edit2 size={14} /> Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/events/${event.slug}`} target="_blank" className="flex items-center gap-2 cursor-pointer">
                            <ExternalLink size={14} /> View Live
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="flex items-center gap-2 text-destructive focus:text-destructive cursor-pointer"
                          onClick={() => handleDelete(event._id)}
                        >
                          <Trash2 size={14} /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
