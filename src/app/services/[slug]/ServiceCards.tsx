'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  hoverIcon: string;
  title: string;
  points: string[];
}

export default function ServiceCard({ icon, hoverIcon, title, points }: ServiceCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="w-96 h-[443px] bg-[#232233] rounded p-8 flex flex-col items-start cursor-pointer shadow-lg"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        backgroundColor: "#47D4AA",
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >

      {/* ICON WRAPPER */}
      <motion.div
        className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center shadow-md"
        animate={{ scale: isHover ? 1.15 : 1, rotate: isHover ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Image
          src={isHover ? hoverIcon : icon}
          alt={`${title} icon`}
          width={96}
          height={96}
          className="transition-all duration-300"
        />
      </motion.div>

      {/* TITLE */}
      <motion.h2
        className="text-3xl font-semibold mb-6"
        animate={{ color: isHover ? "#000" : "#ffffff" }}
        transition={{ duration: 0.25 }}
      >
        {title}
      </motion.h2>

      {/* POINTS */}
      <motion.div
        className="flex flex-col gap-4 text-[18px] leading-[26px]"
        animate={{ color: isHover ? "#000" : "rgba(255,255,255,0.85)" }}
        transition={{ duration: 0.25 }}
      >
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <span className="text-2xl mt-[2px]">→</span>
            <p>{point}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
