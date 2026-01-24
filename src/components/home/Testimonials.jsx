import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function Testimonials() {
  const { t, lang } = useTranslation();
  
  const testimonials = lang === 'pl' ? [
    {
      name: 'Dmytro L.',
      problem: 'Przewlekły ból pleców',
      result: 'Po 4 sesjach ból całkowicie zniknął. Teraz robię ćwiczenia w domu dla profilaktyki.',
      rating: 5,
    },
    {
      name: 'Dmytro S.',
      problem: 'Rehabilitacja po urazie',
      result: 'Profesjonalne podejście. Vitaliy znalazł prawdziwą przyczynę bólu i pomógł szybko wyzdrowieć.',
      rating: 5,
    },
    {
      name: 'Maria L.',
      problem: 'Skolioza u dziecka',
      result: 'Bardzo wdzięczna za troskliwe podejście do dziecka. Wyniki widoczne już po pierwszym miesiącu.',
      rating: 5,
    },
  ] : [
    {
      name: 'Дмитро Л.',
      problem: 'Хронічний біль у спині',
      result: 'Після 4 сеансів біль повністю зник. Тепер роблю вправи вдома для профілактики.',
      rating: 5,
    },
    {
      name: 'Дмитро С.',
      problem: 'Відновлення після травми',
      result: 'Професійний підхід. Віталій знайшов справжню причину болю і допоміг швидко відновитися.',
      rating: 5,
    },
    {
      name: 'Марія Л.',
      problem: 'Сколіоз у дитини',
      result: 'Дуже вдячна за турботливе ставлення до дитини. Результати помітні вже після першого місяця.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#E4F1EA] via-[#F5FBF8] to-[#E9F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
            {t('testimonials.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('testimonials.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-stone-50/50 rounded-3xl p-8 shadow-sm border border-stone-100 relative hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-emerald-100" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Problem */}
              <div className="mb-4">
                <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">
                  {t('testimonials.problem')}
                </span>
                <p className="text-emerald-800 font-medium">{testimonial.problem}</p>
              </div>

              {/* Result */}
              <p className="text-stone-600 leading-relaxed mb-6">
                "{testimonial.result}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-emerald-800 font-semibold text-sm">
                    {testimonial.name[0]}
                  </span>
                </div>
                <span className="font-medium text-emerald-950">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}