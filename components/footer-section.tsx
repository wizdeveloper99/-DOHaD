"use client"

import { Twitter, Linkedin, Mail, Facebook, Youtube, Phone, MapPin, Instagram } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import ContentDesign from "./ui/contentDesgin"

export function FooterSection() {
  return (
    <div>
     <div className="mb-0 md:-mb-28">

      </div>
    <footer
      id="contact"
      className="w-full pb-12 relative pt-12 bg-green-100 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
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
              <span className="text-xl font-bold text-primary dark:text-white">DOHaD India</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Advancing health through understanding the early developmental origins of health and disease.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Button key={i} size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/10 dark:hover:bg-primary/90">
                  <Icon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-800 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About DOHaD", link: "#about" },
                { name: "Research", link: "#research" },
                { name: "Capacity Building", link: "#capacity" },
                { name: "Advocacy", link: "#advocacy" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-800 dark:text-gray-100">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Publications", link: "#" },
                { name: "Newsletter", link: "#" },
                { name: "Events", link: "#" },
                { name: "Join Us", link: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-800 dark:text-gray-100">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">contact@dohadindia.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">Indiranagar, Bengaluru - 560038</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-primary/10 pt-6 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-300">© 2024 DOHaD India Regional Society. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-3 text-xs text-gray-700 dark:text-gray-300">
            <span>Active Members: 150+</span>
            <span>•</span>
            <span>Visitors: 25,000+</span>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
