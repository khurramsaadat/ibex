"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Palette,
  Users
} from "lucide-react";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.318H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Graphic Design", href: "/services/graphic-design" },
    { name: "Brand Identity", href: "/services/brand-identity" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "Print Design", href: "/services/print-design" },
    { name: "Corporate Communications", href: "/services/corporate-communications" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Portfolio", href: "#", icon: Palette },
    { name: "Community", href: "#", icon: Users },
    { name: "X (Twitter)", href: "#", icon: XIcon },
    { name: "GitHub", href: "#", icon: Github },
  ];

  return (
    <footer className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <span className="text-lg font-bold text-white">I</span>
              </div>
              <span className="text-xl font-bold">IBEX Design</span>
            </div>
            <p className="text-teal-100 text-sm leading-relaxed">
              Transforming brands through creative excellence. We specialize in visual design, 
              brand identity, and digital experiences that drive business success.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-teal-100">
                <MapPin className="h-4 w-4" />
                <span>123 Design Street, Creative City, CC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-teal-100">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-teal-100">
                <Mail className="h-4 w-4" />
                <span>hello@ibexdesign.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-teal-100 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-teal-100 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-teal-100">
              Get the latest design insights, industry trends, and project updates.
            </p>
            <form className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-teal-100">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-teal-200 focus:border-white/40"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-white text-teal-900 hover:bg-teal-100"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-teal-200">
              © {currentYear} IBEX Design. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-teal-200 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-teal-200 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
