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
  Upload
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';

export default function SettingsAdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState<any>({
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
    socialLinks: {
      twitter: '',
      linkedin: '',
      facebook: '',
      instagram: '',
    },
    policies: {
      constitution: '',
      governance: '',
      codeOfConduct: '',
      edi: '',
      safeguarding: '',
    },
    footerText: '',
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, policyKey: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }

    const toastId = toast.loading('Uploading document...');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'policies');

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
        policies: {
          ...prev.policies,
          [policyKey]: data.secure_url,
        }
      }));
      toast.success('Document uploaded successfully', { id: toastId });
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
      if (data) setSettings(data);
    } catch (error) {
      toast.error('Failed to fetch settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        toast.success('Settings saved successfully');
      } else {
        toast.error('Failed to save settings');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setIsSaving(false);
    }
  };

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
        <Button 
          className="rounded-full bg-secondary hover:bg-secondary/90 gap-2 px-6 w-full sm:w-auto"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Changes
        </Button>
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

        {/* Policy Documents */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="text-secondary" size={20} />
              <CardTitle>Policy Documents</CardTitle>
            </div>
            <CardDescription>Upload PDF or Word documents for society policies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { key: 'constitution', label: 'Constitution' },
              { key: 'governance', label: 'Governance Guidelines' },
              { key: 'codeOfConduct', label: 'Code of Conduct' },
              { key: 'edi', label: 'EDI Policy' },
              { key: 'safeguarding', label: 'Safeguarding Policy' },
            ].map((policy) => (
              <div key={policy.key} className="space-y-2">
                <Label>{policy.label}</Label>
                <div className="flex items-center gap-4">
                  <Input
                    value={settings.policies?.[policy.key] || ''}
                    onChange={(e) => setSettings({
                      ...settings,
                      policies: { ...settings.policies, [policy.key]: e.target.value }
                    })}
                    placeholder={`URL for ${policy.label}`}
                    className="flex-1"
                  />
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, policy.key)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button type="button" variant="outline" className="gap-2">
                      <Upload size={16} />
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            ))}
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

      <div className="flex justify-end pt-4">
        <Button 
          className="rounded-full bg-secondary hover:bg-secondary/90 gap-2 px-8 py-6 text-base sm:text-lg w-full sm:w-auto"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
          Save All Changes
        </Button>
      </div>
    </div>
  );
}
