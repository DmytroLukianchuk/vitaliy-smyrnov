import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from '@/components/ui/useTranslation';

export default function WhoIHelp() {
  const { t } = useTranslation();
  
  const healthConditions = [
    t('whoIHelp.health1'),
    t('whoIHelp.health2'),
    t('whoIHelp.health3'),
    t('whoIHelp.health4'),
    t('whoIHelp.health5'),
  ];

  const lifestyleGroups = [
    t('whoIHelp.lifestyle1'),
    t('whoIHelp.lifestyle2'),
    t('whoIHelp.lifestyle3'),
    t('whoIHelp.lifestyle4'),
    t('whoIHelp.lifestyle5'),
    t('whoIHelp.lifestyle6'),
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F5FBF8] via-[#F5FBF8] to-[#E9F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
            {t('whoIHelp.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('whoIHelp.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Health Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-white to-rose-50/30 rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center">
                <span className="text-2xl">🩺</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-950">
                {t('whoIHelp.healthTitle')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {healthConditions.map((condition, i) => (
                <motion.span
                  key={condition}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-rose-50 text-rose-700 text-sm font-medium border border-rose-100"
                >
                  {condition}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Lifestyle Groups */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-emerald-950">
                {t('whoIHelp.lifestyleTitle')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {lifestyleGroups.map((group, i) => (
                <motion.span
                  key={group}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                >
                  {group}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}