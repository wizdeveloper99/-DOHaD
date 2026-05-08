"use client";

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Search, 
  Download, 
  Trash2, 
  Loader2,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';

export default function NewsletterAdminPage() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/newsletter');
      const data = await res.json();
      setSubscribers(data);
    } catch (error) {
      toast.error('Failed to fetch subscribers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    // Note: I'll need to create the DELETE API for newsletter
    if (!confirm('Are you sure you want to remove this subscriber?')) return;

    try {
      const res = await fetch(`/api/newsletter/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Subscriber removed');
        setSubscribers(subscribers.filter(s => s._id !== id));
      } else {
        toast.error('Remove failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const exportCSV = () => {
    const headers = ['Name', 'Email', 'Affiliation', 'Joined Date'];
    const rows = subscribers.map(s => [
      s.name, 
      s.email, 
      s.affiliation || '', 
      new Date(s.createdAt).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'dohad_subscribers.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredSubscribers = Array.isArray(subscribers) ? subscribers.filter(s => 
    s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (s.affiliation && s.affiliation.toLowerCase().includes(searchTerm.toLowerCase()))
  ) : [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Newsletter</h1>
          <p className="text-muted-foreground mt-1">Manage your mailing list and subscribers.</p>
        </div>
        <Button 
          variant="outline" 
          className="rounded-full gap-2" 
          onClick={exportCSV}
          disabled={subscribers.length === 0}
        >
          <Download size={18} />
          Export CSV
        </Button>
      </div>

      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search subscribers..." 
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
            <p className="text-muted-foreground">Loading subscribers...</p>
          </div>
        ) : filteredSubscribers.length === 0 ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-muted-foreground" size={32} />
            </div>
            <h3 className="text-lg font-semibold">No subscribers found</h3>
            <p className="text-muted-foreground">Your mailing list is currently empty.</p>
          </div>
        ) : (
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Subscriber</TableHead>
                <TableHead>Affiliation</TableHead>
                <TableHead>Joined Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubscribers.map((subscriber) => (
                <TableRow key={subscriber._id} className="hover:bg-muted/10 transition-colors">
                  <TableCell>
                    <div>
                      <p className="font-semibold text-foreground">{subscriber.name}</p>
                      <p className="text-sm text-muted-foreground">{subscriber.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-muted-foreground">
                      {subscriber.affiliation || '—'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm">
                      {new Date(subscriber.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full"
                      onClick={() => handleDelete(subscriber._id)}
                    >
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
