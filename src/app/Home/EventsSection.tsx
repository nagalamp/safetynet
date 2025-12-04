'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function EventsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const caseStudies = [
    { id: 1, title: 'Case Study 1', subtitle: 'Successful Events Delivered', image: '/images/img_rectangle_19.png' },
    { id: 2, title: 'Case Study 2', subtitle: 'Our Event Highlights', image: '/images/img_rectangle_19.png' },
    { id: 3, title: 'Case Study 3', subtitle: 'Executed Events & Achievements', image: '/images/img_rectangle_20_472x384.png' }
  ];

  return (
    <motion.section
      className="w-full py-12 sm:py-16 lg:py-[34px] px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-[1202px] mx-auto flex flex-col gap-[34px] items-center">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11  w-full">
            
   
            
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
           Events Exceuted
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"/>
          </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="relative w-full max-w-[384px] mx-auto cursor-pointer rounded overflow-hidden shadow-lg"
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative w-full h-[472px]">
                <Image
                  src={study.image}
                  alt={`${study.title} - Professional event case study showcase`}
                  fill
                  className="object-cover"
                />

                {/* Black + Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === study.id
                    ? 'opacity-90 bg-gradient-to-br from-black via-black/70 to-[#47d4aa]/40'
                    : 'opacity-0'
                    }`}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div>
                    <p
                      className={`text-[22px] font-outfit font-medium mb-3 transition-colors duration-500 ${hoveredCard === study.id ? 'text-white' : 'text-[#150e24]'
                        }`}
                      style={{ lineHeight: '28px' }}
                    >
                      {study.title}
                    </p>
                    <h3
                      className={`text-[32px] font-outfit font-semibold mb-6 transition-colors duration-500 ${hoveredCard === study.id ? 'text-white' : 'text-[#150e24]'
                        }`}
                      style={{ lineHeight: '38px' }}
                    >
                      {study.subtitle}
                    </h3>
                    <p
                      className={`text-[18px] font-open-sans leading-relaxed transition-colors duration-500 ${hoveredCard === study.id ? 'text-white' : 'text-[#150e24]'
                        }`}
                      style={{ lineHeight: '27px' }}
                    >
                      Showcase of major events with quantifiable safety and sustainability outcomes
                    </p>
                  </div>

                  {/* Button */}
                  <motion.button
                    className={`w-full py-3 px-8 rounded text-[20px] font-outfit font-semibold transition-colors duration-300 ${hoveredCard === study.id ? 'bg-white text-[#f05623]' : 'bg-[#f05623] text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    DOWNLOAD
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
