'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const getSlidesToShow = () => {
            const width = window.innerWidth;
            if (width < 640) return 1;
            if (width < 1024) return 2;
            return 3;
        };

        const handleResize = () => {
            setSlidesToShow(getSlidesToShow());
        };

        setSlidesToShow(getSlidesToShow());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSlideChange = (direction: 'prev' | 'next') => {
        const totalSlides = Math.ceil(teamMembers.length / slidesToShow);

        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        } else {
            setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
    };

    const totalSlides = Math.ceil(teamMembers.length / slidesToShow);

    return (
        <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6">
            {/* Centered container with fixed width */}
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-2 justify-start items-center mb-10">
                    <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-outfit font-semibold leading-[36px] sm:leading-[40px] lg:leading-[46px] text-left text-white">
                        Our Senior Team
                    </h2>
                    <div className="w-[50px] sm:w-[66px] h-[4px] bg-[#47d4aa]"></div>
                </div>

                {/* Team Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="flex-shrink-0 px-3"
                                style={{ width: `${100 / slidesToShow}%` }}
                            >
                                <div className="flex flex-col justify-start items-center h-full">
                                    {/* Image Container */}
                                    <div className="relative w-full h-64">
                                        <div className="absolute inset-0 rounded-[4px] overflow-hidden">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full bg-[#272730] border border-[#ffffff33] rounded-[4px] p-6 sm:p-8 -mt-16 pt-32 flex-1">
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
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider Controls - Centered */}
                <div className="flex justify-center items-center gap-8 mt-8">
                    <button
                        onClick={() => handleSlideChange('prev')}
                        className="w-12 h-12 border border-[#ffffff7f] rounded-[4px] p-3 flex items-center justify-center hover:bg-[#ffffff1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Previous slide"
                        disabled={currentSlide === 0}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <span className="text-[24px] sm:text-[32px] font-outfit font-medium leading-[30px] sm:leading-[41px] text-left text-white">
                        {currentSlide + 1}/{totalSlides}
                    </span>
                    <button
                        onClick={() => handleSlideChange('next')}
                        className="w-12 h-12 border border-[#ffffff7f] rounded-[4px] p-3 flex items-center justify-center hover:bg-[#ffffff1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Next slide"
                        disabled={currentSlide === totalSlides - 1}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

// Default team members with placeholder images
const defaultTeamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Mrs. Helen Mann',
        position: 'Administration and Training Manager IQA',
        qualifications: 'Cert Ed, IOSH Level 3 Certificate, A1/V1 Tech IOSH',
        description: 'Helen is responsible for the corporate governance of the organisation and training delivery management. Maintaining company accreditations with our training providers and acting as the Internal Quality Assurance Manager. Helen has 20 years in a Nursing and Training management role and is currently undertaking the British Safety Council Level 5 Diploma. Helen is also an IOSH, Food Hygiene, Manual and People Handling trainer.',
        image: '/images/team/helen-mann.jpg'
    },
    {
        id: '2',
        name: 'Ms. Caz Goodman',
        position: 'Human Resources and Accounts Manager',
        qualifications: '',
        description: 'Caz is responsible for the company accounting and financial systems, receipts, and payments. Caz also manages the company Human Resources (HR), this includes staffing, training requirements, resource management, HR policies and procedures. Caz is also the lead for inclusion and accessibility and providing advice and guidance on the Equalities Act and best practice.',
        image: '/images/team/caz-goodman.jpg'
    },
    {
        id: '3',
        name: 'Mrs. Julie Singh.M.S',
        position: '',
        qualifications: '',
        description: 'Julie brings over 10 years of diverse industry experience to our organization, allowing her to effectively leverage her skills. She has a proven track record of working with renowned multinational companies such as Regus and Juniper, where she successfully managed customer relations and more. In her current role, Julie is responsible for overseeing various aspects of our Indian operations, including delivery, accounts, and coordination with our offices in the UK and B4-Global in the UAE.',
        image: '/images/team/julie-singh.jpg'
    },
    {
        id: '4',
        name: 'Mr. Varun G',
        position: 'Senior Structural Engineer',
        qualifications: 'B.Eng, M.Tech (Structures)',
        description: 'With a six-year track record working on events in India and providing support for complex stands in the UAE and UK, Varun is an adept Senior Structural Engineer. His involvement extends to notable projects like Terminal 2 in Delhi and the International Hockey Stadium in Rourkela, showcasing his expertise in safety management.',
        image: '/images/team/varun-g.jpg'
    },
    {
        id: '5',
        name: 'Mr. Bhuvan V C',
        position: 'Engineer',
        qualifications: 'B. Eng (Civil)',
        description: 'As an Engineer and certified safety professional, Bhuvan brings extensive experience in quantity surveying and execution. He serves as a lead Engineer overseeing stand assessment and site inspection in the event industry.',
        image: '/images/team/bhuvan-vc.jpg'
    }
];