import React, { useState, useEffect } from 'react';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';
import { useTranslation } from '@/components/ui/useTranslation';

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPageName={currentPageName} />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Floating CTA for mobile */}
      {currentPageName === 'Home' && isScrolled && (
        <Button
          onClick={scrollToContact}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-6 py-3 shadow-lg shadow-emerald-900/30"
        >
          <CalendarCheck className="h-4 w-4 mr-2" />
          {t('hero.floatingButton')}
        </Button>
      )}
    </div>
  );
}