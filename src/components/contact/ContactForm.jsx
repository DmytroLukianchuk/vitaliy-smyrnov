import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Send, Phone } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function ContactForm() {
  const { t, lang } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    contactMethod: 'telegram',
    problem: '',
    consent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageLabel = lang === 'pl' ? 'Nowe zgłoszenie' : 'Нове звернення';
    const nameLabel = lang === 'pl' ? 'Imię' : "Ім'я";
    const phoneLabel = lang === 'pl' ? 'Telefon' : 'Телефон';
    const methodLabel = lang === 'pl' ? 'Preferowany kontakt' : 'Бажаний спосіб зв\'язку';
    const problemLabel = lang === 'pl' ? 'Problem' : 'Проблема';
    const message = `${messageLabel}:\n\n${nameLabel}: ${formData.name}\n${phoneLabel}: ${formData.phone}\n${methodLabel}: ${formData.contactMethod}\n\n${problemLabel}: ${formData.problem}`;
    window.open(`https://t.me/Vit2050?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <motion.a
            href="tel:+48123456789"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-4 rounded-full border-2 border-emerald-800 text-emerald-800 font-medium hover:bg-emerald-50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {t('contact.callNow')}
          </motion.a>
          <motion.a
            href="https://t.me/Vit2050"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 py-4 rounded-full bg-emerald-800 text-white font-medium hover:bg-emerald-900 transition-colors"
          >
            <Send className="h-5 w-5" />
            {t('contact.writeTelegram')}
          </motion.a>
        </div>
      </div>
    </section>
  );
}