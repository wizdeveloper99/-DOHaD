"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import Image from "next/image"

export function Header() {
  const navItems = [
    { name: "Who We Are", href: "/who-are-we" },
    { name: "Join Us", href: "/join-us" },
    { name: "Resources", href: "/resources" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full py-4 px-6 bg-background/95 border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<div className="w-16 h-16 relative">
    <Image
      src="/logo__1_-removebg-preview.png"       
      alt="DOHaD Logo"
      fill
      className="object-contain rounded-full"
    />
  </div>
  <span className="text-foreground text-lg font-semibold">DOHaD</span>
</Link>
        
        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Right side - icons and desktop CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/join-us" className="hidden md:block">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-medium shadow-sm">
              Become a Member
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-muted/50">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-background border-t border-border text-foreground">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold text-foreground">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground justify-start text-lg py-2"
                  >
                    {item.name}
                  </Link>
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
