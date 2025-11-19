'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface ClientsCarouselProps {
  clients?: Client[]; // Make clients optional
}

export default function ClientsCarousel({ clients = [] }: ClientsCarouselProps) {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const clientsScrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality for clients
  useEffect(() => {
    if (!clients || clients.length === 0) return;

    const interval = setInterval(() => {
      setCurrentClientIndex((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [clients]);

  const scrollToClient = (index: number): void => {
    if (!clients || clients.length === 0) return;

    setCurrentClientIndex(index);
    if (clientsScrollRef.current) {
      const container = clientsScrollRef.current;
      const itemWidth = 400;
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  // Don't render if no clients or clients array is empty
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <motion.div
      className="relative w-full max-w-[1600px] mx-auto"
      variants={fadeInUp}
    >
      <div
        ref={clientsScrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.id}-${index}`}
            className="flex justify-center items-center min-w-[384px] bg-white rounded p-6 flex-shrink-0 hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.02,
              y: -5
            }}
            initial={{ opacity: 0.7 }}
            animate={{
              opacity: index % clients.length === currentClientIndex ? 1 : 0.7,
              scale: index % clients.length === currentClientIndex ? 1.05 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={client.logo}
              alt={`${client.name} - Trusted client company logo`}
              width={index % clients.length === 2 ? 328 : index % clients.length === 1 ? 182 : 236}
              height={80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* Client Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {clients.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentClientIndex ? 'bg-[#47d4aa] scale-125' : 'bg-gray-400'
              }`}
            onClick={() => scrollToClient(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </motion.div>
  );
}