'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/* ------------------------------------------------------------------
   SERVICE CARD COMPONENT — UPDATED (NO FIXED WIDTH)
-------------------------------------------------------------------*/
interface ServiceCardProps {
  icon: string;
  hoverIcon: string;
  title: string;
  description: string;
}

function ServiceCard({ icon, hoverIcon, title, description }: ServiceCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="w-full h-[443px] bg-[#232233] rounded p-8 flex flex-col items-start cursor-pointer shadow-lg"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.05, y: -5, backgroundColor: '#47D4AA' }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* ICON */}
      <motion.div
        className="w-24 h-24 mb-6 rounded flex items-center justify-center shadow-md"
        animate={{ scale: isHover ? 1.15 : 1, rotate: isHover ? 5 : 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <Image
          src={isHover ? hoverIcon : icon}
          alt={`${title} icon`}
          width={96}
          height={96}
          className="transition-all duration-300"
        />
      </motion.div>

      {/* TITLE */}
      <motion.h2
        className="text-3xl font-semibold mb-6"
        animate={{ color: isHover ? '#000' : '#ffffff' }}
        transition={{ duration: 0.25 }}
      >
        {title}
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        className="text-[18px] leading-[26px]"
        animate={{ color: isHover ? '#000' : 'rgba(255,255,255,0.85)' }}
        transition={{ duration: 0.25 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   SERVICES DATA
-------------------------------------------------------------------*/
const servicesData = [
  {
    icon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_02.svg",
    title: "Carbon FootprintReduction Policy",
    description:
      "Develop a policy aimed at minimizing carbon footprints in the events industry.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02.svg",
    title: "Material Classification",
    description:
      "We evaluate venue capacity, crowd density limits, and implement strategies to avoid overcrowding while ensuring free attendee movement.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Show_Day_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Show_Day_02.svg",
    title: "Crowd Management",
    description:
      "We design crowd movement strategies, manage entry and queues, and deploy trained personnel to ensure safe and efficient crowd flow.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_02.svg",
    title: "Crisis Management",
    description:
      "We prepare detailed response plans for emergencies and equip your staff with essential training for medical, security, and operational risks.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg",
    title: "Contingency Planning",
    description:
      "We establish reliable backup plans to ensure continuity of essential event functions and identify alternatives for potential failures.",
  },
];

/* ------------------------------------------------------------------
   MAIN COMPONENT WITH FULL FIX
-------------------------------------------------------------------*/
export default function ServiceCardPagination() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const getSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return 3;
    };

    const handleResize = () => setSlidesToShow(getSlidesToShow());

    setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(servicesData.length / slidesToShow);

  return (
    <div className="w-full flex flex-col items-center bg-[#0F0F1A] py-10">
      
      {/* SLIDER */}
      <div className="relative overflow-hidden w-full max-w-[1200px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-5" // equal spacing fix
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <ServiceCard
                icon={service.icon}
                hoverIcon={service.hoverIcon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-4 mt-8">
        
        {/* PREV */}
        <button
          className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
        >
          <Image src="/images/img_group_7.svg" alt="Previous" width={20} height={20} />
        </button>

        {/* PAGE NUMBER */}
        <span className="text-[20px] sm:text-[24px] font-outfit font-medium text-white px-4">
          {currentSlide + 1}/{totalSlides}
        </span>

        {/* NEXT */}
        <button
          className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
          disabled={currentSlide === totalSlides - 1}
        >
          <Image src="/images/img_vector_stroke.svg" alt="Next" width={24} height={24} />
        </button>

      </div>
    </div>
  );
}
