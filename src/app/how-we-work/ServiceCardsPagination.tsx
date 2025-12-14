'use client';

import Image from 'next/image';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/* ------------------------------------------------------------------
   SERVICE CARD
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
      className="w-full h-[443px] bg-[#232233] rounded p-8 flex flex-col cursor-pointer"
      whileHover={{ scale: 1.05, y: -5, backgroundColor: '#47D4AA' }}
      transition={{ type: 'spring', stiffness: 120 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* ICON */}
      <Image
        src={isHover ? hoverIcon : icon}
        alt={title}
        width={96}
        height={96}
        className="mb-6"
      />

      {/* TITLE */}
      <h2
        className={`text-3xl font-semibold mb-6 ${
          isHover ? 'text-black' : 'text-white'
        }`}
      >
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className={`text-[18px] leading-[26px] ${
          isHover ? 'text-black' : 'text-white/80'
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   DATA
-------------------------------------------------------------------*/
const servicesData = [
  {
    icon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_02.svg",
    title: "Carbon Footprint Reduction Policy",
    description:
      "Develop a policy aimed at minimizing carbon footprints in the events industry.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02.svg",
    title: "Material Classification",
    description:
      "We evaluate venue capacity, crowd density limits, and implement strategies to avoid overcrowding.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Show_Day_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Show_Day_02.svg",
    title: "Crowd Management",
    description:
      "We design crowd movement strategies and deploy trained personnel to ensure safe flow.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_02.svg",
    title: "Crisis Management",
    description:
      "We prepare detailed response plans for emergencies and equip staff with training.",
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg",
    title: "Contingency Planning",
    description:
      "We establish reliable backup plans to ensure continuity of essential functions.",
  },
];

/* ------------------------------------------------------------------
   MAIN COMPONENT
-------------------------------------------------------------------*/
export default function ServiceCardPagination() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* Responsive slides */
  useEffect(() => {
    const calcSlides = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const handleResize = () => setSlidesToShow(calcSlides());

    setSlidesToShow(calcSlides());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* Calculate slide width */
  useEffect(() => {
    if (carouselRef.current) {
      setSlideWidth(carouselRef.current.offsetWidth);
    }
  }, [slidesToShow]);

  const totalSlides = Math.ceil(servicesData.length / slidesToShow);
  const maxX = -(totalSlides - 1) * slideWidth;

  /* Snap on drag end */
  const handleDragEnd = () => {
    const rawIndex = Math.round(Math.abs(x.get()) / slideWidth);
    const index = Math.min(Math.max(rawIndex, 0), totalSlides - 1);

    animate(x, -index * slideWidth, {
      duration: 0.45,
      ease: 'easeOut',
    });

    setCurrentSlide(index);
  };

  /* Arrow navigation */
  const goToSlide = (index: number) => {
    const clamped = Math.min(Math.max(index, 0), totalSlides - 1);

    animate(x, -clamped * slideWidth, {
      duration: 0.45,
      ease: 'easeOut',
    });

    setCurrentSlide(clamped);
  };

  return (
    <div className="w-full bg-[#0F0F1A] py-10 flex flex-col items-center">

      {/* DRAG SLIDER */}
      <div
        ref={carouselRef}
        className="relative w-full max-w-[1200px] overflow-hidden"
      >
        <motion.div
          className="flex gap-6 cursor-grab"
          drag="x"
          style={{ x }}
          dragConstraints={{ left: maxX, right: 0 }}
          dragElastic={0.08}
          whileTap={{ cursor: 'grabbing' }}
          onDragEnd={handleDragEnd}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* PAGINATION + OLD ARROWS */}
      <div className="flex items-center justify-center gap-4 mt-8">

        {/* PREVIOUS */}
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          className="
            w-12 h-12
            border border-[#5e5d77]
            rounded
            flex items-center justify-center
            hover:bg-[#2c0087]
            transition-colors
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          <Image
            src="/images/img_group_7.svg"
            alt="Previous"
            width={20}
            height={20}
          />
        </button>

        {/* PAGE NUMBER */}
        <span className="text-[20px] sm:text-[24px] font-outfit font-medium text-white px-4">
          {currentSlide + 1}/{totalSlides}
        </span>

        {/* NEXT */}
        <button
          onClick={() => goToSlide(currentSlide + 1)}
          disabled={currentSlide === totalSlides - 1}
          className="
            w-12 h-12
            border border-[#5e5d77]
            rounded
            flex items-center justify-center
            hover:bg-[#2c0087]
            transition-colors
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          <Image
            src="/images/img_vector_stroke.svg"
            alt="Next"
            width={24}
            height={24}
          />
        </button>

      </div>
    </div>
  );
}
