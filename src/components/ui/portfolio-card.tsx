import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  href: string;
  external?: boolean;
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  tags,
  href,
  external = false,
}: PortfolioCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-black">
            {category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          variant="ghost"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          asChild
        >
          <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
            View Project
            {external ? (
              <ExternalLink className="ml-2 h-4 w-4" />
            ) : (
              <ArrowRight className="ml-2 h-4 w-4" />
            )}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
