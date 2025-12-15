'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

/* ------------------------------------------------------------------
   SERVICE CARD COMPONENT
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
      className="w-full h-[443px] bg-[#232233] p-8 flex flex-col items-start cursor-pointer shadow-lg"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        backgroundColor: '#47D4AA',
      }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* ICON */}
      <motion.div
        className="w-24 h-24 mb-6 rounded flex items-center justify-center "
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
const eventStrategicSafetyServices = [
  {
    icon: '/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_01.svg',
    hoverIcon: '/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_02.svg',
    title: 'Stand Audit & Assessment',
    description:
      'Pre-show and on-site training/induction for contractors on Health & Safety and Sustainability. Run through the compliances and regulations.',
  },
  {
    icon: '/images/Services/EventStrategicSafetyServices/Capacity_Planning_01.svg',
    hoverIcon: '/images/Services/EventStrategicSafetyServices/Capacity_Planning_02.svg',
    title: 'Best Connect',
    description:
      'Pre-show and on-site training/induction for contractors on Health & Safety and Sustainability. Run through the compliances and regulations.',
  },
  {
    icon: '/images/Services/EventStrategicSafetyServices/Show_Day_01.svg',
    hoverIcon: '/images/Services/EventStrategicSafetyServices/Show_Day_02.svg',
    title: 'Compliance Review',
    description:
      'Pre-show and on-site training/induction for contractors on Health & Safety and Sustainability. Run through the compliances and regulations.',
  },
  {
    icon: '/images/Services/EventStrategicSafetyServices/Crisis_Management_01.svg',
    hoverIcon: '/images/Services/EventStrategicSafetyServices/Crisis_Management_02.svg',
    title: 'Design Submissions',
    description:
      'Pre-show and on-site training/induction for contractors on Health & Safety and Sustainability. Run through the compliances and regulations.',
  },
  {
    icon: '/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg',
    hoverIcon: '/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg',
    title: 'Design Verification',
    description:
      'Pre-show and on-site training/induction for contractors on Health & Safety and Sustainability. Run through the compliances and regulations.',
  },
  {
    icon: '/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg',
    hoverIcon: '/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg',
    title: 'In-House Design',
    description:
      'Pre-show and on-site training/induction for contractors on Health & Safety and Sustainability. Run through the compliances and regulations.',
  },
];

/* ------------------------------------------------------------------
   GRID SECTION
-------------------------------------------------------------------*/
export default function EventStrategicSafetyServices() {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {eventStrategicSafetyServices.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            hoverIcon={service.hoverIcon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
