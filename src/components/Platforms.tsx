import { motion } from "framer-motion";
import { PLATFORMS } from "@/lib/constants";

export default function Platforms() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-adgenie-dark mb-4">All Your Ad Platforms in One Place</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Generate optimized ads for every platform where your customers are active.</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {PLATFORMS.map((platform, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 flex items-center justify-center ${platform.bgColor} text-white text-3xl rounded-lg`}>
                <i className={`fab ${platform.icon}`}></i>
              </div>
              <span className="mt-2 font-medium">{platform.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
