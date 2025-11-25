'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import { useState } from 'react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, opacity: 0.95, transition: { duration: 0.3, ease: "easeInOut" } }
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 }
};

const reportData = [
  { id: 1, title: "Safety Compliance Report Q1 2024", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 2, title: "Emergency Response Analysis", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 3, title: "Workplace Safety Audit", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 4, title: "Environmental Compliance", image: "/images/img_653a2e80_1ddc_4.png" },
  { id: 5, title: "Health & Safety Training", image: "/images/img_653a2e80_1ddc_4.png" }
];

export default function ReportsSection() {
  const cardsPerPage = 3;
  const totalSlideGroups = Math.ceil(reportData.length / cardsPerPage);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlideGroups);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlideGroups - 1 : prev - 1
    );
  };

  const currentCards = reportData.slice(
    currentSlide * cardsPerPage,
    currentSlide * cardsPerPage + cardsPerPage
  );

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <motion.section
      className="w-full bg-[#150e24] py-[62px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <div className="max-w-full mx-auto px-4">
        <div className="flex flex-col justify-center items-center w-full">
          <motion.h2
            className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center mt-1.5"
            style={{ lineHeight: '51px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Reports
          </motion.h2>

          <div className="flex flex-col justify-start items-center w-full max-w-[1202px] mt-3">
            <motion.div
              className="w-[66px] h-1 bg-[#47d4aa]"
              initial={{ width: 0 }}
              whileInView={{ width: 66 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.p
              className="text-[18px] font-open-sans font-normal leading-relaxed text-white w-full max-w-4xl mt-4"
              style={{ lineHeight: '27px', textAlign: "left" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Post-event reports are essential for evaluating outcomes and gathering feedback,
              providing insights into successes and areas for improvement.
            </motion.p>

            <motion.h3
              className="text-[32px] font-outfit font-semibold leading-tight text-white text-center mt-[54px]"
              style={{ lineHeight: '41px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Safety Compliance Reports
            </motion.h3>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-[34px]">
              {currentCards.map((report) => (
                <motion.div
                  key={report.id}
                  className="flex flex-col gap-6 items-center w-full bg-white p-6 cursor-pointer group rounded"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div className="relative overflow-hidden rounded-md w-full" variants={imageVariants}>
                    <Image
                      src={report.image}
                      alt={report.title}
                      width={220}
                      height={280}
                      className="transition-transform duration-300 w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full max-w-[200px]"
                  >
                    <Button
                      text="DOWNLOAD PDF"
                      text_font_size="16"
                      text_font_family="Outfit"
                      text_font_weight="600"
                      text_line_height="20px"
                      text_color="#ffffff"
                      fill_background_color="#f05623"
                      border_border_radius="6px"
                      padding="12px 24px"
                      layout_width="full"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* ---------------- NAVIGATION (REPLACED WITH YOUR VERSION) ---------------- */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors"
                onClick={prevSlide}
              >
                <Image src="/images/img_group_7.svg" alt="Previous" width={20} height={20} />
              </button>

              <span className="text-[32px] font-outfit font-medium leading-tight text-white">
                {currentSlide + 1}/{totalSlideGroups}
              </span>

              <button
                className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors"
                onClick={nextSlide}
              >
                <Image src="/images/img_vector_stroke.svg" alt="Next" width={24} height={24} />
              </button>
            </div>

            {/* Slide Indicators
            <div className="flex justify-center mt-20 gap-2">
              {Array.from({ length: totalSlideGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-[#47d4aa]' : 'bg-[#5e5d77]'
                    }`}
                />
              ))}
            </div> */}

          </div>
        </div>
      </div>
    </motion.section>
  );
}
