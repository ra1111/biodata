import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

interface HeaderProps {
  hasScrolled: boolean;
}

export default function Header({ hasScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-2xl font-bold text-adgenie-primary">
              <i className="fas fa-magic mr-2"></i>AdGenie | AI Ads for Shopify
            </span>
          </motion.div>
          
          {/* Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {NAV_LINKS.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-base font-medium text-gray-700 hover:text-adgenie-primary transition"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
          
          {/* CTA Button */}
          <div>
            <motion.a 
              href="https://apps.shopify.com/adgenie-ai" 
              className="hidden md:inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-shopify-green hover:bg-opacity-90 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Install App
            </motion.a>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden bg-adgenie-light p-2 rounded-md" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-adgenie-primary hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://apps.shopify.com/adgenie-ai" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-shopify-green"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Install App
          </a>
        </div>
      </div>
    </header>
  );
}
