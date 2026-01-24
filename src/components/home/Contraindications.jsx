import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function Contraindications() {
  const { t } = useTranslation();
  
  return (
    <section className="py-10 lg:py-12 bg-[#E4F1EA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-r from-amber-50/50 to-white rounded-2xl p-6 border border-amber-200/50 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-emerald-950 mb-2">
                {t('contra.title')}
              </h3>
              <p className="text-stone-600">
                {t('contra.text')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}