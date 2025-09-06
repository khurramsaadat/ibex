"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}

export function MobileMenu({
  children,
  trigger,
  className,
  overlayClassName,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu on escape key and custom events
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    const handleCloseMenu = () => {
      closeMenu();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      window.addEventListener("closeMobileMenu", handleCloseMenu);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("closeMobileMenu", handleCloseMenu);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);


  return (
    <>
      {/* Trigger Button */}
      {trigger ? (
        <div onClick={toggleMenu} className="cursor-pointer">
          {trigger}
        </div>
      ) : (
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-primary hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
            overlayClassName
          )}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed inset-0 z-50 w-full h-full transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
          className
        )}
      >
        <div className="flex h-full flex-col bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0 bg-white">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeMenu}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 bg-white">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
