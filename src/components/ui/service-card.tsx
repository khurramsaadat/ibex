import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  href: string;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Card className={`group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      featured ? "ring-2 ring-primary" : ""
    }`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {description}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary transition-colors"
          asChild
        >
          <a href={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
