'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section className="w-full h-[270px] bg-transparent bg-cover bg-center pt-4 pb-4 px-4">

      <div className="max-w-[1202px] mx-auto  relative">

        <h2
          className="absolute w-[678px] h-[96px] left-1/2 top-[80px] -translate-x-1/2
          font-outfit font-semibold text-[40px] leading-[120%]
          flex items-center justify-center text-center text-[#47D4AA]"
        >
          We are a Team of Experts Dedicated To Making Events Safe and Successful
        </h2>

      </div>

    </motion.section>
  );
}
