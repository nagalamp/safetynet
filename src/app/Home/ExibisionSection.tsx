'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ExhibitionCenter {
  id: number;
  name: string;
  logo: string;
}

interface ExhibitionSectionProps {
  exhibitionCenters: ExhibitionCenter[];
}

export default function ExhibitionSection({ exhibitionCenters }: ExhibitionSectionProps) {
  return (
    <motion.section
      className="w-full bg-[#150e24] py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="flex flex-col gap-2 items-center w-full mb-8">
          <div className="flex flex-col gap-2 items-center w-full px-4 sm:px-11">
            <h2 className="whitespace-nowrap text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center">
              Our Exhibitions
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded" />
          </div>
        </div>

        {/* Marquee Reverse Direction */}
        <div className="overflow-hidden">
          <div className="marquee flex gap-6">
            {[...exhibitionCenters, ...exhibitionCenters].map((center, index) => (
              <div
                key={`${center.id}-${index}`}
                className="
                  flex justify-center items-center bg-white rounded flex-shrink-0
                  w-[180px] h-[90px]
                  sm:w-[140px] sm:h-[90px]
                  md:w-[160px] md:h-[100px]
                  lg:w-[316px] lg:h-[130px]
                  p-5
                "
                style={{
                  minWidth:
                    typeof window !== 'undefined' && window.innerWidth >= 1024
                      ? 'calc((100% - 96px)/5)' // SAME AS ClientsSection
                      : '150px'
                }}
              >
                <Image
                  src={center.logo.startsWith('/') ? center.logo : `/${center.logo}`}
                  alt={`${center.name} logo`}
                  width={237}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .marquee {
          display: flex;
          animation: reverseScroll 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        /* OPPOSITE DIRECTION */
        @keyframes reverseScroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </motion.section>
  );
}
