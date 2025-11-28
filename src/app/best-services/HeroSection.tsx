'use client';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
}

export default function HeroSection({ title }: HeroSectionProps) {
  return (
    <motion.section
      className="w-full h-[270px] bg-transparent bg-cover bg-center pt-4 pb-4 px-4 flex flex-col items-center justify-center"
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
        {title}
      </motion.h2>

      <motion.nav
        className="mt-4 text-[#ffffffcc] text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Home &gt; Services &gt; {title}
      </motion.nav>
    </motion.section>
  );
}
