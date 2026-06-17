"use client";

import { useState, useEffect, useRef } from 'react';
import {
  Plus,
  Trash2,
  Loader2,
  Users,
  Upload,
  X,
  Edit,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import Image from 'next/image';
import {
  DEFAULT_WHO_WE_ARE_PAGE,
  WHO_WE_ARE_SECTIONS,
  WHO_WE_ARE_SECTION_LABELS,
  type WhoWeAreSection,
} from '@/lib/who-we-are-defaults';

type MemberFormData = {
  _id: string;
  name: string;
  designation: string;
  organization: string;
  additionalRole: string;
  shortBio: string;
  fullBio: string;
  profileImage: string;
  linkedinUrl: string;
  displayOrder: number;
  featured: boolean;
  section: WhoWeAreSection;
};

const defaultFormData: MemberFormData = {
  _id: '',
  name: '',
  designation: '',
  organization: '',
  additionalRole: '',
  shortBio: '',
  fullBio: '',
  profileImage: '',
  linkedinUrl: '',
  displayOrder: 0,
  featured: false,
  section: WHO_WE_ARE_SECTIONS.EXECUTIVE_COUNCIL,
};

export default function WhoWeAreAdminPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<MemberFormData>(defaultFormData);
  const photoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/advisory?admin=true', { cache: 'no-store' });
      const data = await res.json();
      setMembers(Array.isArray(data) ? data : []);
    } catch {
      toast.error('Failed to fetch members');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('folder', 'advisory');

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!res.ok) throw new Error('Upload failed');

      const data = await res.json();
      setFormData((prev) => ({ ...prev, profileImage: data.secure_url }));
      toast.success('Image uploaded');
    } catch {
      toast.error('Upload failed');
    } finally {
      setIsUploading(false);
      e.target.value = '';
    }
  };

  const handleOpenEdit = (member: any) => {
    setFormData({
      _id: member._id,
      name: member.name || '',
      designation: member.designation || '',
      organization: member.organization || '',
      additionalRole: member.additionalRole || '',
      shortBio: member.shortBio || '',
      fullBio: member.fullBio || '',
      profileImage: member.profileImage || '',
      linkedinUrl: member.linkedinUrl || '',
      displayOrder: member.displayOrder || 0,
      featured: member.featured || false,
      section: member.section || WHO_WE_ARE_SECTIONS.ADVISORY_GROUP,
    });
    setIsOpen(true);
  };

  const handleOpenAdd = (section: WhoWeAreSection) => {
    setFormData({ ...defaultFormData, section });
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    const isEdit = !!formData._id;
    const url = isEdit ? `/api/advisory/${formData._id}` : '/api/advisory';
    const method = isEdit ? 'PUT' : 'POST';

    const payload = { ...formData };
    delete (payload as { _id?: string })._id;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast.success(`Member ${isEdit ? 'updated' : 'added'}`);
        setIsOpen(false);
        fetchMembers();
      } else {
        toast.error(`Failed to ${isEdit ? 'update' : 'add'} member`);
      }
    } catch {
      toast.error('An error occurred');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this member?')) return;
    try {
      const res = await fetch(`/api/advisory/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Member removed');
        setMembers(members.filter((m) => m._id !== id));
      }
    } catch {
      toast.error('Failed to delete');
    }
  };

  const executiveMembers = members
    .filter((m) => m.section === WHO_WE_ARE_SECTIONS.EXECUTIVE_COUNCIL)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
  const advisoryMembers = members
    .filter((m) => m.section === WHO_WE_ARE_SECTIONS.ADVISORY_GROUP)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Who We Are</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage Executive Council and Advisory Group members.
        </p>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
          <DialogHeader>
            <DialogTitle>{formData._id ? 'Edit Member' : 'Add New Member'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Section</Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={formData.section}
                onChange={(e) =>
                  setFormData({ ...formData, section: e.target.value as WhoWeAreSection })
                }
              >
                <option value={WHO_WE_ARE_SECTIONS.EXECUTIVE_COUNCIL}>
                  {WHO_WE_ARE_SECTION_LABELS['executive-council']}
                </option>
                <option value={WHO_WE_ARE_SECTIONS.ADVISORY_GROUP}>
                  {WHO_WE_ARE_SECTION_LABELS['advisory-group']}
                </option>
              </select>
            </div>

            <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
              <div>
                <Label>Profile Photo</Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Upload or replace the member&apos;s headshot. Square images work best (400×400px or larger).
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative w-32 h-32 bg-muted rounded-full overflow-hidden border-2 border-dashed border-border flex items-center justify-center">
                  {formData.profileImage ? (
                    <Image src={formData.profileImage} alt="Preview" fill className="object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-muted-foreground" />
                  )}
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Loader2 className="animate-spin text-white" size={24} />
                    </div>
                  )}
                </div>
                <input
                  ref={photoInputRef}
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-full gap-1.5"
                    disabled={isUploading}
                    onClick={() => photoInputRef.current?.click()}
                  >
                    <Upload size={14} />
                    {formData.profileImage ? 'Change Photo' : 'Upload Photo'}
                  </Button>
                  {formData.profileImage && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="rounded-full text-destructive hover:text-destructive hover:bg-destructive/10 gap-1.5"
                      disabled={isUploading}
                      onClick={() => setFormData((prev) => ({ ...prev, profileImage: '' }))}
                    >
                      <X size={14} />
                      Remove Photo
                    </Button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Designation / Title</Label>
                <Input
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  required
                  placeholder="e.g. President / Advisor"
                />
              </div>
              <div className="space-y-2">
                <Label>Organization / Affiliation</Label>
                <Input
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Additional Role (optional)</Label>
                <Input
                  value={formData.additionalRole}
                  onChange={(e) => setFormData({ ...formData, additionalRole: e.target.value })}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>LinkedIn URL</Label>
                <Input
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div className="space-y-2">
                <Label>Display Order (0 is first)</Label>
                <Input
                  type="number"
                  value={formData.displayOrder}
                  onChange={(e) =>
                    setFormData({ ...formData, displayOrder: parseInt(e.target.value, 10) || 0 })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Short Bio</Label>
              <Textarea
                value={formData.shortBio}
                onChange={(e) => setFormData({ ...formData, shortBio: e.target.value })}
                rows={2}
                placeholder="Shown on Executive Council cards"
              />
            </div>

            <div className="space-y-2">
              <Label>Full Bio</Label>
              <Textarea
                value={formData.fullBio}
                onChange={(e) => setFormData({ ...formData, fullBio: e.target.value })}
                rows={5}
                placeholder="Shown in Advisory Group detail dialog"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
              />
              <Label htmlFor="featured">Featured Member (Show on Homepage)</Label>
            </div>

            <DialogFooter>
              <Button type="submit" className="rounded-full bg-secondary w-full" disabled={isSaving || isUploading}>
                {isSaving ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                {formData._id ? 'Update Member' : 'Save Member'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {isLoading ? (
        <div className="p-12 flex flex-col items-center justify-center gap-4 bg-white rounded-xl border">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
          <p className="text-muted-foreground">Loading members...</p>
        </div>
      ) : (
        <>
          <MemberSection
            title={DEFAULT_WHO_WE_ARE_PAGE.executiveCouncil.title}
            description={DEFAULT_WHO_WE_ARE_PAGE.executiveCouncil.description}
            members={executiveMembers}
            onAdd={() => handleOpenAdd(WHO_WE_ARE_SECTIONS.EXECUTIVE_COUNCIL)}
            onEdit={handleOpenEdit}
            onDelete={handleDelete}
          />
          <MemberSection
            title={DEFAULT_WHO_WE_ARE_PAGE.advisoryGroup.title}
            description={DEFAULT_WHO_WE_ARE_PAGE.advisoryGroup.description}
            members={advisoryMembers}
            onAdd={() => handleOpenAdd(WHO_WE_ARE_SECTIONS.ADVISORY_GROUP)}
            onEdit={handleOpenEdit}
            onDelete={handleDelete}
          />
        </>
      )}
    </div>
  );
}

function MemberSection({
  title,
  description,
  members,
  onAdd,
  onEdit,
  onDelete,
}: {
  title: string;
  description: string;
  members: any[];
  onAdd: () => void;
  onEdit: (member: any) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 sm:p-6 border-b">
        <div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
        <Button onClick={onAdd} className="rounded-full bg-secondary hover:bg-secondary/90 gap-2 shrink-0">
          <Plus size={18} />
          Add Member
        </Button>
      </div>

      {members.length === 0 ? (
        <div className="p-12 text-center">
          <Users className="text-muted-foreground mx-auto mb-4" size={32} />
          <h3 className="text-lg font-semibold">No members yet</h3>
          <p className="text-sm text-muted-foreground mt-1">Add members to this section.</p>
        </div>
      ) : (
        <>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/30 border-b">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground w-16">#</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Member</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">Designation</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-muted-foreground">LinkedIn</th>
                  <th className="text-right px-4 py-3 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member._id} className="border-b last:border-0 hover:bg-muted/10 transition-colors">
                    <td className="px-4 py-3 font-mono text-muted-foreground">{member.displayOrder}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted flex-shrink-0">
                          {member.profileImage ? (
                            <Image src={member.profileImage} alt={member.name} fill className="object-cover" />
                          ) : (
                            <Users className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                          )}
                        </div>
                        <span className="font-semibold">{member.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{member.designation}</td>
                    <td className="px-4 py-3 text-sm max-w-[200px] truncate">
                      {member.linkedinUrl ? (
                        <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                          {member.linkedinUrl}
                        </a>
                      ) : (
                        '\u2014'
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button variant="ghost" size="icon" className="rounded-full" onClick={() => onEdit(member)}>
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full text-destructive" onClick={() => onDelete(member._id)}>
                        <Trash2 size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden divide-y">
            {members.map((member) => (
              <div key={member._id} className="p-4 flex items-start gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  {member.profileImage ? (
                    <Image src={member.profileImage} alt={member.name} fill className="object-cover" />
                  ) : (
                    <Users className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.designation}</p>
                  {member.linkedinUrl && (
                    <p className="text-[10px] text-secondary truncate mt-0.5">{member.linkedinUrl}</p>
                  )}
                  <span className="text-[10px] font-mono text-muted-foreground mt-1 inline-block">
                    #{member.displayOrder}
                  </span>
                </div>
                <div className="flex gap-1 shrink-0">
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8" onClick={() => onEdit(member)}>
                    <Edit size={14} />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-destructive" onClick={() => onDelete(member._id)}>
                    <Trash2 size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
