'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150e24] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <div
      className="min-h-screen bg-[#150e24]"
      style={{
        backgroundImage: `url('/images/img_image_9.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header + Hero */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('/images/homeBannerBg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <HeroSection />
      </div>

      {/* Main */}
      <main>
        <section className="w-full bg-[#070b23] py-20 px-4 sm:px-6">
          <div className="w-full max-w-[1200px] mx-auto">

            {/* ------------------ ON SITE ------------------ */}
            <motion.div
              className="flex flex-col gap-8 items-center w-full px-4 sm:px-11 mt-20 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight">
                On Site
              </h2>
              <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ServiceHead
                title="Engineering Structures"
                description={[
                  "Our team of H&S floor managers keep a tab on progress of stands every hour and make a note of everything they observe along with a picture.",
                  "Final stability check of all the structures including stands, branding, outdoor structures, stages and temporary hangers if any is carried out before the show open.",
                ]}
                image="/images/HowWeDoIt/On_Site.png"
              />
            </motion.div>

            {/* ------------------ FOOD HYGIENE IMAGE + CIRCLE ------------------ */}
            <motion.div
              className="relative w-full flex justify-center items-center mt-20 mb-28"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
            >
              <Image
                src="/images/HowWeDoIt/Food_Hygiene.png"
                alt="Food Hygiene"
                width={1200}
                height={604}
                className="w-full rounded object-cover"
              />

              {/* Center Circle */}
              <div className="absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-[#2C0087] rounded-full flex items-center justify-center shadow-2xl">
                <Image
                  src="/images/HowWeDoIt/foodhygenevector.png"
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <FoodHygieneSection />
            </motion.div>

            {/* ------------------ OFF SITE ------------------ */}
            <motion.div
              className="flex flex-col gap-8 items-center w-full px-4 sm:px-11 mt-20 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight">
                Off Site
              </h2>
              <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ServiceCard />
            </motion.div>

            {/* ------------------ ON-OFF SITE ------------------ */}
            <motion.div
              className="flex flex-col gap-8 items-center w-full px-4 sm:px-11 mt-20 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight">
                On-Off Site
              </h2>
              <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
            </motion.div>

            <motion.div
              className="flex flex-col gap-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <ServiceHead
                  title="Capacity Planning & Management"
                  description="The process of assessing and optimizing the resources needed to accommodate attendees, equipment, and activities in an event. It ensures effective space utilization and resource allocation for a smooth and safe experience."
                  image="/images/HowWeDoIt/On_Off_Site_01.png"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <ServiceHead
                  title="Disaster Management"
                  description="The systematic approach to preparing for, responding to, recovering from, and mitigating the impacts of disasters. It involves planning, coordination, and implementing measures to protect lives, property, and the environment."
                  image="/images/HowWeDoIt/On_Off_Site_02.png"
                />
              </motion.div>
            </motion.div>

            {/* ------------------ SUSTAINABILITY ------------------ */}
            <motion.div
              className="flex flex-col gap-8 items-center w-full px-4 sm:px-11 mt-20 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight">
                Sustainability
              </h2>
              <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ServiceCardPagination />
            </motion.div>
          </div>

          {/* ------------------ CONTACT SECTION FULL WIDTH ------------------ */}
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ContactSection />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
