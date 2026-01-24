import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, Home, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function CaseStudy() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#F5FBF8] via-[#E9F5EF] to-[#E4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
            {t('case.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('case.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="grid md:grid-cols-5">
              {/* Left - Image */}
              <div className="md:col-span-2 bg-gradient-to-br from-emerald-100 to-emerald-50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-emerald-200 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-emerald-700" />
                  </div>
                  <p className="text-emerald-800 font-semibold">{t('case.result')}</p>
                  <p className="text-emerald-600 text-sm">{t('case.resultSub')}</p>
                </div>
              </div>

              {/* Right - Content */}
              <div className="md:col-span-3 p-8">
                <blockquote className="text-lg text-stone-700 leading-relaxed mb-6">
                  {t('case.quote')}
                </blockquote>

                <div className="space-y-3">
                  {[
                    { icon: Clock, text: t('case.stat1') },
                    { icon: Home, text: t('case.stat2') },
                    { icon: CheckCircle2, text: t('case.stat3') },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-emerald-700" />
                      </div>
                      <span className="text-stone-600 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}