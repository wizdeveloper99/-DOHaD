"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Calendar,
  Mail,
  Image as ImageIcon,
  Settings,
  LogOut,
  Menu,
  X,
  Users,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ADMIN_SITE, ADMIN_SECTIONS } from '@/lib/admin-site';

const navIcons = {
  '/admin/dashboard': Home,
  '/admin/events': Calendar,
  '/admin/newsletter': Mail,
  '/admin/media': ImageIcon,
  '/admin/advisory': Users,
  '/admin/documents': FileText,
  '/admin/settings': Settings,
} as const;

const sidebarItems = [
  { name: 'Home', href: '/admin/dashboard', icon: Home },
  ...ADMIN_SECTIONS.map((section) => ({
    name: section.label,
    href: section.href,
    icon: navIcons[section.href as keyof typeof navIcons],
  })),
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', { method: 'POST' });
      if (res.ok) {
        toast.success('Logged out successfully');
        router.push('/admin/login');
        router.refresh();
      }
    } catch {
      toast.error('Logout failed');
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-3 px-4 py-3 bg-white border-b md:hidden">
        <button
          className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Open menu"
        >
          {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link href="/admin/dashboard" className="flex items-center gap-2 min-w-0">
          <div className="relative shrink-0 w-8 h-8">
            <Image
              src="/dohad-india-rgb.png"
              alt="DOHaD India Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-base text-foreground truncate">
            {ADMIN_SITE.shortName}
          </span>
        </Link>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-72 bg-white border-r transform transition-transform duration-300 ease-in-out',
          'md:relative md:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="relative shrink-0 w-10 h-10">
                <Image
                  src="/dohad-india-rgb.png"
                  alt="DOHaD India Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-base text-foreground leading-tight">
                  {ADMIN_SITE.shortName}
                </p>
                <p className="text-sm text-muted-foreground">{ADMIN_SITE.tagline}</p>
              </div>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto" aria-label="Website sections">
            {sidebarItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors',
                    isActive
                      ? 'bg-secondary/10 text-secondary'
                      : 'text-foreground/70 hover:bg-muted/60 hover:text-foreground'
                  )}
                >
                  <item.icon size={22} strokeWidth={isActive ? 2.25 : 2} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-base text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl h-12"
              onClick={handleLogout}
            >
              <LogOut size={22} />
              Sign out
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <div className="h-14 md:h-0 shrink-0" />
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
