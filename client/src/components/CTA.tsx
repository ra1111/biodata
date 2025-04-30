import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-adgenie-primary to-adgenie-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Start Creating Better Ads Today
        </motion.h2>
        <motion.p 
          className="text-xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join thousands of Shopify merchants who are saving time and increasing sales with AdGenie AI.
        </motion.p>
        <motion.a 
          href="https://apps.shopify.com/adgenie-ai" 
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg bg-white text-adgenie-primary hover:bg-gray-100 transition transform hover:scale-105 duration-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fas fa-rocket mr-2"></i> Install AdGenie Free
        </motion.a>
        <motion.p 
          className="mt-4 text-sm text-white text-opacity-80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          No credit card required. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
