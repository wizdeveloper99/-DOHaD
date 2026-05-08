"use client";

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Loader2,
  Users,
  Upload,
  X,
  Edit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { toast } from 'sonner';
import Image from 'next/image';

const defaultFormData = {
  _id: '',
  name: '',
  designation: '',
  organization: '',
  shortBio: '',
  fullBio: '',
  profileImage: '',
  displayOrder: 0,
  featured: false
};

export default function AdvisoryAdminPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/advisory');
      const data = await res.json();
      setMembers(data);
    } catch (error) {
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
      setFormData(prev => ({ ...prev, profileImage: data.secure_url }));
      toast.success('Image uploaded');
    } catch (error) {
      toast.error('Upload failed');
    } finally {
      setIsUploading(false);
    }
  };

  const handleOpenEdit = (member: any) => {
    setFormData({
      _id: member._id,
      name: member.name || '',
      designation: member.designation || '',
      organization: member.organization || '',
      shortBio: member.shortBio || '',
      fullBio: member.fullBio || '',
      profileImage: member.profileImage || '',
      displayOrder: member.displayOrder || 0,
      featured: member.featured || false,
    });
    setIsOpen(true);
  };

  const handleOpenAdd = () => {
    setFormData(defaultFormData);
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    const isEdit = !!formData._id;
    const url = isEdit ? `/api/advisory/${formData._id}` : '/api/advisory';
    const method = isEdit ? 'PUT' : 'POST';

    const payload = { ...formData };
    if (!isEdit) delete payload._id;

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
    } catch (error) {
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
        setMembers(members.filter(m => m._id !== id));
      }
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Advisory Council</h1>
          <p className="text-muted-foreground mt-1">Manage executive and advisory members.</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleOpenAdd} className="rounded-full bg-secondary hover:bg-secondary/90 gap-2">
              <Plus size={18} />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{formData._id ? 'Edit Member' : 'Add New Member'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Photo</Label>
                <div className="relative aspect-square w-32 mx-auto bg-muted rounded-full border-2 border-dashed flex items-center justify-center overflow-hidden">
                  {formData.profileImage ? (
                    <>
                      <Image src={formData.profileImage} alt="Preview" fill className="object-cover" />
                      <button 
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, profileImage: '' }))}
                        className="absolute top-1 right-1 bg-destructive text-white p-1 rounded-full"
                      >
                        <X size={12} />
                      </button>
                    </>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center gap-1">
                      {isUploading ? <Loader2 className="animate-spin text-secondary" size={20} /> : <Upload className="text-secondary" size={20} />}
                      <span className="text-[10px] text-muted-foreground">Upload</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <Label>Designation / Title</Label>
                  <Input value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} required placeholder="e.g. Advisor / President" />
                </div>
                <div className="space-y-2">
                  <Label>Organization / Affiliation</Label>
                  <Input value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label>Display Order (0 is first)</Label>
                  <Input type="number" value={formData.displayOrder} onChange={(e) => setFormData({...formData, displayOrder: parseInt(e.target.value) || 0})} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Short Bio</Label>
                <Textarea value={formData.shortBio} onChange={(e) => setFormData({...formData, shortBio: e.target.value})} rows={2} />
              </div>

              <div className="space-y-2">
                <Label>Full Bio</Label>
                <Textarea value={formData.fullBio} onChange={(e) => setFormData({...formData, fullBio: e.target.value})} rows={5} />
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="featured" checked={formData.featured} onCheckedChange={(checked) => setFormData({...formData, featured: checked})} />
                <Label htmlFor="featured">Featured Member (Show on Homepage / Highlighted)</Label>
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
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 flex flex-col items-center justify-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            <p className="text-muted-foreground">Loading members...</p>
          </div>
        ) : members.length === 0 ? (
          <div className="p-12 text-center">
            <Users className="text-muted-foreground mx-auto mb-4" size={32} />
            <h3 className="text-lg font-semibold">No members found</h3>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Member</TableHead>
                <TableHead>Designation</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member._id}>
                  <TableCell className="font-mono text-muted-foreground">{member.displayOrder}</TableCell>
                  <TableCell>
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
                  </TableCell>
                  <TableCell>{member.designation}</TableCell>
                  <TableCell>{member.organization || '—'}</TableCell>
                  <TableCell>{member.featured ? 'Yes' : 'No'}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="rounded-full" onClick={() => handleOpenEdit(member)}>
                      <Edit size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full text-destructive" onClick={() => handleDelete(member._id)}>
                      <Trash2 size={16} />
                    </Button>
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
