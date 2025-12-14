'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function StandAssessmentSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.section
      className="w-full py-10 flex flex-col items-center px-4 md:px-8 bg-black"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
<div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11  w-full">
            
   
            
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
            Illustration of Stand Assessment
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"/>
          </div>

      {/* Image Card */}
      <motion.div
        className="w-full max-w-[1200px] overflow-hidden rounded-2xl cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: hovered ? 1.05 : 1 }} // reverse animation: grow on hover
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Image
          src="/images/test_01.png"
          alt="Stand Assessment Illustration"
          width={1200}
          height={675}
          className="w-full h-auto object-cover rounded-2xl"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
