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

        {/* Exhibitions Header */}
        <div className="flex flex-col gap-2 items-center w-full mb-8">
          <motion.h2 
            className="text-[28px] font-outfit font-semibold text-white text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Exhibitions
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-[#47d4aa]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Exhibitions Marquee */}
        <div className="overflow-hidden">
          <div className="marquee flex gap-6">
            {[...exhibitionCenters, ...exhibitionCenters].map((center, index) => (
              <div
                key={`${center.id}-${index}`}
                className="flex justify-center items-center bg-white rounded flex-shrink-0"
                style={{ flex: '0 0 calc((100% - 24px*4)/5)' }} // 5 logos + 4 gaps
              >
                <Image
                  src={center.logo.startsWith('/') ? center.logo : `/${center.logo}`}
                  alt={`${center.name} logo`}
                  width={150}       // Adjust width if needed
                  height={100}      // Increased height
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
          animation: scroll 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.section>
  );
}
