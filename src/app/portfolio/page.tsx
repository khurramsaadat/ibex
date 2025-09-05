"use client";

import { useState, useMemo } from "react";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Pagination } from "@/components/ui/pagination";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Grid, List, X } from "lucide-react";

export default function Portfolio() {
  const breadcrumbItems = [
    { label: "Portfolio" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Brand Identity", "Web Design", "Print Design", "Corporate", "Mobile App"];

  const projects = [
    {
      id: "techcorp-brand",
      title: "TechCorp Brand Identity",
      description: "Complete brand identity redesign for a leading technology company, including logo, guidelines, and marketing materials.",
      longDescription: "A comprehensive brand identity overhaul for TechCorp, a leading technology company looking to modernize their visual presence and better communicate their innovative approach to enterprise solutions.",
      image: "/api/placeholder/400/300",
      category: "Brand Identity",
      tags: ["Logo Design", "Brand Guidelines", "Corporate"],
      href: "/portfolio/techcorp-brand",
      client: "TechCorp Inc.",
      year: "2024",
      duration: "8 weeks",
      team: ["Sarah Johnson", "Michael Chen", "Emily Rodriguez"],
      technologies: ["Adobe Creative Suite", "Figma", "Sketch"],
      challenges: [
        "Outdated brand perception in competitive market",
        "Inconsistent visual identity across touchpoints",
        "Need to appeal to both enterprise and startup audiences"
      ],
      solutions: [
        "Developed modern, scalable logo system",
        "Created comprehensive brand guidelines",
        "Designed flexible visual language for all applications"
      ],
      results: [
        "40% increase in brand recognition",
        "25% improvement in lead generation",
        "100% brand consistency across all touchpoints"
      ],
      testimonial: {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "TechCorp",
        content: "IBEX Design transformed our brand identity completely. The new design system has improved our brand recognition by 40% and our marketing materials look incredibly professional.",
        avatar: "/api/placeholder/48/48"
      },
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform UI",
      description: "Modern e-commerce platform design with focus on user experience and conversion optimization.",
      longDescription: "A complete UI/UX redesign for a growing e-commerce platform, focusing on improving user experience, increasing conversions, and creating a scalable design system.",
      image: "/api/placeholder/400/300",
      category: "Web Design",
      tags: ["UI/UX", "E-commerce", "Responsive"],
      href: "/portfolio/ecommerce-platform",
      client: "ShopFlow",
      year: "2024",
      duration: "12 weeks",
      team: ["Michael Chen", "Emily Rodriguez", "David Kim"],
      technologies: ["Figma", "React", "TypeScript", "Tailwind CSS"],
      challenges: [
        "Low conversion rates on product pages",
        "Complex checkout process causing cart abandonment",
        "Mobile experience not optimized"
      ],
      solutions: [
        "Redesigned product pages with better visual hierarchy",
        "Streamlined checkout process to 3 steps",
        "Created mobile-first responsive design"
      ],
      results: [
        "35% increase in conversion rate",
        "50% reduction in cart abandonment",
        "60% improvement in mobile user engagement"
      ],
      testimonial: {
        name: "Michael Chen",
        role: "CEO",
        company: "ShopFlow",
        content: "The team at IBEX Design understood our vision perfectly. They delivered a website that not only looks amazing but also converts visitors into customers effectively.",
        avatar: "/api/placeholder/48/48"
      },
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: "financial-report",
      title: "Financial Services Report",
      description: "Annual report design for a major financial institution with data visualization and infographics.",
      longDescription: "A comprehensive annual report design for a major financial institution, featuring complex data visualization, infographics, and a sophisticated layout that communicates financial performance effectively.",
      image: "/api/placeholder/400/300",
      category: "Corporate",
      tags: ["Annual Report", "Data Visualization", "Print"],
      href: "/portfolio/financial-report",
      client: "Global Finance Corp",
      year: "2024",
      duration: "6 weeks",
      team: ["Emily Rodriguez", "Sarah Johnson"],
      technologies: ["Adobe InDesign", "Illustrator", "Excel"],
      challenges: [
        "Complex financial data to present clearly",
        "Regulatory compliance requirements",
        "Need to balance professionalism with accessibility"
      ],
      solutions: [
        "Created custom data visualization system",
        "Developed clear infographic hierarchy",
        "Designed accessible layout for all audiences"
      ],
      results: [
        "Award for Best Annual Report Design",
        "25% increase in stakeholder engagement",
        "Positive feedback from regulatory bodies"
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: "startup-mobile-app",
      title: "Startup Mobile App",
      description: "Mobile application design for a fintech startup with focus on user onboarding and engagement.",
      longDescription: "A complete mobile app design for a fintech startup, focusing on user onboarding, security, and engagement to build trust in the financial technology space.",
      image: "/api/placeholder/400/300",
      category: "Mobile App",
      tags: ["Mobile Design", "Fintech", "User Experience"],
      href: "/portfolio/startup-mobile-app",
      client: "PayFlow",
      year: "2024",
      duration: "10 weeks",
      team: ["Michael Chen", "David Kim", "Lisa Wang"],
      technologies: ["Figma", "Principle", "React Native"],
      challenges: [
        "Building trust in fintech space",
        "Complex onboarding process",
        "Security concerns affecting UX"
      ],
      solutions: [
        "Designed progressive onboarding flow",
        "Created trust-building visual elements",
        "Balanced security with usability"
      ],
      results: [
        "40% increase in user retention",
        "60% improvement in onboarding completion",
        "4.8/5 app store rating"
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: "restaurant-branding",
      title: "Restaurant Branding",
      description: "Complete branding package for a high-end restaurant including logo, menu design, and marketing materials.",
      longDescription: "A complete branding package for a high-end restaurant, creating a sophisticated visual identity that reflects the restaurant's culinary excellence and premium dining experience.",
      image: "/api/placeholder/400/300",
      category: "Brand Identity",
      tags: ["Logo Design", "Print Design", "Hospitality"],
      href: "/portfolio/restaurant-branding",
      client: "Bella Vista Restaurant",
      year: "2023",
      duration: "4 weeks",
      team: ["Sarah Johnson", "Emily Rodriguez"],
      technologies: ["Adobe Creative Suite", "InDesign"],
      challenges: [
        "Creating premium brand perception",
        "Standing out in competitive restaurant market",
        "Designing for both digital and print applications"
      ],
      solutions: [
        "Developed elegant, sophisticated logo system",
        "Created cohesive visual language",
        "Designed premium print materials"
      ],
      results: [
        "30% increase in reservations",
        "Award for Best Restaurant Branding",
        "Consistent brand recognition across all touchpoints"
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    },
    {
      id: "healthcare-website",
      title: "Healthcare Website",
      description: "Responsive website design for a healthcare provider with focus on accessibility and user trust.",
      longDescription: "A comprehensive website redesign for a healthcare provider, focusing on accessibility, user trust, and clear communication of medical services and information.",
      image: "/api/placeholder/400/300",
      category: "Web Design",
      tags: ["Healthcare", "Accessibility", "Responsive"],
      href: "/portfolio/healthcare-website",
      client: "MedCare Health",
      year: "2023",
      duration: "8 weeks",
      team: ["Michael Chen", "David Kim", "Accessibility Specialist"],
      technologies: ["Figma", "React", "WCAG Guidelines"],
      challenges: [
        "WCAG accessibility compliance",
        "Building trust in healthcare context",
        "Complex medical information hierarchy"
      ],
      solutions: [
        "Implemented WCAG 2.1 AA compliance",
        "Created clear information architecture",
        "Designed trust-building visual elements"
      ],
      results: [
        "100% WCAG compliance achieved",
        "45% increase in appointment bookings",
        "Improved user satisfaction scores"
      ],
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    }
  ];

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [projects, selectedCategory, searchQuery]);

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

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject?.id);
    if (currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const handlePrevProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject?.id);
    if (currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
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
              <div 
                key={index} 
                className="cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleProjectClick(project)}
              >
                <PortfolioCard {...project} />
              </div>
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNextProject}
        onPrev={handlePrevProject}
        hasNext={filteredProjects.findIndex(p => p.id === selectedProject?.id) < filteredProjects.length - 1}
        hasPrev={filteredProjects.findIndex(p => p.id === selectedProject?.id) > 0}
      />
    </LayoutWrapper>
  );
}
