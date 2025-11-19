'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HeroSection() {
  return (
    <motion.section 
      className="w-full bg-[linear-gradient(180deg,#2c008700_0%,#040711_100%)]  border-[#312e5c] pt-4 pb-4 px-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-[1202px] mx-auto mb-20">
        <div className="flex flex-col gap-16 items-center w-full">
          <div className="flex flex-col gap-16 items-center w-full max-w-[1202px]">
            <motion.h1 
              className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-outfit font-bold leading-tight text-white text-left w-full max-w-[96%]" 
              style={{ lineHeight: '76px' }}
              variants={fadeInUp}
            >
              <span className="text-white">WHERE HEALTH MEETS SAFETY, DELIVERED BY EXPERTS </span>
              <motion.span 
                className="text-[#47d4aa]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                &gt;&gt;
              </motion.span>
            </motion.h1>

            <motion.div 
              className="flex flex-row justify-end items-center w-full"
              variants={fadeInRight}
            >
              <motion.div 
                className="w-[8px] h-[116px] bg-[#47d4aa]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              <p className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-outfit font-normal leading-tight text-white text-left w-[68%] ml-6" style={{ lineHeight: '52px' }}>
                <span className="font-normal">Empowering safe, compliant, and sustainable events across the</span>
                <span className="font-medium"> </span>
                <span className="font-bold">UK, UAE and INDIA.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}