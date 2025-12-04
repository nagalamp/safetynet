'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { services as serviceData, ServiceCard } from '../../data/services';

// Motion Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const imageVariants = {
  initial: { opacity: 1 },
  hover: { opacity: 0, transition: { duration: 0.4 } },
};
const cardContentVariants = {
  initial: { opacity: 0, scale: 0.95 },
  hover: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.1 } },
};
const featureItemVariants = {
  initial: { opacity: 0, x: -5 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};
const buttonVariants = {
  initial: { scale: 1, rotate: -45, backgroundColor: '#47d4aa' },
  hover: {
    scale: 1.1,
    rotate: 0,
    backgroundColor: '#f05623',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export default function ServicesSectionHorizontal() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleServiceClick = (service: ServiceCard) => {
    const serviceSlug =
      service.slug || service.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/services/${serviceSlug}`);
  };

  useEffect(() => {
    if (carouselRef.current)
      setWidth(
        carouselRef.current.scrollWidth -
          carouselRef.current.offsetWidth
      );
    const handleResize = () => {
      if (carouselRef.current)
        setWidth(
          carouselRef.current.scrollWidth -
            carouselRef.current.offsetWidth
        );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollBy = (offset: number) => {
    if (carouselRef.current)
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <motion.section
      className="w-full py-12 flex flex-col items-center bg-[#150e24]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">

        {/* Header */}
        <div className="flex flex-col gap-2 items-center w-full px-4">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-outfit font-semibold text-white text-center">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-[#47d4aa] rounded"></div>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="flex gap-4 cursor-grab"
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.1}
            whileTap={{ cursor: 'grabbing' }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
          >
            {[...serviceData, ...serviceData].map((service, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[280px]"
                variants={cardVariants}
              >
                <div
                  className="relative w-full h-[438px] rounded overflow-hidden cursor-pointer"
                  onClick={() =>
                    !isDragging && handleServiceClick(service)
                  }
                >
                  {/* Image */}
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    variants={imageVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority={index < serviceData.length}
                    />
                    <div className="absolute top-6 left-4 right-4">
                      <h1 className="text-[20px] sm:text-[25px] md:text-[20px] lg:text-[30px] font-outfit font-semibold text-white leading-[38px]">
                        {service.title}
                      </h1>
                    </div>
                  </motion.div>

                  {/* Hover Content */}
                  <motion.div
                    className="absolute inset-0 w-full h-full bg-[#2c0087] rounded p-6 flex flex-col justify-start"
                    variants={cardContentVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <h1 className="text-[20px] sm:text-[25px] md:text-[20px] lg:text-[30px] font-outfit font-semibold text-white leading-[38px]">
                      {service.title}
                    </h1>

                    <div className="space-y-3 flex-1 mt-2">
                      {service.features?.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex flex-row gap-3 justify-start items-start w-full"
                          variants={featureItemVariants}
                        >
                          <Image
                            src="/images/img_vector_stroke.svg"
                            alt="Checkmark icon"
                            width={12}
                            height={10}
                            className="mt-1 flex-shrink-0"
                          />
                          <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-open-sans font-normal leading-relaxed text-white text-left flex-1">
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      className="w-12 h-12 rounded-[24px] flex items-center justify-center mt-6 ml-auto"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!isDragging) handleServiceClick(service);
                      }}
                    >
                      <Image
                        src="/images/img_frame_427320965.svg"
                        alt="Arrow icon"
                        width={20}
                        height={20}
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Controls */}
          <div className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10 flex-wrap justify-center">
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
      </div>
    </motion.section>
  );
}
