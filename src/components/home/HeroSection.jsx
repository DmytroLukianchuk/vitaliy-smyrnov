import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, Award, Heart, Sparkles } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-[#F5FBF8] via-[#F5FBF8] to-[#E9F5EF]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-emerald-50/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 text-emerald-800 text-sm font-medium mb-8"
            >
              <Award className="h-4 w-4" />
              {t('hero.badge')}
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald-950 leading-tight mb-6">
              {t('hero.title1')}{' '}
              <span className="relative">
                <span className="relative z-10">{t('hero.title2')}</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-200/60 -z-0" />
              </span>
              <br />
              {t('hero.title3')}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-6 max-w-lg">
              {t('hero.subtitle')}
            </p>

            {/* Tagline */}
            <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-stone-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                {t('hero.tag1')}
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span className="flex items-center gap-1.5">
                <Heart className="h-4 w-4 text-amber-500" />
                {t('hero.tag2')}
              </span>
            </div>

            {/* CTA */}
            <div className="flex">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="https://t.me/Vit2050" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-emerald-900/20">
                    <Send className="h-5 w-5 mr-2" />
                    {t('hero.cta')}
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-100 to-stone-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
                  alt="Терапевтичний масаж"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute left-2 lg:-left-8 top-1/4 bg-white rounded-2xl p-4 lg:p-5 shadow-xl border border-stone-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 lg:h-6 lg:w-6 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900">1000+</p>
                    <p className="text-xs lg:text-sm text-stone-500">{t('hero.clients')}</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute right-2 lg:-right-4 bottom-1/4 bg-white rounded-2xl p-4 lg:p-5 shadow-xl border border-stone-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Award className="h-5 w-5 lg:h-6 lg:w-6 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-bold text-emerald-900">35+</p>
                    <p className="text-xs lg:text-sm text-stone-500">{t('hero.since')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}