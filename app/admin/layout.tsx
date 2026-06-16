"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  Mail, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Users,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const sidebarItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Events', href: '/admin/events', icon: Calendar },
  { name: 'Newsletter', href: '/admin/newsletter', icon: Mail },
  { name: 'Media', href: '/admin/media', icon: ImageIcon },
  { name: 'Advisory', href: '/admin/advisory', icon: Users },
  { name: 'Documents', href: '/admin/documents', icon: FileText },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Don't show sidebar on login page
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
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 flex">
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center gap-3 px-4 py-3 bg-white border-b shadow-sm md:hidden">
        <button 
          className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="relative shrink-0 w-7 h-7">
            <Image
              src="/dohad-india-rgb.png"
              alt="DOHaD India Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-bold text-base text-foreground">DOHaD Admin</span>
        </Link>
      </div>

      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out",
        "md:relative md:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <div className="relative shrink-0 w-8 h-8">
                <Image
                  src="/dohad-india-rgb.png"
                  alt="DOHaD India Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-foreground">DOHaD Admin</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {sidebarItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-secondary/10 text-secondary" 
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  )}
                >
                  <item.icon size={20} />
                  {item.name}
                  {isActive && <ChevronRight size={16} className="ml-auto" />}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* Spacer for mobile top bar */}
        <div className="h-14 md:h-0 shrink-0" />
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
