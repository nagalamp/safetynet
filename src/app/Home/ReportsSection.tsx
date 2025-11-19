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

const navButtonVariants = {
  hover: { backgroundColor: "rgba(71, 212, 170, 0.1)", scale: 1.1, borderColor: "#47d4aa" },
  tap: { scale: 0.9 }
};

const reportData = [
  { id: 1, title: "Safety Compliance Report Q1 2024", image: "/images/img_653a2e80_1ddc_4.png", description: "First quarter safety compliance and incident analysis" },
  { id: 2, title: "Emergency Response Analysis", image: "/images/img_653a2e80_1ddc_4.png", description: "Comprehensive emergency response performance review" },
  { id: 3, title: "Workplace Safety Audit", image: "/images/img_653a2e80_1ddc_4.png", description: "Annual workplace safety standards audit report" },
  { id: 4, title: "Environmental Compliance", image: "/images/img_653a2e80_1ddc_4.png", description: "Environmental regulations compliance assessment" },
  { id: 5, title: "Health & Safety Training", image: "/images/img_653a2e80_1ddc_4.png", description: "Employee health and safety training effectiveness" }
];

export default function ReportsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(reportData.length / cardsPerPage);

  const currentCards = reportData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

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
              className="text-[18px] font-open-sans font-normal leading-relaxed text-white text-center items-center justify-center w-full max-w-4xl mt-4"
              style={{ lineHeight: '27px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Post-event reports are essential for evaluating outcomes and gathering feedback, providing insights into successes and areas for improvement. They support informed decision-making and facilitate continuous enhancement of future events.
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
                  <motion.h4 className="text-xl font-outfit font-semibold text-gray-800 text-center mb-2">
                    {report.title}
                  </motion.h4>

                  <motion.p className="text-sm font-open-sans text-gray-600 text-center mb-4">
                    {report.description}
                  </motion.p>

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

            {/* Navigation */}
            <motion.div 
              className="flex flex-row justify-center items-center w-auto mt-12 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button 
                className="w-12 h-12 border border-[#5e5d77] rounded-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                variants={navButtonVariants}
                whileHover={currentPage > 1 ? "hover" : undefined}
                whileTap={currentPage > 1 ? "tap" : undefined}
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <Image
                  src="/images/img_group_7.svg"
                  alt="Previous page navigation arrow"
                  width={20}
                  height={20}
                />
              </motion.button>

              <motion.button 
                className="w-12 h-12 border border-[#5e5d77] rounded-lg flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                variants={navButtonVariants}
                whileHover={currentPage < totalPages ? "hover" : undefined}
                whileTap={currentPage < totalPages ? "tap" : undefined}
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <Image
                  src="/images/img_vector_stroke.svg"
                  alt="Next page navigation arrow"
                  width={24}
                  height={24}
                />
              </motion.button>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
