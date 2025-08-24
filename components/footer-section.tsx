"use client"

import { Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function FooterSection() {
  return (
    <div>


    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <Link href="/" className="flex gap-3 items-center justify-start hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">DI</span>
          </div>
          <div className="text-center text-foreground text-xl font-bold leading-4">DOHaD India</div>
        </Link>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
          Advancing developmental origins of health and disease research in India
        </p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground hover:text-secondary transition-colors" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground hover:text-secondary transition-colors" />
          </a>
          <a
            href="mailto:contact@dohadindia.org"
            aria-label="Email"
            className="w-4 h-4 flex items-center justify-center"
          >
            <Mail className="w-full h-full text-muted-foreground hover:text-secondary transition-colors" />
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="text-muted-foreground">
            Active Members: <span className="text-foreground font-medium">247</span>
          </div>
          <div className="text-muted-foreground">
            Site Visitors: <span className="text-foreground font-medium">12,543</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Organization</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <a href="/who-are-we" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Who Are We
            </a>
            <a href="/join-us" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Join Us
            </a>
            <a href="/resources" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Resources
            </a>
            <a href="/events" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Events
            </a>
            <a href="/contact" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Research</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Publications
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              JDOHAD Journal
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Research Network
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Collaborations
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Funding
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-muted-foreground text-sm font-medium leading-5">Support</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Newsletter
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Workshops
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Training Programs
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Code of Conduct
            </a>
            <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
      
    </footer>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
© {new Date().getFullYear()} DOHaD India. All rights reserved.
</div>
    </div>
  )
}
