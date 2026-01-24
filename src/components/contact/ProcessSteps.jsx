import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Calendar, MapPin, Stethoscope, BookOpen } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function ProcessSteps() {
  const { t, lang } = useTranslation();
  
  const steps = [
    {
      icon: MessageSquare,
      title: t('contactPage.step1'),
      description: t('contactPage.step1Desc'),
    },
    {
      icon: Calendar,
      title: t('contactPage.step2'),
      description: t('contactPage.step2Desc'),
    },
    {
      icon: MapPin,
      title: t('contactPage.step3'),
      description: t('contactPage.step3Desc'),
    },
    {
      icon: Stethoscope,
      title: t('contactPage.step4'),
      description: t('contactPage.step4Desc'),
    },
    {
      icon: BookOpen,
      title: t('contactPage.step5'),
      description: t('contactPage.step5Desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
            {t('contactPage.processBadge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('contactPage.processTitle')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-emerald-200 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  i % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-stone-100 ${
                    i % 2 === 0 ? '' : 'lg:text-left'
                  }`}>
                    <div className={`flex items-center gap-4 mb-3 ${
                      i % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div className={i % 2 === 0 ? 'lg:text-right' : ''}>
                        <span className="text-xs font-medium text-emerald-600 uppercase tracking-wide">
                          {lang === 'pl' ? `Krok ${i + 1}` : `Крок ${i + 1}`}
                        </span>
                        <h3 className="font-semibold text-emerald-950">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-stone-600 text-sm">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="w-4 h-4 rounded-full bg-emerald-600 border-4 border-white shadow-md" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}