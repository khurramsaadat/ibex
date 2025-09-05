import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar,
  rating,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-muted-foreground mb-6 italic">
          "{content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">
              {role} at {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
