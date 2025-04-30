import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-adgenie-primary to-adgenie-secondary text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
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
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base md:text-lg font-medium rounded-full shadow-sm text-adgenie-primary bg-white hover:bg-gray-100 transition transform hover:scale-105 duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-rocket mr-2"></i> Try for Free on Shopify
                </motion.a>
                <motion.a 
                  href="#how-it-works" 
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-base md:text-lg font-medium rounded-full text-white hover:bg-white hover:bg-opacity-10 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-play-circle mr-2"></i> See How It Works
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-1">
                <img 
                  src="https://cdn.shopify.com/app-store/listing_images/0f2a3ce3a350d918e4be1cbf37eb3308/promotional_image/CLvQk9m6_IwDEAE=.jpeg" 
                  alt="AdGenie AI interface showing ad creation" 
                  className="w-full h-auto"
                />
              </div>
              <motion.div 
                className="absolute -right-6 -bottom-6 bg-adgenie-accent text-white py-2 px-4 rounded-full shadow-lg transform rotate-12"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              >
                <span className="text-sm font-bold">AI-Powered!</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
