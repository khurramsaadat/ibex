import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { LayoutWrapper } from '@/components/layout/layout-wrapper';
import { BlogCard } from '@/components/ui/blog-card';
import { BlogArticleInteractions } from '@/components/ui/blog-article-interactions';
import Image from 'next/image';
import Link from 'next/link';

// Mock blog data (in a real app, this would come from a CMS or API)
const blogPosts = [
  {
    id: 1,
    slug: "future-of-brand-design-trends-2024",
    title: "The Future of Brand Design: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping brand design and how they're revolutionizing the creative industry.",
    content: `
# The Future of Brand Design: Trends to Watch in 2024

The world of brand design is constantly evolving, and 2024 promises to bring some of the most exciting changes we've seen in years. As we navigate through an increasingly digital landscape, brands are finding new ways to connect with their audiences through innovative design approaches.

## 1. Sustainable Design Takes Center Stage

Sustainability isn't just a buzzword anymore—it's a fundamental principle driving design decisions. Brands are embracing eco-friendly materials, minimal packaging, and designs that reflect their environmental values.

### Key Sustainable Design Elements:
- **Minimalist packaging** that reduces waste
- **Earth-tone color palettes** that evoke nature
- **Recyclable materials** and biodegradable options
- **Digital-first approaches** to reduce physical waste

## 2. AI-Powered Personalization

Artificial intelligence is revolutionizing how brands create personalized experiences. From dynamic logos that adapt to user preferences to AI-generated content that resonates with specific audiences, the possibilities are endless.

### AI in Brand Design:
- **Dynamic brand elements** that change based on context
- **Personalized color schemes** for different user segments
- **Automated content generation** that maintains brand consistency
- **Predictive design trends** based on user behavior

## 3. Immersive Digital Experiences

With the rise of virtual and augmented reality, brands are creating more immersive digital experiences than ever before. These technologies allow for deeper emotional connections with audiences.

### Immersive Design Features:
- **3D brand elements** that come to life
- **Interactive brand experiences** in virtual spaces
- **AR-powered product visualization**
- **Virtual brand environments** for events and launches

## 4. Micro-Interactions and Animation

Small details make a big difference. Micro-interactions and subtle animations are becoming essential for creating engaging digital experiences that feel alive and responsive.

### Animation Best Practices:
- **Subtle hover effects** that provide feedback
- **Loading animations** that entertain while waiting
- **Scroll-triggered animations** that reveal content progressively
- **Brand-specific motion graphics** that reinforce identity

## 5. Inclusive and Accessible Design

Design is becoming more inclusive, ensuring that brands can connect with diverse audiences regardless of ability, culture, or background.

### Accessibility Considerations:
- **High contrast ratios** for better readability
- **Scalable typography** that works across devices
- **Cultural sensitivity** in color and imagery choices
- **Universal design principles** that benefit everyone

## Looking Ahead

As we move through 2024, the brands that will succeed are those that embrace these trends while maintaining their unique voice and values. The future of brand design is about creating meaningful connections through thoughtful, sustainable, and inclusive design practices.

The key is to stay curious, experiment with new technologies, and always keep your audience at the center of your design decisions. The brands that do this will not only survive but thrive in the ever-evolving landscape of design.

---

*What trends are you most excited about? Share your thoughts and let's continue the conversation about the future of brand design.*
    `,
    author: "Sarah Johnson",
    authorRole: "Creative Director",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "Brand Design",
    tags: ["Branding", "Trends", "Design", "2024"],
    image: "/api/placeholder/800/400",
    featured: true,
    likes: 42,
    shares: 18
  },
  {
    id: 2,
    slug: "create-memorable-logo-complete-guide",
    title: "How to Create a Memorable Logo: A Complete Guide",
    excerpt: "Learn the essential principles and techniques for designing logos that stand out and resonate with your audience.",
    content: `
# How to Create a Memorable Logo: A Complete Guide

A logo is often the first thing people notice about your brand. It's the visual representation of your company's identity, values, and personality. Creating a memorable logo requires careful consideration of various design principles and strategic thinking.

## Understanding Logo Design Fundamentals

Before diving into the creative process, it's essential to understand what makes a logo effective and memorable.

### Key Characteristics of Great Logos:
- **Simplicity**: Easy to recognize and remember
- **Versatility**: Works across different mediums and sizes
- **Timelessness**: Remains relevant for years to come
- **Appropriateness**: Reflects the brand's personality and industry
- **Memorability**: Creates a lasting impression

## The Logo Design Process

### 1. Research and Discovery

Start by understanding your brand, target audience, and competitive landscape. This foundation will guide all your design decisions.

**Questions to Ask:**
- What does your brand stand for?
- Who is your target audience?
- What makes you different from competitors?
- What emotions should your logo evoke?

### 2. Conceptualization

Brainstorm multiple concepts and explore different directions. Don't limit yourself to the first idea that comes to mind.

**Concept Development:**
- Sketch freely without judgment
- Explore different styles and approaches
- Consider both literal and abstract representations
- Think about how the logo will work in different contexts

### 3. Refinement

Once you have strong concepts, refine them by focusing on the details that will make your logo truly memorable.

**Refinement Areas:**
- Typography selection and customization
- Color palette development
- Spacing and proportions
- Scalability testing

### 4. Testing and Feedback

Get feedback from stakeholders and test your logo in various applications to ensure it works effectively.

**Testing Methods:**
- Show the logo to people unfamiliar with your brand
- Test at different sizes and in different contexts
- Gather feedback from your target audience
- Ensure it works in both color and black & white

## Logo Types and When to Use Them

### Wordmarks
Perfect for brands with distinctive names that want to emphasize typography.

### Lettermarks
Ideal for companies with long names or multiple words in their brand name.

### Pictorial Marks
Great for brands that want to be instantly recognizable through a symbol.

### Abstract Marks
Perfect for brands that want to convey concepts or emotions rather than literal representations.

### Combination Marks
Offer the flexibility of both text and symbol, making them versatile for different applications.

## Color Psychology in Logo Design

Colors evoke emotions and associations, making them crucial in logo design.

### Color Meanings:
- **Red**: Energy, passion, urgency
- **Blue**: Trust, stability, professionalism
- **Green**: Growth, nature, sustainability
- **Yellow**: Optimism, creativity, warmth
- **Purple**: Luxury, creativity, mystery
- **Orange**: Enthusiasm, friendliness, confidence

## Typography in Logo Design

The right typeface can make or break a logo. Consider these factors when choosing typography:

### Typography Considerations:
- **Readability** at all sizes
- **Brand personality** alignment
- **Uniqueness** and distinctiveness
- **Legibility** across different mediums
- **Timelessness** and longevity

## Common Logo Design Mistakes to Avoid

### 1. Overcomplicating the Design
Keep it simple. Complex logos are harder to remember and reproduce.

### 2. Following Trends Too Closely
Trends come and go, but your logo should last for years.

### 3. Poor Scalability
Ensure your logo works at both large and small sizes.

### 4. Inconsistent Applications
Create guidelines for how your logo should be used across different mediums.

### 5. Ignoring the Target Audience
Always consider who will be seeing and interacting with your logo.

## Creating a Logo Style Guide

Once your logo is finalized, create a comprehensive style guide to ensure consistent application.

### Style Guide Elements:
- Logo variations and usage rules
- Color specifications and codes
- Typography guidelines
- Spacing and sizing requirements
- Do's and don'ts for logo usage

## Conclusion

Creating a memorable logo is a process that requires research, creativity, and strategic thinking. By following these principles and avoiding common mistakes, you can create a logo that not only looks great but also effectively represents your brand and resonates with your audience.

Remember, a great logo is just the beginning. It's how you use it consistently across all touchpoints that will truly make it memorable and effective for your brand.

---

*Need help creating your logo? Our team of experienced designers is here to help bring your vision to life.*
    `,
    author: "Michael Chen",
    authorRole: "Senior Designer",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-12",
    readTime: "8 min read",
    category: "Logo Design",
    tags: ["Logo", "Tutorial", "Design", "Branding"],
    image: "/api/placeholder/800/400",
    featured: false,
    likes: 38,
    shares: 22
  }
];

// Related articles (excluding current article)
const getRelatedArticles = (currentSlug: string) => {
  return blogPosts.filter(post => post.slug !== currentSlug).slice(0, 3);
};

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogArticlePage = async ({ params }: BlogArticlePageProps) => {
  const { slug } = await params;

  // Find the article by slug
  const article = blogPosts.find(post => post.slug === slug);
  const relatedArticles = getRelatedArticles(slug);

  if (!article) {
    return (
      <LayoutWrapper>
        <div className="min-h-screen flex items-center justify-center">
          <Card className="border-0 shadow-xl max-w-md mx-auto">
            <CardContent className="text-center py-12">
              <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The article you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
              <Link href="/blog">
                <Button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </LayoutWrapper>
    );
  }


  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article className="max-w-4xl mx-auto px-4 pb-20">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline">{article.category}</Badge>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
                <span className="text-muted-foreground/60">•</span>
                <span>{article.authorRole}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Article Actions */}
            <BlogArticleInteractions article={article} />
          </header>

          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div 
              className="whitespace-pre-wrap leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, (match) => {
                  const level = match.trim().length;
                  return `<h${level} class="font-bold text-2xl mb-4 mt-8">`;
                }).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
              }}
            />
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <Image
                  src={article.authorAvatar}
                  alt={article.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{article.author}</h3>
                  <p className="text-sm text-muted-foreground">{article.authorRole}</p>
                </div>
              </div>
              <BlogArticleInteractions article={article} />
            </div>
          </footer>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 pb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
              <p className="text-muted-foreground">
                Continue exploring design insights and industry trends
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((post) => (
                <BlogCard 
                  key={post.id} 
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  category={post.category}
                  author={post.author}
                  date={new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  readTime={post.readTime}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </LayoutWrapper>
  );
};

export default BlogArticlePage;
