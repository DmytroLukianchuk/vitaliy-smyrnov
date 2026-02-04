import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, HelpCircle } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function ServicesCTA() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-emerald-700/50 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-emerald-200" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t('services.ctaTitle')}
            </h2>

            <p className="text-emerald-200 text-lg mb-8 max-w-lg mx-auto">
              {t('services.ctaDesc')}
            </p>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://t.me/vit2050" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-900 hover:bg-stone-100 rounded-full px-8 py-6 text-base font-semibold shadow-lg"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t('services.ctaBtn')}
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}