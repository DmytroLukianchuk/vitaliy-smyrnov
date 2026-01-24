import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Send } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function QuickContact() {
  const { t } = useTranslation();
  
  const contacts = [
    { icon: Phone, label: t('contact.phone'), value: '+48 123 456 789', href: 'tel:+48123456789' },
    { icon: Send, label: 'Telegram', value: '@vitaliy_rehab', href: 'https://t.me/vitaliy_rehab' },
  ];
  
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-emerald-800 to-emerald-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-800/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-emerald-800/50 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-emerald-200 text-lg mb-10 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
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
                className="bg-emerald-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-700/50 hover:bg-emerald-800/70 transition-colors"
              >
                <contact.icon className="h-8 w-8 text-emerald-300 mx-auto mb-3" />
                <p className="text-emerald-200 text-sm mb-1">{contact.label}</p>
                <p className="text-white font-medium">{contact.value}</p>
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="tel:+48123456789">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-emerald-900 hover:bg-stone-100 rounded-full px-8 py-6 text-base font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {t('contact.callNow')}
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a href="https://t.me/vitaliy_rehab" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold border-2 border-white bg-transparent text-white hover:bg-white hover:text-emerald-900"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {t('contact.writeTelegram')}
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}