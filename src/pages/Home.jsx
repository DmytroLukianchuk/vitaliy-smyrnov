import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutTeaser from '@/components/home/AboutTeaser';
import WhoIHelp from '@/components/home/WhoIHelp';
import WhatToExpect from '@/components/home/WhatToExpect';
import HighlightBox from '@/components/home/HighlightBox';

import PriceTeaser from '@/components/home/PriceTeaser';
import Testimonials from '@/components/home/Testimonials';


// About sections
import HeroAbout from '@/components/about/HeroAbout';

import ApproachSection from '@/components/about/ApproachSection';
import EducationSection from '@/components/about/EducationSection';
import ValuesSection from '@/components/about/ValuesSection';

// Services sections
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCards from '@/components/services/ServiceCards';
import PriceTable from '@/components/services/PriceTable';


// Contact sections
import ContactHero from '@/components/contact/ContactHero';
import ContactMethods from '@/components/contact/ContactMethods';



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ===== HOME SECTION ===== */}
      <section id="home">
        <HeroSection />
        <AboutTeaser />
        <WhoIHelp />
        <WhatToExpect />
        <HighlightBox />
        <PriceTeaser />
        <Testimonials />
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about">
        <HeroAbout />
        <ApproachSection />
        <EducationSection />
        <ValuesSection />
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services">
        <ServicesHero />
        <ServiceCards />
        <PriceTable />
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact">
        <ContactHero />
        <ContactMethods />
      </section>
    </div>
  );
}