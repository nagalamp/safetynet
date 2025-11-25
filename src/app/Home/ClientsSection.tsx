'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface ClientsSectionProps {
  clients: Client[];
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <motion.section
      className="w-full bg-[#150e24] py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Clients Header */}
        <div className="flex flex-col gap-2 items-center w-full mb-8">
          <div className="flex flex-col gap-2 items-center w-full px-4 sm:px-11">
            <h2 className="whitespace-nowrap text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center">
              Our Clients
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded" />
          </div>
        </div>

        {/* Clients Marquee */}
        <div className="overflow-hidden">
          <div className="marquee flex gap-6">

            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="
                  flex justify-center items-center bg-white rounded flex-shrink-0
                  w-[180px] h-[90px]
                  sm:w-[140px] sm:h-[90px]
                  md:w-[160px] md:h-[100px]
                  lg:w-[180px] lg:h-[90px]
                  p-5
                "
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={237}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Animation Styles */}
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
