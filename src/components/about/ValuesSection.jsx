import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function ValuesSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 lg:py-28 bg-emerald-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('about.valuesTitle')}
          </h2>
          <p className="text-emerald-200 text-lg">
            {t('about.valuesSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Heart,
              title: t('about.value1Title'),
              text: t('about.value1Desc'),
            },
            {
              icon: Clock,
              title: t('about.value2Title'),
              text: t('about.value2Desc'),
            },
            {
              icon: CheckCircle,
              title: t('about.value3Title'),
              text: t('about.value3Desc'),
            },
            {
              icon: XCircle,
              title: t('about.value4Title'),
              text: t('about.value4Desc'),
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-emerald-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/50"
            >
              <value.icon className="h-8 w-8 text-emerald-300 mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-emerald-200">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}