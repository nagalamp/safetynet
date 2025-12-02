// components/ServiceCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServiceCardProps {
  icon: string;
  hoverIcon: string;   // 👈 ADDED
  title: string;
  points: string[];
}

export default function ServiceCard({ icon, hoverIcon, title, points }: ServiceCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="w-96 h-[443px] bg-[#232233] rounded p-8 flex flex-col items-start cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5, backgroundColor: "#47D4AA" }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* Icon */}
      <motion.div
        className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Image
          src={isHover ? hoverIcon : icon}   // 👈 SWITCH ICON ON HOVER
          alt={`${title} icon`}
          width={70}
          height={70}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-white mb-6"
        animate={{ color: isHover ? "#000" : "#fff" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Points list */}
      <motion.div
        className="flex flex-col gap-4 text-[20px] leading-[28px]"
        animate={{ color: isHover ? "#000" : "rgba(255,255,255,0.9)" }}
        transition={{ duration: 0.3 }}
      >
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <span className="text-3xl mt-[2px]">→</span>
            <p>{point}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
