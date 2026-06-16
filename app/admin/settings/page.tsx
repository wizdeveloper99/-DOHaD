"use client";

import { useState, useEffect } from 'react';
import { 
  Save, 
  Loader2, 
  Globe, 
  MessageSquare, 
  Share2,
  Info,
  FileText,
  Upload,
  BookOpen,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';

const defaultSettings = {
  hero: {
    headline: '',
    subheadline: '',
    ctaText: '',
    ctaLink: '',
  },
  about: {
    title: '',
    content: '',
  },
  learnDohad: {
    badge: 'Learn About DOHaD',
    title: 'What is DOHaD?',
    contentParagraph1: 'The Developmental Origins of Health and Disease (DOHaD) is a multidisciplinary field that examines how the environment during early development (conception, fetal life, infancy, and early childhood) interacts with genetic and other factors to shape lifelong health and the risk of non-communicable diseases (NCDs) like diabetes, heart disease, and obesity.',
    contentParagraph2: 'This paradigm shift moves health focus from adult lifestyle choices alone to the critical importance of early-life environments, providing a powerful framework for preventing chronic diseases across generations.',
    ctaText: 'Learn More at the International Society',
    ctaLink: 'https://dohadsoc.org/',
    showCard: true,
    cardImage: '/placeholder-user.jpg',
    cardName: 'Prof. David Barker',
    cardRole: 'Pioneer of the DOHaD paradigm',
  },
  socialLinks: {
    twitter: '',
    linkedin: '',
    facebook: '',
    instagram: '',
  },
  footerText: '',
};

export default function SettingsAdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState<any>(defaultSettings);
  const [isSaved, setIsSaved] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleCardImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    const toastId = toast.loading('Uploading image...');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'pioneer');

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await res.json();
      setSettings((prev: any) => ({
        ...prev,
        learnDohad: {
          ...prev.learnDohad,
          cardImage: data.secure_url,
        }
      }));
      toast.success('Image uploaded successfully', { id: toastId });
    } catch (error: any) {
      toast.error(error.message || 'Upload failed', { id: toastId });
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data) {
        setSettings({
          ...defaultSettings,
          ...data,
          hero: { ...defaultSettings.hero, ...data.hero },
          about: { ...defaultSettings.about, ...data.about },
          learnDohad: { ...defaultSettings.learnDohad, ...data.learnDohad },
          socialLinks: { ...defaultSettings.socialLinks, ...data.socialLinks },
        });
      }
      setHasLoaded(true);
    } catch (error) {
      toast.error('Failed to fetch settings');
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      const currentRes = await fetch('/api/settings');
      const current = await currentRes.json();

      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...current,
          ...settings,
          policies: current.policies,
          governancePage: current.governancePage,
          equityDiversityPage: current.equityDiversityPage,
        }),
      });

      if (res.ok) {
        setIsSaved(true);
      } else {
        toast.error('Failed to auto-save settings');
      }
    } catch (error) {
      toast.error('An error occurred during auto-save');
    } finally {
      setIsSaving(false);
    }
  };

  // Debounced auto-save effect
  useEffect(() => {
    if (!hasLoaded) return;

    setIsSaved(false);

    const delayDebounce = setTimeout(() => {
      saveSettings();
    }, 1500);

    return () => clearTimeout(delayDebounce);
  }, [settings, hasLoaded]);

  if (isLoading) {
    return (
      <div className="p-12 flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        <p className="text-muted-foreground">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Site Settings</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage homepage content and global site details.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium bg-card px-4 py-2 rounded-full border border-border shadow-sm w-full sm:w-auto justify-center sm:justify-start">
          {isSaving ? (
            <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Loader2 size={16} className="animate-spin" />
              Saving changes...
            </span>
          ) : isSaved ? (
            <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All changes saved
            </span>
          ) : (
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Unsaved changes
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Hero Section */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="text-secondary" size={20} />
              <CardTitle>Hero Section</CardTitle>
            </div>
            <CardDescription>Main headline and call-to-action on the homepage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Hero Headline</Label>
              <Input 
                value={settings.hero?.headline} 
                onChange={(e) => setSettings({
                  ...settings, 
                  hero: { ...settings.hero, headline: e.target.value }
                })} 
              />
            </div>
            <div className="space-y-2">
              <Label>Hero Subheadline</Label>
              <Textarea 
                value={settings.hero?.subheadline} 
                onChange={(e) => setSettings({
                  ...settings, 
                  hero: { ...settings.hero, subheadline: e.target.value }
                })} 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>CTA Button Text</Label>
                <Input 
                  value={settings.hero?.ctaText} 
                  onChange={(e) => setSettings({
                    ...settings, 
                    hero: { ...settings.hero, ctaText: e.target.value }
                  })} 
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Button Link</Label>
                <Input 
                  value={settings.hero?.ctaLink} 
                  onChange={(e) => setSettings({
                    ...settings, 
                    hero: { ...settings.hero, ctaLink: e.target.value }
                  })} 
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="text-secondary" size={20} />
              <CardTitle>About Section</CardTitle>
            </div>
            <CardDescription>Manage the introductory content on the homepage.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Section Title</Label>
              <Input 
                value={settings.about?.title} 
                onChange={(e) => setSettings({
                  ...settings, 
                  about: { ...settings.about, title: e.target.value }
                })} 
              />
            </div>
            <div className="space-y-2">
              <Label>About Content</Label>
              <Textarea 
                rows={6}
                value={settings.about?.content} 
                onChange={(e) => setSettings({
                  ...settings, 
                  about: { ...settings.about, content: e.target.value }
                })} 
              />
            </div>
          </CardContent>
        </Card>

        {/* Learn About DOHaD Section */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="text-secondary" size={20} />
              <CardTitle>Learn About DOHaD Section</CardTitle>
            </div>
            <CardDescription>Manage the "What is DOHaD?" introductory section and the Pioneer photo card.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Section Badge & Title */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Section Badge</Label>
                <Input 
                  value={settings.learnDohad?.badge} 
                  onChange={(e) => setSettings({
                    ...settings, 
                    learnDohad: { ...settings.learnDohad, badge: e.target.value }
                  })} 
                  placeholder="e.g. Learn About DOHaD"
                />
              </div>
              <div className="space-y-2">
                <Label>Section Heading/Title</Label>
                <Input 
                  value={settings.learnDohad?.title} 
                  onChange={(e) => setSettings({
                    ...settings, 
                    learnDohad: { ...settings.learnDohad, title: e.target.value }
                  })} 
                  placeholder="e.g. What is DOHaD?"
                />
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-2">
              <Label>Content Paragraph 1</Label>
              <Textarea 
                rows={3}
                value={settings.learnDohad?.contentParagraph1} 
                onChange={(e) => setSettings({
                  ...settings, 
                  learnDohad: { ...settings.learnDohad, contentParagraph1: e.target.value }
                })} 
                placeholder="First paragraph..."
              />
            </div>
            <div className="space-y-2">
              <Label>Content Paragraph 2</Label>
              <Textarea 
                rows={3}
                value={settings.learnDohad?.contentParagraph2} 
                onChange={(e) => setSettings({
                  ...settings, 
                  learnDohad: { ...settings.learnDohad, contentParagraph2: e.target.value }
                })} 
                placeholder="Second paragraph (optional)..."
              />
            </div>

            {/* CTA links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>CTA Link Text</Label>
                <Input 
                  value={settings.learnDohad?.ctaText} 
                  onChange={(e) => setSettings({
                    ...settings, 
                    learnDohad: { ...settings.learnDohad, ctaText: e.target.value }
                  })} 
                  placeholder="e.g. Learn More at the International Society"
                />
              </div>
              <div className="space-y-2">
                <Label>CTA Link URL</Label>
                <Input 
                  value={settings.learnDohad?.ctaLink} 
                  onChange={(e) => setSettings({
                    ...settings, 
                    learnDohad: { ...settings.learnDohad, ctaLink: e.target.value }
                  })} 
                  placeholder="e.g. https://dohadsoc.org/"
                />
              </div>
            </div>

            <hr className="border-border my-6" />

            {/* Pioneer Card Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Pioneer Photo Card (Barker Card)</h4>
                  <p className="text-xs text-muted-foreground">Toggle visibility or customize details of the pioneer profile card.</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="showCard"
                    checked={settings.learnDohad?.showCard !== false}
                    onChange={(e) => setSettings({
                      ...settings,
                      learnDohad: { ...settings.learnDohad, showCard: e.target.checked }
                    })}
                    className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary accent-secondary"
                  />
                  <Label htmlFor="showCard" className="cursor-pointer font-medium text-sm">Show Card</Label>
                </div>
              </div>

              {(settings.learnDohad?.showCard !== false) && (
                <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-6 p-4 rounded-xl bg-muted/30 border border-border">
                  {/* Photo Upload */}
                  <div className="space-y-2 flex flex-col items-center">
                    <Label className="self-start text-xs font-semibold">Profile Photo</Label>
                    <div className="relative w-32 h-40 bg-card rounded-lg overflow-hidden border border-border flex items-center justify-center group shadow-inner">
                      {settings.learnDohad?.cardImage ? (
                        <img 
                          src={settings.learnDohad.cardImage} 
                          alt="Pioneer" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <ImageIcon size={32} className="text-muted-foreground" />
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <label className="cursor-pointer text-white text-xs bg-secondary/80 px-2.5 py-1.5 rounded-full hover:bg-secondary transition-all font-semibold flex items-center gap-1">
                          <Upload size={12} />
                          Upload
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleCardImageUpload} 
                          />
                        </label>
                      </div>
                    </div>
                    {settings.learnDohad?.cardImage ? (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setSettings({
                          ...settings,
                          learnDohad: {
                            ...settings.learnDohad,
                            cardImage: ""
                          }
                        })}
                        className="text-xs text-destructive hover:text-destructive/90 hover:bg-destructive/10 h-7 px-2 mt-1"
                      >
                        Remove Photo
                      </Button>
                    ) : null}
                  </div>

                  {/* Name and Subtitle */}
                  <div className="space-y-4 flex-1 justify-center flex flex-col">
                    <div className="space-y-2">
                      <Label>Pioneer Name</Label>
                      <Input 
                        value={settings.learnDohad?.cardName} 
                        onChange={(e) => setSettings({
                          ...settings, 
                          learnDohad: { ...settings.learnDohad, cardName: e.target.value }
                        })} 
                        placeholder="e.g. Prof. David Barker"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Pioneer Role / Subtitle</Label>
                      <Input 
                        value={settings.learnDohad?.cardRole} 
                        onChange={(e) => setSettings({
                          ...settings, 
                          learnDohad: { ...settings.learnDohad, cardRole: e.target.value }
                        })} 
                        placeholder="e.g. Pioneer of the DOHaD paradigm"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Share2 className="text-secondary" size={20} />
              <CardTitle>Social Media Links</CardTitle>
            </div>
            <CardDescription>Configure links to your social media profiles.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Twitter (X) URL</Label>
              <Input 
                value={settings.socialLinks?.twitter} 
                onChange={(e) => setSettings({
                  ...settings, 
                  socialLinks: { ...settings.socialLinks, twitter: e.target.value }
                })} 
                placeholder="https://twitter.com/..."
              />
            </div>
            <div className="space-y-2">
              <Label>LinkedIn URL</Label>
              <Input 
                value={settings.socialLinks?.linkedin} 
                onChange={(e) => setSettings({
                  ...settings, 
                  socialLinks: { ...settings.socialLinks, linkedin: e.target.value }
                })} 
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div className="space-y-2">
              <Label>Facebook URL</Label>
              <Input 
                value={settings.socialLinks?.facebook} 
                onChange={(e) => setSettings({
                  ...settings, 
                  socialLinks: { ...settings.socialLinks, facebook: e.target.value }
                })} 
                placeholder="https://facebook.com/..."
              />
            </div>
            <div className="space-y-2">
              <Label>Instagram URL</Label>
              <Input 
                value={settings.socialLinks?.instagram} 
                onChange={(e) => setSettings({
                  ...settings, 
                  socialLinks: { ...settings.socialLinks, instagram: e.target.value }
                })} 
                placeholder="https://instagram.com/..."
              />
            </div>
          </CardContent>
        </Card>

        {/* Policy Documents — managed in Documents section */}
        <Card className="border-border shadow-sm border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="text-secondary" size={20} />
              <CardTitle>Policy Documents</CardTitle>
            </div>
            <CardDescription>
              Governance and equity policy files are now managed in the Documents section.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="gap-2">
              <a href="/admin/documents">
                <FileText size={16} />
                Manage Documents
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="text-secondary" size={20} />
              <CardTitle>Footer Information</CardTitle>
            </div>
            <CardDescription>Global footer text and copyright info.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Footer Custom Text</Label>
              <Textarea 
                value={settings.footerText} 
                onChange={(e) => setSettings({
                  ...settings, 
                  footerText: e.target.value
                })} 
                placeholder="e.g. Registered non-profit society in India..."
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
