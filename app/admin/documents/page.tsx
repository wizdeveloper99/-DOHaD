"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Loader2,
  FileText,
  Upload,
  Landmark,
  Users,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import {
  DEFAULT_POLICIES,
  GOVERNANCE_POLICY_KEYS,
  EQUITY_POLICY_KEYS,
  GOVERNANCE_POLICY_DISPLAY,
  normalizePolicies,
  type PolicyKey,
  type PolicyDocuments,
} from '@/lib/policy-documents';

const defaultPageSettings = {
  governancePage: {
    documentsSectionTitle: 'Official Documents',
    documentsSectionDescription:
      'Download or view our primary constitutional and guidelines files.',
  },
  equityDiversityPage: {
    policiesSectionTitle: 'Official Policies',
    policiesSectionDescription:
      'Download or view our detailed institutional guidelines on equity and safeguarding.',
  },
};

export default function DocumentsAdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [policies, setPolicies] = useState<PolicyDocuments>(DEFAULT_POLICIES);
  const [pageSettings, setPageSettings] = useState(defaultPageSettings);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/settings');
      const data = await res.json();
      if (data) {
        setPolicies(normalizePolicies(data.policies));
        setPageSettings({
          governancePage: {
            ...defaultPageSettings.governancePage,
            ...data.governancePage,
          },
          equityDiversityPage: {
            ...defaultPageSettings.equityDiversityPage,
            ...data.equityDiversityPage,
          },
        });
      }
      setHasLoaded(true);
    } catch {
      toast.error('Failed to fetch documents');
    } finally {
      setIsLoading(false);
    }
  };

  const saveSettings = async () => {
    setIsSaving(true);
    try {
      const updateRes = await fetch('/api/settings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          policies,
          governancePage: pageSettings.governancePage,
          equityDiversityPage: pageSettings.equityDiversityPage,
        }),
      });

      if (updateRes.ok) {
        setIsSaved(true);
      } else {
        toast.error('Failed to save changes');
      }
    } catch {
      toast.error('An error occurred while saving');
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (!hasLoaded) return;
    setIsSaved(false);
    const timer = setTimeout(() => saveSettings(), 1500);
    return () => clearTimeout(timer);
  }, [policies, pageSettings, hasLoaded]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, policyKey: PolicyKey) => {
    const file = e.target.files?.[0];
    if (!file) return;

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
      setPolicies((prev) => ({
        ...prev,
        [policyKey]: { ...prev[policyKey], url: data.secure_url },
      }));
      toast.success('Document uploaded successfully', { id: toastId });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Upload failed';
      toast.error(message, { id: toastId });
    }

    e.target.value = '';
  };

  const updatePolicy = (key: PolicyKey, field: 'title' | 'description' | 'url', value: string) => {
    setPolicies((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  const renderPolicyEditor = (key: PolicyKey, section: 'governance' | 'equity') => {
    const policy = policies[key];
    const displayTitle =
      section === 'governance' && GOVERNANCE_POLICY_DISPLAY[key]?.title
        ? GOVERNANCE_POLICY_DISPLAY[key]!.title
        : policy.title;

    return (
      <div key={`${section}-${key}`} className="p-4 rounded-xl border border-border bg-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <h4 className="font-semibold text-foreground">{displayTitle}</h4>
          {policy.url && (
            <a
              href={policy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-secondary hover:underline"
            >
              View current file
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        <div className="space-y-2">
          <Label>Display Title</Label>
          <Input
            value={policy.title}
            onChange={(e) => updatePolicy(key, 'title', e.target.value)}
            placeholder="Document title shown on the page"
          />
          {section === 'governance' && key === 'edi' && (
            <p className="text-xs text-muted-foreground">
              Shown as &quot;Inclusivity&quot; on the Governance page.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            rows={2}
            value={policy.description}
            onChange={(e) => updatePolicy(key, 'description', e.target.value)}
            placeholder="Short description shown on the download card"
          />
        </div>

        <div className="space-y-2">
          <Label>Document File</Label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Input
              value={policy.url}
              onChange={(e) => updatePolicy(key, 'url', e.target.value)}
              placeholder="Document URL"
              className="flex-1"
            />
            <div className="relative shrink-0">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileUpload(e, key)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button type="button" variant="outline" className="gap-2 w-full sm:w-auto">
                <Upload size={16} />
                Upload
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="p-12 flex flex-col items-center justify-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        <p className="text-muted-foreground">Loading documents...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Governance Documents</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage policy files and download sections for Governance and Equity &amp; Diversity pages.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium bg-card px-4 py-2 rounded-full border border-border shadow-sm">
          {isSaving ? (
            <span className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Loader2 size={16} className="animate-spin" />
              Saving...
            </span>
          ) : isSaved ? (
            <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All changes saved
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Unsaved changes
            </span>
          )}
        </div>
      </div>

      <Card className="border-border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Landmark className="text-secondary" size={20} />
            <CardTitle>Governance — Official Documents</CardTitle>
          </div>
          <CardDescription>
            Documents shown on{' '}
            <Link href="/who-are-we/governance" className="text-secondary hover:underline" target="_blank">
              /who-are-we/governance
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-muted/30 border border-border">
            <div className="space-y-2">
              <Label>Section Heading</Label>
              <Input
                value={pageSettings.governancePage.documentsSectionTitle}
                onChange={(e) =>
                  setPageSettings({
                    ...pageSettings,
                    governancePage: {
                      ...pageSettings.governancePage,
                      documentsSectionTitle: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label>Section Description</Label>
              <Textarea
                rows={2}
                value={pageSettings.governancePage.documentsSectionDescription}
                onChange={(e) =>
                  setPageSettings({
                    ...pageSettings,
                    governancePage: {
                      ...pageSettings.governancePage,
                      documentsSectionDescription: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="space-y-4">
            {GOVERNANCE_POLICY_KEYS.map((key) => renderPolicyEditor(key, 'governance'))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="text-secondary" size={20} />
            <CardTitle>Equity &amp; Diversity — Official Policies</CardTitle>
          </div>
          <CardDescription>
            Documents shown on{' '}
            <Link href="/who-are-we/equity-diversity" className="text-secondary hover:underline" target="_blank">
              /who-are-we/equity-diversity
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-muted/30 border border-border">
            <div className="space-y-2">
              <Label>Section Heading</Label>
              <Input
                value={pageSettings.equityDiversityPage.policiesSectionTitle}
                onChange={(e) =>
                  setPageSettings({
                    ...pageSettings,
                    equityDiversityPage: {
                      ...pageSettings.equityDiversityPage,
                      policiesSectionTitle: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label>Section Description</Label>
              <Textarea
                rows={2}
                value={pageSettings.equityDiversityPage.policiesSectionDescription}
                onChange={(e) =>
                  setPageSettings({
                    ...pageSettings,
                    equityDiversityPage: {
                      ...pageSettings.equityDiversityPage,
                      policiesSectionDescription: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="space-y-4">
            {EQUITY_POLICY_KEYS.map((key) => renderPolicyEditor(key, 'equity'))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-dashed border-border bg-muted/20">
        <CardContent className="pt-6 flex items-start gap-3">
          <FileText className="text-muted-foreground shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-muted-foreground">
            Upload PDF or Word documents (max 5MB). Changes appear on the public site automatically after saving.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
