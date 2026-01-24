import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Layers, TrendingUp, BookOpen, Heart } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function ApproachSection() {
  const { t } = useTranslation();
  
  const approaches = [
    {
      icon: Target,
      title: t('about.approach1Title'),
      description: t('about.approach1Desc'),
    },
    {
      icon: Eye,
      title: t('about.approach2Title'),
      description: t('about.approach2Desc'),
    },
    {
      icon: Layers,
      title: t('about.approach3Title'),
      description: t('about.approach3Desc'),
    },
    {
      icon: TrendingUp,
      title: t('about.approach4Title'),
      description: t('about.approach4Desc'),
    },
    {
      icon: BookOpen,
      title: t('about.approach5Title'),
      description: t('about.approach5Desc'),
    },
    {
      icon: Heart,
      title: t('about.approach6Title'),
      description: t('about.approach6Desc'),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 mb-4">
            {t('about.approachBadge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            {t('about.approachTitle')}
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t('about.approachSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approaches.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="font-semibold text-emerald-950 mb-2">{item.title}</h3>
              <p className="text-stone-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}