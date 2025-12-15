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
      {/* ================= MAIN CONTACT SECTION ================= */}
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

              {/* ================= LEFT ADDRESS BLOCK ================= */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-10">

                {/* UK ADDRESS */}
                <div className="w-full max-w-[583px]">
                  <div className="flex flex-row items-start gap-4 w-[583px] h-[238px]">
                    <div className="relative w-[40px] h-[40px] flex-none">
                      <Image
                        src="/images/ContactUs/bx_map.png"
                        alt="Location Icon"
                        width={26}
                        height={33}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-[527px] text-white">
                      <div className="flex flex-col gap-3">
                        <p className="text-[20px] font-outfit">Headquarters</p>
                        <p className="text-[24px] font-semibold font-outfit">
                          United Kingdom (Global Head Quarters)
                        </p>
                      </div>

                      <p className="opacity-60 text-[16px] font-opensans">
                        The Ridings 27 Ash Tree Close, Southwood Village,
                        Farnborough Hampshire GU14 0QP
                      </p>

                      <div>
                        <p className="text-[20px] font-semibold font-outfit">
                          Company Number: 11546221
                        </p>
                        <p className="text-[20px] font-semibold font-outfit">
                          VAT Number: GB322950906
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* INDIA ADDRESS */}
                <div className="w-full max-w-[583px]">
                  <div className="flex flex-row items-start gap-4 w-[583px]">
                    <div className="relative w-[40px] h-[40px] flex-none">
                      <Image
                        src="/images/ContactUs/bx_map.png"
                        alt="Location Icon"
                        width={26}
                        height={33}
                      />
                    </div>

                    <div className="flex flex-col gap-4 w-[527px] text-white">
                      <div className="flex flex-col gap-3">
                        <p className="text-[20px] font-outfit">Headquarters</p>
                        <p className="text-[24px] font-semibold font-outfit">
                          India Address (Head Office)
                        </p>
                      </div>

                      <p className="opacity-60 text-[16px] font-opensans">
                        Bluelemon Events Safety Training India Pvt. Ltd.<br />
                        Richmond Road, Bangalore – 560025
                      </p>

                      <p className="text-[20px] font-semibold font-outfit">
                        CIN: U88230KA2023PTC172360
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= CONTACT FORM ================= */}
              <div className="flex flex-col gap-6 w-full lg:w-1/2 bg-[#232233] border border-[#5F5D78] rounded p-6 -mt-40 z-10">

                <h3 className="font-outfit font-semibold text-[40px] text-white">
                  Get in touch to collaborate, and let’s achieve success together.
                </h3>

                <p className="text-[16px] text-white opacity-80">
                  Please leave your details below and we'll connect with you.
                </p>

                <div className="flex flex-col gap-4">
                  <EditText
                    placeholder="Inquiry Type*"
                    value={formData.inquiryType}
                    onChange={(e) => onFormChange('inquiryType', e.target.value)}
                    layout_width="w-full"
                  />

                  <div className="flex gap-4">
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
                    type="email"
                    value={formData.email}
                    onChange={(e) => onFormChange('email', e.target.value)}
                    layout_width="w-full"
                  />

                  <EditText
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => onFormChange('phone', e.target.value)}
                    layout_width="w-full"
                  />

                  <TextArea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => onFormChange('message', e.target.value)}
                    rows={6}
                    layout_width="w-full"
                  />
                </div>

                <button
                  onClick={onSubmit}
                  className="w-full bg-[#f05623] text-white font-outfit font-semibold text-[20px] py-3 uppercase hover:opacity-90 transition"
                >
                  SEND IT TO THE MOON
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= CONTACT BANNER (SEPARATE SECTION) ================= */}
      <section className="w-full py-12 flex justify-center mt-10 bg-black">
        <ContactBanner
          iconSrc="/images/img_ic_outline_email.svg"
          title="E-Mail Address"
          value="hello@crosson.com"
          bgColor="bg-[#1f2937]"
        />
      </section>
    </>
  );
}
