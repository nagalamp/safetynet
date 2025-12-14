'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [slideWidth, setSlideWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = teamMembers.length;

  /* Calculate slide width */
  useEffect(() => {
    if (carouselRef.current) {
      setSlideWidth(carouselRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (carouselRef.current) {
        setSlideWidth(carouselRef.current.offsetWidth);
        animate(x, -currentIndex * carouselRef.current.offsetWidth, {
          duration: 0,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, x]);

  const maxX = -(totalSlides - 1) * slideWidth;

  /* Snap on drag end */
  const handleDragEnd = () => {
    const rawIndex = Math.round(Math.abs(x.get()) / slideWidth);
    const index = Math.min(Math.max(rawIndex, 0), totalSlides - 1);

    animate(x, -index * slideWidth, {
      duration: 0.45,
      ease: 'easeOut',
    });

    setCurrentIndex(index);
  };

  /* Arrow navigation */
  const goToSlide = (index: number) => {
    const clamped = Math.min(Math.max(index, 0), totalSlides - 1);

    animate(x, -clamped * slideWidth, {
      duration: 0.45,
      ease: 'easeOut',
    });

    setCurrentIndex(clamped);
  };

  return (
    <motion.section
      className="w-full bg-[#150e24] py-14 px-4 sm:px-8 lg:px-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h2
            className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white"
            style={{ lineHeight: '51px' }}
          >
            Meet The Team
          </h2>
          <div className="w-[66px] h-1 bg-[#47d4aa] rounded" />

          <p className="text-[16px] sm:text-[18px] font-poppins text-white max-w-2xl mt-2">
            Introduce key members of the senior management with roles, credentials,
            and a commitment to excellence in safety and engineering.
          </p>
        </div>

        {/* DRAG SLIDER */}
        <div
          ref={carouselRef}
          className="relative w-full overflow-hidden py-8 mt-6"
        >
          <motion.div
            className="flex gap-5 cursor-grab"
            drag="x"
            style={{ x }}
            dragConstraints={{ left: maxX, right: 0 }}
            dragElastic={0.08}
            whileTap={{ cursor: 'grabbing' }}
            onDragEnd={handleDragEnd}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="
                  flex flex-col sm:flex-row
                  justify-center items-center
                  w-full sm:w-[792px]
                  bg-[#2c0087]
                  border border-[#ffffff33]
                  rounded
                  flex-shrink-0
                  transition-transform
                "
              >
                {/* IMAGE */}
                <div className="w-full sm:w-1/2 relative aspect-[382/574]">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    fill
                    className="rounded-tl rounded-bl object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col gap-2 p-4 sm:p-6 w-full sm:w-1/2">
                  <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-outfit font-semibold text-white">
                    {member.name}
                  </h3>

                  <p className="text-[18px] sm:text-[22px] font-outfit font-medium text-white">
                    {member.position}
                  </p>

                  <p className="text-[14px] sm:text-[18px] font-open-sans text-white mt-2">
                    {member.description}
                  </p>

                  {/* SOCIAL ICONS */}
                  <div className="flex gap-2 mt-4">
                    <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                    </a>
                    <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                    </a>
                    <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </a>
                    <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                      <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-center gap-4 mt-8">

          {/* PREV */}
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            disabled={currentIndex === 0}
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
            <Image src="/images/img_group_7.svg" alt="Previous" width={20} height={20} />
          </button>

          {/* PAGINATION */}
          <span className="text-[24px] sm:text-[32px] font-outfit font-medium text-white">
            {currentIndex + 1}/{totalSlides}
          </span>

          {/* NEXT */}
          <button
            onClick={() => goToSlide(currentIndex + 1)}
            disabled={currentIndex === totalSlides - 1}
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
            <Image src="/images/img_vector_stroke.svg" alt="Next" width={24} height={24} />
          </button>

        </div>
      </div>
    </motion.section>
  );
}
