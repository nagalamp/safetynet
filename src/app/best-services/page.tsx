'use client';
import { useState, useEffect, useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';


import ServicesSection from '../Home/ServicesSection';
import ContactSection from '../Home/ContactSection';

interface ServiceHighlight {
  id: number;
  number: string;
  title: string;
  bgGradient: string;
}

interface ServiceCard {
  id: number;
  title: string;
  image: string;
  description?: string;
  features?: string[];
}

interface Client {
  id: number;
  name: string;
  logo: string;
}

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

interface FormData {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ServicePage() {
  const [serviceHighlights, setServiceHighlights] = useState<ServiceHighlight[]>([]);
  const [services, setServices] = useState<ServiceCard[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [exhibitionCenters, setExhibitionCenters] = useState<Client[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    loadHomeData();
  }, []);

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
        ]);

        setServices([
          { id: 1, title: 'Stand Auditing Services', image: '/images/img_frame_42.png' },
          { id: 2, title: 'Health & Safety Services', image: '/images/Health_Safety_Services.png', description: 'Comprehensive safety management solutions', features: ['Stand audits and contractor assessments', 'Regulatory compliance reviews', 'Design verification and PTB issuance'] },
          { id: 3, title: 'Electrical Safety Services', image: '/images/img_frame_44.png' },
          { id: 4, title: 'Fire Safety Services', image: '/images/img_frame_44_438x282.png' },
          { id: 5, title: 'Sustainability Solutions Services', image: '/images/img_frame_44_1.png' },
          { id: 6, title: 'Event Strategic Safety Services', image: '/images/img_frame_44_312x282.png' },
          { id: 7, title: 'Event Strategic Management Services', image: '/images/img_frame_44_2.png' },
          { id: 8, title: 'Venue Fire Safety Services', image: '/images/img_frame_44_3.png' },
          { id: 9, title: 'Health & Safety Training and Development Services', image: '/images/img_frame_44_4.png' },
          { id: 10, title: 'Rigging Services', image: '/images/img_frame_44_5.png' },
          { id: 11, title: 'Engineering Services', image: '/images/img_2150440970_1.png' }
        ]);




        setLoading(false);
      }, 1000);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (): void => {
    // Form submission logic here
  };

  const handleGetInTouch = (): void => {
    // Scroll to contact section or handle get in touch action
    handleFormSubmit();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150e24] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#150e24]" style={{ backgroundImage: `url('/images/img_image_9.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div
        className="relative"
        style={{
          backgroundImage: `url('/images/homeBannerBg.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <HeroSection />
      </div>



      <main>

       

        
        <ServicesSection showHeading={false} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}