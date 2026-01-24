import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/components/ui/useTranslation';

export default function StorySection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
            {t('about.storyBadge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('about.storyTitle')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-stone max-w-none"
        >
          <p className="text-lg leading-relaxed text-stone-600">
            {t('about.storyP1')}
          </p>

          <p className="text-lg leading-relaxed text-stone-600">
            {t('about.storyP2')}
          </p>

          <p className="text-lg leading-relaxed text-stone-600">
            {t('about.storyP3')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}