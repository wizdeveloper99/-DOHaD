"use client"

import { Twitter, Linkedin, Mail, Facebook, Youtube, Phone, MapPin, Instagram } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"
import ContentDesign from "./ui/contentDesgin"

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="w-full pb-12 relative pt-12 bg-secondary dark:bg-black"
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
              <span className="text-xl font-bold text-white">DOHaD India</span>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Advancing health through understanding the early developmental origins of health and disease.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Button key={i} size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-white/20">
                  <Icon className="h-4 w-4 text-white" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About DOHaD", link: "#about" },
                { name: "Research", link: "#research" },
                { name: "Capacity Building", link: "#capacity" },
                { name: "Advocacy", link: "#advocacy" },
                { name: "Download", link: "/sample.txt", download: true },
              ].map((item, i) => (
                <li key={i}>
                  {item.download ? (
                    <a href={item.link} download className="text-white hover:text-gray-300 transition-colors">
                      {item.name}
                    </a>
                  ) : (
                    <a href={item.link} className="text-white hover:text-gray-300 transition-colors">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Publications", link: "#" },
                { name: "Newsletter", link: "#" },
                { name: "Events", link: "#" },
                { name: "Join Us", link: "#" },
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
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-white" />
                  <span className="text-white">contact@dohadindia.org</span>
                </div>
                <a
                  href="https://www.google.com/maps?q=PHFI+Centre+for+Developmental+and+Lifecourse+Research+-+Indira+Nagar+I+Stage,+Hoysala+Nagar,+Indiranagar,+Bengaluru,+Karnataka+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <MapPin className="h-20 w-20 text-white" />
                  <span className="text-white">PHFI Centre for Developmental and Lifecourse Research - Indira Nagar I Stage, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038</span>
                </a>
              </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-white">© 2024 DOHaD India Regional Society. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-3 text-xs text-white">
            <span>Active Members: 150+</span>
            <span>•</span>
            <span>Visitors: 25,000+</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
