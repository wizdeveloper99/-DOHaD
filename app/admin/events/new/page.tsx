"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Upload, 
  X, 
  Loader2, 
  Image as ImageIcon,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import Image from 'next/image';

export default function NewEventPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    fullDescription: '',
    featuredImage: '',
    galleryImages: [] as string[],
    startDate: '',
    endDate: '',
    location: '',
    speakerNames: [] as string[],
    category: '',
    registrationLink: '',
    eventType: 'conference',
    featured: false,
    published: true,
  });

  const [speakerInput, setSpeakerInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-generate slug from title
    if (name === 'title' && !formData.slug) {
      const generatedSlug = value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isGallery = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('folder', 'events');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!res.ok) throw new Error('Upload failed');
      
      const data = await res.json();
      
      if (isGallery) {
        setFormData(prev => ({
          ...prev,
          galleryImages: [...prev.galleryImages, data.secure_url]
        }));
      } else {
        setFormData(prev => ({ ...prev, featuredImage: data.secure_url }));
      }
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Image upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const addSpeaker = () => {
    if (speakerInput.trim()) {
      setFormData(prev => ({
        ...prev,
        speakerNames: [...prev.speakerNames, speakerInput.trim()]
      }));
      setSpeakerInput('');
    }
  };

  const removeSpeaker = (index: number) => {
    setFormData(prev => ({
      ...prev,
      speakerNames: prev.speakerNames.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Event created successfully');
        router.push('/admin/events');
        router.refresh();
      } else {
        const error = await res.json();
        toast.error(error.error || 'Failed to create event');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          className="mb-4 text-muted-foreground hover:text-foreground p-0 gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft size={16} />
          Back to Events
        </Button>
        <h1 className="text-3xl font-bold text-foreground">Create New Event</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Basic Information</h2>
              
              <div className="space-y-2">
                <Label htmlFor="title">Event Title*</Label>
                <Input 
                  id="title" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="e.g. Annual DOHaD Conference 2026"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)*</Label>
                <Input 
                  id="slug" 
                  name="slug" 
                  value={formData.slug} 
                  onChange={handleInputChange} 
                  required 
                  placeholder="annual-conference-2026"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Event Type</Label>
                  <Select 
                    value={formData.eventType} 
                    onValueChange={(val) => setFormData(prev => ({ ...prev, eventType: val }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="webinar">Webinar</SelectItem>
                      <SelectItem value="seminar">Seminar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input 
                    id="category" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleInputChange} 
                    placeholder="e.g. Research"
                  />
                </div>
              </div>
            </div>

            {/* Date and Location */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Date & Location</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date*</Label>
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
                  <Label htmlFor="endDate">End Date</Label>
                  <Input 
                    id="endDate" 
                    name="endDate" 
                    type="date" 
                    value={formData.endDate} 
                    onChange={handleInputChange} 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleInputChange} 
                  placeholder="e.g. AIIMS Delhi / Zoom Online"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationLink">Registration Link</Label>
                <Input 
                  id="registrationLink" 
                  name="registrationLink" 
                  value={formData.registrationLink} 
                  onChange={handleInputChange} 
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Media */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Event Media</h2>
              
              <div className="space-y-2">
                <Label>Featured Image</Label>
                <div className="relative aspect-video bg-muted rounded-xl border-2 border-dashed flex flex-col items-center justify-center overflow-hidden">
                  {formData.featuredImage ? (
                    <>
                      <Image src={formData.featuredImage} alt="Preview" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, featuredImage: '' }))}
                        className="absolute top-2 right-2 bg-destructive text-white p-1 rounded-full shadow-lg"
                      >
                        <X size={14} />
                      </button>
                    </>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center gap-2 p-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                        {isUploading ? <Loader2 className="animate-spin text-secondary" /> : <Upload className="text-secondary" />}
                      </div>
                      <span className="text-xs text-muted-foreground font-medium text-center">Click to upload featured image</span>
                      <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e)} disabled={isUploading} />
                    </label>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Gallery Images</Label>
                <div className="grid grid-cols-3 gap-2">
                  {formData.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-square bg-muted rounded-lg overflow-hidden group">
                      <Image src={img} alt="Gallery" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, galleryImages: prev.galleryImages.filter((_, i) => i !== idx) }))}
                        className="absolute top-1 right-1 bg-black/50 text-white p-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                  <label className="aspect-square bg-muted rounded-lg border-2 border-dashed flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors">
                    <Plus className="text-muted-foreground" size={20} />
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, true)} disabled={isUploading} />
                  </label>
                </div>
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Speakers</h2>
              
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter speaker name" 
                  value={speakerInput} 
                  onChange={(e) => setSpeakerInput(e.target.value)} 
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSpeaker())}
                />
                <Button type="button" variant="outline" onClick={addSpeaker}>Add</Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {formData.speakerNames.map((speaker, idx) => (
                  <div key={idx} className="flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                    {speaker}
                    <button type="button" onClick={() => removeSpeaker(idx)}><X size={12} /></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-4">
              <h2 className="text-lg font-semibold border-b pb-2">Publishing</h2>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Published Status</Label>
                  <p className="text-xs text-muted-foreground">Visible on the website</p>
                </div>
                <Switch 
                  checked={formData.published} 
                  onCheckedChange={(val) => setFormData(prev => ({ ...prev, published: val }))} 
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Featured Event</Label>
                  <p className="text-xs text-muted-foreground">Show at the top of the events page</p>
                </div>
                <Switch 
                  checked={formData.featured} 
                  onCheckedChange={(val) => setFormData(prev => ({ ...prev, featured: val }))} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
          <h2 className="text-lg font-semibold border-b pb-2">Event Content</h2>
          
          <div className="space-y-2">
            <Label htmlFor="shortDescription">Short Description (Summary)*</Label>
            <Textarea 
              id="shortDescription" 
              name="shortDescription" 
              rows={3} 
              value={formData.shortDescription} 
              onChange={handleInputChange} 
              required 
              placeholder="A brief summary for the event card..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fullDescription">Full Description / Agenda</Label>
            <Textarea 
              id="fullDescription" 
              name="fullDescription" 
              rows={8} 
              value={formData.fullDescription} 
              onChange={handleInputChange} 
              placeholder="Detailed information about the event, agenda, etc..."
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button 
            type="button" 
            variant="outline" 
            className="rounded-full"
            onClick={() => router.back()}
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
            Create Event
          </Button>
        </div>
      </form>
    </div>
  );
}
