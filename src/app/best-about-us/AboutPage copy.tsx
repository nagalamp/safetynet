'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Link from'next/link';
 import Header from'../../components/common/Header';
 import Footer from'../../components/common/Footer';
 import Button from'../../components/ui/Button';
 import EditText from'../../components/ui/EditText';
 import TextArea from'../../components/ui/TextArea';

interface TeamMember {
  id: string
  name: string
  position: string
  qualifications: string
  description: string
  image: string
  socialLinks?: string[]
}

interface Service {
  id: string
  title: string
  image: string
  items?: string[]
}

interface ExpandableSection {
  id: string
  title: string
  content?: string[]
  isExpanded: boolean
}

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'tech-gdpr': true,
    'environmental': false,
    'help': false,
    'risk': false,
    'methods': false,
    'env-policies': false
  })
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Mrs. Helen Mann',
      position: 'Administration and Training Manager IQA',
      qualifications: 'Cert Ed, IOSH Level 3 Certificate, A1/V1 Tech IOSH',
      description: 'Helen is responsible for the corporate governance of the organisation and training delivery management. Maintaining company accreditations with our training providers and acting as the Internal Quality Assurance Manager. Helen has 20 years in a Nursing and Training management role and is currently undertaking the British Safety Council Level 5 Diploma. Helen is also an IOSH, Food Hygiene, Manual and People Handling trainer.',
      image: '/images/img_rectangle_776.png'
    },
    {
      id: '2',
      name: 'Ms. Caz Goodman',
      position: 'Human Resources and Accounts Manager',
      qualifications: '',
      description: 'Caz is responsible for the company accounting and financial systems, receipts, and payments. Caz also manages the company Human Resources (HR), this includes staffing, training requirements, resource management, HR policies and procedures. Caz is also the lead for inclusion and accessibility and providing advice and guidance on the Equalities Act and best practice.',
      image: '/images/img_image.png'
    },
    {
      id: '3',
      name: 'Mrs. Julie Singh.M.S',
      position: '',
      qualifications: '',
      description: 'Julie brings over 10 years of diverse industry experience to our organization, allowing her to effectively leverage her skills. She has a proven track record of working with renowned multinational companies such as Regus and Juniper, where she successfully managed customer relations and more. In her current role, Julie is responsible for overseeing various aspects of our Indian operations, including delivery, accounts, and coordination with our offices in the UK and B4-Global in the UAE.',
      image: '/images/img_rectangle_780.png'
    },
    {
      id: '4',
      name: 'Mr. Varun G',
      position: 'Senior Structural Engineer',
      qualifications: 'B.Eng, M.Tech (Structures)',
      description: 'With a six-year track record working on events in India and providing support for complex stands in the UAE and UK, Varun is an adept Senior Structural Engineer. His involvement extends to notable projects like Terminal 2 in Delhi and the International Hockey Stadium in Rourkela, showcasing his expertise in safety management.',
      image: '/images/img_rectangle_786.png'
    },
    {
      id: '5',
      name: 'Mr. Bhuvan V C',
      position: 'Engineer',
      qualifications: 'B. Eng (Civil)',
      description: 'As an Engineer and certified safety professional, Bhuvan brings extensive experience in quantity surveying and execution. He serves as a lead Engineer overseeing stand assessment and site inspection in the event industry.',
      image: '/images/img_image_256x364.png'
    }
  ]

  // Services data
  const services: Service[] = [
    {
      id: '1',
      title: 'Stand Auditing',
      image: '/images/img_frame_42.png'
    },
    {
      id: '2',
      title: 'Health & Safety Services',
      image: '/images/img_frame_44.png',
      items: [
        'Stand audits and contractor assessments',
        'Regulatory compliance reviews',
        'Design verification and PTB issuance',
        'Best Konnect: Pre-show training & induction modules'
      ]
    },
    {
      id: '3',
      title: 'Electrical Safety Services',
      image: '/images/img_frame_44.png'
    },
    {
      id: '4',
      title: 'Fire Safety Services',
      image: '/images/img_frame_44_438x282.png'
    }
  ]

  const handleExpandToggle = (sectionId: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const handleSlideChange = (direction: 'prev' | 'next'): void => {
    const totalSlides = Math.ceil(teamMembers.length / 3)
    if (direction === 'next') {
      setCurrentSlide(prev => (prev + 1) % totalSlides)
    } else {
      setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
    }
  }

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#040711]">
      {/* Header Section with Background */}
      <section 
        className="w-full bg-[#040711] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/img_image_9.png)' }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-[120px] pt-4 pb-4">
          <Header />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center mb-10">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-outfit font-semibold leading-[36px] sm:leading-[42px] lg:leading-[51px] text-center text-white">
              Who We Are
            </h2>
            <div className="w-[50px] sm:w-[66px] h-[4px] bg-[#47d4aa]"></div>
            <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-center text-white max-w-4xl">
              BEST B4-Global is a multinational safety, engineering, and sustainability solutions provider, delivering best-in-class support for exhibitions, events, and temporary structures.
            </p>
          </div>

          {/* Company Image */}
          <div className="w-full mb-10">
            <Image
              src="/images/img_rectangle_758.png"
              alt="BEST B4-Global Office"
              width={1200}
              height={348}
              className="w-full h-auto rounded-t-[4px] object-cover"
            />
          </div>

          {/* Event Experience Section */}
          <div className="w-full bg-[#272730] rounded-b-[4px] p-6 sm:p-8 lg:p-[62px]">
            <div className="flex flex-col gap-4 justify-start items-start w-full">
              <h3 className="text-[24px] sm:text-[28px] font-outfit font-semibold leading-[30px] sm:leading-[36px] text-left text-white">
                Event Experience
              </h3>
              
              <div className="w-full">
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[32px] sm:leading-[40px] text-left text-white mb-6">
                  Team of highly skilled professionals trained in Health & Safety (IOSH & NEBOSH certified).
                  Engineers specializing in Structural, Electrical, and Mechanical ensures that all aspects of safety are covered comprehensively.
                </p>

                <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-6">
                  {/* Bullet Points */}
                  <div className="flex flex-col gap-6 justify-start items-center w-auto">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <Image
                        key={index}
                        src="/images/img_vector_stroke.svg"
                        alt=""
                        width={14}
                        height={14}
                        className="w-[14px] h-[14px]"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[32px] sm:leading-[40px] text-left text-white">
                      Over 30 years of industry experience, supporting 50+ brands and events.
                      Global experience across UK, Europe, Middle East, Asia, and Africa.
                      Provide Health & Safety training workshops for clients, contractors, and exhibitors.
                      Reduced waste by 50% through modular structure solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ownership Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-8 justify-start items-center">
            <div className="flex flex-col gap-1 justify-start items-center">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-outfit font-semibold leading-[36px] sm:leading-[42px] lg:leading-[51px] text-center text-white">
                Ownership
              </h2>
              <div className="w-[50px] sm:w-[66px] h-[4px] bg-[#47d4aa]"></div>
            </div>

            {/* Stuart Mann Card */}
            <div className="w-full bg-[#272730] border border-[#ffffff33] rounded-[4px] flex flex-col lg:flex-row">
              <div className="flex-1 p-6 sm:p-8 lg:p-[38px] lg:mt-[58px]">
                <div className="flex flex-col gap-6 justify-start items-start">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                    Mr. Stuart Mann
                  </h3>
                  <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-left text-white">
                    Managing Director
                  </h4>
                  <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[26px] sm:leading-[30px] text-left text-[#ffffffcc]">
                    BA (Hons), CertEd, Dip.NEBOSH, CertIOSH, FIIRSM, Registered Safety Professional, OSHCR Registered Consultant
                  </p>
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                    Stuart is a seasoned health and safety practitioner with a rich history in the event, public, and commercial sectors since 1995. As a Fellow of the International Institute of Risk and Safety Management, Stuart brings extensive expertise in strategic risk management, emergency planning, business continuity, and commercial insurance risk management. Additionally, Stuart is actively involved in teaching and assessing for the British Safety Council's Diploma and Certificate programs. He serves as an IOSH accredited trainer, imparting knowledge in areas such as First Aid Training and various safety and management subjects.
                  </p>
                  <div className="flex gap-[10px] justify-start items-center">
                    <Image src="/images/img_vector_teal_300.svg" alt="Social Link" width={20} height={20} />
                    <Image src="/images/img_vector_teal_300_20x20.svg" alt="Social Link" width={20} height={20} />
                    <Image src="/images/img_vector_teal_300_20x18.svg" alt="Social Link" width={18} height={20} />
                    <Image src="/images/img_vector_20x20.svg" alt="Social Link" width={20} height={20} />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:self-center">
                <Image
                  src="/images/img_rectangle_61.png"
                  alt="Mr. Stuart Mann"
                  width={598}
                  height={798}
                  className="w-full h-auto rounded-r-[3px] object-cover"
                />
              </div>
            </div>

            {/* Naveen KS Card */}
            <div className="w-full bg-[#2c0087] border border-[#ffffff33] rounded-[4px] flex flex-col lg:flex-row gap-10">
              <div className="flex-1 p-6 sm:p-8 lg:mt-[58px]">
                <div className="flex flex-col gap-8 justify-start items-center">
                  <div className="flex flex-col gap-1 justify-start items-start w-full">
                    <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                      Mr. Naveen KS
                    </h3>
                    <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                      <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-left text-white">
                        Director: Engineering & Business Development
                      </h4>
                      <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[22px] sm:leading-[26px] text-left text-[#ffffffcc]">
                        B. Eng, M.B.A, Cert. IOSH
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 justify-start items-center w-full">
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                      Naveen KS is a highly accomplished and qualified engineer with over 20 years of experience in the industry. His impressive track record includes the successful delivery of large-scale civil engineering, infrastructure, and building projects. Naveen's expertise extends beyond engineering, as he holds an MBA, positioning him as an asset for steering the business forward with his strategic and managerial skills. Having contributed to events in India, the U.K., and Europe, Naveen showcases his international experience and profound understanding of diverse markets. His pivotal role in the business involves leveraging his extensive knowledge of the event industry to drive it towards success.
                    </p>
                    <div className="flex gap-2 justify-start items-center w-full">
                      <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                      <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                      <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                      <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:self-center">
                <Image
                  src="/images/img_rectangle_774.png"
                  alt="Mr. Naveen KS"
                  width={598}
                  height={798}
                  className="w-full h-auto rounded-r-[3px] object-cover"
                />
              </div>
            </div>

            {/* Duncan Robertson Card */}
            <div className="w-full bg-[#272730] border border-[#ffffff33] rounded-[4px] flex flex-col lg:flex-row gap-10">
              <div className="flex-1 p-6 sm:p-8 lg:mt-[58px]">
                <div className="flex flex-col gap-8 justify-start items-center">
                  <div className="flex flex-col justify-start items-start w-full">
                    <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                      Mr. Duncan Robertson
                    </h3>
                    <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-left text-white mt-2">
                      Technical Director
                    </h4>
                    <p className="text-[18px] sm:text-[20px] font-outfit font-medium leading-[26px] sm:leading-[30px] text-left text-[#ffffffcc] mt-2">
                      Cert.NEBOSH, Tech IOSH, IFPO, NIC+EIC Electrical Inspection
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 justify-start items-center w-full">
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                      Duncan boasts over 25 years of experience providing high-level safety services within the event and exhibition industry. As a qualified electrical auditor, Duncan specializes in Fire Safety, Crowd Management, and business risk mitigation. Notably, he recently completed the Fire Safety Management documentation, including occupancies and risk assessments, for several structures within Yas Island. Duncan serves as the company's lead auditor, spearheading the development and delivery of onsite audit functions. His expertise ensures the highest standards of safety in every aspect of event execution.
                    </p>
                    <div className="flex gap-2 justify-start items-center w-full">
                      <Image src="/images/img_uil_facebook.svg" alt="Facebook" width={24} height={24} />
                      <Image src="/images/img_fa6_brands_square_x_twitter.svg" alt="Twitter" width={20} height={24} />
                      <Image src="/images/img_uil_linkedin.svg" alt="LinkedIn" width={24} height={24} />
                      <Image src="/images/img_fa_brands_instagram_square.svg" alt="Instagram" width={20} height={24} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:self-center">
                <Image
                  src="/images/img_rectangle_61_798x600.png"
                  alt="Mr. Duncan Robertson"
                  width={600}
                  height={798}
                  className="w-full h-auto rounded-r-[3px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Senior Team Section */}
      <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6">
        <div className="w-full max-w-[1440px] mx-auto">
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
              {teamMembers.map((member, index) => (
                <div key={member.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3">
                  <div className="flex flex-col justify-start items-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={346}
                      height={256}
                      className="w-full aspect-[346/256] object-cover rounded-[4px]"
                    />
                    <div className="w-full bg-[#272730] border border-[#ffffff33] rounded-[4px] p-6 sm:p-8 -mt-[172px] pt-[200px]">
                      <div className="flex flex-col gap-5 justify-start items-center">
                        <div className="flex flex-col gap-1 sm:gap-3 justify-start items-start w-full">
                          <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[32px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                            {member.name}
                          </h3>
                          {member.position && (
                            <h4 className="text-[20] sm:text-[24px] font-outfit font-semibold leading-[30px] sm:leading-[36px] text-left text-white">
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

          {/* Slider Controls */}
          <div className="flex justify-end items-center gap-8 mt-8 px-4 sm:px-6 lg:px-[120px]">
            <button
              onClick={() => handleSlideChange('prev')}
              className="w-12 h-12 border border-[#ffffff7f] rounded-[4px] p-3 flex items-center justify-center hover:bg-[#ffffff1a] transition-colors"
              aria-label="Previous slide"
            >
              <Image src="/images/img_group_8.svg" alt="Previous" width={20} height={20} />
            </button>
            <span className="text-[24px] sm:text-[32px] font-outfit font-medium leading-[30px] sm:leading-[41px] text-left text-white">
              {currentSlide + 1}/{Math.ceil(teamMembers.length / 3)}
            </span>
            <button
              onClick={() => handleSlideChange('next')}
              className="w-12 h-12 border border-[#ffffff7f] rounded-[4px] p-3 flex items-center justify-center hover:bg-[#ffffff1a] transition-colors"
              aria-label="Next slide"
            >
              <Image src="/images/img_vector_stroke.svg" alt="Next" width={20} height={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          {/* Staff Qualifications */}
          <div 
            className="w-full border border-[#ffffff33] rounded-[4px] bg-[#070b23] bg-cover bg-center p-6 sm:p-8 lg:p-[58px]"
            style={{ backgroundImage: 'url(/images/img_image_107.png)' }}
          >
            <div className="flex flex-col gap-6 justify-start items-center">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                Staff Qualifications
              </h3>
              <div className="flex flex-col gap-[10px] justify-start items-start w-full">
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                  All BEST staff have qualification commensurate with the roles and tasks that they are undertaking.
                </p>
                <div className="flex gap-[18px] justify-start items-end">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={14} height={14} />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Safety Managers will have a minimum of NEBOSH Certificate or level 3 British Safety Council Certificate
                  </p>
                </div>
                <div className="flex gap-[18px] justify-start items-start">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={14} height={14} />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Floor management staff will be qualified to at least IOSH Managing Safely.
                  </p>
                </div>
                <div className="flex gap-[18px] justify-start items-start">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={14} height={14} />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Structural Engineers have engineering degrees.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Freelancers and Temporary Staff */}
          <div 
            className="w-full border border-[#ffffff33] rounded-[4px] bg-[#070b23] bg-cover bg-center p-6 sm:p-8 lg:p-[62px]"
            style={{ backgroundImage: 'url(/images/img_image_14.png)' }}
          >
            <div className="flex flex-col gap-6 justify-center items-start">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-center text-white">
                Freelancers and Temporary Staff
              </h3>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                BEST recognizes the significance of qualified and experienced freelancers in supporting its operations. All freelancers employed by BEST are required to wear BEST uniforms and are covered by the company's comprehensive insurance, which includes Employee, Public and Products, and Professional Indemnity coverage. Freelancers are also expected to adhere to BEST's policies and procedures, ensuring consistency in service delivery and safety standards.
              </p>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                While freelancers are integral to BEST's workforce, no event is exclusively or predominantly staffed by freelancers alone. A BEST manager is always included as part of the event team, providing oversight, and ensuring smooth operations.
              </p>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                BEST takes pride in its pool of experienced and qualified freelancers, many of whom have benefited from training and development courses delivered by Stuart Mann. This showcases the company's commitment to continuous improvement and career development. Freelancers who have previously worked on specific events are often requested to return for future events, promoting continuity and familiarity with event requirements.
              </p>
              <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                By leveraging the expertise and experience of qualified freelancers, BEST maintains consistency in safety standards and adherence to company policies and procedures. This approach ensures that clients receive reliable, efficient, and high-quality services for their events, meeting their health, safety, and environmental obligations while building long-term relationships based on trust and professionalism.
              </p>
            </div>
          </div>

          {/* Corporate Governance */}
          <div 
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/img_image_15.png)' }}
          >
            <div className="w-full border border-[#ffffff2d] rounded-[4px] bg-[#070b23e5] p-6 sm:p-8 lg:p-16">
              <div className="flex flex-col gap-6 justify-center items-start">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                  Corporate Governance
                </h3>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  BEST is a safety company led by seasoned safety professionals, dedicated to ensuring our commitment to meeting and surpassing legal and regulatory requirements. Our policies, procedures, and systems align with UK and European laws and regulations. The company upholds various essential policies, including:
                </p>
                
                <div className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full">
                  <div className="flex flex-col gap-[6px] justify-start items-center w-full lg:w-[36%]">
                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Health and Safety Policy
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>
                    
                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Anti-Bribery and Corruption Policy
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>
                    
                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Equal Opportunities Policy
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>
                    
                    <div className="flex gap-4 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      <div className="flex justify-between items-start w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          Modern Slavery Statement
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                      </div>
                    </div>
                    
                    <div className="flex gap-4 justify-start items-center w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} />
                      <div className="flex justify-between items-center w-full">
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                          HR Policies and Procedures
                        </p>
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 justify-center items-start w-full lg:flex-1">
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Financial Management Policy
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Communications Policy
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Information Technology Policy
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Environmental Policy and Procedures
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                      Data Protection Policy and Procedures
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center items-start">
                  <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-1.5" />
                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                    Information Governance Policy
                  </p>
                </div>
                
                <p className="text-[14px] sm:text-[16px] font-opensans font-normal leading-[20px] sm:leading-[24px] text-left text-white">
                  To uphold our BSC, IOSH, and Qualsafe Awards training centre status, BEST adheres to comprehensive training delivery and assessment policies and procedures. Regular audits by these organizations are conducted, necessitating the presence of our internal quality assurance officer.
                </p>
                
                <p className="text-[14px] sm:text-[16px] font-opensans font-normal leading-[20px] sm:leading-[24px] text-left text-white">
                  Continued training and skill updates are integral to our operations. All staff members are obligated to maintain professional membership in Accredited and Chartered safety organizations, engaging in ongoing professional development. Internal training and attendance are not merely encouraged but mandatory, as skill fade, especially in the rapidly evolving events sector, can significantly impact service delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Event Experience */}
          <div 
            className="w-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/img_560_1.png)' }}
          >
            <div className="w-full border border-[#ffffff2d] rounded-[4px] bg-[#070b23e5] p-6 sm:p-8 lg:p-[58px]">
              <div className="flex flex-col gap-6 justify-start items-start">
                <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                  Event Experience
                </h3>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  BEST Directors and Staff have provided Floor Management, Safety Management, Training, and other related services to event organisers globally either directly or as part of the previous organisations, clients have included
                </p>
                
                <div className="flex flex-col lg:flex-row justify-start items-center gap-8 w-full">
                  <div className="flex flex-col gap-[10px] justify-center items-center w-full">
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Informa Markets (India, UAE, UK)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Dubai World Trade Centre (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Abu Dhabi National Exhibition Company (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        ADNEC Services (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        CSM Sports & Entertainment (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Blink Experience (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Reed (UK/UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        DMG Events (UAE, India)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-[10px] justify-start items-center w-full">
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Fairs & Events (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        TPG Media (UAE)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Quartz Business Media (UAE/UK)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        UBM (UK/India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        HYVE (UK/India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Mess München (India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Nuremberg Messe (India)
                      </p>
                    </div>
                    <div className="flex gap-3 justify-start items-start w-full">
                      <Image src="/images/img_vector_stroke.svg" alt="" width={16} height={14} className="mt-1" />
                      <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[22px] sm:leading-[25px] text-left text-white">
                        Real Food Markets UK/UAE (outside events)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expandable Information Section */}
      <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 lg:px-[148px]">
        <div className="w-full flex flex-col gap-16">
          {/* Information Technology and GDPR - Expanded */}
          <div className="flex flex-col gap-6 justify-start items-center">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                Information Technology and GDPR
              </h3>
              <button
                onClick={() => handleExpandToggle('tech-gdpr')}
                className="w-11 h-11 flex items-center justify-center"
                aria-label={expandedSections['tech-gdpr'] ? 'Collapse section' : 'Expand section'}
              >
                <Image
                  src="/images/img_vector_teal_300_44x44.svg"
                  alt={expandedSections['tech-gdpr'] ? 'Collapse' : 'Expand'}
                  width={44}
                  height={44}
                />
              </button>
            </div>
            
            {expandedSections['tech-gdpr'] && (
              <div className="flex flex-col gap-6 justify-start items-center w-full">
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  All information technology systems used by BEST are company-owned; no personal systems are allowed to connect to our internal systems. BEST utilizes Microsoft Office 365 and SharePoint for all document communication and storage, ensuring a secure environment with regularly updated passwords. Anti-virus protection is provided by Norton 360 and is installed on all our systems, including smartphones and tablets.
                </p>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  Stand assessment tracking is conducted using Kohezion database software, protected by 128- bit encryption. PlanGrid (Autodesk) Building Software is employed for on-site management, task tracking, and photography. It is accessible on BEST Apple iPads, with the data centre set to the European Data Centre. Staff members are prohibited from taking photographs on personal phones.
                </p>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  Jot Forms are employed for information gathering during stand assessments and site inspections. All data is encrypted, and pictures and information are directly sent to the server, not stored on the device.
                </p>
                <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                  BEST is registered with the UK Data Protection Agency as a Data Handler, ensuring compliance with all current UK and EU requirements on GDPR. This requirement is extended to cover all our activities globally.
                </p>
              </div>
            )}
          </div>

          {/* Environmental and Sustainability - Collapsed */}
          <div className="flex flex-col gap-8 justify-start items-center">
            <div className="w-full h-[2px] bg-[#ffffff33]"></div>
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                Environmental and Sustainability
              </h3>
              <button
                onClick={() => handleExpandToggle('environmental')}
                className="w-8 h-8 flex items-center justify-center"
                aria-label={expandedSections['environmental'] ? 'Collapse section' : 'Expand section'}
              >
                <Image
                  src="/images/img_vector_teal_300_32x32.svg"
                  alt={expandedSections['environmental'] ? 'Collapse' : 'Expand'}
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div className="w-full h-[2px] bg-[#ffffff33]"></div>
          </div>

          {/* Help and assistance - Collapsed */}
          <div className="flex justify-between items-start w-full">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
              Help and assistance.
            </h3>
            <button
              onClick={() => handleExpandToggle('help')}
              className="w-8 h-8 flex items-center justify-center mt-1"
              aria-label={expandedSections['help'] ? 'Collapse section' : 'Expand section'}
            >
              <Image
                src="/images/img_vector_teal_300_32x32.svg"
                alt={expandedSections['help'] ? 'Collapse' : 'Expand'}
                width={32}
                height={32}
              />
            </button>
          </div>

          {/* Risk Assessment - Collapsed */}
          <div className="flex flex-col gap-6 justify-start items-center">
            <div className="w-full h-[2px] bg-[#ffffff33]"></div>
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                Risk Assessment
              </h3>
              <button
                onClick={() => handleExpandToggle('risk')}
                className="w-8 h-8 flex items-center justify-center"
                aria-label={expandedSections['risk'] ? 'Collapse section' : 'Expand section'}
              >
                <Image
                  src="/images/img_vector_teal_300_32x32.svg"
                  alt={expandedSections['risk'] ? 'Collapse' : 'Expand'}
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <div className="w-full h-[2px] bg-[#ffffff33]"></div>
          </div>

          {/* Method Statements - Collapsed */}
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
              Method Statements
            </h3>
            <button
              onClick={() => handleExpandToggle('methods')}
              className="w-8 h-8 flex items-center justify-center"
              aria-label={expandedSections['methods'] ? 'Collapse section' : 'Expand section'}
            >
              <Image
                src="/images/img_vector_teal_300_32x32.svg"
                alt={expandedSections['methods'] ? 'Collapse' : 'Expand'}
                width={32}
                height={32}
              />
            </button>
          </div>

          {/* Environmental - Collapsed */}
          <div className="flex flex-col gap-6 justify-start items-center">
            <div className="w-full h-[2px] bg-[#ffffff33]"></div>
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                Environmental
              </h3>
              <button
                onClick={() => handleExpandToggle('env-policies')}
                className="w-8 h-8 flex items-center justify-center"
                aria-label={expandedSections['env-policies'] ? 'Collapse section' : 'Expand section'}
              >
                <Image
                  src="/images/img_vector_teal_300_32x32.svg"
                  alt={expandedSections['env-policies'] ? 'Collapse' : 'Expand'}
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="w-full py-16">
        <div className="flex flex-col gap-10 justify-start items-start w-full">
          <div className="flex flex-col gap-2 justify-start items-center self-center px-8">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-outfit font-semibold leading-[36px] sm:leading-[42px] lg:leading-[51px] text-center text-white">
              Our Services
            </h2>
            <div className="w-[50px] sm:w-[66px] h-[4px] bg-[#47d4aa]"></div>
          </div>

          {/* Services Horizontal Scroll */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-[22px] justify-start items-center min-w-max pl-[120px]">
              {/* Stand Auditing */}
              <div className="relative w-[282px] h-[438px] flex-shrink-0">
                <Image
                  src="/images/img_frame_42.png"
                  alt="Stand Auditing"
                  width={282}
                  height={438}
                  className="w-full h-full object-cover rounded-[4px]"
                />
                <div className="absolute top-8 left-4">
                  <h3 className="text-[24px] sm:text-[30px] font-outfit font-semibold leading-[32px] sm:leading-[38px] text-left text-white">
                    Stand Auditing
                  </h3>
                </div>
              </div>

              {/* Health & Safety Services */}
              <div className="w-[284px] h-[438px] flex-shrink-0">
                <div className="flex flex-col gap-4 justify-center items-center w-full h-full bg-[#2c0087] rounded-[4px] p-7">
                  <h3 className="text-[24px] sm:text-[30px] font-outfit font-semibold leading-[30px] sm:leading-[36px] text-left text-white self-end w-[94%]">
                    Health & Safety Services
                  </h3>
                  <div className="flex flex-col justify-start items-center w-full px-4">
                    <div className="flex flex-col gap-4 justify-start items-center w-full">
                      <div className="flex gap-4 justify-start items-start w-full">
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-2" />
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white w-[94%]">
                          Stand audits and contractor assessments
                        </p>
                      </div>
                      <div className="flex gap-4 justify-start items-start w-full">
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-2" />
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white w-[94%]">
                          Regulatory compliance reviews
                        </p>
                      </div>
                      <div className="flex gap-4 justify-start items-start w-full">
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-2" />
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white w-[94%]">
                          Design verification and PTB issuance
                        </p>
                      </div>
                      <div className="flex gap-4 justify-start items-start w-full">
                        <Image src="/images/img_vector_stroke.svg" alt="" width={12} height={10} className="mt-2" />
                        <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white w-[94%]">
                          Best Konnect: Pre-show training & induction modules
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Service Cards */}
              {[
                { title: 'Electrical Safety Services', image: '/images/img_frame_44.png' },
                { title: 'Fire Safety Services', image: '/images/img_frame_44_438x282.png' },
                { title: 'Sustainability Solutions\nServices', image: '/images/img_frame_44_1.png' },
                { title: 'Event Strategic Management Services', image: '/images/img_frame_44_2.png' },
                { title: 'Event Strategic Safety Services', image: '/images/img_frame_44_312x282.png' },
                { title: 'Venue Fire Safety\nServices', image: '/images/img_frame_44_3.png' },
                { title: 'Health & Safety Training and Development\nServices', image: '/images/img_frame_44_4.png' },
                { title: 'Rigging Services', image: '/images/img_frame_44_5.png' },
                { title: 'Engineering Services', image: '/images/img_2150440970_1.png' }
              ].map((service, index) => (
                <div key={index} className="relative w-[282px] h-[438px] flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={282}
                    height={438}
                    className="w-full h-full object-cover rounded-[4px]"
                  />
                  <div className="absolute top-8 left-4">
                    <h3 className="text-[24px] sm:text-[30px] font-outfit font-semibold leading-[32px] sm:leading-[39px] text-left text-white max-w-[88%]">
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-10 justify-start items-center">
            <div className="flex flex-col gap-4 justify-center items-center px-9">
              <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-outfit font-semibold leading-[36px] sm:leading-[42px] lg:leading-[51px] text-center text-white">
                Get In Touch
              </h2>
              <div className="w-[50px] sm:w-[66px] h-[4px] bg-[#47d4aa]"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-start items-center w-full">
              {/* Contact Form */}
              <div className="flex flex-col gap-6 justify-start items-center w-full lg:flex-1">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 justify-start items-center w-full">
                  <EditText
                    placeholder="Inquiry Type*"
                    value={formData.inquiryType}
                    onChange={handleInputChange('inquiryType')}
                    layout_width="flex-1"
                  />
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-center w-full">
                    <EditText
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      layout_width="full"
                    />
                    <EditText
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      layout_width="full"
                    />
                  </div>
                  
                  <EditText
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    layout_width="flex-1"
                  />
                  
                  <EditText
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    layout_width="flex-1"
                  />
                  
                  <TextArea
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    layout_width="flex-1"
                  />
                  
                  <Button
                    type="submit"
                    text="Send it to the moon"
                    layout_width="flex-1"
                  />
                </form>
              </div>

              {/* Contact Image */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/img_rectangle_32.png"
                  alt="Contact Us"
                  width={588}
                  height={476}
                  className="w-full h-auto rounded-[4px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-16 px-16">
        <div 
          className="w-full bg-[#2c0087] rounded-[98px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/img_image_14_196x1312.png)' }}
        >
          <div className="w-full px-12 py-12">
            <div className="flex flex-col lg:flex-row justify-start items-end gap-6 w-full">
              <div className="flex flex-col lg:flex-row justify-start items-center gap-6 w-full">
                <div className="flex flex-col lg:flex-row justify-start items-center gap-6 w-full">
                  <div className="flex flex-col lg:flex-row justify-start items-start w-full">
                    <div className="flex flex-col justify-center items-start w-full">
                      <p className="text-[16px] sm:text-[18px] font-outfit font-normal leading-[20px] sm:leading-[23px] text-left text-white">
                        Have a any questions?
                      </p>
                      <Link href="/contact">
                        <h3 className="text-[32px] sm:text-[40px] lg:text-[48px] font-outfit font-semibold leading-[40px] sm:leading-[52px] lg:leading-[61px] text-left text-white hover:text-[#47d4aa] transition-colors">
                          Contact Us
                        </h3>
                      </Link>
                    </div>
                    <div className="relative w-[194px] h-[36px] mt-6 lg:mt-6">
                      <Image
                        src="/images/img_vector_19.svg"
                        alt=""
                        width={190}
                        height={30}
                        className="absolute bottom-0 left-0"
                      />
                      <Image
                        src="/images/img_vector_18.svg"
                        alt=""
                        width={32}
                        height={36}
                        className="absolute top-0 right-0"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-4 justify-center items-start px-6">
                    <Image src="/images/img_line_md_phone_call.svg" alt="Phone" width={34} height={34} className="mt-3.5" />
                    <div className="flex flex-col gap-1 justify-start items-start">
                      <p className="text-[16px] sm:text-[18px] font-outfit font-normal leading-[20px] sm:leading-[23px] text-left text-white">
                        Phone Number
                      </p>
                      <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-outfit font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-left text-white">
                        +0(850) 544 7514
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 justify-center items-start px-7 pb-1.5">
                  <Image src="/images/img_ic_outline_email.svg" alt="Email" width={34} height={34} className="mt-2.5" />
                  <div className="flex flex-col justify-start items-start">
                    <p className="text-[16px] sm:text-[18px] font-outfit font-normal leading-[20px] sm:leading-[23px] text-left text-white">
                      E-Mail Address
                    </p>
                    <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-outfit font-medium leading-[28px] sm:leading-[32px] lg:leading-[36px] text-left text-white">
                      hello@crosson.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}