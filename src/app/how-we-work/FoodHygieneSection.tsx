'use client';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import { useState } from 'react';

interface ServiceHighlight {
  image: string;
  title: string;
  description: string;
  bgGradient: string;
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function FoodHygieneSection({ onGetInTouch }: { onGetInTouch: () => void }) {

  const [serviceHighlights] = useState<ServiceHighlight[]>([
    {
      image: '/images/HowWeDoIt/complience.png',
      title: 'Compliance & Safety',
      description: 'Ensuring proper food handling, cleanliness, and adherence to safety standards.',
      bgGradient: 'linear-gradient(180deg,#2c0087 0%, #180048 100%)'
    },
    {
      image: '/images/HowWeDoIt/hygene.png',
      title: 'Hygiene Practices',
      description: 'Maintaining sanitation, surface cleanliness, and personal hygiene protocols.',
      bgGradient: 'linear-gradient(180deg,#47d4aa 0%, #016c4c 100%)'
    },
    {
      image: '/images/HowWeDoIt/storage.png',
      title: 'Storage & Waste',
      description: 'Proper food storage, temperature control, and responsible waste disposal.',
      bgGradient: 'linear-gradient(180deg,#f05623 0%, #822101 100%)'
    }
  ]);

  return (
    <motion.section
      className="w-full py-12 sm:py-16 lg:py-[48px] px-4 relative z-10  rounded mt-15"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="max-w-[1202px] mx-auto mb-10">

        <div className="flex flex-col gap-9 items-center w-full">

          {/* HEADING */}
          <div className="flex flex-col gap-8 items-center w-full px-4 sm:px-11">
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight">
              Food & Hygiene
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
          </div>

          {/* CARDS */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            variants={staggerContainer}
          >
            {serviceHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.image}
                className="w-full flex justify-center"
                variants={scaleIn}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div
                  className="flex flex-col items-start justify-start mb-2 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm px-6 py-8"
                  style={{
                    background: highlight.bgGradient,
                    width: "384px",
                    height: "438px"
                  }}
                >

                  {/* IMAGE LEFT */}
                  <img
                    src={highlight.image}
                    alt="highlight"
                    className="w-[57px] h-[70px] object-contain mb-40"
                  />

                  {/* TITLE — mt-5 = 20px */}
                  <motion.h3
                    className="text-[34px] sm:text-[34px] md:text-[34px] font-outfit font-semibold text-white leading-tight text-left mt-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    {highlight.title}
                  </motion.h3>

                  {/* DESCRIPTION */}
                  <motion.p
                    className="text-[18px] sm:text-[18px] md:text-[18px] font-outfit text-white/90 leading-relaxed text-left mt-5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {highlight.description}
                  </motion.p>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
