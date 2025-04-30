import { motion } from "framer-motion";
import adgenieCardSvg from "../assets/adgenie-card.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 md:py-24">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Create Scroll-Stopping Ads in Seconds
              </h1>
              <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8">
                No designer? No problem. Generate image and text ads for Facebook, Instagram, Google, and Pinterest—instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="https://apps.shopify.com/adgenie-ai" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-full shadow-sm text-indigo-700 bg-white hover:bg-gray-100 transition transform hover:scale-105 duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try for Free on Shopify
                </motion.a>
                <motion.a 
                  href="#how-it-works" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base md:text-lg font-medium rounded-full text-white hover:bg-white hover:bg-opacity-10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See How It Works
                </motion.a>
              </div>
            </motion.div>
            
            {/* Product Demo Card - Using the SVG image */}
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img 
                src={adgenieCardSvg} 
                alt="AdGenie AI Ad Generator Demo" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
