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
      className="w-full py-10 flex justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div
        className="w-full max-w-[1200px] px-4 overflow-hidden rounded-2xl cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ scale: hovered ? 1.05 : 1 }}  // enlarge on hover
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Image
          src="/images/test_01.png"
          alt="Test Image"
          width={1200}
          height={675}
          className="w-full h-auto object-cover rounded-2xl"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
