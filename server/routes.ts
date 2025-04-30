import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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

  const httpServer = createServer(app);

  return httpServer;
}
