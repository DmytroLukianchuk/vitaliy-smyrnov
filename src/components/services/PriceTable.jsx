import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Clock, Info } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function PriceTable() {
  const { t, lang } = useTranslation();
  
  const priceList = [
    { name: 'Masaż klasyczny częściowy', nameUa: 'Класичний масаж (частковий)', time: lang === 'pl' ? '1 godz' : '1 год', price: '100 PLN' },
    { name: 'Masaż klasyczny całościowy', nameUa: 'Класичний масаж (повний)', time: lang === 'pl' ? '1,5 godz' : '1 год 30 хв', price: '150 PLN' },
    { name: 'Masaż sportowy częściowy', nameUa: 'Спортивний масаж (частковий)', time: lang === 'pl' ? '1 godz' : '1 год', price: '120 PLN' },
    { name: 'Masaż sportowy całościowy', nameUa: 'Спортивний масаж (повний)', time: lang === 'pl' ? '1,5 godz' : '1 год 30 хв', price: '200 PLN' },
    { name: 'Masaż dziecięcy Shantala', nameUa: 'Дитячий масаж Шантала', time: lang === 'pl' ? '30 min' : '30 хв', price: '100 PLN' },
    { name: 'Masaż dziecięcy klasyczny', nameUa: 'Дитячий класичний масаж', time: lang === 'pl' ? '1 godz' : '1 год', price: '100 PLN' },
    { name: 'Masaż relaksacyjny całościowy', nameUa: 'Релаксаційний масаж (повний)', time: lang === 'pl' ? '2 godz' : '2 год', price: '200 PLN' },
    { name: 'Rehabilitacja częściowa (ćwiczenia)', nameUa: 'Реабілітація (вправи)', time: lang === 'pl' ? '1 godz' : '1 год', price: lang === 'pl' ? 'od 100 PLN' : 'від 100 PLN' },
    { name: 'Akupunktura częściowa', nameUa: 'Акупресура (часткова)', time: lang === 'pl' ? '30 min' : '30 хв', price: lang === 'pl' ? 'od 100 PLN' : 'від 100 PLN' },
    { name: 'Drenaż limfatyczny częściowy', nameUa: 'Лімфодренаж (частковий)', time: lang === 'pl' ? '1 godz' : '1 год', price: '150 PLN' },
    { name: 'Drenaż limfatyczny całościowy', nameUa: 'Лімфодренаж (повний)', time: lang === 'pl' ? '2 godz' : '2 год', price: '250 PLN' },
    { name: 'Terapia manualna', nameUa: 'Мануальна терапія', time: lang === 'pl' ? '1,5 godz' : '1 год 30 хв', price: '200 PLN' },
    { name: 'Masaż japoński Shiatsu częściowy', nameUa: 'Японський масаж Шіацу (частковий)', time: lang === 'pl' ? '30 min' : '30 хв', price: lang === 'pl' ? 'od 100 PLN' : 'від 100 PLN' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
            {t('services.priceBadge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            {t('services.priceTitle')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden"
        >
          {/* Table Header */}
          <div className="bg-emerald-900 text-white p-4 grid grid-cols-12 gap-4 text-sm font-medium">
            <div className="col-span-6 sm:col-span-5">{lang === 'pl' ? 'Nazwa' : 'Назва / Nazwa'}</div>
            <div className="col-span-3 sm:col-span-4 text-center flex items-center justify-center gap-1">
              <Clock className="h-4 w-4" />
              <span className="hidden sm:inline">{lang === 'pl' ? 'Czas' : 'Час'}</span>
            </div>
            <div className="col-span-3 text-right">{lang === 'pl' ? 'Cena' : 'Ціна'}</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-stone-100">
            {priceList.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-stone-50 transition-colors"
              >
                <div className="col-span-6 sm:col-span-5">
                  <p className="font-medium text-emerald-950 text-sm sm:text-base">{lang === 'pl' ? item.name : item.nameUa}</p>
                  {lang !== 'pl' && <p className="text-xs text-stone-500">{item.name}</p>}
                </div>
                <div className="col-span-3 sm:col-span-4 text-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-stone-100 rounded-full text-stone-600 text-sm">
                    {item.time}
                  </span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="font-bold text-emerald-800">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-amber-50 rounded-2xl p-6 border border-amber-100"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Info className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <p className="text-stone-700 leading-relaxed">
                <strong>{lang === 'pl' ? 'Ważne:' : 'Важливо:'}</strong> {t('services.priceNote')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}