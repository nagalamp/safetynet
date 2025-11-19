'use client';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import WhoweareSection from './WhoweareSection';
import ExpandableInfoSection from './ExpandableInfoSection';
import ServicesSection from '../Home/ServicesSection';
import ContactSection from '../Home/ContactSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#150e24] bg-no-repeat bg-cover bg-center bg-[url('/images/img_image_9.png')]">
      <Header />

      <main>
        <HeroSection />
        <WhoweareSection />
        <ExpandableInfoSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
