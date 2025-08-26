"use client";

import { Twitter, Linkedin, Mail, Heart, Facebook, Youtube, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function FooterSection() {
  return (
    <footer id="contact" className="border-t bg-card py-12">
      <div className="container px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">DOHaD India</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing health through understanding the early developmental origins of health and disease.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <Button key={i} size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About DOHaD", link: "#about" },
                { name: "Research", link: "#research" },
                { name: "Capacity Building", link: "#capacity" },
                { name: "Advocacy", link: "#advocacy" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Publications", link: "#" },
                { name: "Newsletter", link: "#" },
                { name: "Events", link: "#" },
                { name: "Join Us", link: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@dohadindia.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 DOHaD India Regional Society. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-3 text-xs text-muted-foreground">
            <span>Active Members: 150+</span>
            <span>•</span>
            <span>Visitors: 25,000+</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
