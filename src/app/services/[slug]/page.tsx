'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import HeroSection from '../../best-services/HeroSection';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import ContactSection from '../../Home/ContactSection';
import { services } from '../../../data/services';
import ServicesSectionHorizontal from '../../Home/ServicesSectionHorizontal';
import HealthSafetySection from './serviceContent';



interface FormData {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}


export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });


  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (): void => {
    // Form submission logic here
  };

  if (!service) {
    return <p className="text-white text-center py-20">Service not found.</p>;
  }

  return (

    <div className="min-h-screen bg-[#150e24]" style={{ backgroundImage: `url('/images/img_image_9.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <Header />
      <HeroSection />
      {/* <HealthSafetySection /> */}



      <ServicesSectionHorizontal />
      <ContactSection
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleFormSubmit}
      />
      <Footer />


    </div>



  );
}
