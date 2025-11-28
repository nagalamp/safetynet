'use client';
import { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../Home/HeroSection';
import ServicesSection from '../Home/ServicesSection';
import ContactSection from '../Home/ContactSection';
import  ServiceCard  from '../services/[slug]/ServiceCards';

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
  backgroundImage?: string; // optional hero background for each service
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
    loadServiceData();
  }, []);

  const loadServiceData = async (): Promise<void> => {
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
          { id: 1, title: 'Stand Auditing Services', image: '/images/img_frame_42.png', backgroundImage: '/images/heroimages/Stand-Auditing-Services-min.png' },
          { id: 2, title: 'Health & Safety Services', image: '/images/Health_Safety_Services.png', description: 'Comprehensive safety management solutions', features: ['Stand audits and contractor assessments', 'Regulatory compliance reviews', 'Design verification and PTB issuance'], backgroundImage: '/images/heroimages/Health-Safety-Services-min.png' },
          { id: 3, title: 'Electrical Safety Services', image: '/images/img_frame_44.png', backgroundImage: '/images/heroimages/Electrical-Safety-Services-min.png' },
          { id: 4, title: 'Fire Safety Services', image: '/images/img_frame_44_438x282.png', backgroundImage: '/images/heroimages/Fire-Safety-Services-min.png' },
          { id: 5, title: 'Sustainability Solutions Services', image: '/images/img_frame_44_1.png', backgroundImage: '/images/heroimages/Sustainability-Solutions-Services-min.png' },
          { id: 6, title: 'Event Strategic Safety Services', image: '/images/img_frame_44_312x282.png', backgroundImage: '/images/heroimages/Event-Strategic-Safety-Services-min.png' },
          { id: 7, title: 'Event Strategic Management Services', image: '/images/img_frame_44_2.png', backgroundImage: '/images/heroimages/Event-Strategic-Management-Services-min.png' },
          { id: 8, title: 'Venue Fire Safety Services', image: '/images/img_frame_44_3.png', backgroundImage: '/images/heroimages/Venue-Fire-Safety-Services-min.png' },
          { id: 9, title: 'Health & Safety Training and Development Services', image: '/images/img_frame_44_4.png', backgroundImage: '/images/heroimages/Training-Development-Services-min.png' },
          { id: 10, title: 'Rigging Services', image: '/images/img_frame_44_5.png', backgroundImage: '/images/heroimages/Rigging-Services-min.png' },
          { id: 11, title: 'Engineering Services', image: '/images/img_2150440970_1.png', backgroundImage: '/images/heroimages/Engineering-Services-min.png' }
        ]);

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (): void => {
    console.log('Form submitted', formData);
    // add actual submission logic here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#150e24] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Use first service as hero background for simplicity
  const heroService = services[0];

  return (
    <div className="min-h-screen bg-[#150e24]">
      <Header />

      {/* Hero Section */}
      <HeroSection
        title={heroService.title}
        subtitle="Learn more about our services"
        backgroundImage={heroService.backgroundImage}
      />

      {/* Services Section */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0">
     
        
        

        {/* Contact Section */}
        <ContactSection/>
      </main>

      <Footer />
    </div>
  );
}
