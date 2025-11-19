'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function CertificationsSection() {
  const certifications = [
    { logo: '/images/img_image_11.png', width: 154, height: 76, alt: 'Certification logo showing accreditation for safety standards' },
    { logo: '/images/img_unnamed_4_1.png', width: 176, height: 128, alt: 'Professional certification badge for health and safety compliance' },
    { logo: '/images/img_rospa.png', width: 128, height: 80, alt: 'RoSPA Royal Society for Prevention of Accidents certification' },
    { logo: '/images/img_ieia_logo_1.png', width: 196, height: 88, alt: 'IEIA International Exhibition Industry Association membership logo' },
    { logo: '/images/img_oshcr_logo.png', width: 164, height: 86, alt: 'OSHCR Occupational Safety and Health certification logo' }
  ];

  return (
    <motion.section 
      className="w-full bg-[#150e24] py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-full mx-auto px-4">
        <div className="flex flex-col items-center justify-start w-full">
          <h2 className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] font-bruno-ace font-normal leading-tight text-[#ffffff0c] text-center" style={{ lineHeight: '362px' }}>
            BEST
          </h2>
          <div className="flex flex-row gap-10 w-full max-w-[1202px] justify-center flex-wrap -mt-2 mb-10 px-1.5">
            {certifications.map((cert, index) => (
              <div key={index} className="flex justify-center items-center bg-white rounded p-5">
                <Image
                  src={cert.logo}
                  alt={cert.alt}
                  width={cert.width}
                  height={cert.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}