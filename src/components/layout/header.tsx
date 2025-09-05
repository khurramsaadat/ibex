"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { Github } from "lucide-react";

export function Header() {

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">I</span>
            </div>
            <span className="text-xl font-bold">IBEX Design</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu>
            <div className="space-y-4">
              {/* Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              
              <div className="px-3 py-2">
                <Button size="sm" className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
