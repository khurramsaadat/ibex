import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import { 
  Palette, 
  Globe, 
  FileText, 
  Users, 
  Award, 
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Shield,
  Heart
} from "lucide-react";

export default function Services() {
  const breadcrumbItems = [
    { label: "Services" }
  ];

  const services = [
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: "Create compelling visual identities that resonate with your audience and drive engagement.",
      icon: <Palette className="h-8 w-8 text-primary" />,
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Print Design"],
      href: "/services/graphic-design",
      featured: true,
      price: "Starting at £2,000",
      duration: "2-4 weeks",
      deliverables: ["Logo variations", "Brand guidelines", "Business cards", "Letterhead"]
    },
    {
      id: "web-design",
      title: "Web Design",
      description: "Build stunning, responsive websites that provide exceptional user experiences.",
      icon: <Globe className="h-8 w-8 text-primary" />,
      features: ["UI/UX Design", "Responsive Layout", "User Experience", "Modern Design"],
      href: "/services/web-design",
      price: "Starting at £4,000",
      duration: "4-8 weeks",
      deliverables: ["Wireframes", "Visual design", "Responsive layouts", "Style guide"]
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      description: "Develop comprehensive brand strategies that tell your unique story effectively.",
      icon: <Award className="h-8 w-8 text-primary" />,
      features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Brand Assets"],
      href: "/services/brand-identity",
      price: "Starting at £6,500",
      duration: "6-10 weeks",
      deliverables: ["Brand strategy", "Logo system", "Brand guidelines", "Asset library"]
    },
    {
      id: "corporate-communications",
      title: "Corporate Communications",
      description: "Professional annual reports and corporate materials that build trust and credibility.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      features: ["Annual Reports", "Presentations", "Corporate Materials", "Investor Relations"],
      href: "/services/corporate-communications",
      price: "Starting at £2,500",
      duration: "3-6 weeks",
      deliverables: ["Annual report", "Presentation templates", "Corporate materials", "Data visualization"]
    },
    {
      id: "print-design",
      title: "Print Design",
      description: "High-quality print materials that make a lasting impression on your customers.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      features: ["Brochures", "Business Cards", "Packaging", "Marketing Collateral"],
      href: "/services/print-design",
      price: "Starting at £1,200",
      duration: "1-3 weeks",
      deliverables: ["Print-ready files", "Color specifications", "Print guidelines", "Quality assurance"]
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Intuitive digital experiences that users love and businesses benefit from.",
      icon: <Users className="h-8 w-8 text-primary" />,
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      href: "/services/ui-ux-design",
      price: "Starting at £3,200",
      duration: "3-6 weeks",
      deliverables: ["User research", "Wireframes", "Prototypes", "Usability report"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "£2,000",
      description: "Perfect for small businesses and startups",
      features: [
        "Logo design (3 concepts)",
        "Business card design",
        "Basic brand guidelines",
        "2 rounds of revisions",
        "Final files in multiple formats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "£4,000",
      description: "Ideal for growing businesses",
      features: [
        "Complete brand identity",
        "Website design (up to 5 pages)",
        "Comprehensive brand guidelines",
        "3 rounds of revisions",
        "3 months of support",
        "Print-ready files"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "£8,000+",
      description: "For large organizations and complex projects",
      features: [
        "Full brand strategy & identity",
        "Multi-platform design system",
        "Custom illustrations",
        "Unlimited revisions",
        "6 months of support",
        "Team training & handoff"
      ],
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, goals, and target audience through detailed research and strategy sessions.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      step: "02",
      title: "Concept & Design",
      description: "Our team creates initial concepts and designs based on your requirements and our strategic insights.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    },
    {
      step: "03",
      title: "Review & Refine",
      description: "We collaborate with you to refine the designs through multiple rounds of feedback and iteration.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    },
    {
      step: "04",
      title: "Delivery & Support",
      description: "We deliver final files and provide ongoing support to ensure your success with the new designs.",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. Simple logo designs take 2-4 weeks, while comprehensive brand identities can take 6-10 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's included in your design process?",
      answer: "Our process includes discovery & strategy, concept development, design iteration, client feedback, refinement, and final delivery. We also provide ongoing support and brand guidelines to ensure consistent implementation."
    },
    {
      question: "Do you work with clients outside your local area?",
      answer: "Yes! We work with clients worldwide through video calls, collaborative tools, and digital project management. Our remote workflow is just as effective as in-person collaboration."
    },
    {
      question: "What file formats do you provide?",
      answer: "We provide all final files in multiple formats including AI, EPS, PDF, PNG, JPG, and SVG. We also include source files and detailed usage guidelines for your team."
    },
    {
      question: "Do you offer ongoing design support?",
      answer: "Yes, we offer retainer packages and ongoing support for clients who need regular design work. This includes monthly design hours, priority support, and discounted rates for additional projects."
    },
    {
      question: "What makes IBEX Design different?",
      answer: "We combine strategic thinking with creative excellence. Our designs not only look great but also drive real business results. We focus on understanding your business goals and creating designs that help you achieve them."
    }
  ];

  const tabItems = [
    {
      id: "overview",
      label: "Service Overview",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    {service.featured && (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="text-primary font-medium">{service.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "pricing",
      label: "Pricing & Packages",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Choose Your Package</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options designed to meet your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{tier.price}</div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-3 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "process",
      label: "Our Process",
      content: (
        <div className="space-y-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How We Work</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures exceptional results and smooth collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{step.step}</div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "faq",
      label: "FAQ",
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with IBEX Design
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <LayoutWrapper>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Design Services That
              <span className="block text-primary">Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive design solutions to help your business stand out 
              and achieve its goals through exceptional visual communication and strategic design thinking.
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs items={tabItems} className="mb-16" />

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Star className="w-5 h-5 mr-2" />
                View Our Work
              </Button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}
