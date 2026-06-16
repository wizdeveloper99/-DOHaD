"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload, X, Loader2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';
import { isUpcomingEvent } from '@/lib/event-dates';

export default function NewGalleryEntryPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    startDate: '',
    location: '',
    galleryImages: [] as string[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('folder', 'events');

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: uploadData });
      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setFormData((prev) => ({
        ...prev,
        galleryImages: [...prev.galleryImages, data.secure_url],
      }));
      toast.success('Photo uploaded');
    } catch {
      toast.error('Photo upload failed');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.galleryImages.length === 0) {
      toast.error('Upload at least one photo');
      return;
    }

    if (formData.startDate && isUpcomingEvent(formData.startDate)) {
      toast.error('Event date must be in the past');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          shortDescription: formData.shortDescription,
          startDate: formData.startDate,
          location: formData.location,
          galleryImages: formData.galleryImages,
          eventType: 'conference',
          published: true,
        }),
      });

      if (res.ok) {
        toast.success('Added to gallery');
        router.push('/admin/events');
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.error || 'Failed to save');
      }
    } catch {
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto pb-20">
      <div className="mb-8">
        <Button
          variant="ghost"
          className="mb-4 text-muted-foreground hover:text-foreground p-0 gap-2"
          onClick={() => router.push('/admin/events')}
        >
          <ArrowLeft size={16} />
          Back to Events
        </Button>
        <h1 className="text-3xl font-bold text-foreground">Add to Past Events Gallery</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Add photos from a past event. They appear in the carousel on your public events page.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event name*</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="e.g. Public Health Summit 2025"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">When did it happen?*</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location (optional)</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g. Chennai, India"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="shortDescription">Caption*</Label>
            <Textarea
              id="shortDescription"
              name="shortDescription"
              rows={3}
              value={formData.shortDescription}
              onChange={handleInputChange}
              required
              placeholder="A short line shown below the photos in the gallery..."
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
          <div>
            <Label>Photos*</Label>
            <p className="text-xs text-muted-foreground mt-1">
              Upload one or more photos. All photos are shown in the gallery carousel.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {formData.galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
                <Image src={img} alt={`Photo ${idx + 1}`} fill className="object-cover" />
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      galleryImages: prev.galleryImages.filter((_, i) => i !== idx),
                    }))
                  }
                  className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            <label className="aspect-square bg-muted rounded-lg border-2 border-dashed flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-muted/80 transition-colors">
              {isUploading ? (
                <Loader2 className="animate-spin text-secondary" size={24} />
              ) : (
                <>
                  <Plus className="text-muted-foreground" size={24} />
                  <span className="text-xs text-muted-foreground">Add photo</span>
                </>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
              />
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => router.push('/admin/events')}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-full bg-secondary hover:bg-secondary/90 px-8"
            disabled={isLoading || isUploading}
          >
            {isLoading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
            Save to Gallery
          </Button>
        </div>
      </form>
    </div>
  );
}
