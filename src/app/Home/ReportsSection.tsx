'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback, useMemo, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardHover = {
  scale: 1.03,
  transition: { duration: 0.3 }
};

const reportData = [
  { id: 1, title: "Safety Compliance Report Q1 2024", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 2, title: "Emergency Response Analysis", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 3, title: "Workplace Safety Audit", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 4, title: "Environmental Compliance", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 5, title: "Health & Safety Training", image: "/images/img_653a2e80_1ddc_4.png" }
];

export default function ReportsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Responsive cards per page
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalSlideGroups = Math.ceil(reportData.length / cardsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlideGroups);
  }, [totalSlideGroups]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlideGroups - 1 : prev - 1));
  }, [totalSlideGroups]);

  const currentCards = useMemo(() => {
    return reportData.slice(
      currentSlide * cardsPerPage,
      currentSlide * cardsPerPage + cardsPerPage
    );
  }, [currentSlide, cardsPerPage]);

  return (
    <motion.section
      className="w-full bg-[#150e24] py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-[1200px] mx-auto text-center">

      <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11  w-full">
            
   
            
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
Reports            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"/>
          </div>

        

        {/* Description */}
        <p className="text-[16px] md:text-[18px] font-open-sans text-white mt-4 max-w-3xl mx-auto">
          Post-event reports are essential for evaluating outcomes and gathering feedback,
          supporting informed decision-making and continuous improvement.
        </p>

        {/* Subtitle */}
        <h3 className="text-[26px] md:text-[32px] font-outfit font-semibold text-white mt-12">
          Safety Compliance Reports
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {currentCards.map((report) => (
            <motion.div
              key={report.id}
              whileHover={cardHover}
              className="bg-white rounded p-6 flex flex-col items-center gap-6 shadow-md"
            >
              <div className="relative overflow-hidden rounded-md w-full">
                <Image
                  src={report.image}
                  alt={report.title}
                  width={220}
                  height={280}
                  className="w-full object-cover"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                />
              </div>

              {/* Optimized Button (Tailwind) */}
              <button className="w-full max-w-[300px] bg-[#f05623] text-white px-6 py-3  font-outfit font-semibold text-[16px] hover:opacity-90 transition">
                DOWNLOAD PDF
              </button>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition"
          >
            <svg width="20" height="20" fill="#fff">
              <path d="M12 4l-6 6 6 6" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </button>

          <span className="text-[24px] md:text-[32px] text-white font-outfit font-medium">
            {currentSlide + 1}/{totalSlideGroups}
          </span>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition"
          >
            <svg width="20" height="20" fill="#fff">
              <path d="M8 4l6 6-6 6" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </button>

        </div>
      </div>
    </motion.section>
  );
}
