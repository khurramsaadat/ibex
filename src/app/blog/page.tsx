'use client';

import { useState, useMemo } from 'react';
import { Search, Calendar, User, Tag, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LayoutWrapper } from '@/components/layout/layout-wrapper';
import { BlogCard } from '@/components/ui/blog-card';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    slug: "future-of-brand-design-trends-2024",
    title: "The Future of Brand Design: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping brand design and how they're revolutionizing the creative industry.",
    content: "Full article content here...",
    author: "Sarah Johnson",
    authorRole: "Creative Director",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    category: "Brand Design",
    tags: ["Branding", "Trends", "Design", "2024"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    slug: "create-memorable-logo-complete-guide",
    title: "How to Create a Memorable Logo: A Complete Guide",
    excerpt: "Learn the essential principles and techniques for designing logos that stand out and resonate with your audience.",
    content: "Full article content here...",
    author: "Michael Chen",
    authorRole: "Senior Designer",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-12",
    readTime: "8 min read",
    category: "Logo Design",
    tags: ["Logo", "Tutorial", "Design", "Branding"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 3,
    slug: "psychology-color-web-design",
    title: "The Psychology of Color in Web Design",
    excerpt: "Understanding how color choices impact user behavior and conversion rates in web design.",
    content: "Full article content here...",
    author: "Emma Wilson",
    authorRole: "UX Designer",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Web Design",
    tags: ["Color", "Psychology", "UX", "Web Design"],
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 4,
    slug: "corporate-annual-reports-design-story",
    title: "Corporate Annual Reports: Design That Tells a Story",
    excerpt: "How to transform dry financial data into compelling visual narratives that engage stakeholders.",
    content: "Full article content here...",
    author: "David Thompson",
    authorRole: "Art Director",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-08",
    readTime: "7 min read",
    category: "Corporate Design",
    tags: ["Annual Reports", "Corporate", "Data Visualization", "Print"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 5,
    slug: "minimalist-design-less-more-branding",
    title: "Minimalist Design: Less is More in Modern Branding",
    excerpt: "The power of simplicity in design and how minimalist approaches can strengthen brand identity.",
    content: "Full article content here...",
    author: "Lisa Rodriguez",
    authorRole: "Brand Strategist",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-05",
    readTime: "4 min read",
    category: "Brand Strategy",
    tags: ["Minimalism", "Branding", "Strategy", "Design"],
    image: "/api/placeholder/600/400",
    featured: false
  },
  {
    id: 6,
    slug: "typography-trends-whats-hot-2024",
    title: "Typography Trends: What's Hot in 2024",
    excerpt: "Discover the typography trends that are defining modern design and how to use them effectively.",
    content: "Full article content here...",
    author: "James Parker",
    authorRole: "Typography Specialist",
    authorAvatar: "/api/placeholder/40/40",
    publishedAt: "2024-01-03",
    readTime: "5 min read",
    category: "Typography",
    tags: ["Typography", "Fonts", "Trends", "Design"],
    image: "/api/placeholder/600/400",
    featured: false
  }
];

const categories = [
  'All',
  'Brand Design',
  'Logo Design',
  'Web Design',
  'Corporate Design',
  'Brand Strategy',
  'Typography'
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Sort posts
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case 'readTime':
        filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Design Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Design Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay updated with the latest design trends, industry insights, and creative inspiration from our team of experts.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search articles, tags, or authors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 h-12"
                      />
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="lg:w-48">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Sort */}
                  <div className="lg:w-48">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="oldest">Oldest First</SelectItem>
                        <SelectItem value="readTime">Read Time</SelectItem>
                        <SelectItem value="title">Title A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Active Filters */}
                {(searchQuery || selectedCategory !== 'All') && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    {searchQuery && (
                      <Badge variant="secondary" className="gap-1">
                        Search: "{searchQuery}"
                        <button
                          onClick={() => setSearchQuery('')}
                          className="ml-1 hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                    {selectedCategory !== 'All' && (
                      <Badge variant="secondary" className="gap-1">
                        Category: {selectedCategory}
                        <button
                          onClick={() => setSelectedCategory('All')}
                          className="ml-1 hover:text-destructive"
                        >
                          ×
                        </button>
                      </Badge>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Featured Articles */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl font-bold">Featured Articles</h2>
                <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1" />
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
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

          {/* All Articles */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">All Articles</h2>
                <Badge variant="outline" className="text-sm">
                  {regularPosts.length} article{regularPosts.length !== 1 ? 's' : ''}
                </Badge>
              </div>
            </div>

            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
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
            ) : (
              <Card className="border-0 shadow-xl">
                <CardContent className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </section>

          {/* Newsletter Signup */}
          <section className="mt-20">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="text-center py-12 px-8">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get the latest design insights, trends, and tips delivered straight to your inbox. 
                  Join our community of creative professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1 h-12"
                  />
                  <Button className="h-12 px-8">
                    Subscribe
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default BlogPage;
