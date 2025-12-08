'use client';
import { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ContactSection from './ContactSection2';

export default function BestContactPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async (): Promise<void> => {
    try {
      setTimeout(() => {

        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150e24] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#150e24]"
      style={{
        backgroundImage: `url('/images/img_image_9.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div
        className="relative"
        style={{
          backgroundImage: `url('/images/ContactUs/Banner-2.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <HeroSection />
      </div>

      <main>
        <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 lg:px-0">
        
           

              
                 <ContactSection/>
         


       
        </section></main>

      <Footer />
    </div>
  );
}
