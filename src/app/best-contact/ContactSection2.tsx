'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';
import ContactBanner from './ContactBanner';
import { useState } from 'react';

interface FormData {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    inquiryType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const onFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const onSubmit = () => {
    console.log("SUBMIT DATA:", formData);
  };

  return (
    <motion.section
      className="w-[90%] mx-auto py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="flex flex-col gap-16 items-center w-full">
        <div className="flex flex-col gap-10 items-center w-full max-w-[1202px]">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-stretch w-full">

            {/* Contact Image */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-10">
  
  {/* CONTACT BLOCK — 1 */}
  <div className="w-full max-w-[583px]">
    <div className="flex flex-row items-start gap-4 w-[583px] h-[238px]">

      {/* Icon */}
      <div className="relative w-[40px] h-[40px] flex-none">
        <div className="absolute left-[33.33%] right-[33.33%] top-[25%] bottom-[41.67%] bg-[#47D4AA] rounded-sm"></div>
        <div className="absolute left-[16.67%] right-[16.67%] top-[8.33%] bottom-[8.34%] bg-[#47D4AA] rounded-sm"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 w-[527px] text-white">

        <div className="flex flex-col gap-3">
          <p className="text-[20px] leading-[24px] font-outfit">Headquarters</p>
          <p className="text-[24px] leading-[30px] font-semibold font-outfit">
            United Kingdom (Global Head Quarters)
          </p>
        </div>

        <p className="opacity-60 text-[16px] leading-[24px] font-opensans">
          The Ridings 27 Ash Tree Close, Southwood Village, Farnborough Hampshire
          GU14 0QP Registered in England and Wales
        </p>

        <div className="flex flex-col">
          <p className="text-[20px] leading-[34px] font-semibold font-outfit">
            Company Number: 11546221
          </p>
          <p className="text-[20px] leading-[34px] font-semibold font-outfit">
            VAT Number: GB322950906
          </p>
        </div>

      </div>
    </div>
  </div>

  {/* CONTACT BLOCK — 2 (UPDATED INDIA ADDRESS) */}
  <div className="w-full max-w-[583px]">
    <div className="flex flex-row items-start gap-4 w-[583px]">

      {/* Icon */}
      <div className="relative w-[40px] h-[40px] flex-none">
        <div className="absolute left-[33.33%] right-[33.33%] top-[25%] bottom-[41.67%] bg-[#47D4AA] rounded-sm"></div>
        <div className="absolute left-[16.67%] right-[16.67%] top-[8.33%] bottom-[8.34%] bg-[#47D4AA] rounded-sm"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 w-[527px] text-white">

        {/* Titles */}
        <div className="flex flex-col gap-3">
          <p className="text-[20px] leading-[24px] font-outfit">Headquarters</p>
          <p className="text-[24px] leading-[30px] font-semibold font-outfit">
            India Address (Head Office)
          </p>
        </div>

        {/* Address */}
        <p className="opacity-60 text-[16px] leading-[24px] font-opensans">
          Bluelemon Events Safety Training India Pvt, Ltd.<br />
          No 4,5/1, Rich Homes Richmond Road, Richmond Town,<br />
          Bangalore-560025, Karnataka, India
        </p>

        {/* Company Info */}
        <div className="flex flex-col">
          <p className="text-[20px] leading-[34px] font-semibold font-outfit">
            The Corporate Identity Company
          </p>

          <p className="text-[20px] leading-[34px] font-semibold font-outfit">
            Number: U88230KA2023PTC172360
          </p>
        </div>

      </div>
    </div>
  </div>

</div>


            {/* Contact Form */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 bg-[#232233] border border-[#5F5D78] rounded p-6 -mt-40 z-10">

              <div className="w-[544px] h-[144px] font-outfit font-semibold text-[40px] leading-[120%] text-white flex-none">
                Get in touch to collaborate, and let’s achieve success together.
              </div>

              <div className="w-[544px] h-[52px] font-sans font-normal text-[16px] leading-[160%] text-white flex items-center flex-none">
                Thank you for your interest. Please leave your details below and we'll connect with you.
              </div>

              <div className="flex flex-col gap-4 w-full">
                <EditText
                  placeholder="Inquiry Type*"
                  value={formData.inquiryType}
                  onChange={(e) => onFormChange('inquiryType', e.target.value)}
                  layout_width="w-full"
                />

                {/* First Name & Last Name on the same row */}
                <div className="flex flex-row gap-4 w-full">
                  <EditText
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => onFormChange('firstName', e.target.value)}
                  />
                  <EditText
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => onFormChange('lastName', e.target.value)}
                  />
                </div>

                <EditText
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => onFormChange('email', e.target.value)}
                  layout_width="w-full"
                  type="email"
                />

                <EditText
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => onFormChange('phone', e.target.value)}
                  layout_width="w-full"
                  type="tel"
                />

                <TextArea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => onFormChange('message', e.target.value)}
                  layout_width="w-full"
                  rows={6}
                />
              </div>

              <div className="w-full">
                <button 
                  onClick={onSubmit}
                  className="w-full bg-[#f05623] text-[#f2f2f2] uppercase font-outfit font-semibold text-[20px] leading-[26px] py-3 px-6 hover:opacity-90 transition"
                >
                  SEND IT TO THE MOON
                </button>
              </div>
            </div>

          </div>
        </div>

        <ContactBanner
          iconSrc="/images/img_ic_outline_email.svg"
          title="E-Mail Address"
          value="hello@crosson.com"
          bgColor="bg-[#1f2937]"
        />
      </div>
    </motion.section>
  );
}
