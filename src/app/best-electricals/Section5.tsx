'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section5() {

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative w-full bg-white py-24">
      <div ref={ref} className="w-full max-w-[1200px] mx-auto px-4">

        {/* HEADING + PARAGRAPH */}
        <div className="flex flex-col items-center text-center gap-6">
          
          {/* Heading */}
          <motion.h2
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-outfit font-semibold text-[#F05623] text-[34px] leading-[120%]"
          >
            About Us
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-open-sans text-[#150E24] text-[18px] leading-[150%] max-w-[1090px]"
          >
            “Bluelemon Safety and Training, formerly known as Bluelemon Management Services and
            Bluelemon FZ LLE, has been operating since 2014. We specialize in health, safety,
            environmental, and engineering services for a wide range of industries and events.
            Our company's core philosophy is to have safety professionals managing a safety company,
            ensuring expertise and professionalism in all aspects of our services. Our unwavering
            mission is to maintain the highest standards of safety for our clients."
          </motion.p>
        </div>

        {/* IMAGE */}
        <motion.div
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full rounded overflow-hidden relative mt-6"
        >
          <Image
            src="/images/B4-Best_Electrical_s/About_Us.png"
            alt="BEST B4-Global Office"
            width={1200}
            height={348}
            className="w-full h-auto rounded-t-[4px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
