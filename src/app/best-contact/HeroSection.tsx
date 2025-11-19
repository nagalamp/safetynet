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
            sss
          </div>
        </div>
      </div>
    </motion.section>
  );
}