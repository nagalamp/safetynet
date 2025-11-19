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
          <motion.h2
            className="text-[28px] font-outfit font-semibold text-white text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Clients
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-[#47d4aa]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>

        {/* Clients Marquee */}
        <div className="overflow-hidden">
          <div className="marquee flex gap-6">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex justify-center items-center bg-white rounded flex-shrink-0"
                style={{ minWidth: 'calc((100% - 96px)/5)' }} // 5 logos visible
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={80}
                  height={40}
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
          animation-play-state: paused; /* pause on hover */
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
