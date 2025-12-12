'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section4() {
  
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative w-full bg-white">
      <div ref={ref} className="w-full max-w-[1200px] mx-auto">

        {/* GRID: IMAGE LEFT – TEXT RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full flex"
          >
            <div className="relative w-full max-w-full aspect-[652/659]">
              <Image
                src="/images/B4-Best_Electrical_s/Our_Solution_Electrified.png"
                alt="Our Solution Electrified"
                fill
                className="object-contain lg:object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* RIGHT TEXT BLOCK */}
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h3 className="font-outfit font-semibold text-[#F05623] text-[32px] leading-[120%]">
              Our Solution - Electrified
            </h3>

            {/* BULLETED LIST */}
            <ul className="space-y-5">
              {[
                "Implement European standards across the industry",
                "Bespoke Electrical Solutions",
                "Streamlined load requests – App Based",
                "Customised Power Distribution",
                "Flexible Budgeting",
                "Professional Consultation and On-Site Tech Support",
                "Real Time Power Supply Monitoring",
                "Comprehensive Audit Reports",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="flex gap-3 items-start"
                >
                  <div className="mt-1">
                    <div className="relative w-[20px] h-[14px]">
                      <div className="absolute left-[11px] top-0 w-[4px] h-[4px] border border-[#9494B3]" />
                      <div className="absolute left-0 top-[5px] w-[7px] h-[9px] border border-[#9494B3]" />
                      <div className="absolute left-[6px] top-[1px] w-[16px] h-[13px] border border-[#9494B3]" />
                    </div>
                  </div>

                  <p className="font-open-sans text-[#150E24] text-[18px] leading-[150%]">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
