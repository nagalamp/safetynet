'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section2() {

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full max-w-[1200px] mx-auto" ref={ref}>

        {/* HEADING + DIVIDER */}
        <div className="flex flex-col items-center gap-4 w-full mt-5">

          {/* Heading */}
          <motion.h2
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center font-outfit font-medium text-[#130D22] text-[40px] leading-[120%]"
          >
            Event Industry in India Decoded
          </motion.h2>

          {/* Divider */}
          <motion.div
            animate={isInView ? { width: "64px" } : { width: "0px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-[4px] bg-[#F05623]"
          />
        </div>

        {/* CONTENT ROW */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4">

          {/* LEFT IMAGE */}
          <motion.div
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[4px] overflow-hidden w-full h-[506px] relative"
          >
            <Image
              src="/images/B4-Best_Electrical_s/The_Problem.png"
              alt="Event Image Large"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-outfit font-semibold text-[#F05623] text-[32px] leading-[120%]">
              The Problem
            </h3>

            <p className="font-open-sans text-[#150E24] text-[18px] leading-[150%]">
              While the events industry is experiencing significant growth, numerous event
              organizers continue to grapple with critical challenges in ensuring the reliability,
              safety, and efficiency of their electrical infrastructure. These issues can act as
              showstoppers, leading to event disruptions, safety hazards, and dissatisfied
              customers, ultimately impacting their brand value.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
