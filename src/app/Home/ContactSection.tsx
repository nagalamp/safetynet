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
      className="w-[90%] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="flex flex-col gap-16 items-center w-full">
        <div className="flex flex-col gap-10 items-center w-full max-w-[1202px]">

          {/* Title */}
          <div className="flex flex-col gap-4 justify-center items-center w-full px-9">
            <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-[51px]">
              Get In Touch
            </h2>
            <div className="w-[66px] h-1 bg-[#47d4aa]" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-stretch w-full">

            {/* Contact Form */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2">

              <div className="flex flex-col gap-4 w-full">
                <EditText
                  placeholder="Inquiry Type*"
                  value={formData.inquiryType}
                  onChange={(e) => onFormChange('inquiryType', e.target.value)}
                  layout_width="w-full"
                />

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <EditText
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => onFormChange('firstName', e.target.value)}
                    layout_width="w-full"
                  />

                  <EditText
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => onFormChange('lastName', e.target.value)}
                    layout_width="w-full"
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

              <div className="flex justify-center lg:justify-start">
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
                  layout_width="auto"
                  onClick={onSubmit}
                />
              </div>
            </div>

            {/* Contact Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-[588px]">
                <Image
                  src="/images/img_rectangle_32.png"
                  alt="Professional discussion"
                  width={588}
                  height={476}
                  className="w-full h-auto rounded object-cover shadow-lg"
                />
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
