import { LayoutWrapper } from "@/components/layout/layout-wrapper";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Tabs } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Target, 
  Heart, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function About() {
  const breadcrumbItems = [
    { label: "About Us" }
  ];

  const tabItems = [
    {
      id: "story",
      label: "",
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
                  <Award className="h-6 w-6 text-primary" />
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

  const teamMembers = [
    {
      name: "Jessica Martinez",
      role: "Creative Director",
      expertise: ["Brand Strategy", "Visual Identity", "Team Leadership"],
      experience: "8+ years",
      bio: "Jessica leads our creative vision and ensures every project meets our high standards. She has a background in fine arts and has worked with Fortune 500 companies.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "James Wilson",
      role: "Lead UI/UX Designer",
      expertise: ["User Research", "Interface Design", "Prototyping"],
      experience: "6+ years",
      bio: "James specializes in creating intuitive user experiences. He has a background in psychology and human-computer interaction.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sofia Chen",
      role: "Senior Graphic Designer",
      expertise: ["Print Design", "Brand Guidelines", "Marketing Materials"],
      experience: "7+ years",
      bio: "Sofia brings print design expertise to our team. She has worked with major brands and understands the nuances of both digital and print design.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Ryan Park",
      role: "Frontend Developer",
      expertise: ["React", "TypeScript", "Web Performance"],
      experience: "5+ years",
      bio: "Ryan bridges the gap between design and development, ensuring our designs come to life with pixel-perfect precision.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Amanda Foster",
      role: "Brand Strategist",
      expertise: ["Brand Strategy", "Market Research", "Competitive Analysis"],
      experience: "6+ years",
      bio: "Amanda helps our clients understand their market position and develop strategies that drive business growth through design.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Johnson",
      role: "Project Manager",
      expertise: ["Project Management", "Client Relations", "Process Optimization"],
      experience: "4+ years",
      bio: "Marcus ensures every project runs smoothly from start to finish, keeping clients informed and teams aligned throughout the process.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      linkedin: "#",
      twitter: "#"
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{achievement}</p>
                </div>
              ))}
            </div>
            
            {/* Team Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse team of designers, strategists, and developers brings together 
                decades of combined experience in creating exceptional digital experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
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
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {member.experience}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Our Values Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and shape our approach to design and client relationships.
              </p>
            </div>
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
                    <Award className="h-6 w-6 text-primary" />
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
                    evolving our methods to deliver cutting-edge solutions.
                  </CardDescription>
                </CardHeader>
              </Card>
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
                <ArrowRight className="mr-2 h-5 w-5" />
                View Our Work
              </Button>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
}
