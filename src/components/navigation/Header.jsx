import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/ui/Logo';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslation } from '@/components/ui/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 cursor-pointer">
            <Logo className="h-11 w-11" />
            <div className="hidden sm:block">
              <p className="font-semibold text-emerald-900 text-sm leading-tight">{t('header.name')}</p>
                  <p className="text-xs text-stone-500">{t('header.title')}</p>
            </div>
          </a>

          {/* Mobile Language Switcher */}
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => scrollToSection(item.anchor)}
                className="text-sm font-medium transition-colors duration-200 text-stone-600 hover:text-emerald-800 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a href="tel:+48797369722" className="flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-800 transition-colors bg-white backdrop-blur-sm px-3 py-2 rounded-full shadow-lg shadow-stone-200/80 border border-stone-100">
              <Phone className="h-3.5 w-3.5" />
              <span>+48 797 369 722</span>
            </a>
            <a 
              href="https://t.me/Vit2050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white bg-emerald-800 hover:bg-emerald-900 transition-colors px-3 py-2 rounded-full shadow-lg shadow-emerald-900/40"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Telegram</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white bg-emerald-800 hover:bg-emerald-900 h-12 w-12 rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <Logo className="h-10 w-10" />
                    <div>
                          <p className="font-semibold text-emerald-900 text-sm">{t('header.name')}</p>
                          <p className="text-xs text-stone-500">{t('header.title')}</p>
                        </div>
                  </div>
                </div>
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.anchor}>
                        <button
                          onClick={() => {
                            scrollToSection(item.anchor);
                            setIsOpen(false);
                          }}
                          className="block py-2 text-lg font-medium transition-colors text-stone-600 hover:text-emerald-800 w-full text-left"
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="p-6 border-t border-stone-100 space-y-3">
                  <div className="flex justify-center mb-3">
                    <LanguageSwitcher />
                  </div>
                  <a 
                    href="tel:+48797369722" 
                    className="flex items-center justify-center gap-2 py-3 rounded-full border border-emerald-800 text-emerald-800 font-medium"
                  >
                    <Phone className="h-4 w-4" />
                    {t('header.call')}
                  </a>
                  <a 
                    href="https://t.me/Vit2050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-800 text-white font-medium"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}