'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <motion.div
      className="relative w-[384px] h-[460px] rounded-[4px] overflow-hidden cursor-pointer bg-[#2C0087]"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        scale: 1.05,
        y: -8,
        rotateX: 6,
        rotateY: -3,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.35)",
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        {/* Darkening Overlay */}
        <motion.div
          className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"
          whileHover={{ background: "rgba(0,0,0,0.75)" }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">

        {/* TITLE */}
        <motion.h2
          className="text-[30px] font-outfit font-semibold leading-[36px] w-[311px] h-[72px] flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          className="text-[18px] font-openSans leading-[27px] opacity-95"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.45 }}
        >
          {description}
        </motion.p>

      </div>
    </motion.div>
  );
}
