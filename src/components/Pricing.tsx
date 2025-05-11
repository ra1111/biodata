import { motion } from "framer-motion";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-adgenie-dark mb-4">Flexible Pricing for Every Stage</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Start with our free plan or upgrade anytime. Cancel anytime.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${plan.border} ${plan.popular ? 'transform scale-105 z-10 relative' : 'hover:border-adgenie-primary transition-colors'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-adgenie-primary text-white text-xs font-bold px-3 py-1">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-adgenie-dark mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a 
                  href="https://apps.shopify.com/adgenie-ai" 
                  className={`block text-center py-3 px-4 rounded-md ${
                    plan.popular 
                      ? 'bg-adgenie-primary text-white font-medium hover:bg-adgenie-primary/90 transition shadow-md' 
                      : 'border border-adgenie-primary text-adgenie-primary font-medium hover:bg-adgenie-primary hover:text-white transition'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
