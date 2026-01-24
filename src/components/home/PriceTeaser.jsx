import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Car, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function PriceTeaser() {
  const { t, lang } = useTranslation();
  
  const subtitle = lang === 'pl' 
    ? <>Sesje od <span className="font-bold text-emerald-800">100 PLN</span>. Ostateczna cena zależy od złożoności przypadku i czasu trwania sesji.</>
    : <>Сеанси від <span className="font-bold text-emerald-800">100 PLN</span>. Остаточна ціна залежить від складності випадку та тривалості сеансу.</>;
  
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#E9F5EF] via-[#E4F1EA] to-[#F5FBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
            {t('price.badge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            {lang === 'pl' ? 'Cennik' : 'Вартість'}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-950 mb-1">{t('price.option1Title')}</h3>
                <p className="text-stone-600 text-sm">
                  {t('price.option1Desc')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-br from-amber-50 to-white rounded-2xl p-6 border border-amber-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Car className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-950 mb-1">{t('price.option2Title')}</h3>
                <p className="text-stone-600 text-sm">
                  {t('price.option2Desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-8"
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
          >
            {t('price.cta')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}