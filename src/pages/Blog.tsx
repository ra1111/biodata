import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { CalendarDays, Clock, ChevronRight, Search } from "lucide-react";
import { getQueryFn } from "@/lib/queryClient";
import { BlogPost } from "@shared/schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Blog() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch blog posts from API
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog'],
    queryFn: getQueryFn<{ success: boolean; data: BlogPost[] }>({ on401: "throw" }),
  });
  
  // Filter blog posts based on search term
  const filteredPosts = data?.data?.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || [];

  // Format date for display
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('blog.title')}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('blog.subtitle')}
          </motion.p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder={t('blog.searchPlaceholder')}
              className="pl-10 pr-4 py-2 rounded-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index} className="overflow-hidden h-full">
                <div className="aspect-video w-full">
                  <Skeleton className="h-full w-full" />
                </div>
                <CardHeader>
                  <Skeleton className="h-4 w-1/3 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-8 w-1/3" />
                </CardFooter>
              </Card>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-full text-center py-12">
              <p className="text-red-500 mb-4">
                {t('blog.errorLoading')}
              </p>
              <Button onClick={() => window.location.reload()}>
                {t('blog.tryAgain')}
              </Button>
            </div>
          ) : filteredPosts.length === 0 ? (
            // No results state
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 mb-4">
                {searchTerm ? t('blog.noSearchResults') : t('blog.noPosts')}
              </p>
              {searchTerm && (
                <Button variant="outline" onClick={() => setSearchTerm("")}>
                  {t('blog.clearSearch')}
                </Button>
              )}
            </div>
          ) : (
            // Blog posts
            filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
                  {post.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2 text-sm text-gray-500">
                      <CalendarDays size={14} />
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex items-center space-x-3">
                      {post.authorImage && (
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <div className="ml-auto">
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="link" className="font-medium text-indigo-600 hover:text-indigo-800">
                          {t('blog.readMore')} <ChevronRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}