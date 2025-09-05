"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  disabled?: boolean;
}

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export function NavigationMenu({
  items,
  className,
  orientation = "horizontal",
}: NavigationMenuProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMouseEnter = (itemLabel: string) => {
    setActiveItem(itemLabel);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const renderItem = (item: NavigationItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeItem === item.label;

    return (
      <div
        key={index}
        className="relative"
        onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
        onMouseLeave={handleMouseLeave}
      >
        {item.href ? (
          <Link
            href={item.href}
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium transition-colors",
              orientation === "horizontal"
                ? "hover:text-foreground"
                : "w-full text-left hover:bg-muted rounded-md",
              item.disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => setActiveItem(null)}
          >
            {item.label}
            {hasChildren && (
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  isActive && "rotate-180"
                )}
              />
            )}
          </Link>
        ) : (
          <button
            className={cn(
              "flex items-center px-3 py-2 text-sm font-medium transition-colors",
              orientation === "horizontal"
                ? "hover:text-foreground"
                : "w-full text-left hover:bg-muted rounded-md",
              item.disabled && "opacity-50 cursor-not-allowed"
            )}
            disabled={item.disabled}
          >
            {item.label}
            {hasChildren && (
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform",
                  isActive && "rotate-180"
                )}
              />
            )}
          </button>
        )}

        {/* Dropdown Menu */}
        {hasChildren && isActive && (
          <div
            className={cn(
              "absolute z-50 min-w-[200px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
              orientation === "horizontal"
                ? "top-full left-0 mt-1"
                : "left-full top-0 ml-1"
            )}
          >
            {item.children?.map((child, childIndex) => (
              <Link
                key={childIndex}
                href={child.href || "#"}
                className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm transition-colors"
                onClick={() => setActiveItem(null)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className={cn(
        "flex",
        orientation === "horizontal" ? "items-center space-x-1" : "flex-col space-y-1",
        className
      )}
    >
      {items.map(renderItem)}
    </nav>
  );
}
