import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Send, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { useTranslation } from '@/components/ui/useTranslation';

export default function Footer() {
  const { t, lang } = useTranslation();
  
  const navItems = [
    { name: t('nav.home'), anchor: 'home' },
    { name: t('nav.about'), anchor: 'about' },
    { name: t('nav.services'), anchor: 'services' },
    { name: t('nav.contact'), anchor: 'contact' },
  ];

  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-12 w-12" />
              <div>
                <p className="font-semibold text-lg">{t('header.name')}</p>
                <p className="text-emerald-300 text-sm">{t('footer.fullTitle')}</p>
              </div>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-200">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.anchor}>
                  <button 
                    onClick={() => scrollToSection(item.anchor)}
                    className="text-stone-300 hover:text-white transition-colors text-sm cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-emerald-200">{t('footer.contacts')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+48123456789" className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-sm">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a href="https://t.me/vitaliy_rehab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors text-sm">
                  <Send className="h-4 w-4 text-emerald-400" />
                  Telegram
                </a>
              </li>

              <li className="flex items-start gap-2 text-stone-300 text-sm">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5" />
                <span>{t('footer.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} {t('header.name')}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6 text-sm text-stone-400">
            <button 
              onClick={() => {
                localStorage.setItem('app_language', 'uk');
                window.dispatchEvent(new CustomEvent('languageChange', { detail: 'uk' }));
              }}
              className={`cursor-pointer hover:text-white transition-colors ${lang === 'uk' ? 'text-white' : ''}`}
            >
              🇺🇦 Українська
            </button>
            <span className="text-stone-600">|</span>
            <button 
              onClick={() => {
                localStorage.setItem('app_language', 'pl');
                window.dispatchEvent(new CustomEvent('languageChange', { detail: 'pl' }));
              }}
              className={`cursor-pointer hover:text-white transition-colors ${lang === 'pl' ? 'text-white' : ''}`}
            >
              🇵🇱 Polski
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}