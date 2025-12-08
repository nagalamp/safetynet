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
  points: string[];
}

function ServiceCard({ icon, hoverIcon, title, points }: ServiceCardProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      className="w-96 h-[443px] bg-[#232233] rounded p-8 flex flex-col items-start cursor-pointer shadow-lg"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        backgroundColor: "#47D4AA",
      }}
      transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* ICON */}
      <motion.div
        className="w-24 h-24 mb-6 bg-white rounded-full flex items-center justify-center shadow-md"
        animate={{ scale: isHover ? 1.15 : 1, rotate: isHover ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 200 }}
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
        animate={{ color: isHover ? "#000" : "#ffffff" }}
        transition={{ duration: 0.25 }}
      >
        {title}
      </motion.h2>

      {/* POINTS */}
      <motion.div
        className="flex flex-col gap-4 text-[18px] leading-[26px]"
        animate={{ color: isHover ? "#000" : "rgba(255,255,255,0.85)" }}
        transition={{ duration: 0.25 }}
      >
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <Image
              src={isHover ? "/images/img_vector_stroke_black.svg" : "/images/img_vector_stroke.svg"}
              alt="icon"
              width={14}
              height={14}
              className="w-[14px] h-[14px] mt-[5px] shrink-0"
            />
            <p className="flex-1">{point}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   MERGED SERVICES DATA
-------------------------------------------------------------------*/
const eventStrategicSafetyServices = [
  {
    icon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_02.svg",
    title: "Risk Assessment & Planning",
    points: [
      "Review of event activities, venue hazards, and external threats",
      "Development of a comprehensive safety management plan"
    ],
    slug: "event-strategic-safety-services"
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02.svg",
    title: "Capacity Planning",
    points: [
      "Evaluation of venue capacity and crowd density limits",
      "Measures to prevent overcrowding and ensure safe attendee flow"
    ],
    slug: "event-strategic-safety-services"
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Show_Day_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Show_Day_02.svg",
    title: "Crowd Management",
    points: [
      "Strategies for controlling entry, managing queues, and directing movement",
      "Deployment of trained personnel to monitor and guide crowds"
    ],
    slug: "event-strategic-safety-services"
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_01.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_02.svg",
    title: "Crisis Management",
    points: [
      "Preparation of response plans for potential emergencies or incidents",
      "Training staff to handle medical, security, and operational issues"
    ],
    slug: "event-strategic-safety-services"
  },
  {
    icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg",
    hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg",
    title: "Contingency Planning",
    points: [
      "Establishment of backup plans for critical event functions and services",
      "Identification of alternative arrangements in case of failures"
    ],
    slug: "event-strategic-safety-services"
  }
];

/* ------------------------------------------------------------------
   GRID SECTION (FINAL MERGED OUTPUT)
-------------------------------------------------------------------*/
export default function EventStrategicSafetyServices() {
  return (
    <div className="w-full flex flex-col items-center  bg-[#0F0F1A]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {eventStrategicSafetyServices.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            hoverIcon={service.hoverIcon}
            title={service.title}
            points={service.points}
          />
        ))}
      </div>
    </div>
  );
}
