import { motion } from "framer-motion";
import { VALUE_PROPS } from "@/lib/constants";

export default function ValueProps() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-adgenie-dark mb-4">Built for Busy Shopify Sellers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">The easiest way to create high-converting ads without wasting time or money on designers.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div 
              key={index}
              className="bg-adgenie-light rounded-xl p-6 hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-adgenie-primary text-3xl mb-4">
                <i className={`fas ${prop.icon}`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
