import Link from "next/link";
import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/ui/service-card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
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
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Design Agency
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-fade-in-up">
              Transform Your Brand with
              <span className="block text-primary">Creative Excellence</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Professional design services for modern businesses. We specialize in visual design, 
              brand identity, and digital experiences that drive business success and growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-300">
              <Button asChild size="lg" className="text-lg px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link href="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                <Link href="/portfolio">
                  <Star className="w-5 h-5 mr-2" />
                  View Our Work
                </Link>
              </Button>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                <div className="w-12 h-1 bg-primary/20 rounded-full mx-auto mt-2 group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                <div className="w-12 h-1 bg-primary/20 rounded-full mx-auto mt-2 group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                <div className="w-12 h-1 bg-primary/20 rounded-full mx-auto mt-2 group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                <div className="w-12 h-1 bg-primary/20 rounded-full mx-auto mt-2 group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Palette className="w-4 h-4 mr-2" />
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Comprehensive Design
              <span className="block text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              We offer comprehensive design solutions to help your business stand out 
              and achieve its goals through exceptional visual communication and strategic design thinking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up delay-500">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your brand? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/about">
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 mr-2" />
              Featured Work
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Latest
              <span className="block text-primary">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Explore our latest projects and see how we've helped businesses 
              transform their visual identity and digital presence with measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in-up delay-500">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to See More?</h3>
              <p className="text-muted-foreground mb-6">
                Discover our complete portfolio and find inspiration for your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <Link href="/portfolio">
                    View All Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link href="/portfolio">
                    <Users className="w-5 h-5 mr-2" />
                    Case Studies
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-muted/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 mr-2" />
              Client Success
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              What Our Clients
              <span className="block text-primary">Say About Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Don't just take our word for it. Here's what our clients have to say 
              about working with IBEX Design and the results we've achieved together.
            </p>
          </div>
          
          <TestimonialsCarousel 
            testimonials={testimonials}
            autoPlay={true}
            autoPlayInterval={6000}
            className="animate-fade-in-up delay-300"
          />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                About IBEX Design
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Crafting Digital
                <span className="block text-primary">Excellence Since 2019</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're a passionate team of designers and strategists dedicated to transforming 
                businesses through exceptional visual communication. Our mission is to create 
                designs that not only look beautiful but also drive real business results.
              </p>
              
              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground font-medium">Years of Excellence</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Award className="w-5 h-5 mr-2" />
                  Our Story
                </Button>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative animate-fade-in-up delay-200">
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl transform rotate-3" />
                <div className="relative bg-background border border-border rounded-3xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Palette className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Creative Design</h3>
                        <p className="text-sm text-muted-foreground">Innovative visual solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Digital Strategy</h3>
                        <p className="text-sm text-muted-foreground">Data-driven approaches</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Brand Excellence</h3>
                        <p className="text-sm text-muted-foreground">Award-winning results</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000" />
                </div>
              </div>
            </div>
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
