'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section6() {

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative w-full bg-white">

      <div ref={ref} className="relative w-full max-w-[1200px] mx-auto">

        {/* HEADING + DIVIDER */}
        <div className="flex flex-col items-center gap-4 w-full">
          <motion.h2
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center font-outfit font-medium text-[#130D22] text-[40px] leading-[120%]"
          >
            Our Reach
          </motion.h2>

          <motion.div
            animate={isInView ? { width: "64px" } : { width: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-[4px] bg-[#F05623]"
          />
        </div>

        {/* CONTENT ROW */}
        <div className="mt-16">

          {/* FIXED IMAGE CONTAINER */}
          <motion.div
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-[506px] relative"
          >
            {/* Inner wrapper holds rounded corners */}
            <div className="absolute inset-0 rounded-[4px] overflow-hidden">
              <Image
                src="/images/B4-Best_Electrical_s/Our_Reach.png"
                alt="Event Image Large"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
