'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { services as serviceData, ServiceCard } from '../../data/services';

export default function ServicesSectionHorizontal() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const handleServiceClick = (service: ServiceCard) => {
    const serviceSlug = service.slug || service.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/services/${serviceSlug}`);
  };

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scrollBy = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col gap-2 items-center w-[25%] px-8 mb-6">
        <h2 className="text-[28px] lg:text-[40px] font-outfit font-semibold text-white text-center">
          Our Services
        </h2>
        <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-[1200px] overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-4 cursor-grab"
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          dragElastic={0.1}
          whileTap={{ cursor: 'grabbing' }}
        >
          {/* Duplicate services for seamless loop */}
          {[...serviceData, ...serviceData].map((service, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[280px] rounded overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleServiceClick(service)}
            >
              {/* Image */}
              <div className="relative w-full h-[380px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index < serviceData.length}
                />
                <div className="absolute top-4 left-4 right-4">
                  <h3 className="text-[16px] lg:text-[20px] font-outfit font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Hover Content */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-[#2c0087] rounded p-4 flex flex-col justify-start opacity-0 hover:opacity-100 transition-opacity"
              >
                <h3 className="text-[16px] lg:text-[20px] font-outfit font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <div className="space-y-2 flex-1">
                  {service.features?.map((feature, i) => (
                    <div key={i} className="flex flex-row gap-2 items-start">
                      <Image
                        src="/images/img_vector_stroke.svg"
                        alt="Checkmark"
                        width={12}
                        height={10}
                      />
                      <p className="text-[14px] lg:text-[14px] text-white">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Arrow Button */}
                <motion.button
                  className="w-10 h-10 bg-[#f05623] rounded-full flex items-center justify-center mt-4 ml-auto"
                  whileHover={{ rotate: -45, scale: 1.2, backgroundColor: '#47d4aa' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  <Image
                    src="/images/img_frame_427320965.svg"
                    alt="Arrow icon"
                    width={16}
                    height={16}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Controls */}
        <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
          <button
            className="px-4 py-2 bg-[#47d4aa] rounded text-white font-semibold"
            onClick={() => scrollBy(-300)}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-[#47d4aa] rounded text-white font-semibold"
            onClick={() => scrollBy(300)}
          >
            Forward
          </button>
        </div>
      </div>
    </section>
  );
}
