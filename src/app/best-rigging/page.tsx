'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeaderNoMenu from '../../components/common/HeaderNoMenu';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import Image from 'next/image';
import ContactSection from '../Home/ContactSectionV2';
import SummaryBanner from './SummaryBanner';
import ServiceCard from './ServiceCard';

// -----------------------------
// JSON DATA
// -----------------------------
const offSiteCards = [
  {
    title: "Safety Assurance",
    description: "Ensuring a secure environment through stringent safety protocols.",
    image: "/images/B4-Best_Rigging/Safety_Assurance.png",
  },
  {
    title: "Efficient Setup and Breakdown",
    description: "Identifying and minimizing potential hazards before event execution.",
    image: "/images/B4-Best_Rigging/Efficient_Setup_Breakdown.png",
  },
  {
    title: "Customization and Flexibility",
    description: "Tailoring our services to meet the unique needs of each client and event.",
    image: "/images/B4-Best_Rigging/Customization_Flexibility.png",
  },
  {
    title: "Expertise in Rigging Equipment",
    description: "Utilizing advanced knowledge and top-of-the-line equipment for optimal results.",
    image: "/images/B4-Best_Rigging/Expertise_Rigging_Equipment.png",
  },
  {
    title: "Compliance with Regulations",
    description: "Adhering to industry standards and regulations to guarantee a seamless operation.",
    image: "/images/B4-Best_Rigging/Compliance_Regulations.png",
  },
  {
    title: "Enhanced Production Values",
    description: "Elevating the overall quality and impact of event productions.",
    image: "/images/B4-Best_Rigging/Enhanced_Production_Value.png",
  },
  {
    title: "Risk Mitigation",
    description: "Proactively identifying and mitigating potential risks to ensure a smooth event.",
    image: "/images/B4-Best_Rigging/Risk_Mitigation.png",
  },
  {
    title: "Versatility Across Events",
    description: "Adapting our services to suit various types of events and venues.",
    image: "/images/B4-Best_Rigging/Versatility_Across_Events.png",
  },
  {
    title: "Equipment Maintenance and Inspection",
    description: "Regularly maintaining and inspecting our equipment to ensure reliability.",
    image: "/images/B4-Best_Rigging/Equipment_Maintenance_Inspection.png",
  },
];

export default function HowWeWork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150e24] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#150e24]"
      style={{
        backgroundImage: `url('/images/img_image_9.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header + Hero */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('/images/B4-Best_Rigging/Home_Banner.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <HeaderNoMenu />
        <HeroSection />
      </div>

      {/* MAIN WHITE SECTION */}
      <main className="bg-white">
        <section className="w-full py-16 px-4 sm:px-6 lg:px-0">
          <div className="w-full max-w-[1200px] mx-auto">

            {/* -------------------------------------- */}
            {/*               ABOUT US                 */}
            {/* -------------------------------------- */}
            <motion.div
              className="flex flex-col gap-4 justify-center items-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Heading */}
              <motion.div
                className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]
                  font-outfit font-semibold text-[#000088] text-center">
                  About Us
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
              </motion.div>

              {/* Text + Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-700 leading-relaxed">
                    BEST, a company providing Health & Safety services across the UK, UAE, and India since 2015,
                    is introducing "Rigging" services to India under the brand B4 Global, revolutionizing branding
                    practices. This marks the first-time availability of such services in India, and we are proud to
                    outline the measures and controls in place.
                  </p>

                  <h3 className="text-2xl font-semibold text-[#070b23]">
                    Cost Effective solutions
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    While professional rigging services involve an initial cost, the long-term benefits include
                    resource optimization, prevention of unnecessary expenses, and minimizing the risk of damages
                    and accidents.
                  </p>
                </motion.div>

                <motion.div
                  className="flex justify-center md:justify-end"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src="/images/B4-Best_Rigging/About_Us.png"
                    alt="On Site"
                    width={520}
                    height={400}
                    className="rounded shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* -------------------------------------- */}
            {/*               OUR SERVICES             */}
            {/* -------------------------------------- */}
            <motion.div
              className="flex flex-col gap-4 justify-center items-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <motion.div
                className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]
                  font-outfit font-semibold text-[#000088] text-center">
                  Our Services
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
              </motion.div>

              {/* Cards with Stagger Animation */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {offSiteCards.map((card, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <ServiceCard
                      title={card.title}
                      description={card.description}
                      image={card.image}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

          </div>

          {/* Summary Banner Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SummaryBanner
              image="/images/B4-Best_Rigging/Content_Bg.png"
              text="In summary, rigging services play a pivotal role in ensuring the safety, efficiency, and success of events. Our commitment to expertise, attention to detail, and a paramount focus on safety contribute to creating memorable and flawlessly executed experiences for event organizers and attendees alike."
            />
          </motion.div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
