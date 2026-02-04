import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

const colorClasses = {
  emerald: 'bg-emerald-100 text-emerald-700',
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  amber: 'bg-amber-100 text-amber-700',
};

export default function ContactMethods() {
  const { t } = useTranslation();
  
  const contacts = [
    {
      icon: Phone,
      label: t('contact.callNow'),
      value: '+48 797 369 722',
      href: 'tel:+48797369722',
      color: 'emerald',
    },
    {
      icon: Send,
      label: t('contact.writeTelegram'),
      value: '@Vit2050',
      href: 'https://t.me/Vit2050',
      color: 'blue',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          {contacts.map((contact, i) => (
            <motion.a
              key={i}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-stone-200 hover:bg-stone-300 rounded-full px-6 py-3 flex items-center gap-3 transition-all"
            >
              <contact.icon className="h-5 w-5 text-emerald-800" />
              <span className="font-medium text-emerald-950">{contact.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Service Area & Hours */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-950 mb-2">{t('contactPage.serviceArea')}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  <strong>{t('contactPage.serviceAreaDesc1')}</strong> {t('contactPage.serviceAreaDesc2')}
                  <br />
                  <strong>{t('contactPage.serviceAreaDesc3')}</strong> {t('contactPage.serviceAreaDesc4')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-stone-50 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-semibold text-emerald-950 mb-2">{t('contactPage.hours')}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  <strong>{t('contactPage.hoursWeek')}</strong> {t('contactPage.hoursWeekTime')}
                  <br />
                  <strong>{t('contactPage.hoursSat')}</strong> {t('contactPage.hoursSatTime')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}