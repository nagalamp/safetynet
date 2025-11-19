'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

interface ServiceHighlight {
  id: number
  number: string
  title: string
  bgGradient: string
}

interface ServiceCard {
  id: number
  title: string
  image: string
  description?: string
  features?: string[]
}

interface Client {
  id: number
  name: string
  logo: string
}

interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  description: string
  socialLinks: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
  }
}

interface FormData {
  inquiryType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HomePage() {
  const [serviceHighlights, setServiceHighlights] = useState<ServiceHighlight[]>([])
  const [services, setServices] = useState<ServiceCard[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [exhibitionCenters, setExhibitionCenters] = useState<Client[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [currentExhibitionIndex, setCurrentExhibitionIndex] = useState(0);
  const clientsScrollRef = useRef<HTMLDivElement>(null);
  const exhibitionScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadHomeData()
  }, [])

  const loadHomeData = async (): Promise<void> => {
    try {
      setTimeout(() => {
        setServiceHighlights([
          {
            id: 1,
            number: '1',
            title: 'Globally certified engineers and safety professionals',
            bgGradient: 'linear-gradient(180deg,#2c0087 0%, #180048 100%)'
          },
          {
            id: 2,
            number: '2',
            title: 'End-to-end event compliance solutions',
            bgGradient: 'linear-gradient(180deg,#47d4aa 0%, #016c4c 100%)'
          },
          {
            id: 3,
            number: '3',
            title: 'Sustainability-driven vendor practices',
            bgGradient: 'linear-gradient(180deg,#f05623 0%, #822101 100%)'
          }
        ])

        setServices([
          { id: 1, title: 'Stand Auditing Services', image: '/images/img_frame_42.png' },
          { id: 2, title: 'Health & Safety Services', image: '', description: 'Comprehensive safety management solutions', features: ['Stand audits and contractor assessments', 'Regulatory compliance reviews', 'Design verification and PTB issuance'] },
          { id: 3, title: 'Electrical Safety Services', image: '/images/img_frame_44.png' },
          { id: 4, title: 'Fire Safety Services', image: '/images/img_frame_44_438x282.png' },
          { id: 5, title: 'Sustainability Solutions Services', image: '/images/img_frame_44_1.png' },
          { id: 6, title: 'Event Strategic Safety Services', image: '/images/img_frame_44_312x282.png' },
          { id: 7, title: 'Event Strategic Management Services', image: '/images/img_frame_44_2.png' },
          { id: 8, title: 'Venue Fire Safety Services', image: '/images/img_frame_44_3.png' },
          { id: 9, title: 'Health & Safety Training and Development Services', image: '/images/img_frame_44_4.png' },
          { id: 10, title: 'Rigging Services', image: '/images/img_frame_44_5.png' },
          { id: 11, title: 'Engineering Services', image: '/images/img_2150440970_1.png' }
        ])

        setClients([
          { id: 1, name: 'DMG Events', logo: '/images/img_dmg_events_logo.png' },
          { id: 2, name: 'Messe München', logo: '/images/img_messe_munchen_logo.png' },
          { id: 3, name: 'Informa', logo: '/images/img_informa_logo.png' },
          { id: 4, name: 'NürnbergMesse', logo: '/images/img_nuernbergmesse_logo.png' }
        ])

        setExhibitionCenters([
          { id: 1, name: 'BIEC', logo: '/images/img_biec_logo.png' },
          { id: 2, name: 'HITEX', logo: '/images/img_hitex_logo.png' },
          { id: 3, name: 'Dubai World Trade Centre', logo: '/images/img_dubai_world_trade.png' },
          { id: 4, name: 'Chennai Trade Centre', logo: '/images/img_chennai_trade_center_logo_1.png' },
          { id: 5, name: 'BIEC', logo: '/images/img_biec_logo.png' }
        ])

        setTeamMembers([
          {
            id: 1,
            name: 'Stuart Mann',
            position: 'Managing Director',
            image: '/images/img_image.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper aliquam ante id faucibus. Suspendisse potenti. Duis et semper nunc. Nunc rutrum odio et dignissim pellentesque. Proin fermentum, nisl eu dapibus consectetur, arcu turpis maximus lacus, quis ullamcorper nisi turpis et diam.',
            socialLinks: {
              facebook: '#',
              twitter: '#',
              linkedin: '#',
              instagram: '#'
            }
          },
          {
            id: 2,
            name: 'Stuart Mann',
            position: 'Managing Director',
            image: '/images/img_image_574x384.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper aliquam ante id faucibus. Suspendisse potenti. Duis et semper nunc. Nunc rutrum odio et dignissim pellentesque. Proin fermentum, nisl eu dapibus consectetur, arcu turpis maximus lacus, quis ullamcorper nisi turpis et diam.',
            socialLinks: {
              facebook: '#',
              twitter: '#',
              linkedin: '#',
              instagram: '#'
            }
          }
        ])

        setLoading(false)
      }, 1000)
    } catch (error) {
      setLoading(false)
    }
  }

  // Auto-scroll functionality for clients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClientIndex((prev) => (prev + 1) % clients.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [clients.length]);

  // Auto-scroll functionality for exhibition centers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExhibitionIndex((prev) => (prev + 1) % exhibitionCenters.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [exhibitionCenters.length]);

  // Scroll to specific client
  const scrollToClient = (index: number): void => {
    setCurrentClientIndex(index);
    if (clientsScrollRef.current) {
      const container = clientsScrollRef.current;
      const itemWidth = 400; // 384px + gap
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  // Scroll to specific exhibition center
  const scrollToExhibition = (index: number): void => {
    setCurrentExhibitionIndex(index);
    if (exhibitionScrollRef.current) {
      const container = exhibitionScrollRef.current;
      const itemWidth = 400; // 384px + gap
      container.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = (): void => {
    // Form submission logic here
  }

  return (
    <div className="min-h-screen bg-[#150e24]" style={{ backgroundImage: `url('/images/img_image_9.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section with Animation */}
        <motion.section 
          className="w-full bg-[linear-gradient(180deg,#2c008700_0%,#040711_100%)] border-b border-[#312e5c] pt-4 pb-4 px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="max-w-[1202px] mx-auto mb-20">
            <div className="flex flex-col gap-16 items-center w-full">
              {/* Hero Content */}
              <div className="flex flex-col gap-16 items-center w-full max-w-[1202px]">
                <motion.h1 
                  className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-outfit font-bold leading-tight text-white text-left w-full max-w-[96%]" 
                  style={{ lineHeight: '76px' }}
                  variants={fadeInUp}
                >
                  <span className="text-white">WHERE HEALTH MEETS SAFETY, DELIVERED BY EXPERTS </span>
                  <motion.span 
                    className="text-[#47d4aa]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    &gt;&gt;
                  </motion.span>
                </motion.h1>

                <motion.div 
                  className="flex flex-row justify-end items-center w-full"
                  variants={fadeInRight}
                >
                  <motion.div 
                    className="w-[8px] h-[116px] bg-[#47d4aa]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <p className="text-[22px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-outfit font-normal leading-tight text-white text-left w-[68%] ml-6" style={{ lineHeight: '52px' }}>
                    <span className="font-normal">Empowering safe, compliant, and sustainable events across the</span>
                    <span className="font-medium"> </span>
                    <span className="font-bold">UK, UAE and INDIA.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Highlights Section with Staggered Animation - FIXED */}
        <motion.section 
          className="w-full py-12 sm:py-16 lg:py-[48px] px-4 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-9 items-center w-full">
              {/* Section Header */}
              <motion.div 
                className="flex flex-col gap-1 items-center w-full md:w-[36%] px-4 md:px-12"
                variants={fadeInUp}
              >
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  The Key Highlights
                </h2>
                <motion.div 
                  className="w-[66px] h-1 bg-[#47d4aa]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>

              {/* Highlights Grid - IMPROVED VISIBILITY */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                variants={staggerContainer}
              >
                {serviceHighlights.map((highlight, index) => (
                  <motion.div 
                    key={highlight.id} 
                    className="w-full max-w-[384px] mx-auto"
                    variants={scaleIn}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div 
                      className="flex flex-col items-center justify-start h-auto rounded-lg mb-10 md:mb-[42px] lg:mb-[84px] xl:mb-[86px] hover:shadow-2xl transition-all duration-300 border border-[#ffffff33] backdrop-blur-sm"
                      style={{ 
                        background: highlight.bgGradient,
                        backgroundColor: highlight.id === 1 ? '#2c0087' : 
                                        highlight.id === 2 ? '#016c4c' : '#822101'
                      }}
                    >
                      <div className="flex flex-col gap-8 items-center w-[88%] my-8">
                        <div className="flex flex-row justify-start items-center w-full">
                          <motion.h3 
                            className="text-[90px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bruno-ace font-normal leading-tight text-white text-left drop-shadow-lg" 
                            style={{ lineHeight: '218px' }}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                          >
                            {highlight.number}
                          </motion.h3>
                          <motion.div 
                            className="w-6 h-6 bg-white rounded-full self-end mb-12 -ml-1.5 shadow-lg"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: index * 0.5 
                            }}
                          />
                        </div>
                        <motion.p 
                          className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-outfit font-medium leading-tight text-white text-left w-full px-2 drop-shadow-md" 
                          style={{ lineHeight: '43px' }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + 0.3 }}
                        >
                          {highlight.title}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button with Hover Animation */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  text="GET IN TOUCH"
                  text_font_size="20"
                  text_font_family="Outfit"
                  text_font_weight="600"
                  text_line_height="26px"
                  text_color="#ffffff"
                  fill_background_color="#f05623"
                  border_border_radius="4px"
                  padding="12px 34px"
                  className="uppercase hover:bg-[#e04a1f] transition-colors duration-300 shadow-lg"
                  onClick={handleFormSubmit}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
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
                {[
                  { logo: '/images/img_image_11.png', width: 154, height: 76, alt: 'Certification logo showing accreditation for safety standards' },
                  { logo: '/images/img_unnamed_4_1.png', width: 176, height: 128, alt: 'Professional certification badge for health and safety compliance' },
                  { logo: '/images/img_rospa.png', width: 128, height: 80, alt: 'RoSPA Royal Society for Prevention of Accidents certification' },
                  { logo: '/images/img_ieia_logo_1.png', width: 196, height: 88, alt: 'IEIA International Exhibition Industry Association membership logo' },
                  { logo: '/images/img_oshcr_logo.png', width: 164, height: 86, alt: 'OSHCR Occupational Safety and Health certification logo' }
                ].map((cert, index) => (
                  <div key={index} className="flex justify-center items-center bg-white rounded p-6">
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

        {/* Our Services Section */}
        <motion.section 
          className="w-full py-12 sm:py-16 lg:py-[34px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-[34px] items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-[24%] px-8">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Our Services
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {services.map((service, index) => {
                  if (service.id === 2) {
                    // Special layout for Health & Safety Services
                    return (
                      <div key={service.id} className="sm:col-span-2 lg:col-span-1">
                        <div className="flex flex-col justify-center items-center w-full h-auto bg-[#2c0087] rounded p-8">
                          <h3 className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-outfit font-semibold leading-tight text-white text-left self-end w-[94%]" style={{ lineHeight: '39px' }}>
                            {service.title}
                          </h3>

                          {service.features && service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex flex-row gap-4 justify-start items-start w-full mt-4 px-5">
                              <Image
                                src="/images/img_vector_stroke.svg"
                                alt="Checkmark icon indicating service feature"
                                width={12}
                                height={10}
                                className="mt-2"
                              />
                              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-open-sans font-normal leading-relaxed text-white text-left w-[94%]" style={{ lineHeight: '27px' }}>
                                {feature}
                              </p>
                            </div>
                          ))}

                          <button className="w-12 h-12 bg-[#f05623] rounded-[24px] flex items-center justify-center mt-12">
                            <Image
                              src="/images/img_frame_427320965.svg"
                              alt="Arrow icon for learn more action"
                              width={24}
                              height={24}
                            />
                          </button>
                        </div>
                      </div>
                    )
                  }

                  return (
                    <div key={service.id} className="relative">
                      <div className="relative w-full h-[438px] rounded overflow-hidden">
                        <Image
                          src={service.image}
                          alt={`${service.title} - Professional safety service illustration`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-8 left-4 right-4">
                          <h3 className="text-[15px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-outfit font-semibold leading-tight text-white text-left" style={{ lineHeight: '39px' }}>
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Our Clients Section with Scrolling Animation */}
        <motion.section 
          className="w-full bg-[#150e24] py-[34px] px-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-full mx-auto">
            <div className="flex flex-col gap-12 items-center w-full">
              {/* Clients Header */}
              <div className="flex flex-col gap-[34px] items-center w-full">
                <motion.div 
                  className="flex flex-col gap-2 items-center w-[20%] px-12"
                  variants={fadeInUp}
                >
                  <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                    Our Clients
                  </h2>
                  <motion.div 
                    className="w-[66px] h-1 bg-[#47d4aa]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </motion.div>

                {/* Enhanced Clients Carousel */}
                <motion.div 
                  className="relative w-full max-w-[1600px] mx-auto"
                  variants={fadeInUp}
                >
                  <div 
                    ref={clientsScrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      WebkitScrollbar: { display: 'none' }
                    }}
                  >
                    {[...clients, ...clients].map((client, index) => (
                      <motion.div 
                        key={`${client.id}-${index}`} 
                        className="flex justify-center items-center min-w-[384px] bg-white rounded p-6 flex-shrink-0 hover:shadow-xl transition-all duration-300"
                        whileHover={{ 
                          scale: 1.02,
                          y: -5
                        }}
                        initial={{ opacity: 0.7 }}
                        animate={{ 
                          opacity: index % clients.length === currentClientIndex ? 1 : 0.7,
                          scale: index % clients.length === currentClientIndex ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={client.logo}
                          alt={`${client.name} - Trusted client company logo`}
                          width={index % clients.length === 2 ? 328 : index % clients.length === 1 ? 182 : 236}
                          height={80}
                          className="object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Client Navigation Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {clients.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentClientIndex ? 'bg-[#47d4aa] scale-125' : 'bg-gray-400'
                        }`}
                        onClick={() => scrollToClient(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Exhibition Centers Section */}
              <motion.div 
                className="flex flex-col gap-2 items-center w-[22%]"
                variants={fadeInUp}
              >
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Exhibition Centers
                </h2>
                <motion.div 
                  className="w-[66px] h-1 bg-[#47d4aa]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>
            </div>

            {/* Enhanced Exhibition Centers Carousel */}
            <motion.div 
              className="relative w-full max-w-[1600px] mx-auto mt-8"
              variants={fadeInUp}
            >
              <div 
                ref={exhibitionScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitScrollbar: { display: 'none' }
                }}
              >
                {[...exhibitionCenters, ...exhibitionCenters].map((center, index) => (
                  <motion.div 
                    key={`${center.id}-${index}`} 
                    className="flex justify-center items-center min-w-[384px] bg-white rounded p-6 flex-shrink-0 hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      y: -5
                    }}
                    initial={{ opacity: 0.7 }}
                    animate={{ 
                      opacity: index % exhibitionCenters.length === currentExhibitionIndex ? 1 : 0.7,
                      scale: index % exhibitionCenters.length === currentExhibitionIndex ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={center.logo}
                      alt={`${center.name} - Exhibition center partner logo`}
                      width={index % exhibitionCenters.length === 2 ? 242 : index % exhibitionCenters.length === 1 ? 196 : index % exhibitionCenters.length === 3 ? 154 : 242}
                      height={index % exhibitionCenters.length === 1 ? 98 : index % exhibitionCenters.length === 3 ? 92 : 72}
                      className="object-contain"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Exhibition Centers Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {exhibitionCenters.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentExhibitionIndex ? 'bg-[#47d4aa] scale-125' : 'bg-gray-400'
                    }`}
                    onClick={() => scrollToExhibition(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Scroll Controls */}
              <motion.button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#47d4aa] text-white p-3 rounded-full shadow-lg hover:bg-[#3bc299] transition-colors"
                onClick={() => scrollToExhibition(currentExhibitionIndex > 0 ? currentExhibitionIndex - 1 : exhibitionCenters.length - 1)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="/images/img_group_7.svg"
                  alt="Previous exhibition center"
                  width={20}
                  height={20}
                />
              </motion.button>

              <motion.button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#47d4aa] text-white p-3 rounded-full shadow-lg hover:bg-[#3bc299] transition-colors"
                onClick={() => scrollToExhibition(currentExhibitionIndex < exhibitionCenters.length - 1 ? currentExhibitionIndex + 1 : 0)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src="/images/img_vector_stroke.svg"
                  alt="Next exhibition center"
                  width={24}
                  height={24}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Events Executed Section */}
        <motion.section 
          className="w-full py-12 sm:py-16 lg:py-[34px] px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-[34px] items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-[32%] px-11">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Events Executed
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {[
                  { id: 1, title: 'Case Study 1', subtitle: 'Successful Events Delivered', image: '/images/img_rectangle_19.png', bgColor: 'white', textColor: '#150e24' },
                  { id: 2, title: 'Case Study 2', subtitle: 'Our Event Highlights', image: '/images/img_rectangle_20.png', bgColor: 'gradient', textColor: 'white' },
                  { id: 3, title: 'Case Study 3', subtitle: 'Executed Events & Achievements', image: '/images/img_rectangle_20_472x384.png', bgColor: 'white', textColor: '#150e24' }
                ].map((study) => (
                  <div key={study.id} className="relative w-full max-w-[384px] mx-auto">
                    <div className="relative w-full h-[472px] rounded overflow-hidden">
                      <Image
                        src={study.image}
                        alt={`${study.title} - Professional event case study showcase`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <div>
                          <p className={`text-[22px] font-outfit font-medium leading-tight mb-3 ${study.textColor === 'white' ? 'text-white' : 'text-[#150e24]'}`} style={{ lineHeight: '28px' }}>
                            {study.title}
                          </p>
                          <h3 className={`text-[32px] font-outfit font-semibold leading-tight mb-6 ${study.textColor === 'white' ? 'text-white' : 'text-[#150e24]'}`} style={{ lineHeight: study.id === 2 ? '41px' : '38px' }}>
                            {study.subtitle}
                          </h3>
                          <p className={`text-[18px] font-open-sans font-normal leading-relaxed ${study.textColor === 'white' ? 'text-white' : 'text-[#150e24]'}`} style={{ lineHeight: '27px' }}>
                            Showcase of major events with quantifiable safety and sustainability outcomes
                          </p>
                        </div>
                        <Button
                          text="DOWNLOAD"
                          text_font_size="20"
                          text_font_family="Outfit"
                          text_font_weight="600"
                          text_line_height="26px"
                          text_color="#ffffff"
                          fill_background_color="#f05623"
                          border_border_radius="4px"
                          padding="12px 34px"
                          layout_width="flex-1"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reports Section */}
        <motion.section 
          className="w-full bg-[#150e24] py-[62px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-full mx-auto px-4">
            <div className="flex flex-col justify-center items-center w-full">
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center mt-1.5" style={{ lineHeight: '51px' }}>
                Reports
              </h2>

              <div className="flex flex-col justify-start items-center w-full max-w-[1202px] mt-3">
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
                <p className="text-[18px] font-open-sans font-normal leading-relaxed text-white text-center w-full mt-4" style={{ lineHeight: '27px' }}>
                  Post-event reports are essential for evaluating outcomes and gathering feedback, providing insights into successes and areas for improvement. They support informed decision-making and facilitate continuous enhancement of future events.
                </p>

                <h3 className="text-[32px] font-outfit font-semibold leading-tight text-white text-center mt-[54px]" style={{ lineHeight: '41px' }}>
                  Safety Compliance Reports
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-[34px]">
                  {[1, 2, 3].map((report) => (
                    <div key={report} className="flex flex-col gap-7 items-center w-full max-w-[384px] mx-auto bg-white rounded p-8">
                      <Image
                        src="/images/img_653a2e80_1ddc_4.png"
                        alt="Safety compliance report document preview"
                        width={238}
                        height={308}
                        className="mt-4 mx-auto"
                      />
                      <Button
                        text="DOWNLOAD"
                        text_font_size="20"
                        text_font_family="Outfit"
                        text_font_weight="600"
                        text_line_height="26px"
                        text_color="#ffffff"
                        fill_background_color="#f05623"
                        border_border_radius="4px"
                        padding="12px 34px"
                        layout_width={report === 1 ? "flex-1" : "auto"}
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex flex-row justify-end items-center w-auto mt-10">
                  <button className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center">
                    <Image
                      src="/images/img_group_7.svg"
                      alt="Previous page navigation arrow"
                      width={20}
                      height={20}
                    />
                  </button>
                  <span className="text-[32px] font-outfit font-medium leading-tight text-white ml-8" style={{ lineHeight: '41px' }}>
                    1/3
                  </span>
                  <button className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center ml-8">
                    <Image
                      src="/images/img_vector_stroke.svg"
                      alt="Next page navigation arrow"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stand Assessment Section */}
        <motion.section 
          className="w-full py-[58px] px-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-full mx-auto">
            <div className="flex flex-col gap-[58px] items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-[44%]">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Illustration of Stand Assessment
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Assessment Flow Diagram */}
              <div className="flex flex-col gap-5 items-center w-[80%]">
                {/* Top Row */}
                <div className="flex flex-row justify-start items-start w-full px-16">
                  {/* Simple Design */}
                  <div className="relative w-[12%] self-end mb-8">
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/img_vector_12.svg"
                        alt="Simple design workflow step icon"
                        width={82}
                        height={82}
                      />
                      <p className="text-[14px] font-outfit font-medium leading-tight text-white text-center w-[42%] -ml-16" style={{ lineHeight: '16px' }}>
                        Simple Design
                      </p>
                    </div>
                    <Image
                      src="/images/img_vector_13.svg"
                      alt="Workflow direction arrow"
                      width={36}
                      height={18}
                      className="absolute bottom-0"
                    />
                  </div>

                  {/* Stand Design Desk */}
                  <div className="bg-[#47d4aa] rounded-[30px] p-1 w-[18%] mb-10">
                    <div className="bg-[#2c0087] rounded-[26px] px-5 py-6">
                      <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '24px' }}>
                        Stand Design Desk
                      </p>
                    </div>
                  </div>

                  {/* Complex Design */}
                  <p className="text-[14px] font-outfit font-medium leading-tight text-white text-center w-[6%] self-end mb-8 ml-6" style={{ lineHeight: '16px' }}>
                    Complex Design
                  </p>

                  {/* Arrow */}
                  <Image
                    src="/images/img_vector_13_white_a700.svg"
                    alt="Process flow direction indicator"
                    width={18}
                    height={36}
                    className="mt-10 ml-2.5"
                  />

                  {/* Team Engineering */}
                  <div className="bg-[#47d4aa] rounded-[30px] p-1 w-[18%] ml-3.5">
                    <div className="bg-[#2c0087] rounded-[26px] px-6 py-6">
                      <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '24px' }}>
                        Team Engineering
                      </p>
                    </div>
                  </div>

                  {/* Review */}
                  <div className="relative w-[12%] self-end ml-4">
                    <div className="flex flex-col items-center">
                      <p className="text-[14px] font-outfit font-medium leading-tight text-white text-center mt-7 ml-1" style={{ lineHeight: '18px' }}>
                        Review
                      </p>
                      <Image
                        src="/images/img_vector_12_white_a700.svg"
                        alt="Review process step icon"
                        width={82}
                        height={82}
                      />
                    </div>
                    <Image
                      src="/images/img_vector_13_white_a700_18x36.svg"
                      alt="Review workflow direction arrow"
                      width={36}
                      height={18}
                      className="absolute bottom-0 right-0"
                    />
                  </div>
                </div>

                {/* Middle Row */}
                <div className="flex flex-row justify-start items-center w-full">
                  {/* Admin Team */}
                  <div className="bg-[#47d4aa] rounded-[30px] px-6 py-9">
                    <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '26px' }}>
                      Admin Team
                    </p>
                  </div>

                  {/* BEST Logo */}
                  <div className="bg-[#47d4aa] rounded-[50px] p-1 ml-[120px]">
                    <div className="bg-[#2c0087] rounded-[46px] px-5 py-6">
                      <Image
                        src="/images/img_logo.png"
                        alt="BEST company logo - central workflow hub"
                        width={192}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Assessment of Design */}
                  <div className="flex flex-row justify-end items-center w-full px-5">
                    <div className="bg-[#47d4aa] rounded-[30px] p-1 w-[56%]">
                      <div className="bg-[#2c0087] rounded-[26px] px-6 py-6">
                        <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '24px' }}>
                          Assessment of Design
                        </p>
                      </div>
                    </div>
                    <Image
                      src="/images/img_vector_13_white_a700.svg"
                      alt="Assessment workflow direction indicator"
                      width={18}
                      height={36}
                      className="ml-18"
                    />
                  </div>

                  {/* PTB Certificate */}
                  <div className="bg-[#47d4aa] rounded-[30px] p-1 w-[14%]">
                    <div className="bg-[#2c0087] rounded-[26px] px-6 py-6">
                      <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '24px' }}>
                        PTB Certificate
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-row justify-start items-center w-full px-18">
                  <div className="flex flex-row justify-start items-start w-[36%]">
                    {/* Review */}
                    <div className="relative mb-8">
                      <div className="flex flex-col gap-11 items-end">
                        <p className="text-[14px] font-outfit font-medium leading-tight text-white text-center" style={{ lineHeight: '18px' }}>
                          Review
                        </p>
                        <Image
                          src="/images/img_vector_13_white_a700.svg"
                          alt="Final review workflow arrow"
                          width={18}
                          height={36}
                        />
                      </div>
                      <Image
                        src="/images/img_vector_12_white_a700_82x82.svg"
                        alt="Final review process step"
                        width={82}
                        height={82}
                        className="absolute top-0"
                      />
                    </div>

                    {/* PTB Certificate */}
                    <div className="bg-[#47d4aa] rounded-[30px] p-1 w-[52%] self-end ml-4">
                      <div className="bg-[#2c0087] rounded-[26px] px-6 py-6">
                        <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '24px' }}>
                          PTB Certificate
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contractors */}
                  <div className="flex flex-row justify-start items-start w-full px-16">
                    <div className="bg-[#47d4aa] rounded-[30px] px-7 py-9 self-end mt-9">
                      <p className="text-[20px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '26px' }}>
                        Contractors
                      </p>
                    </div>

                    <div className="flex flex-col justify-start items-start ml-5">
                      <Image
                        src="/images/img_vector_12_82x82.svg"
                        alt="Contractors workflow connection point"
                        width={82}
                        height={82}
                      />
                      <Image
                        src="/images/img_vector_13_white_a700_36x18.svg"
                        alt="Contractors communication flow arrow"
                        width={18}
                        height={36}
                        className="-mt-5"
                      />
                    </div>

                    <p className="text-[14px] font-outfit font-medium leading-tight text-white text-left w-[24%] ml-3.5" style={{ lineHeight: '16px' }}>
                      Request for structural details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Meet the Team Section */}
        <motion.section 
          className="w-full bg-[#150e24] py-[58px] px-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-full mx-auto">
            <div className="relative">
              {/* Navigation */}
              <div className="absolute bottom-0 right-0 flex flex-row justify-end items-center z-10 mr-[120px]">
                <button className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center">
                  <Image
                    src="/images/img_group_7.svg"
                    alt="Team section previous navigation"
                    width={20}
                    height={20}
                  />
                </button>
                <span className="text-[32px] font-outfit font-medium leading-tight text-white ml-8" style={{ lineHeight: '41px' }}>
                  1/3
                </span>
                <button className="w-12 h-12 border border-[#5e5d77] rounded flex items-center justify-center ml-8">
                  <Image
                    src="/images/img_vector_stroke.svg"
                    alt="Team section next navigation"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 items-center w-full h-auto">
                {/* Section Header */}
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Meet the Team
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
                <p className="text-[18px] font-poppins font-normal leading-relaxed text-white text-center" style={{ lineHeight: '27px' }}>
                  Introduce key members of the senior management with roles, credentials, and a commitment to excellence in safety and engineering.
                </p>

                {/* Team Members */}
                <div className="flex flex-row gap-6 w-full overflow-x-auto mb-[92px] ml-[120px]">
                  {teamMembers.map((member, index) => (
                    <div key={member.id} className="flex flex-row gap-6 justify-center items-center min-w-[792px] lg:min-w-[810px] bg-[#2c0087] border border-[#ffffff33] rounded flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.position} professional portrait`}
                        width={index === 0 ? 382 : 384}
                        height={574}
                        className="rounded-tl rounded-bl object-cover"
                      />
                      <div className="flex flex-col gap-2 items-start p-6 w-full">
                        <div className="flex flex-col gap-2 items-center">
                          <h3 className="text-[28px] lg:text-[32px] font-outfit font-semibold leading-tight text-white text-left" style={{ lineHeight: index === 0 ? '41px' : '36px' }}>
                            {member.name}
                          </h3>
                          <p className="text-[22px] font-outfit font-medium leading-tight text-white text-left" style={{ lineHeight: '28px' }}>
                            {member.position}
                          </p>
                        </div>
                        <div className="flex flex-col gap-6 items-start w-full">
                          <p className="text-[18px] font-open-sans font-normal leading-relaxed text-white text-left w-[94%] lg:w-[86%]" style={{ lineHeight: '27px' }}>
                            {member.description}
                          </p>
                          <div className="flex flex-row justify-start items-center w-full">
                            <Image
                              src="/images/img_uil_facebook.svg"
                              alt="Facebook social media profile link"
                              width={24}
                              height={24}
                            />
                            <Image
                              src="/images/img_fa6_brands_square_x_twitter.svg"
                              alt="X Twitter social media profile link"
                              width={20}
                              height={24}
                              className="ml-2"
                            />
                            <Image
                              src="/images/img_uil_linkedin.svg"
                              alt="LinkedIn professional profile link"
                              width={24}
                              height={24}
                              className="ml-2"
                            />
                            <Image
                              src="/images/img_fa_brands_instagram_square.svg"
                              alt="Instagram social media profile link"
                              width={20}
                              height={24}
                              className="ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Get In Touch Section */}
        <motion.section 
          className="w-[90%] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-16 items-center w-full">
            <div className="flex flex-col gap-10 items-center w-full max-w-[1202px]">
              {/* Section Header */}
              <div className="flex flex-col gap-4 justify-center items-center w-[24%] px-9">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Get In Touch
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Contact Form and Image */}
              <div className="flex flex-col lg:flex-row gap-6 justify-start items-center w-full">
                {/* Contact Form */}
                <div className="flex flex-col gap-6 items-center w-full lg:w-1/2">
                  <div className="flex flex-col gap-4 items-center w-full">
                    <EditText
                      placeholder="Inquiry Type*"
                      value={formData.inquiryType}
                      onChange={(e) => handleFormChange('inquiryType', e.target.value)}
                      layout_width="flex-1"
                    />
                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
                      <EditText
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => handleFormChange('lastName', e.target.value)}
                        layout_width="full"
                      />
                      <EditText
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => handleFormChange('firstName', e.target.value)}
                        layout_width="full"
                      />
                    </div>
                    <EditText
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      layout_width="flex-1"
                      type="email"
                    />
                    <EditText
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      layout_width="flex-1"
                      type="tel"
                    />
                    <TextArea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => handleFormChange('message', e.target.value)}
                      layout_width="flex-1"
                      rows={4}
                    />
                  </div>
                  <Button
                    text="SEND IT TO THE MOON"
                    text_font_size="20"
                    text_font_family="Outfit"
                    text_font_weight="600"
                    text_line_height="26px"
                    text_text_transform="uppercase"
                    text_color="#f2f2f2"
                    fill_background_color="#f05623"
                    border_border_radius="4px"
                    padding="12px 34px"
                    layout_width="flex-1"
                    onClick={handleFormSubmit}
                  />
                </div>

                {/* Contact Image */}
                <div className="w-full lg:w-1/2">
                  <Image
                    src="/images/img_rectangle_32.png"
                    alt="Professional team meeting discussing safety solutions"
                    width={588}
                    height={476}
                    className="w-full h-auto rounded object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="w-full relative" style={{ backgroundImage: `url('/images/img_image_14.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="flex flex-row justify-start items-center w-full p-12 mx-1">
                <div className="flex flex-row justify-center items-center self-end w-full">
                  <div className="flex flex-col justify-center items-start">
                    <p className="text-[18px] font-outfit font-normal leading-tight text-white text-left" style={{ lineHeight: '23px' }}>
                      Have a any questions?
                    </p>
                    <h3 className="text-[48px] font-outfit font-semibold leading-tight text-white text-left" style={{ lineHeight: '61px' }}>
                      Contact Us
                    </h3>
                  </div>

                  <div className="flex flex-row justify-start items-start w-full px-7">
                    <div className="relative mt-3">
                      <Image
                        src="/images/img_vector_19.svg"
                        alt="Contact information background design element"
                        width={190}
                        height={30}
                        className="mt-1.5"
                      />
                      <Image
                        src="/images/img_vector_18.svg"
                        alt="Contact section decorative accent"
                        width={32}
                        height={36}
                        className="absolute top-0 right-0"
                      />
                    </div>

                    <div className="flex flex-row gap-4 justify-start items-start self-center w-full px-11">
                      <Image
                        src="/images/img_line_md_phone_call.svg"
                        alt="Phone contact icon"
                        width={34}
                        height={34}
                        className="mt-3.5"
                      />
                      <div className="flex flex-col gap-1 justify-start items-start self-center w-full">
                        <p className="text-[18px] font-outfit font-normal leading-tight text-white text-left" style={{ lineHeight: '23px' }}>
                          Phone Number
                        </p>
                        <p className="text-[28px] font-outfit font-semibold leading-tight text-white text-left" style={{ lineHeight: '36px' }}>
                          +0(850) 544 7514
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row justify-center items-center self-end w-[34%] ml-2">
                      <div className="flex flex-row gap-4 justify-start items-start w-full">
                        <Image
                          src="/images/img_ic_outline_email.svg"
                          alt="Email contact icon"
                          width={34}
                          height={34}
                          className="mt-2.5"
                        />
                        <div className="flex flex-col justify-start items-start self-center w-full">
                          <p className="text-[18px] font-outfit font-normal leading-tight text-white text-left" style={{ lineHeight: '23px' }}>
                            E-Mail Address
                          </p>
                          <p className="text-[28px] font-outfit font-medium leading-tight text-white text-left" style={{ lineHeight: '36px' }}>
                            hello@crosson.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>   
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}