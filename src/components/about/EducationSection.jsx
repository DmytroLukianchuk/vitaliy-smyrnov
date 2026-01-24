import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Sparkles, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useTranslation } from '@/components/ui/useTranslation';

const diplomas = [
  { 
    id: 1, 
    title: 'Dyplom Zawodowy',
    preview: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693075c945fc9f4c2db731d6/81c698148_Dyploma1_jpg.png',
  },
  { 
    id: 2, 
    title: 'Dyplom Zawodowy',
    preview: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693075c945fc9f4c2db731d6/572b264ce_Dyplom2_png.png',
  },
  { 
    id: 3, 
    title: 'Certyfikat Kwalifikacji',
    preview: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693075c945fc9f4c2db731d6/2fc0cb251_Dyplom3_png.png',
  },
  { 
    id: 4, 
    title: 'Переклад диплому',
    preview: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693075c945fc9f4c2db731d6/4976155d6_Dyplom4_png.png',
  },
];

export default function EducationSection() {
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const { t } = useTranslation();

  const education = [
    { icon: GraduationCap, text: t('about.institute') },
    { icon: Award, text: t('about.massageSchool') },
    { icon: BookOpen, text: t('about.polishCerts') },
    { icon: Sparkles, text: t('about.psychosomatics') },
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
            {t('about.qualification')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-950 mb-4">
            {t('about.educationTitle')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-stone-50 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-emerald-700" />
                  </div>
                  <span className="font-medium text-stone-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Diplomas Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-emerald-950 mb-6">{t('about.diplomasTitle')}</h3>
            <div className="grid grid-cols-2 gap-4">
              {diplomas.map((diploma, i) => (
                <motion.div 
                  key={diploma.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDiploma(diploma)}
                  className="aspect-[3/4] rounded-xl bg-white border border-stone-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer group relative"
                >
                  <img
                    src={diploma.preview}
                    alt={diploma.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <p className="text-xs text-emerald-700 font-medium">{t('about.clickToView')}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Diploma Modal */}
      <AnimatePresence>
        {selectedDiploma && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDiploma(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedDiploma(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-stone-600" />
              </button>
              <img
                src={selectedDiploma.preview}
                alt={selectedDiploma.title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}