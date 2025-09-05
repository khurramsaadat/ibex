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
        <div className="space-y-6">
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
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>2019</CardTitle>
                <CardDescription>Founded with a vision to transform businesses through design</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>2021</CardTitle>
                <CardDescription>Won our first major design award for corporate identity</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>2024</CardTitle>
                <CardDescription>Expanded to serve 50+ clients across multiple industries</CardDescription>
              </CardHeader>
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
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Our diverse team of designers, strategists, and developers brings together 
            decades of combined experience in creating exceptional digital experiences.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                expertise: ["Brand Strategy", "Visual Identity", "Team Leadership"],
                experience: "8+ years"
              },
              {
                name: "Michael Chen",
                role: "Lead UI/UX Designer",
                expertise: ["User Research", "Interface Design", "Prototyping"],
                experience: "6+ years"
              },
              {
                name: "Emily Rodriguez",
                role: "Senior Graphic Designer",
                expertise: ["Print Design", "Brand Guidelines", "Marketing Materials"],
                experience: "7+ years"
              }
            ].map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium">{member.role}</CardDescription>
                  <Badge variant="outline" className="w-fit">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Expertise</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
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
