"use client";

import { useState, useEffect, useRef } from 'react';
import { 
  UploadCloud, 
  Trash2, 
  Loader2,
  Image as ImageIcon,
  Copy,
  ExternalLink,
  Search,
  File
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import Image from 'next/image';

export default function MediaAdminPage() {
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/media');
      const data = await res.json();
      if (res.ok) {
        setMediaItems(data);
      } else {
        toast.error('Failed to fetch media');
      }
    } catch (error) {
      toast.error('An error occurred while fetching media');
    } finally {
      setIsLoading(false);
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const processFile = async (file: File) => {
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_FILE_SIZE) {
      toast.error('File size exceeds 5MB limit');
      return;
    }

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
    if (!allowedMimeTypes.includes(file.type)) {
      toast.error('Invalid file type. Only JPG, PNG, WEBP, GIF, and PDF are allowed.');
      return;
    }

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('folder', 'dohad-india'); // Default folder

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: uploadData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Upload failed');
      }
      
      toast.success('File uploaded successfully');
      fetchMedia(); // Refresh list
    } catch (error: any) {
      toast.error(error.message || 'Upload failed');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await processFile(files[0]);
  };

  const handleDelete = async (publicId: string) => {
    if (!confirm('Are you sure you want to delete this file from Cloudinary? This action cannot be undone and may break links on the site.')) return;
    try {
      const res = await fetch(`/api/media?public_id=${encodeURIComponent(publicId)}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Media deleted');
        setMediaItems(mediaItems.filter(m => m.public_id !== publicId));
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || 'Failed to delete media');
      }
    } catch (error) {
      toast.error('Failed to delete media');
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('URL copied to clipboard');
  };

  const filteredMedia = mediaItems.filter(item => 
    item.public_id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.format?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Media Management</h1>
          <p className="text-muted-foreground mt-1">Manage all your Cloudinary assets in one place.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input 
              placeholder="Search media..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-64 rounded-full"
            />
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleUpload} 
            className="hidden" 
            accept="image/jpeg,image/png,image/webp,image/gif,application/pdf"
          />
          <Button 
            onClick={() => fileInputRef.current?.click()} 
            className="rounded-full bg-secondary hover:bg-secondary/90 gap-2"
            disabled={isUploading}
          >
            {isUploading ? <Loader2 className="animate-spin" size={18} /> : <UploadCloud size={18} />}
            Upload File
          </Button>
        </div>
      </div>

      <div 
        className={`bg-white rounded-xl border shadow-sm p-6 min-h-[500px] relative transition-colors ${isDragging ? 'bg-secondary/10 border-secondary border-dashed' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isDragging && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-xl border-2 border-dashed border-secondary">
            <div className="text-center">
              <UploadCloud className="w-12 h-12 text-secondary mx-auto mb-3 animate-bounce" />
              <h3 className="text-xl font-bold text-foreground">Drop file to upload</h3>
            </div>
          </div>
        )}
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-secondary" />
            <p className="text-muted-foreground">Loading media assets...</p>
          </div>
        ) : mediaItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-2">
              <ImageIcon className="text-muted-foreground w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold">No media found</h3>
            <p className="text-muted-foreground">Drag and drop or upload some files to get started.</p>
            <Button onClick={() => fileInputRef.current?.click()} className="mt-4 rounded-full bg-secondary">
              <UploadCloud size={18} className="mr-2" /> Upload First File
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMedia.map((item) => (
              <div key={item.public_id} className="group relative border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-card">
                <div className="aspect-square relative bg-muted flex items-center justify-center overflow-hidden">
                  {item.resource_type === 'image' && item.format !== 'pdf' ? (
                    <Image 
                      src={item.secure_url} 
                      alt={item.public_id} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <File className="w-16 h-16 text-muted-foreground opacity-50" />
                  )}
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button 
                      onClick={() => copyToClipboard(item.secure_url)}
                      className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
                      title="Copy URL"
                    >
                      <Copy size={18} />
                    </button>
                    <a 
                      href={item.secure_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm transition-colors"
                      title="Open Original"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <button 
                      onClick={() => handleDelete(item.public_id)}
                      className="p-2 bg-destructive/80 hover:bg-destructive rounded-full text-white backdrop-blur-sm transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="p-3 text-sm">
                  <p className="font-medium truncate text-foreground" title={item.public_id}>
                    {item.public_id.split('/').pop()}
                  </p>
                  <div className="flex justify-between items-center mt-1 text-muted-foreground text-xs">
                    <span className="uppercase">{item.format}</span>
                    <span>
                      {item.width && item.height ? `${item.width}x${item.height}` : '—'}
                    </span>
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-2 truncate">
                    {new Date(item.created_at).toLocaleDateString()} • {(item.bytes / 1024).toFixed(1)} KB
                  </div>
                </div>
              </div>
            ))}
            
            {filteredMedia.length === 0 && searchQuery && (
              <div className="col-span-full py-12 text-center text-muted-foreground">
                No media matches your search query "{searchQuery}".
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
