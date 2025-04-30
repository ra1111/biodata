import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20 md:py-32">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-10 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a 
                href="https://apps.shopify.com/adgenie-ai" 
                className="inline-flex items-center px-8 py-4 border border-transparent text-base md:text-lg font-medium rounded-full shadow-sm text-indigo-700 bg-white hover:bg-gray-100 transition transform hover:scale-105 duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.button1')}
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-base md:text-lg font-medium rounded-full text-white hover:bg-white hover:bg-opacity-10 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.button2')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
