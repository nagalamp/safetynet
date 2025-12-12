'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section3() {

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative w-full bg-white py-20">
      
      {/* CENTERED WRAPPER */}
      <div
        ref={ref}
        className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-12"
      >

        {/* TEXT BLOCK */}
        <motion.div
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 max-w-[600px]"
        >
          <h3 className="font-outfit font-semibold text-[#F05623] text-[32px] leading-[120%]">
            Our Solution
          </h3>

          <p className="font-open-sans text-[#150E24] text-[18px] leading-[150%] font-normal">
            At BEST Electricals, we have devised a comprehensive solution to tackle these challenges.
            Our electrical services are meticulously designed to ensure uninterrupted power
            distribution, bolstered by stringent safety protocols, and tailored configurations to
            cater to the distinctive requirements of any event. Our service offerings are not only
            tailored to the specific needs of the venue but are also carefully crafted to align with
            the nature of the event, all while prioritizing safety. Our services have earned
            international recognition and are currently available in various regions across the globe.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-[486px] h-[505px] relative rounded-[4px] overflow-hidden"
        >
          <Image
            src="/images/B4-Best_Electrical_s/Our_Solution.png"
            alt="Large Image"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
