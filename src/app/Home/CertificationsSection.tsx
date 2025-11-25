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
    { logo: '/images/img_image_11.png', alt: 'Certification logo showing accreditation for safety standards' },
    { logo: '/images/img_unnamed_4_1.png', alt: 'Professional certification badge for health and safety compliance' },
    { logo: '/images/img_rospa.png', alt: 'RoSPA certification' },
    { logo: '/images/img_ieia_logo_1.png', alt: 'IEIA membership logo' },
    { logo: '/images/img_oshcr_logo.png', alt: 'OSHCR certification logo' }
  ];

  return (
    <motion.section
      className="w-full bg-[#150e24] py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col items-center justify-start w-full">

          <h2
            className="text-[150px] sm:text-[200px] md:text-[250px] lg:text-[300px] font-bruno-ace font-normal leading-tight text-[#ffffff0c] text-center"
            style={{ lineHeight: '362px' }}
          >
            BEST
          </h2>

          {/* Horizontal Scroll Row */}
          <div className="w-full overflow-x-auto md:overflow-x-visible scrollbar-none touch-pan-x">
            <div className="flex flex-nowrap gap-6 py-5 justify-start md:justify-center">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white rounded p-5
                             w-full md:w-[220px] h-[130px] shrink-0"
                >
                  <div className="relative w-full h-full p-5">
                    <Image
                      src={cert.logo}
                      alt={cert.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.section>
  );
}
