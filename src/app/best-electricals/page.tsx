'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderNoMenuNoImg from '../../components/common/HeaderNoMenuNoImg';
import Footer from '../../components/common/Footer';
import Image from 'next/image';
import ContactSection from '../Home/ContactSectionV2';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

export default function HowWeWork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150e24] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-white ">
      <div
        className="relative"
        style={{
        
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <HeaderNoMenuNoImg />
        
      </div>

      <main>
      <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );








}
