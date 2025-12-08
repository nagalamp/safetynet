'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import ServiceHead from './ServiceHead';
import FoodHygieneSection from './FoodHygieneSection';
import Image from 'next/image';
import ServiceCard from './ServiceCards';
import ServiceCardPagination from './ServiceCardsPagination';
import ContactSection from '../Home/ContactSection';

export default function HowWeWork() {
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
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="relative"
        style={{
          backgroundImage: `url('/images/homeBannerBg.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <HeroSection />
      </div>

      <main>
        <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 lg:px-0">
          <div className="w-full max-w-[1200px] mx-auto">

            {/* On Site Section */}
            <div className="flex flex-col gap-4 justify-center items-center mb-10">
              <div className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11">
                <h2
                  className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
                  style={{ lineHeight: '51px' }}
                >
                  On Site
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
              </div>

              <ServiceHead
                title="Engineering Structures"
                description={[
                  "Our team of H&S floor managers keep a tab on progress of stands every hour and make a note of everything they observe along with a picture.",
                  "Final stability check of all the structures including stands, branding, outdoor structures, stages and temporary hangers if any is carried out before the show open.",
                ]}
                image="/images/HowWeDoIt/On_Site.png"
              />
            </div>

            {/* Food Hygiene Section Intro Image */}
            <div className="flex flex-col gap-4 justify-center items-center mb-10">
              <Image
                src="/images/HowWeDoIt/Food_Hygiene.png"
                alt="Food Hygiene"
                width={1200}
                height={604}
              />
            </div>

            <FoodHygieneSection />

            <div className="flex flex-col gap-4 justify-center items-center mt-10">
              <div className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11">
                <h2
                  className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
                  style={{ lineHeight: '51px' }}
                >
                  Off Site
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
              </div>

              <ServiceCard/>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center mt-10">
              <div className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11">
                <h2
                  className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
                  style={{ lineHeight: '51px' }}
                >
                  On-Off Site
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
              </div>

              <ServiceHead
                title="Capacity Planning & Management"
                description={
                  "The process of assessing and optimizing the resources needed to accommodate  attendees, equipment, and activities in an event. It ensures effective space utilization and resource allocation for a smooth and safe experience."
                }
                image="/images/HowWeDoIt/On_Off_Site_01.png"
              />

<ServiceHead
                title="Disaster Management"
                description={"The systematic approach to preparing for, responding to, recovering from, and mitigating the impacts of disasters. It involves planning, coordination, and the implementation of measures to protect lives, property , and the environment in the event of natural or human-made crises"}
                image="/images/HowWeDoIt/On_Off_Site_02.png"
              />
              
            </div>

            <div className="flex flex-col gap-4 justify-center items-center mt-10">
              <div className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11">
                <h2
                  className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
                  style={{ lineHeight: '51px' }}
                >
                  Sustainability
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
              </div>

              <ServiceCardPagination/>
            </div>
             <ContactSection />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
