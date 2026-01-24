import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, FileText, Stethoscope, Sparkles, Clock, MapPin, RefreshCw, Gift } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function WhatToExpect() {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#E9F5EF] via-[#E4F1EA] to-[#F5FBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
            {t('expect.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('expect.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* First Visit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-950">{t('expect.firstVisit')}</h3>
                <p className="text-sm text-stone-500">{t('expect.firstVisitTime')}</p>
              </div>
            </div>

            <ul className="space-y-4 mb-6">
              {[
                { icon: MessageSquare, text: t('expect.firstVisit1') },
                { icon: FileText, text: t('expect.firstVisit2') },
                { icon: Stethoscope, text: t('expect.firstVisit3') },
                { icon: Sparkles, text: t('expect.firstVisit4') },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-emerald-700" />
                  </div>
                  <span className="text-stone-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-emerald-800 text-white rounded-2xl p-4">
              <p className="font-medium">
                {t('expect.firstVisitNote')}
              </p>
            </div>
          </motion.div>

          {/* Recovery Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 border border-amber-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-950">{t('expect.recovery')}</h3>
                <p className="text-sm text-stone-500">{t('expect.recoveryTime')}</p>
              </div>
            </div>

            <ul className="space-y-4 mb-6">
              {[
                { icon: Clock, text: t('expect.recovery1') },
                { icon: MapPin, text: t('expect.recovery2') },
                { icon: RefreshCw, text: t('expect.recovery3') },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="h-4 w-4 text-amber-700" />
                  </div>
                  <span className="text-stone-700">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="bg-amber-100 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <Gift className="h-5 w-5 text-amber-700 mt-0.5" />
                <p className="text-amber-800 font-medium">
                  {t('expect.recoveryBonus')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}