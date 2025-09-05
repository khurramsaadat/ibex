import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Tabs } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

export default function About() {
  const breadcrumbItems = [
    { label: "About Us" }
  ];

  const tabItems = [
    {
      id: "story",
      label: "Our Story",
      content: (
        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2019, IBEX Design emerged from a simple yet powerful vision: to transform 
              businesses through exceptional design. What started as a small team of passionate 
              designers has grown into a full-service creative agency that serves clients across 
              various industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey began when we noticed a gap in the market for design agencies that truly 
              understood both the creative and business aspects of design. We set out to bridge 
              that gap, creating designs that not only look beautiful but also drive real business results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">2019</CardTitle>
                <CardDescription className="text-base">Founded with a vision to transform businesses through design</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Started as a small team of 3 designers with a shared passion for creating meaningful design solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">2021</CardTitle>
                <CardDescription className="text-base">Won our first major design award for corporate identity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Recognized by the Design Excellence Awards for our innovative approach to corporate branding.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">2024</CardTitle>
                <CardDescription className="text-base">Expanded to serve 50+ clients across multiple industries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Grown to a team of 12+ designers and strategists serving clients worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "values",
      label: "Our Values",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Passion for Excellence</CardTitle>
                <CardDescription>
                  We believe that great design comes from a deep passion for creating meaningful 
                  experiences that resonate with users and drive business success.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Collaborative Approach</CardTitle>
                <CardDescription>
                  We work closely with our clients as partners, ensuring that every project 
                  reflects their unique vision while leveraging our expertise.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Results-Driven</CardTitle>
                <CardDescription>
                  Every design decision we make is backed by data and focused on achieving 
                  measurable results for our clients' businesses.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Continuous Innovation</CardTitle>
                <CardDescription>
                  We stay at the forefront of design trends and technologies, constantly 
                  evolving our approach to deliver cutting-edge solutions.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "team",
      label: "Our Team",
      content: (
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Our diverse team of designers, strategists, and developers brings together 
            decades of combined experience in creating exceptional digital experiences.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                expertise: ["Brand Strategy", "Visual Identity", "Team Leadership"],
                experience: "8+ years",
                bio: "Sarah leads our creative vision and ensures every project meets our high standards. She has a background in fine arts and has worked with Fortune 500 companies.",
                avatar: "/api/placeholder/200/200",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Michael Chen",
                role: "Lead UI/UX Designer",
                expertise: ["User Research", "Interface Design", "Prototyping"],
                experience: "6+ years",
                bio: "Michael specializes in creating intuitive user experiences. He has a background in psychology and human-computer interaction.",
                avatar: "/api/placeholder/200/200",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Emily Rodriguez",
                role: "Senior Graphic Designer",
                expertise: ["Print Design", "Brand Guidelines", "Marketing Materials"],
                experience: "7+ years",
                bio: "Emily brings print design expertise to our team. She has worked with major brands and understands the nuances of both digital and print design.",
                avatar: "/api/placeholder/200/200",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "David Kim",
                role: "Frontend Developer",
                expertise: ["React", "TypeScript", "Web Performance"],
                experience: "5+ years",
                bio: "David bridges the gap between design and development, ensuring our designs come to life with pixel-perfect precision.",
                avatar: "/api/placeholder/200/200",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Lisa Wang",
                role: "Brand Strategist",
                expertise: ["Brand Strategy", "Market Research", "Competitive Analysis"],
                experience: "6+ years",
                bio: "Lisa helps our clients understand their market position and develop strategies that drive business growth through design.",
                avatar: "/api/placeholder/200/200",
                linkedin: "#",
                twitter: "#"
              },
              {
                name: "Alex Thompson",
                role: "Project Manager",
                expertise: ["Project Management", "Client Relations", "Process Optimization"],
                experience: "4+ years",
                bio: "Alex ensures every project runs smoothly from start to finish, keeping clients informed and teams aligned throughout the process.",
                avatar: "/api/placeholder/200/200",
                linkedin: "#",
                twitter: "#"
              }
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-base">{member.role}</CardDescription>
                  <Badge variant="outline" className="w-fit mx-auto">{member.experience}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium text-center">Expertise</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-2 pt-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Users className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Award className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )
    }
  ];

  const achievements = [
    "150+ Projects Completed",
    "50+ Happy Clients",
    "5+ Years Experience",
    "100% Client Satisfaction",
    "15+ Design Awards",
    "3 Industry Certifications"
  ];

  return (
    <LayoutWrapper>
      <div className="py-8 px-4">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              About IBEX Design
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of designers and strategists dedicated to transforming 
              businesses through exceptional visual communication and user experiences.
            </p>
          </div>

          {/* Tabs Navigation */}
          <Tabs items={tabItems} className="mb-16" />

          {/* Achievements Section */}
          <section className="py-16 bg-muted/30 rounded-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Numbers that speak to our commitment to excellence and client success.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your brand and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Star className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}
