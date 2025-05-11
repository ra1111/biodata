import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";
import { BlogPost as BlogPostType } from "@shared/schema";
import { marked } from "marked";
import { CalendarDays, Clock, ChevronLeft, User, Tag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost() {
  const { t } = useTranslation();
  const params = useParams<{ slug: string }>();
  const [_, setLocation] = useLocation();
  const { slug } = params;
  
  // Fetch blog post from API
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog', slug],
    queryFn: getQueryFn<{ success: boolean; data: BlogPostType }>({ on401: "throw" }),
  });
  
  const post = data?.data;
  
  // Handle 404 - post not found
  useEffect(() => {
    if (!isLoading && !post && !error) {
      setLocation("/not-found");
    }
  }, [isLoading, post, error, setLocation]);
  
  // Format date for display
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  // Convert markdown to HTML
  const renderMarkdown = (content: string) => {
    return { __html: marked(content) };
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 hover:text-indigo-600"
            onClick={() => setLocation("/blog")}
          >
            <ChevronLeft size={16} className="mr-1" /> {t('blogPost.backToBlog')}
          </Button>
        </div>
        
        {isLoading ? (
          // Loading skeleton
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="aspect-video w-full mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-8" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-4/5 mb-2" />
          </div>
        ) : error ? (
          // Error state
          <Card className="max-w-3xl mx-auto p-6 text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-4">
              {t('blogPost.errorLoading')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('blogPost.errorMessage')}
            </p>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => window.location.reload()}
              >
                {t('blogPost.tryAgain')}
              </Button>
              <Button onClick={() => setLocation("/blog")}>
                {t('blogPost.returnToBlog')}
              </Button>
            </div>
          </Card>
        ) : post ? (
          // Blog post content
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header section */}
            <header className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <CalendarDays size={16} className="mr-1" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-indigo-50 text-indigo-700">
                    <Tag size={12} className="mr-1" /> {tag}
                  </Badge>
                ))}
              </div>
            </header>
            
            {/* Featured image */}
            {post.coverImage && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}
            
            {/* Article content */}
            <article 
              className="prose prose-indigo max-w-none mb-12"
              dangerouslySetInnerHTML={renderMarkdown(post.content)}
            />
            
            {/* Author info */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center">
                {post.authorImage ? (
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4">
                    <User size={24} />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <p className="text-sm text-gray-600">{t('blogPost.authorLabel')}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation and sharing */}
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-wrap justify-between">
              <Button 
                variant="outline" 
                onClick={() => setLocation("/blog")}
              >
                <ChevronLeft size={16} className="mr-1" /> {t('blogPost.backToBlog')}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}