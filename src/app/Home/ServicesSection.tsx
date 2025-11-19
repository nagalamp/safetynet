'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { services as serviceData, ServiceCard } from '../../data/services';

// Motion Variants
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
const imageVariants = { initial: { opacity: 1 }, hover: { opacity: 0, transition: { duration: 0.4 } } };
const cardContentVariants = { initial: { opacity: 0, scale: 0.95 }, hover: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.1 } } };
const featureItemVariants = { initial: { opacity: 0, x: -5 }, hover: { opacity: 1, x: 0, transition: { duration: 0.3 } } };
const buttonVariants = { initial: { scale: 1, rotate: 0 }, hover: { scale: 1.1, rotate: -45, backgroundColor: '#47d4aa', transition: { duration: 0.3, ease: 'easeInOut' } } };

export default function ServicesSection() {
  const router = useRouter();
  const handleServiceClick = (service: ServiceCard) => {
    const serviceSlug = service.slug || service.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/services/${serviceSlug}`);
  };

  return (
    <motion.section className="w-full py-12 sm:py-16 lg:py-[34px] px-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
      <div className="max-w-[1202px] mx-auto flex flex-col gap-[34px] items-center w-full">
        <div className="flex flex-col gap-2 items-center w-[25%] px-8">
          <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center">Our Services</h2>
          <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {serviceData.map((service) => (
            <motion.div key={service.id} className="relative" variants={cardVariants}>
              <div className="relative w-full h-[438px] rounded overflow-hidden cursor-pointer" onClick={() => handleServiceClick(service)}>
                {/* Image */}
                <motion.div className="absolute inset-0 w-full h-full" variants={imageVariants} initial="initial" whileHover="hover">
                  <Image src={service.image} alt={service.title} fill className="object-cover" priority={service.id <= 2} />
                  <div className="absolute top-6 left-4 right-4">
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-outfit font-semibold leading-tight text-white text-left">{service.title}</h3>
                  </div>
                </motion.div>

                {/* Hover Content */}
                <motion.div className="absolute inset-0 w-full h-full bg-[#2c0087] rounded p-6 flex flex-col justify-start" variants={cardContentVariants} initial="initial" whileHover="hover">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-outfit font-semibold leading-tight text-white text-left w-full mb-6">{service.title}</h3>

                  <div className="space-y-3 flex-1">
                    {service.features?.map((feature, index) => (
                      <motion.div key={index} className="flex flex-row gap-3 justify-start items-start w-full" variants={featureItemVariants}>
                        <Image src="/images/img_vector_stroke.svg" alt="Checkmark icon" width={12} height={10} className="mt-1 flex-shrink-0" />
                        <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-open-sans font-normal leading-relaxed text-white text-left flex-1">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button className="w-12 h-12 bg-[#f05623] rounded-[24px] flex items-center justify-center mt-6 ml-auto" variants={buttonVariants} initial="initial" whileHover="hover" onClick={(e) => { e.stopPropagation(); handleServiceClick(service); }}>
                    <Image src="/images/img_frame_427320965.svg" alt="Arrow icon" width={20} height={20} />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
