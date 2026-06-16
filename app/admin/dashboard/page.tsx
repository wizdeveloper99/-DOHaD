import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Mail,
  Image as ImageIcon,
  Users,
  FileText,
  Settings,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { ADMIN_SITE, ADMIN_SECTIONS } from '@/lib/admin-site';

const sectionIcons = {
  '/admin/events': Calendar,
  '/admin/newsletter': Mail,
  '/admin/media': ImageIcon,
  '/admin/advisory': Users,
  '/admin/documents': FileText,
  '/admin/settings': Settings,
} as const;

export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16">
            <Image
              src="/dohad-india-rgb.png"
              alt="DOHaD India Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-foreground leading-tight">
              {ADMIN_SITE.name}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mt-1">
              {ADMIN_SITE.tagline}
            </p>
          </div>
        </div>

        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-secondary hover:underline"
        >
          View live website
          <ExternalLink className="h-4 w-4" />
        </a>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
          {ADMIN_SITE.homeHeading}
        </h2>
        <p className="text-base text-muted-foreground">
          {ADMIN_SITE.homeSubtext}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {ADMIN_SECTIONS.map((section) => {
            const Icon = sectionIcons[section.href as keyof typeof sectionIcons];
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-border bg-white hover:border-secondary/40 hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <p className="text-lg font-semibold text-foreground">
                    {section.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-secondary transition-colors shrink-0 mt-1" />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
