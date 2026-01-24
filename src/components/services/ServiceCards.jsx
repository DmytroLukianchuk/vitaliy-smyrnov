import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Hand, Bone, Target, Dumbbell, Brain, Search } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

const colorClasses = {
  emerald: { bg: 'bg-emerald-100', icon: 'text-emerald-700', border: 'border-emerald-100' },
  blue: { bg: 'bg-blue-100', icon: 'text-blue-700', border: 'border-blue-100' },
  purple: { bg: 'bg-purple-100', icon: 'text-purple-700', border: 'border-purple-100' },
  amber: { bg: 'bg-amber-100', icon: 'text-amber-700', border: 'border-amber-100' },
  rose: { bg: 'bg-rose-100', icon: 'text-rose-700', border: 'border-rose-100' },
  cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-700', border: 'border-cyan-100' },
};

export default function ServiceCards() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Bone,
      title: t('services.manual'),
      description: t('services.manualDesc'),
      color: 'emerald',
    },
    {
      icon: Hand,
      title: t('services.massage'),
      description: t('services.massageDesc'),
      color: 'blue',
    },
    {
      icon: Target,
      title: t('services.acupressure'),
      description: t('services.acupressureDesc'),
      color: 'purple',
    },
    {
      icon: Dumbbell,
      title: t('services.lfk'),
      description: t('services.lfkDesc'),
      color: 'amber',
    },
    {
      icon: Brain,
      title: t('services.psychosomatic'),
      description: t('services.psychosomaticDesc'),
      color: 'rose',
    },
    {
      icon: Search,
      title: t('services.diagnostics'),
      description: t('services.diagnosticsDesc'),
      color: 'cyan',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 mb-4">
            {t('services.cardsBadge')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950">
            {t('services.cardsTitle')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white rounded-3xl p-8 shadow-sm border ${colorClasses[service.color].border} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl ${colorClasses[service.color].bg} flex items-center justify-center mb-6`}>
                <service.icon className={`h-7 w-7 ${colorClasses[service.color].icon}`} />
              </div>
              <h3 className="text-xl font-semibold text-emerald-950 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}