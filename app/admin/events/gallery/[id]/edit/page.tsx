"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, X, Loader2, Plus, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';

export default function EditGalleryEntryPage() {
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    startDate: '',
    location: '',
    galleryImages: [] as string[],
    eventType: 'conference',
    published: true,
  });

  useEffect(() => {
    if (id) fetchEvent();
  }, [id]);

  const fetchEvent = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/events/${id}`);
      const data = await res.json();
      if (data) {
        if (data.startDate) data.startDate = data.startDate.split('T')[0];
        setFormData({
          title: data.title ?? '',
          slug: data.slug ?? '',
          shortDescription: data.shortDescription ?? '',
          startDate: data.startDate ?? '',
          location: data.location ?? '',
          galleryImages: data.galleryImages ?? [],
          eventType: data.eventType ?? 'conference',
          published: data.published ?? true,
        });
      }
    } catch {
      toast.error('Failed to load gallery entry');
    } finally {
      setIsLoading(false);
    }
  };

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

    setIsSaving(true);
    try {
      const res = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, published: true }),
      });

      if (res.ok) {
        toast.success('Gallery updated');
        router.push('/admin/events');
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.error || 'Failed to update');
      }
    } catch {
      toast.error('An error occurred');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-12 flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

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
        <h1 className="text-3xl font-bold text-foreground">Edit Gallery Entry</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Update photos and details for this past event in the gallery carousel.
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
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="startDate">Event date*</Label>
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
            disabled={isSaving}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-full bg-secondary hover:bg-secondary/90 px-8"
            disabled={isSaving || isUploading}
          >
            {isSaving ? <Loader2 className="animate-spin mr-2" size={18} /> : <Save className="mr-2" size={18} />}
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}
