'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const totalSlides = teamMembers.length;

  // Dynamically calculate card width
  const updateCardWidth = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector<HTMLDivElement>('div > div');
      if (card) {
        setCardWidth(card.offsetWidth + 20); // include gap
      }
    }
  };

  useEffect(() => {
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const nextSlide = () => {
    if (scrollRef.current) {
      const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
      scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
      scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  return (
    <motion.section
      className="w-full bg-[#150e24] py-14 px-4 sm:px-8 lg:px-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-3 items-center w-full text-center">



        <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11  w-full">
            
   
            
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
            Meet The Team
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3"/>
          </div>

          <p className="text-[16px] sm:text-[18px] font-poppins font-normal leading-relaxed text-white max-w-2xl">
            Introduce key members of the senior management with roles, credentials, and a commitment to excellence in safety and engineering.
          </p>
        </div>

        {/* Scrollable Team Slider (manual scroll disabled) */}
        <div
          ref={scrollRef}
          className="relative flex gap-5 py-8 overflow-hidden"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-[792px] bg-[#2c0087] border border-[#ffffff33] rounded flex-shrink-0 transform transition-transform duration-300 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full sm:w-1/2 relative aspect-[382/574]">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="rounded-tl rounded-bl object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 items-start p-4 sm:p-6 w-full sm:w-1/2">
                <div className="flex flex-col gap-1 sm:gap-2 items-center sm:items-start">
                  <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-outfit font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-[18px] sm:text-[22px] font-outfit font-medium text-white">
                    {member.position}
                  </p>
                </div>
                <p className="text-[14px] sm:text-[18px] font-open-sans font-normal text-white mt-2 sm:mt-4">
                  {member.description}
                </p>
                <div className="flex gap-2 mt-2 sm:mt-4">
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                    <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                  </a>
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} className="hover:opacity-80 transition-opacity" />
                  </a>
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                  </a>
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} className="hover:opacity-80 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-12">
          <button
            className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors"
            onClick={prevSlide}
          >
            <Image src="/images/img_group_7.svg" alt="Previous" width={20} height={20} />
          </button>

          <span className="text-[24px] sm:text-[32px] font-outfit font-medium leading-tight text-white">
            {currentIndex + 1}/{totalSlides}
          </span>

          <button
            className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors"
            onClick={nextSlide}
          >
            <Image src="/images/img_vector_stroke.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
