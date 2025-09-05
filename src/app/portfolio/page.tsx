"use client";

import { useState } from "react";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Pagination } from "@/components/ui/pagination";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List } from "lucide-react";

export default function Portfolio() {
  const breadcrumbItems = [
    { label: "Portfolio" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", "Brand Identity", "Web Design", "Print Design", "Corporate", "Mobile App"];

  const projects = [
    {
      title: "TechCorp Brand Identity",
      description: "Complete brand identity redesign for a leading technology company, including logo, guidelines, and marketing materials.",
      image: "/api/placeholder/400/300",
      category: "Brand Identity",
      tags: ["Logo Design", "Brand Guidelines", "Corporate"],
      href: "/portfolio/techcorp-brand",
    },
    {
      title: "E-commerce Platform UI",
      description: "Modern e-commerce platform design with focus on user experience and conversion optimization.",
      image: "/api/placeholder/400/300",
      category: "Web Design",
      tags: ["UI/UX", "E-commerce", "Responsive"],
      href: "/portfolio/ecommerce-platform",
    },
    {
      title: "Financial Services Report",
      description: "Annual report design for a major financial institution with data visualization and infographics.",
      image: "/api/placeholder/400/300",
      category: "Corporate",
      tags: ["Annual Report", "Data Visualization", "Print"],
      href: "/portfolio/financial-report",
    },
    {
      title: "Startup Mobile App",
      description: "Mobile application design for a fintech startup with focus on user onboarding and engagement.",
      image: "/api/placeholder/400/300",
      category: "Mobile App",
      tags: ["Mobile Design", "Fintech", "User Experience"],
      href: "/portfolio/startup-mobile-app",
    },
    {
      title: "Restaurant Branding",
      description: "Complete branding package for a high-end restaurant including logo, menu design, and marketing materials.",
      image: "/api/placeholder/400/300",
      category: "Brand Identity",
      tags: ["Logo Design", "Print Design", "Hospitality"],
      href: "/portfolio/restaurant-branding",
    },
    {
      title: "Healthcare Website",
      description: "Responsive website design for a healthcare provider with focus on accessibility and user trust.",
      image: "/api/placeholder/400/300",
      category: "Web Design",
      tags: ["Healthcare", "Accessibility", "Responsive"],
      href: "/portfolio/healthcare-website",
    },
    {
      title: "Fashion Magazine Layout",
      description: "Editorial design for a high-end fashion magazine with innovative typography and layout concepts.",
      image: "/api/placeholder/400/300",
      category: "Print Design",
      tags: ["Editorial", "Typography", "Fashion"],
      href: "/portfolio/fashion-magazine",
    },
    {
      title: "SaaS Dashboard Design",
      description: "Complex dashboard interface for a SaaS platform with data visualization and user management features.",
      image: "/api/placeholder/400/300",
      category: "Web Design",
      tags: ["SaaS", "Dashboard", "Data Visualization"],
      href: "/portfolio/saas-dashboard",
    },
    {
      title: "Nonprofit Annual Report",
      description: "Impact-focused annual report design for a nonprofit organization with compelling storytelling.",
      image: "/api/placeholder/400/300",
      category: "Corporate",
      tags: ["Nonprofit", "Annual Report", "Storytelling"],
      href: "/portfolio/nonprofit-report",
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <LayoutWrapper>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and see how we've helped businesses 
              transform their visual identity and digital presence.
            </p>
          </div>

          {/* Filters and Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode and Search */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="flex border border-input rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-8 mb-12 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {currentProjects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mb-16"
            />
          )}

          {/* CTA Section */}
          <section className="py-16 bg-muted/30 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with exceptional design.
            </p>
            <Button size="lg" className="text-lg px-8">
              Get Started Today
            </Button>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}
