"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { X, ExternalLink, Github, Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tags: string[];
  href: string;
  client: string;
  year: string;
  duration: string;
  team: string[];
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  testimonial?: {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  };
  gallery: string[];
  relatedProjects?: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project || !isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="text-sm">
              {project.category}
            </Badge>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrev}
              disabled={!hasPrev}
              className="h-8 w-8 p-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              disabled={!hasNext}
              className="h-8 w-8 p-0"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-lg"
                />
                {project.gallery.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-black/50 hover:bg-black/70"
                    >
                      <ArrowLeft className="h-4 w-4 text-white" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 bg-black/50 hover:bg-black/70"
                    >
                      <ArrowRight className="h-4 w-4 text-white" />
                    </Button>
                  </>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {project.gallery.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {project.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors",
                        index === currentImageIndex
                          ? "border-primary"
                          : "border-transparent hover:border-muted-foreground"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {project.longDescription}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Client:</span>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span>
                      <p className="text-muted-foreground">{project.duration}</p>
                    </div>
                    <div>
                      <span className="font-medium">Year:</span>
                      <p className="text-muted-foreground">{project.year}</p>
                    </div>
                    <div>
                      <span className="font-medium">Team Size:</span>
                      <p className="text-muted-foreground">{project.team.length} members</p>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <span className="font-medium text-sm">Technologies Used:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Our Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Challenges</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Solutions</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Client Testimonial */}
              {project.testimonial && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Client Testimonial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-sm italic text-muted-foreground mb-4">
                      "{project.testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <img
                        src={project.testimonial.avatar}
                        alt={project.testimonial.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">{project.testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {project.testimonial.role} at {project.testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Actions */}
              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Project
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
