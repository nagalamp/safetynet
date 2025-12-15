'use client';

import Image from "next/image";

export default function Section6() {
  return (
    <section className="relative w-full bg-white py-20">
      {/* CONTAINER */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4">

        {/* HEADING */}
        <div className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-center font-outfit font-medium text-[#130D22] text-[40px] leading-[120%]">
            Our Reach
          </h2>

          <div className="w-[64px] h-[4px] bg-[#F05623]" />
        </div>

        {/* IMAGE WITH BORDER */}
        <div className="mt-16">
          {/* Outer border wrapper */}
          <div className="relative w-full h-[506px] rounded bg-[#e5e7eb] p-[1px]">
            {/* Inner image wrapper */}
            <div className="relative w-full h-full rounded overflow-hidden">
              <Image
                src="/images/B4-Best_Electrical_s/Our_Reach.png"
                alt="Our Reach"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
