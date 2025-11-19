'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function StandAssessmentSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section 
      className="w-full py-[58px] flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div 
        className="w-full max-w-[1200px] px-4 relative overflow-hidden rounded-lg cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="w-full h-full"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/test_01.png"
            alt="Test Image"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
          {/* Dark overlay on hover */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${hovered ? 'opacity-20' : 'opacity-0'}`}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
