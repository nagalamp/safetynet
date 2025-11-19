'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2 >= teamMembers.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 < 0 ? Math.max(0, teamMembers.length - 2) : prev - 2));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlides = [teamMembers[currentSlide], teamMembers[currentSlide + 1]].filter(Boolean);

  const totalSlideGroups = Math.ceil(teamMembers.length / 2);

  return (
    <motion.section
      className="w-full bg-[#150e24] py-[58px] px-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="relative">
          {/* Section Header */}
          <div className="flex flex-col gap-3 items-center w-full h-auto">
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center">
              Meet the Team
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
            <p className="text-[18px] font-poppins font-normal leading-relaxed text-white text-center max-w-2xl">
              Introduce key members of the senior management with roles, credentials, and a commitment to excellence in safety and engineering.
            </p>
          </div>

          {/* Team Slider */}
          <div className="relative w-full overflow-hidden mb-[92px] mt-8">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                className="flex justify-start items-stretch"
                style={{ gap: '20px' }} // 20px gap between cards
                initial={{ x: currentSlide > 0 ? 50 : -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: currentSlide > 0 ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* First Team Member */}
                {currentSlides[0] && (
                  <div className="flex flex-row justify-center items-center w-[792px] bg-[#2c0087] border border-[#ffffff33] rounded flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={currentSlides[0].image}
                      alt={`${currentSlides[0].name} - ${currentSlides[0].position}`}
                      width={382}
                      height={574}
                      className="rounded-tl rounded-bl object-cover"
                    />
                    <div className="flex flex-col gap-2 items-start p-6 w-full">
                      <div className="flex flex-col gap-2 items-center">
                        <h3 className="text-[28px] lg:text-[32px] font-outfit font-semibold text-white">
                          {currentSlides[0].name}
                        </h3>
                        <p className="text-[22px] font-outfit font-medium text-white">
                          {currentSlides[0].position}
                        </p>
                      </div>
                      <p className="text-[18px] font-open-sans font-normal text-white">
                        {currentSlides[0].description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <a href={currentSlides[0].socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                        <a href={currentSlides[0].socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                        <a href={currentSlides[0].socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                        <a href={currentSlides[0].socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Second Team Member */}
                {currentSlides[1] && (
                   <div className="flex flex-row justify-center items-center w-[792px] bg-[#2c0087] border border-[#ffffff33] rounded flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]">
                    <Image
                      src={currentSlides[1].image}
                      alt={`${currentSlides[1].name} - ${currentSlides[1].position}`}
                      width={382}
                      height={574}
                      className="rounded-tl rounded-bl object-cover"
                    />
                    <div className="flex flex-col gap-2 items-start p-6 w-full">
                      <div className="flex flex-col gap-2 items-center">
                        <h3 className="text-[28px] lg:text-[32px] font-outfit font-semibold text-white">
                          {currentSlides[1].name}
                        </h3>
                        <p className="text-[22px] font-outfit font-medium text-white">
                          {currentSlides[0].position}
                        </p>
                      </div>
                      <p className="text-[18px] font-open-sans font-normal text-white">
                        {currentSlides[0].description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <a href={currentSlides[0].socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                        <a href={currentSlides[0].socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                        <a href={currentSlides[0].socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                        <a href={currentSlides[0].socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                          <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} className="hover:opacity-80 transition-opacity" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls (Centered) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-6 mt-4">
              <button
                className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors"
                onClick={prevSlide}
              >
                <Image src="/images/img_group_7.svg" alt="Previous" width={20} height={20} />
              </button>
              <span className="text-[32px] font-outfit font-medium leading-tight text-white">
                {Math.floor(currentSlide / 2) + 1}/{totalSlideGroups}
              </span>
              <button
                className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors"
                onClick={nextSlide}
              >
                <Image src="/images/img_vector_stroke.svg" alt="Next" width={24} height={24} />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-20 gap-2">
              {Array.from({ length: totalSlideGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * 2)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentSlide / 2) === index ? 'bg-[#47d4aa]' : 'bg-[#5e5d77]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
