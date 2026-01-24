import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, Brain, Bone, Activity } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function AboutTeaser() {
  const { t, lang } = useTranslation();
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#E9F5EF] via-[#E9F5EF] to-[#F5FBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-stone-100 to-emerald-50">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693075c945fc9f4c2db731d6/f6ed688e8_Logo.jpg"
                  alt="Віталій Смирнов - реабілітолог"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-emerald-800 text-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-sm text-emerald-200">{lang === 'pl' ? 'Przewodnik do zdrowia' : 'Провідник до здоров\'я'}</p>
                <p className="font-bold text-xl">{lang === 'pl' ? 'od 1990 roku' : 'з 1990 року'}</p>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl border-2 border-emerald-200 -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-6">
              {lang === 'pl' ? 'O specjaliście' : 'Про спеціаліста'}
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-6 leading-tight">
              {lang === 'pl' 
                ? 'Kompleksowe podejście do twojego zdrowia'
                : 'Комплексний підхід до вашого здоров\'я'}
            </h2>

            <div className="space-y-4 text-stone-600 leading-relaxed mb-8">
              <p>
                {lang === 'pl' 
                  ? 'Vitaliy Smyrnov — specjalista kompleksowej rehabilitacji z ponad 35-letnim doświadczeniem. Moje podejście polega na analizie całego systemu organizmu: szkieletu, mięśni, powięzi, stanu emocjonalnego i codziennych nawyków.'
                  : 'Віталій Смирнов — спеціаліст з комплексної реабілітації з понад 35-річним досвідом. Мій підхід полягає в аналізі всієї системи організму: скелета, м\'язів, фасцій, емоційного стану та повсякденних звичок.'}
              </p>
              <p>
                {lang === 'pl'
                  ? 'Pracuję z przyczyną bólu, a nie tylko z objawami. Każda sesja to indywidualnie dobrany kompleks technik, mających na celu przywrócenie twojego zdrowia i powrót do aktywnego życia.'
                  : 'Я працюю з причиною болю, а не тільки симптомами. Кожен сеанс — це індивідуально підібраний комплекс технік, спрямованих на відновлення вашого здоров\'я та повернення до активного життя.'}
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Bone, textUk: 'Аналіз скелета', textPl: 'Analiza szkieletu' },
                { icon: Activity, textUk: "М'язи та фасції", textPl: 'Mięśnie i powięzie' },
                { icon: Brain, textUk: 'Психосоматика', textPl: 'Psychosomatyka' },
                { icon: Stethoscope, textUk: 'Діагностика', textPl: 'Diagnostyka' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-stone-50">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-emerald-700" />
                  </div>
                  <span className="text-sm font-medium text-stone-700">{lang === 'pl' ? item.textPl : item.textUk}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}