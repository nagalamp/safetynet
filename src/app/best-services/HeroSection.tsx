'use client';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title?: string;
}

export default function HeroSection({ title }: HeroSectionProps) {
  const isEmpty = !title || title.trim() === "";

  return (
    <motion.section
      className="w-full h-[270px] bg-transparent bg-cover bg-center pt-4 pb-4 px-4 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      {isEmpty ? (
        <>
          <motion.h2
            className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
            style={{ lineHeight: '51px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </>
      ) : (
        <>
          <motion.h2
            className="max-w-[678px] font-outfit font-semibold text-[40px] leading-[120%] text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {title}
          </motion.h2>

          <motion.nav
  className="mt-4 text-white/80 text-[18px] font-normal"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
>
  Services &gt; {title}
</motion.nav>
        </>
      )}

    </motion.section>
  );
}
