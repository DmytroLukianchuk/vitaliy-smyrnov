import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Heart } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function HeroAbout() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-stone-100 to-emerald-50 shadow-2xl">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693075c945fc9f4c2db731d6/f6ed688e8_Logo.jpg"
                  alt="Віталій Смирнов - реабілітолог"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-xl border border-stone-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-700" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-900">35+</p>
                    <p className="text-xs sm:text-sm text-stone-500">{t('about.yearsExp')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-emerald-200 -z-10" />
              <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-2xl bg-amber-100/50 -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-6">
              {t('about.badge')}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-emerald-950 mb-6 leading-tight">
              {t('about.name')}
            </h1>

            <p className="text-xl text-emerald-700 font-medium mb-6">
              {t('about.specialist')}
            </p>

            <div className="prose prose-stone max-w-none mb-8">
              <p className="text-lg leading-relaxed">
                {t('about.bio')}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Calendar, value: '1990', label: t('about.inProfession') },
                { icon: Heart, value: '1000+', label: t('about.patients') },
                { icon: Award, value: '10+', label: t('about.certificates') },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-stone-50">
                  <stat.icon className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-bold text-emerald-950">{stat.value}</p>
                  <p className="text-xs text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}