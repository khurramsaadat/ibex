'use client';

import { useState } from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogArticleInteractionsProps {
  article: {
    title: string;
    excerpt: string;
    likes: number;
  };
}

export const BlogArticleInteractions = ({ article }: BlogArticleInteractionsProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant={isLiked ? "default" : "outline"}
        size="sm"
        onClick={handleLike}
        className="gap-2"
      >
        <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
        {article.likes + likeCount} {isLiked ? 'Liked' : 'Like'}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleShare}
        className="gap-2"
      >
        <Share2 className="h-4 w-4" />
        Share
      </Button>
    </div>
  );
};
