import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  hasScrolled: boolean;
}

export default function Header({ hasScrolled }: HeaderProps) {
  const { t } = useTranslation();
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white shadow-sm transition-all duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl sm:text-2xl font-bold text-indigo-600">
              <i className="fas fa-magic mr-2"></i>
              <span className="hidden sm:inline">AdGenie</span>
              <span className="sm:hidden">AG</span>
              <span className="hidden md:inline"> | AI Ads for Shopify</span>
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-6 lg:space-x-10 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {NAV_LINKS.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-sm lg:text-base font-medium text-gray-700 hover:text-indigo-600 transition"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            <LanguageSwitcher />
          </motion.nav>
          
          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.a 
              href="https://apps.shopify.com/adgenie-ai" 
              className="hidden md:inline-flex items-center px-5 lg:px-6 py-2 border border-transparent text-sm lg:text-base font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.installApp')}
            </motion.a>
            
            <div className="md:hidden flex items-center">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile menu button */}
            <button 
              type="button" 
              className="md:hidden p-2 rounded-full bg-gray-100 text-gray-700"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              id="mobile-menu"
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white h-full shadow-xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center px-4 py-5 border-b">
                  <span className="text-xl font-bold text-indigo-600">AdGenie</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto py-4">
                  {NAV_LINKS.map((link, index) => (
                    <a 
                      key={index}
                      href={link.href} 
                      className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 border-b border-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(`nav.${link.key}`)}
                    </a>
                  ))}
                  <div className="mt-6 px-4">
                    <a 
                      href="https://apps.shopify.com/adgenie-ai" 
                      className="block w-full py-3 px-4 rounded-full text-center text-white bg-green-600 font-medium shadow"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t('header.installApp')}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
