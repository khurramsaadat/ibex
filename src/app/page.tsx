import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { 
  Palette, 
  Globe, 
  FileText, 
  Users, 
  Award, 
  Zap,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Graphic Design",
      description: "Create compelling visual identities that resonate with your audience and drive engagement.",
      icon: <Palette className="h-8 w-8 text-primary" />,
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Print Design"],
      href: "/services/graphic-design",
      featured: true,
    },
    {
      title: "Web Design",
      description: "Build stunning, responsive websites that provide exceptional user experiences.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: ["UI/UX Design", "Responsive Layout", "User Experience", "Modern Design"],
      href: "/services/web-design",
    },
    {
      title: "Brand Identity",
      description: "Develop comprehensive brand strategies that tell your unique story effectively.",
      icon: <Award className="h-8 w-8 text-primary" />,
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Assets"],
      href: "/services/brand-identity",
    },
    {
      title: "Corporate Communications",
      description: "Professional annual reports and corporate materials that build trust and credibility.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      features: ["Annual Reports", "Presentations", "Corporate Materials", "Investor Relations"],
      href: "/services/corporate-communications",
    },
    {
      title: "Print Design",
      description: "High-quality print materials that make a lasting impression on your customers.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      features: ["Brochures", "Business Cards", "Packaging", "Marketing Collateral"],
      href: "/services/print-design",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive digital experiences that users love and businesses benefit from.",
      icon: <Users className="h-8 w-8 text-primary" />,
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      href: "/services/ui-ux-design",
    },
  ];

  const featuredProjects = [
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
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content: "IBEX Design transformed our brand identity completely. The new design system has improved our brand recognition by 40% and our marketing materials look incredibly professional.",
      avatar: "/api/placeholder/48/48",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      content: "The team at IBEX Design understood our vision perfectly. They delivered a website that not only looks amazing but also converts visitors into customers effectively.",
      avatar: "/api/placeholder/48/48",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Creative Agency",
      content: "Working with IBEX Design was a game-changer for our client projects. Their attention to detail and creative approach elevated our work to the next level.",
      avatar: "/api/placeholder/48/48",
      rating: 5,
    },
  ];

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Transform Your Brand with Creative Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional design services for modern businesses. We specialize in visual design, 
              brand identity, and digital experiences that drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Star className="w-5 h-5 mr-2" />
                View Portfolio
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive design solutions to help your business stand out 
              and achieve its goals through exceptional visual communication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses 
              transform their visual identity and digital presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say 
              about working with IBEX Design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get the latest design insights, industry trends, and project updates 
              delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}
