import { motion } from "framer-motion";

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
            
            {/* Product Demo Card - Exactly matching screenshot */}
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Main Card */}
              <div className="rounded-lg shadow-xl overflow-hidden">
                {/* Top Blue Part */}
                <div className="bg-indigo-600 p-8 text-white text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">Generate Image & Text Ads For All Platforms</h3>
                  
                  {/* Platform Icons */}
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="bg-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">f</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                      <span className="text-red-600 text-2xl font-bold">P</span>
                    </div>
                    <div className="bg-white p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                      <span className="text-pink-600 text-2xl font-bold">Ig</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom White Part */}
                <div className="bg-white p-8">
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <p className="font-bold text-gray-800 text-xl mb-4">KEEP IT SIMPLE, KEEP IT MINIMAL</p>
                    <div className="flex justify-center">
                      <div className="w-32 h-44 bg-gradient-to-b from-red-300 to-red-500 rounded-md relative">
                        <div className="absolute top-4 left-0 right-0 text-center text-white font-bold p-1">eau</div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-amber-800 rounded-b-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI-Powered Badge */}
              <motion.div 
                className="absolute -right-4 -bottom-4 bg-yellow-500 text-white py-3 px-6 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
              >
                <span className="text-base font-bold">AI-Powered!</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
