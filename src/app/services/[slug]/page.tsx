'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import HeroSection from '../../best-services/HeroSection';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import ContactSection from '../../Home/ContactSection';
import { services } from '../../../data/services';
import ServicesSectionHorizontal from '../../Home/ServicesSectionHorizontal';
import HealthSafetySection from './serviceContent';
import ServiceCard from './ServiceCards';

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
    <div className="min-h-screen bg-[#150e24]">

      {/* Hero Section with Dynamic Background */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('${service.image}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <HeroSection />
      </div>

      {/* Service Details */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto bg-[#070B23] ">
          <div className="flex flex-col gap-8 justify-start items-center">

            {/* Stuart Mann Card */}
            <div className="w-full bg-[#232233] border-none rounded-[4px] flex flex-col lg:flex-row h-[360px]">
              <div className="flex-1 p-6 sm:p-8 lg:p-[38px] lg:mt-[58px]">
                <div className="flex flex-col gap-6 justify-start items-start">
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                    Event Experience
                  </h3>

                  <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                    Stuart is a seasoned health and safety practitioner with a rich history in the event, public, and commercial sectors since 1995.
                    As a Fellow of the International Institute of Risk and Safety Management, Stuart brings extensive expertise in strategic risk management,
                    emergency planning, business continuity, and commercial insurance risk management.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:self-center h-full">
                <Image
                  src="/images/servimage.png"
                  alt="Mr. Stuart Mann"
                  width={598}
                  height={798}
                  className="w-full h-full rounded-r-[3px] object-cover"
                />
              </div>
            </div>

            <Image
              src="/images/heroimages/Assets_Stand Auditing Services-min.png"
              alt=""
              width={400}
              height={400}
              className="rounded-r-[3px] object-cover"
            />


          </div>
        </div>
      </section>




      {/* Optional: Health & Safety Section */}
      {/* <HealthSafetySection /> */}

      {/* Horizontal Services & Contact */}
      <ServiceCard/>
      <ServicesSectionHorizontal />
      <ContactSection />
      <Footer />

    </div>
  );
}
