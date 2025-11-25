'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section
      className="w-full h-[270px] bg-transparent bg-cover bg-center pt-4 pb-4 px-4 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="max-w-[678px] font-outfit font-semibold text-[40px] leading-[120%] text-center text-[#ffffff]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Contact Us
      </motion.h2>
    </motion.section>
  );
}
