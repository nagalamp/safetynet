'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
    id: string;
    name: string;
    position: string;
    qualifications: string;
    description: string;
    image: string;
}

interface TeamSliderProps {
    teamMembers?: TeamMember[];
}

export default function TeamSlider({ teamMembers = defaultTeamMembers }: TeamSliderProps) {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [isDragging, setIsDragging] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    // Responsive slides
    useEffect(() => {
        const getSlidesToShow = () => {
            const width = window.innerWidth;
            if (width < 640) return 1;
            if (width < 1024) return 2;
            return 3;
        };
        const handleResize = () => setSlidesToShow(getSlidesToShow());
        setSlidesToShow(getSlidesToShow());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate drag constraints
    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
        const handleResize = () => {
            if (carouselRef.current) {
                setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [slidesToShow, teamMembers]);

    const totalSlides = Math.ceil(teamMembers.length / slidesToShow);

    const scrollBy = (offset: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="flex flex-col gap-2 items-center w-full mb-10 px-4 sm:px-11">
                    <h2
                        className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight"
                        style={{ lineHeight: '51px' }}
                    >
                        Our Senior Team
                    </h2>
                    <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
                </div>

                {/* Slider with drag */}
                <div className="relative overflow-hidden">
                    <motion.div
                        ref={carouselRef}
                        className="flex gap-6 cursor-grab"
                        drag="x"
                        dragConstraints={{ left: -width, right: 0 }}
                        dragElastic={0.1}
                        whileTap={{ cursor: 'grabbing' }}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={() => setTimeout(() => setIsDragging(false), 50)}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="flex-shrink-0"
                                style={{ width: `${100 / slidesToShow}%` }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className="flex flex-col justify-start items-center h-full">
                                    {/* Image */}
                                    <div className="relative w-full h-64">
                                        <div className="absolute inset-0 rounded-[4px] overflow-hidden items-center justify-center">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={347}
                                                height={256}
                                                className="object-cover mx-auto rounded"
                                            />
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="w-full bg-[#272730] border border-[#ffffff33] rounded-[4px] p-6 sm:p-8 -mt-5 pt-32 flex-1">
                                        <div className="flex flex-col gap-5 justify-start items-center h-full">
                                            <div className="flex flex-col gap-1 sm:gap-3 justify-start items-start w-full">
                                                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[32px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                                                    {member.name}
                                                </h3>
                                                {member.position && (
                                                    <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[30px] sm:leading-[36px] text-left text-white">
                                                        {member.position}
                                                    </h4>
                                                )}
                                                {member.qualifications && (
                                                    <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[26px] sm:leading-[30px] text-left text-[#ffffffcc]">
                                                        {member.qualifications}
                                                    </p>
                                                )}
                                            </div>
                                            <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ---------------- PAGINATION / NAVIGATION ---------------- */}
                <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
                    <button
                        className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
                        disabled={currentSlide === 0}
                    >
                        <Image src="/images/img_group_7.svg" alt="Previous" width={20} height={20} />
                    </button>

                    <span className="text-[20px] sm:text-[24px] font-outfit font-medium text-white px-4">
                        {currentSlide + 1}/{totalSlides}
                    </span>

                    <button
                        className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center hover:bg-[#2c0087] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
                        disabled={currentSlide === totalSlides - 1}
                    >
                        <Image src="/images/img_vector_stroke.svg" alt="Next" width={24} height={24} />
                    </button>
                </div>
            </div>
        </section>
    );
}

// Default team members
const defaultTeamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Mrs. Helen Mann',
        position: 'Administration and Training Manager IQA',
        qualifications: 'Cert Ed, IOSH Level 3 Certificate, A1/V1 Tech IOSH',
        description:
            'Helen is responsible for the corporate governance of the organisation and training delivery management. Maintaining company accreditations with our training providers and acting as the Internal Quality Assurance Manager. Helen has 20 years in a Nursing and Training management role and is currently undertaking the British Safety Council Level 5 Diploma. Helen is also an IOSH, Food Hygiene, Manual and People Handling trainer.',
        image: '/images/team/helen-mann.jpg',
    },
    {
        id: '2',
        name: 'Ms. Caz Goodman',
        position: 'Human Resources and Accounts Manager',
        qualifications: '',
        description:
            'Caz is responsible for the company accounting and financial systems, receipts, and payments. Caz also manages the company Human Resources (HR), this includes staffing, training requirements, resource management, HR policies and procedures. Caz is also the lead for inclusion and accessibility and providing advice and guidance on the Equalities Act and best practice.',
        image: '/images/team/caz-goodman.jpg',
    },
    {
        id: '3',
        name: 'Mrs. Julie Singh.M.S',
        position: '',
        qualifications: '',
        description:
            'Julie brings over 10 years of diverse industry experience to our organization, allowing her to effectively leverage her skills. She has a proven track record of working with renowned multinational companies such as Regus and Juniper, where she successfully managed customer relations and more. In her current role, Julie is responsible for overseeing various aspects of our Indian operations, including delivery, accounts, and coordination with our offices in the UK and B4-Global in the UAE.',
        image: '/images/team/julie-singh.jpg',
    },
    {
        id: '4',
        name: 'Mr. Varun G',
        position: 'Senior Structural Engineer',
        qualifications: 'B.Eng, M.Tech (Structures)',
        description:
            'With a six-year track record working on events in India and providing support for complex stands in the UAE and UK, Varun is an adept Senior Structural Engineer. His involvement extends to notable projects like Terminal 2 in Delhi and the International Hockey Stadium in Rourkela, showcasing his expertise in safety management.',
        image: '/images/team/varun-g.jpg',
    },
    {
        id: '5',
        name: 'Mr. Bhuvan V C',
        position: 'Engineer',
        qualifications: 'B. Eng (Civil)',
        description:
            'As an Engineer and certified safety professional, Bhuvan brings extensive experience in quantity surveying and execution. He serves as a lead Engineer overseeing stand assessment and site inspection in the event industry.',
        image: '/images/team/bhuvan-vc.jpg',
    },
];
