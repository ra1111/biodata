import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBlogPostSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'AdGenie AI service is running' });
  });

  // Newsletter subscription endpoint (simple implementation)
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        message: 'Valid email is required' 
      });
    }

    // In a real implementation, you'd store this email in a database
    // For now we just return success
    return res.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  });

  // Contact form endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email and message are required' 
      });
    }

    // In a real implementation, you'd store the message or send an email
    // For now we just return success
    return res.json({ 
      success: true, 
      message: 'Message received. We\'ll get back to you soon!' 
    });
  });

  // Blog routes
  // Get all blog posts
  app.get('/api/blog', async (req: Request, res: Response) => {
    try {
      const blogPosts = await storage.getAllBlogPosts();
      return res.json({ success: true, data: blogPosts });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch blog posts' 
      });
    }
  });

  // Get blog post by slug
  app.get('/api/blog/:slug', async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const blogPost = await storage.getBlogPostBySlug(slug);
      
      if (!blogPost) {
        return res.status(404).json({ 
          success: false, 
          message: 'Blog post not found' 
        });
      }
      
      return res.json({ success: true, data: blogPost });
    } catch (error) {
      console.error(`Error fetching blog post with slug ${req.params.slug}:`, error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to fetch blog post' 
      });
    }
  });

  // Create new blog post (admin only)
  app.post('/api/blog', async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertBlogPostSchema.parse(req.body);
      
      // Create the blog post
      const newBlogPost = await storage.createBlogPost(validatedData);
      
      return res.status(201).json({ 
        success: true, 
        message: 'Blog post created successfully', 
        data: newBlogPost 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid blog post data', 
          errors: error.errors 
        });
      }
      
      console.error('Error creating blog post:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to create blog post' 
      });
    }
  });

  // Update blog post (admin only)
  app.put('/api/blog/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid blog post ID' 
        });
      }
      
      // Check if the blog post exists
      const existingPost = await storage.getBlogPostById(id);
      
      if (!existingPost) {
        return res.status(404).json({ 
          success: false, 
          message: 'Blog post not found' 
        });
      }
      
      // Update the blog post
      const updatedPost = await storage.updateBlogPost(id, req.body);
      
      return res.json({ 
        success: true, 
        message: 'Blog post updated successfully', 
        data: updatedPost 
      });
    } catch (error) {
      console.error(`Error updating blog post with ID ${req.params.id}:`, error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to update blog post' 
      });
    }
  });

  // Delete blog post (admin only)
  app.delete('/api/blog/:id', async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid blog post ID' 
        });
      }
      
      // Check if the blog post exists
      const existingPost = await storage.getBlogPostById(id);
      
      if (!existingPost) {
        return res.status(404).json({ 
          success: false, 
          message: 'Blog post not found' 
        });
      }
      
      // Delete the blog post
      await storage.deleteBlogPost(id);
      
      return res.json({ 
        success: true, 
        message: 'Blog post deleted successfully' 
      });
    } catch (error) {
      console.error(`Error deleting blog post with ID ${req.params.id}:`, error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to delete blog post' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
