// components/ServiceCard.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  points: string[];
}

export default function ServiceCard({ icon, title, points }: ServiceCardProps) {
  return (
    <motion.div
      className="w-96 h-[443px] bg-[#232233] rounded p-8 flex flex-col items-start cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5, backgroundColor: "#47D4AA" }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {/* Icon Circle */}
      <motion.div
        className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={96}
          height={96}
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-white mb-6"
        whileHover={{ color: "#000" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>

      {/* Bullet List */}
      <motion.div
        className="flex flex-col gap-4 text-[20px] leading-[28px] text-white/90"
        whileHover={{ color: "#000" }}
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
