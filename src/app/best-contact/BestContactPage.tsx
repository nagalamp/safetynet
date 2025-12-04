'use client';
import { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';

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
          backgroundImage: `url('/images/homeBannerBg.png')`,
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
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-4 justify-center items-center mb-10">

              
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-center text-white max-w-4xl">
                Content goes here
              </p>
            </div>


          </div>
        </section></main>

      <Footer />
    </div>
  );
}
