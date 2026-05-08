"use client"

import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

// Brand SVG icons
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const BlueskyIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
  </svg>
)

export function FooterSection({ settings }: { settings?: any }) {
  const socialLinks = settings?.socialLinks || {}
  const footerText =
    settings?.footerText ||
    "Registered non-profit society in India. Advancing health through understanding the early developmental origins of health and disease."

  return (
    <footer id="contact" className="w-full pb-12 relative pt-12 bg-secondary dark:bg-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo__1_-removebg-preview.png"
                alt="DOHaD India Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
                priority
              />
              <span className="text-xl font-bold text-white">DOHaD India</span>
            </div>
            <p className="text-sm text-white leading-relaxed">{footerText}</p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              {/* X / Twitter */}
              <a
                href={socialLinks.twitter || "https://x.com/dohadindia"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow DOHaD India on X (Twitter)"
                className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-white/20 transition-colors"
              >
                <XIcon />
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin || "https://www.linkedin.com/company/dohad-india"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with DOHaD India on LinkedIn"
                className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-white/20 transition-colors"
              >
                <LinkedInIcon />
              </a>

              {/* YouTube */}
              <a
                href={socialLinks.youtube || "https://www.youtube.com/@dohadindia"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch DOHaD India on YouTube"
                className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-white/20 transition-colors"
              >
                <YouTubeIcon />
              </a>

              {/* Bluesky */}
              <a
                href={socialLinks.bluesky || "https://bsky.app/profile/dohadindia.bsky.social"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow DOHaD India on Bluesky"
                className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-white/20 transition-colors"
              >
                <BlueskyIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About DOHaD", link: "/#about-pillars-section" },
                { name: "Research", link: "/#features-section" },
                { name: "Capacity Building", link: "/#capacity-building-section" },
                { name: "Advocacy", link: "/#advocacy-section" },
                { name: "FAQ", link: "/#faq-section" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-white hover:text-gray-300 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Engagement */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Engagement</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Become a Member", link: "/join-us" },
                { name: "Newsletter", link: "/#communication-section" },
                { name: "Upcoming Events", link: "/events" },
                { name: "Contact Us", link: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-white hover:text-gray-300 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3 text-sm text-white">
              {/* Email */}
              <a
                href="mailto:contact@dohadindia.org"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20 hover:border-white/40 group"
              >
                <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">contact@dohadindia.org</span>
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps?q=PHFI+Centre+for+Developmental+and+Lifecourse+Research+-+Indira+Nagar+I+Stage,+Hoysala+Nagar,+Indiranagar,+Bengaluru,+Karnataka+560038"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-2 hover:opacity-80 transition-opacity cursor-pointer mt-3"
              >
                <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-white leading-snug">
                  PHFI Centre for Developmental and Lifecourse Research, Indiranagar, Bengaluru, Karnataka 560038
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} DOHaD India Regional Society. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs text-white/80">
            <a href="/terms" className="hover:text-white hover:underline transition-colors">
              Terms &amp; Conditions
            </a>
            <span>•</span>
            <a href="/privacy" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
