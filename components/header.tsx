"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/who-are-we" },
    { name: "Join Us", href: "/join-us" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
    { name: "Download", href: "/sample.txt", download: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full py-3 sm:py-4 px-4 sm:px-6 bg-background/95 border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 hover:opacity-80 transition-opacity">
            <Image
              src="/logo__1_-removebg-preview.png"
              alt="DOHaD India Logo"
              fill
              className="object-contain rounded-full"
            />
          </Link>
          <div className="flex flex-col">
            <Link href="/" className="text-foreground text-base sm:text-lg font-semibold hover:opacity-80 transition-opacity">
              DOHaD India
            </Link>
            <p className="text-[10px] sm:text-xs text-muted-foreground max-w-[200px] sm:max-w-[320px] leading-tight">
              The DOHaD India Regional Society is a regional society of the{" "}
              <a
                href="https://dohadsoc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                International DOHaD Society
              </a>
              . We are committed...
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            item.download ? (
              <a
                key={item.name}
                href={item.href}
                download
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-full font-medium transition-colors text-sm xl:text-base"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-full font-medium transition-colors text-sm xl:text-base"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          {/* CTA visible on medium+ screens */}
          <Link href="/join-us" className="hidden md:block">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 sm:px-6 py-2 rounded-full font-medium shadow-sm text-sm sm:text-base">
              Become a Member
            </Button>
          </Link>
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 text-foreground hover:bg-muted/50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="bg-background border-t border-border text-foreground"
            >
              <SheetHeader>
                <div className="flex flex-col items-start gap-3 text-left">
                  <SheetTitle className="sr-only">Navigation</SheetTitle>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 shrink-0">
                      <Image
                        src="/logo__1_-removebg-preview.png"
                        alt="DOHaD India Logo"
                        fill
                        className="object-contain rounded-full"
                      />
                    </div>
                    <span className="text-lg font-semibold">DOHaD India</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    The DOHaD India Regional Society is a regional society of the{" "}
                    <a
                      href="https://dohadsoc.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-foreground"
                    >
                      International DOHaD Society
                    </a>
                    . We are committed...
                  </p>
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  item.download ? (
                    <a
                      key={item.name}
                      href={item.href}
                      download
                      className="text-muted-foreground hover:text-foreground text-base sm:text-lg py-2"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-base sm:text-lg py-2"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <Link href="/join-us" className="w-full mt-4">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm w-full">
                    Become a Member
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
