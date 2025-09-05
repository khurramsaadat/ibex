"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";

export function Header() {

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="IBEX Design" 
              width={140} 
              height={140}
              className="h-35 w-35"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild size="sm">
              <Link href="/contact">
                Get Started
              </Link>
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
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              
              <div className="px-3 py-2">
                <Button asChild size="sm" className="w-full">
                  <Link href="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
