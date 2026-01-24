import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function HighlightBox() {
  const { t } = useTranslation();
  
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-emerald-800 to-emerald-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-3xl p-8 md:p-12 border border-emerald-700/50 shadow-2xl"
        >
          <Quote className="absolute top-6 left-6 h-12 w-12 text-emerald-600/30" />
          
          <p className="relative z-10 text-xl md:text-2xl lg:text-3xl font-medium text-white text-center leading-relaxed">
            {t('highlight.quote')} 
            <span className="text-emerald-300"> {t('highlight.quoteAccent')}</span>
            {t('highlight.quoteEnd')}
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-700 flex items-center justify-center">
                <span className="text-white font-bold">ВС</span>
              </div>
              <div>
                <p className="text-white font-medium">{t('header.name')}</p>
                <p className="text-emerald-300 text-sm">{t('highlight.role')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}