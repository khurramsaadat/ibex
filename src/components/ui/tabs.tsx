"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
  onTabChange?: (tabId: string) => void;
}

export function Tabs({ items, defaultTab, className, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const activeTabContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Headers */}
      <div className="border-b border-border">
        <nav className="flex space-x-8" aria-label="Tabs">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => !item.disabled && handleTabChange(item.id)}
              disabled={item.disabled}
              className={cn(
                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors",
                activeTab === item.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
              aria-selected={activeTab === item.id}
              role="tab"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6" role="tabpanel">
        {activeTabContent}
      </div>
    </div>
  );
}
