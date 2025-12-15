'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    <>
      {/* ================= CONTACT FORM SECTION ================= */}
      <motion.section
        className="w-[90%] mx-auto py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-16 items-center w-full">
          <div className="flex flex-col gap-10 items-center w-full max-w-[1202px]">

            {/* Title */}
            <div className="flex flex-col gap-4 justify-center items-center w-full px-4 sm:px-9">
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-[#000088] text-center leading-[51px]">
                Get In Touch
              </h2>
              <div className="w-[66px] h-1 bg-[#F05623]" />
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-stretch w-full">

              {/* Contact Form */}
              <div className="flex flex-col gap-6 w-full lg:w-1/2">

                <div className="flex flex-col gap-4 w-full">

                  {/* Inquiry Type */}
                  <div className="border border-[#5f5d78] rounded p-1 h-[52px] flex items-center">
                    <EditText
                      placeholder="Inquiry Type*"
                      value={formData.inquiryType}
                      onChange={(e) => onFormChange('inquiryType', e.target.value)}
                      layout_width="w-full"
                    />
                  </div>

                  {/* First & Last Name */}
                  <div className="flex gap-4 w-full">
                    <div className="border border-[#5f5d78] rounded p-1 h-[52px] flex items-center w-full">
                      <EditText
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => onFormChange('firstName', e.target.value)}
                      />
                    </div>

                    <div className="border border-[#5f5d78] rounded p-1 h-[52px] flex items-center w-full">
                      <EditText
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => onFormChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="border border-[#5f5d78] rounded p-1 h-[52px] flex items-center">
                    <EditText
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => onFormChange('email', e.target.value)}
                      layout_width="w-full"
                      type="email"
                    />
                  </div>

                  {/* Phone */}
                  <div className="border border-[#5f5d78] rounded p-1 h-[52px] flex items-center">
                    <EditText
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => onFormChange('phone', e.target.value)}
                      layout_width="w-full"
                      type="tel"
                    />
                  </div>

                  {/* Message */}
                  <div className="border border-[#5f5d78] rounded p-1">
                    <TextArea
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => onFormChange('message', e.target.value)}
                      layout_width="w-full"
                      rows={6}
                    />
                  </div>
                </div>

                <button
                  onClick={onSubmit}
                  className="w-full bg-[#f05623] text-[#f2f2f2] uppercase font-outfit font-semibold text-[20px] leading-[26px] py-3 hover:opacity-90 transition"
                >
                  SEND IT TO THE MOON
                </button>
              </div>

              {/* Image */}
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="w-full max-w-[540px]">
                  <Image
                    src="/images/img_rectangle_32.png"
                    alt="Professional discussion"
                    width={596}
                    height={482}
                    className="w-full h-auto rounded object-cover shadow-lg"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= CONTACT BANNER SECTION ================= */}
      <section className="w-full bg-black py-16">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <ContactBanner
            iconSrc="/images/img_ic_outline_email.svg"
            title="E-Mail Address"
            value="hello@crosson.com"
            bgColor="bg-black"
          />
        </div>
      </section>
    </>
  );
}
