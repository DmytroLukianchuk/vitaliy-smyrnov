import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/components/ui/useTranslation';

export default function ContactHero() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-6">
            {t('contactPage.badge')}
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-950 mb-6 leading-tight">
            {t('contactPage.title')}
          </h1>

          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t('contactPage.desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}