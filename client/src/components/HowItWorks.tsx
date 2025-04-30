import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-adgenie-dark mb-4">How AdGenie Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Four simple steps to create professional ads in seconds.</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div 
              key={index}
              className="flex-1 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="w-16 h-16 flex items-center justify-center bg-adgenie-primary text-white text-xl font-bold rounded-full mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {step.step}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Add arrows between steps (except after the last step) */}
              {index < HOW_IT_WORKS.length - 1 && (
                <>
                  <div className="hidden md:block text-gray-300 text-3xl mt-4">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="block md:hidden text-gray-300 text-3xl mt-4">
                    <i className="fas fa-arrow-down"></i>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 max-w-4xl mx-auto bg-adgenie-light rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-2">
            <img 
              src="https://cdn.shopify.com/app-store/listing_images/0f2a3ce3a350d918e4be1cbf37eb3308/desktop_screenshot/CMWuoNm6_IwDEAE=.jpeg" 
              alt="AdGenie AI interface demo showing ad creation process" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
