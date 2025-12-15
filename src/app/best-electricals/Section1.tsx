'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section1() {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative w-full bg-white overflow-hidden flex justify-center gap-16">
      <div ref={ref} className="relative w-full max-w-[1200px] min-h-[900px] px-4 lg:px-0 gap-16">

        {/* Background Vector Image – responsive animation */}
        <motion.div
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute hidden lg:block"
          style={{
            left: "330px",
            top: "117px",
            width: "870px",
            height: "712px",
          }}
        >
          <Image
            src="/images/B4-Best_Electrical_s/Home_Banner.png"
            alt="Vector Graphic"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* MAIN TITLE */}
        <motion.p
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            absolute lg:left-[20px] lg:top-[129px]
            text-[#F05623] font-outfit font-[700]
            leading-[100%]
            text-4xl md:text-5xl lg:text-[58px]
            w-full max-w-[740px]
          "
        >
          WHERE HEALTH MEETS SAFETY, DELIVERED BY EXPERTS
          <motion.span 
                className="text-[#F05623]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                 &nbsp;&gt; 
              </motion.span>
        </motion.p>

        {/* SUBTITLE */}
        <motion.p
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="
            absolute lg:left-[20px] lg:top-[375px]
            text-[#150E24] font-outfit font-semibold
            text-xl md:text-2xl lg:text-[32px] leading-[138%]
            w-full max-w-[282px]
          "
        >
          Empowering safe, compliant, and sustainable events across the UK, UAE and INDIA.
        </motion.p>

        {/* MOBILE/TABLET LAYOUT */}
        <div className="lg:hidden flex flex-col items-center text-center mt-10">

          {/* Mobile Image */}
          <motion.div
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/B4-Best_Electrical_s/Home_Banner.png"
              width={380}
              height={380}
              alt="Banner"
              className="object-contain mb-6"
            />
          </motion.div>

          {/* Mobile Title */}
          <motion.h1
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-[#F05623] font-outfit font-bold text-3xl md:text-4xl leading-tight"
          >
            WHERE HEALTH MEETS SAFETY,<br /> DELIVERED BY EXPERTS
          </motion.h1>

          {/* Mobile Subtitle */}
          <motion.p
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-[#150E24] font-outfit font-medium text-lg md:text-xl max-w-[350px]"
          >
            Empowering safe, compliant, and sustainable events across the UK, UAE and INDIA.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
