'use client';
import Image from "next/image";
import { motion } from "framer-motion";

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface ClientsCarouselProps {
  clients?: Client[];
}

export default function ClientsCarousel({ clients = [] }: ClientsCarouselProps) {
  if (!clients || clients.length === 0) return null;

  const marqueeSpeed = 25; // Lower = faster

  return (
    <motion.div
      className="relative w-full overflow-hidden py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Marquee Wrapper */}
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: `marquee ${marqueeSpeed}s linear infinite`,
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[250px]"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={260}   // ⬆ Increased Width
              height={120}  // ⬆ Increased Height
              className="object-contain opacity-90 hover:opacity-100 transition"
            />
          </div>
        ))}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </motion.div>
  );
}
