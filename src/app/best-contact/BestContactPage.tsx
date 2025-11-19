'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

interface ContactFormData {
  serviceType: string
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectDetails: string
  consultationMethod: string
  urgencyLevel: string
  message: string
}

interface OfficeLocation {
  id: number
  country: string
  city: string
  address: string
  phone: string
  email: string
  hours: string
  mapCoords: string
}

interface FAQ {
  id: number
  question: string
  answer: string
}

export default function BestContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    serviceType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    consultationMethod: '',
    urgencyLevel: '',
    message: ''
  })

  const [selectedLocation, setSelectedLocation] = useState<string>('UK')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const officeLocations: OfficeLocation[] = [
    {
      id: 1,
      country: 'UK',
      city: 'London',
      address: '123 Safety Street, London, SW1A 1AA, United Kingdom',
      phone: '+44 20 7123 4567',
      email: 'uk@bestsafety.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
      mapCoords: '51.5074,-0.1278'
    },
    {
      id: 2,
      country: 'UAE',
      city: 'Dubai',
      address: 'Office 401, Business Bay Tower, Dubai, UAE',
      phone: '+971 4 123 4567',
      email: 'uae@bestsafety.com',
      hours: 'Sun-Thu: 9:00 AM - 6:00 PM GST',
      mapCoords: '25.2048,55.2708'
    },
    {
      id: 3,
      country: 'India',
      city: 'Mumbai',
      address: '5th Floor, Tech Park, Andheri East, Mumbai 400069, India',
      phone: '+91 22 1234 5678',
      email: 'india@bestsafety.com',
      hours: 'Mon-Sat: 9:30 AM - 6:30 PM IST',
      mapCoords: '19.0760,72.8777'
    }
  ]

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What health and safety services does BEST provide?',
      answer: 'BEST provides comprehensive health and safety services including stand auditing, electrical safety assessments, fire safety services, sustainability solutions, event strategic safety management, venue fire safety, health & safety training, rigging services, and engineering consultations.'
    },
    {
      id: 2,
      question: 'How can I get pricing for your services?',
      answer: 'Pricing varies based on project scope, location, and specific requirements. Please contact us with your project details for a customized quote. We offer competitive rates and transparent pricing for all our services across UK, UAE, and India.'
    },
    {
      id: 3,
      question: 'What is your consultation process?',
      answer: 'Our consultation process begins with understanding your specific requirements through an initial assessment. We then provide recommendations, develop customized safety plans, implement solutions, and provide ongoing support with detailed reporting.'
    },
    {
      id: 4,
      question: 'Do you provide emergency safety consultation?',
      answer: 'Yes, we offer 24/7 emergency consultation services for critical safety situations. Contact our emergency hotline for immediate assistance with urgent safety concerns or incidents requiring expert intervention.'
    },
    {
      id: 5,
      question: 'Which countries do you operate in?',
      answer: 'BEST operates primarily in the United Kingdom, United Arab Emirates, and India. We have established offices and certified professionals in these regions to provide localized expertise and support.'
    }
  ]

  const handleFormChange = (field: keyof ContactFormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFormSubmit = (): void => {
    console.log('Form submitted:', formData)
    // Form submission logic here
  }

  const toggleFAQ = (id: number): void => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-[#150e24]" style={{ backgroundImage: `url('/images/img_image_9.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <section className="w-full bg-[linear-gradient(180deg,#2c008700_0%,#040711_100%)] border-b border-[#312e5c] pt-8 pb-16 px-4">
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-8 items-center w-full">
              <h1 className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[64px] font-outfit font-bold leading-tight text-white text-center" style={{ lineHeight: '76px' }}>
                <span className="text-white">CONTACT OUR SAFETY EXPERTS </span>
                <span className="text-[#47d4aa]">&gt;&gt;</span>
              </h1>
              
              <div className="flex flex-row justify-center items-center w-full">
                <div className="w-[8px] h-[80px] bg-[#47d4aa]"></div>
                <p className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-outfit font-normal leading-tight text-white text-center w-[80%] ml-6" style={{ lineHeight: '40px' }}>
                  <span className="font-normal">Get professional consultation and support from our globally certified team across</span>
                  <span className="font-bold"> UK, UAE, and INDIA</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-12 items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-full max-w-[400px]">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Send us a Message
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Form and Contact Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                {/* Contact Form */}
                <div className="bg-[#2c0087] border border-[#ffffff33] rounded-lg p-8">
                  <div className="flex flex-col gap-6 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <EditText
                        placeholder="Service Type*"
                        value={formData.serviceType}
                        onChange={(e) => handleFormChange('serviceType', e.target.value)}
                        layout_width="full"
                      />
                      <select
                        className="w-full px-4 py-3 bg-[#150e24] border border-[#5e5d77] rounded text-white text-base font-open-sans"
                        value={formData.urgencyLevel}
                        onChange={(e) => handleFormChange('urgencyLevel', e.target.value)}
                      >
                        <option value="">Urgency Level*</option>
                        <option value="low">Low - Within 2 weeks</option>
                        <option value="medium">Medium - Within 1 week</option>
                        <option value="high">High - Within 24-48 hours</option>
                        <option value="emergency">Emergency - Immediate</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <EditText
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={(e) => handleFormChange('firstName', e.target.value)}
                        layout_width="full"
                      />
                      <EditText
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={(e) => handleFormChange('lastName', e.target.value)}
                        layout_width="full"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <EditText
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={(e) => handleFormChange('email', e.target.value)}
                        layout_width="full"
                        type="email"
                      />
                      <EditText
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                        layout_width="full"
                        type="tel"
                      />
                    </div>

                    <EditText
                      placeholder="Company/Organization"
                      value={formData.company}
                      onChange={(e) => handleFormChange('company', e.target.value)}
                      layout_width="full"
                    />

                    <select
                      className="w-full px-4 py-3 bg-[#150e24] border border-[#5e5d77] rounded text-white text-base font-open-sans"
                      value={formData.consultationMethod}
                      onChange={(e) => handleFormChange('consultationMethod', e.target.value)}
                    >
                      <option value="">Preferred Consultation Method*</option>
                      <option value="in-person">In-Person Meeting</option>
                      <option value="video-call">Video Call</option>
                      <option value="phone-call">Phone Call</option>
                      <option value="email">Email Correspondence</option>
                    </select>

                    <TextArea
                      placeholder="Project Details & Specific Requirements*"
                      value={formData.projectDetails}
                      onChange={(e) => handleFormChange('projectDetails', e.target.value)}
                      layout_width="full"
                      rows={4}
                    />

                    <TextArea
                      placeholder="Additional Message"
                      value={formData.message}
                      onChange={(e) => handleFormChange('message', e.target.value)}
                      layout_width="full"
                      rows={3}
                    />

                    <Button
                      text="SEND MESSAGE"
                      text_font_size="18"
                      text_font_family="Outfit"
                      text_font_weight="600"
                      text_line_height="24px"
                      text_color="#ffffff"
                      fill_background_color="#f05623"
                      border_border_radius="4px"
                      padding="14px 28px"
                      layout_width="full"
                      onClick={handleFormSubmit}
                    />
                  </div>
                </div>

                {/* Quick Contact Info */}
                <div className="flex flex-col gap-8">
                  <div className="bg-[#150e24] border border-[#5e5d77] rounded-lg p-6">
                    <h3 className="text-[24px] font-outfit font-semibold text-white mb-6">Quick Contact</h3>
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-row gap-4 items-center">
                        <div className="w-12 h-12 bg-[#47d4aa] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/img_line_md_phone_call.svg"
                            alt="Phone icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <p className="text-[16px] font-outfit font-medium text-[#47d4aa]">24/7 Emergency</p>
                          <p className="text-[18px] font-outfit font-bold text-white">+44 800 BEST-911</p>
                        </div>
                      </div>

                      <div className="flex flex-row gap-4 items-center">
                        <div className="w-12 h-12 bg-[#f05623] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/img_ic_outline_email.svg"
                            alt="Email icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <p className="text-[16px] font-outfit font-medium text-[#47d4aa]">General Inquiry</p>
                          <p className="text-[18px] font-outfit font-bold text-white">info@bestsafety.com</p>
                        </div>
                      </div>

                      <div className="flex flex-row gap-4 items-center">
                        <div className="w-12 h-12 bg-[#2c0087] rounded-full flex items-center justify-center">
                          <Image
                            src="/images/img_uil_linkedin.svg"
                            alt="LinkedIn icon"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <p className="text-[16px] font-outfit font-medium text-[#47d4aa]">Professional Network</p>
                          <p className="text-[18px] font-outfit font-bold text-white">LinkedIn: BEST Safety</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Booking */}
                  <div className="bg-[#47d4aa] rounded-lg p-6">
                    <h3 className="text-[20px] font-outfit font-bold text-white mb-4">Book Consultation</h3>
                    <p className="text-[16px] font-open-sans font-normal text-white mb-6" style={{ lineHeight: '24px' }}>
                      Schedule a professional consultation with our certified safety experts
                    </p>
                    <Button
                      text="BOOK NOW"
                      text_font_size="16"
                      text_font_family="Outfit"
                      text_font_weight="600"
                      text_line_height="22px"
                      text_color="#47d4aa"
                      fill_background_color="#ffffff"
                      border_border_radius="4px"
                      padding="12px 24px"
                      layout_width="full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="w-full bg-[#150e24] py-16 px-4">
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-12 items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-full max-w-[400px]">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Our Global Offices
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Location Selector */}
              <div className="flex flex-row gap-4 justify-center">
                {officeLocations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.country)}
                    className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                      selectedLocation === location.country
                        ? 'bg-[#47d4aa] border-[#47d4aa] text-white'
                        : 'bg-transparent border-[#5e5d77] text-white hover:border-[#47d4aa]'
                    }`}
                  >
                    <span className="text-[16px] font-outfit font-semibold">{location.country}</span>
                  </button>
                ))}
              </div>

              {/* Office Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                {/* Office Information */}
                <div className="bg-[#2c0087] border border-[#ffffff33] rounded-lg p-8">
                  {officeLocations
                    .filter(office => office.country === selectedLocation)
                    .map((office) => (
                      <div key={office.id} className="flex flex-col gap-6">
                        <div className="flex flex-row gap-4 items-center mb-6">
                          <div className="w-16 h-16 bg-[#47d4aa] rounded-full flex items-center justify-center">
                            <span className="text-[24px] font-outfit font-bold text-white">{office.country}</span>
                          </div>
                          <div>
                            <h3 className="text-[28px] font-outfit font-bold text-white">{office.city}</h3>
                            <p className="text-[18px] font-outfit font-medium text-[#47d4aa]">{office.country} Office</p>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="flex flex-row gap-4 items-start">
                            <div className="w-6 h-6 bg-[#47d4aa] rounded-full flex items-center justify-center mt-1">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <div>
                              <p className="text-[14px] font-outfit font-medium text-[#47d4aa] uppercase tracking-wider">Address</p>
                              <p className="text-[16px] font-open-sans font-normal text-white mt-1" style={{ lineHeight: '24px' }}>
                                {office.address}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-row gap-4 items-start">
                            <div className="w-6 h-6 bg-[#f05623] rounded-full flex items-center justify-center mt-1">
                              <Image
                                src="/images/img_line_md_phone_call.svg"
                                alt="Phone"
                                width={14}
                                height={14}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] font-outfit font-medium text-[#47d4aa] uppercase tracking-wider">Phone</p>
                              <p className="text-[18px] font-outfit font-bold text-white mt-1">{office.phone}</p>
                            </div>
                          </div>

                          <div className="flex flex-row gap-4 items-start">
                            <div className="w-6 h-6 bg-[#2c0087] border-2 border-[#47d4aa] rounded-full flex items-center justify-center mt-1">
                              <Image
                                src="/images/img_ic_outline_email.svg"
                                alt="Email"
                                width={14}
                                height={14}
                              />
                            </div>
                            <div>
                              <p className="text-[14px] font-outfit font-medium text-[#47d4aa] uppercase tracking-wider">Email</p>
                              <p className="text-[18px] font-outfit font-bold text-white mt-1">{office.email}</p>
                            </div>
                          </div>

                          <div className="flex flex-row gap-4 items-start">
                            <div className="w-6 h-6 bg-[#47d4aa] rounded-full flex items-center justify-center mt-1">
                              <div className="w-3 h-3 border border-white rounded"></div>
                            </div>
                            <div>
                              <p className="text-[14px] font-outfit font-medium text-[#47d4aa] uppercase tracking-wider">Hours</p>
                              <p className="text-[16px] font-open-sans font-normal text-white mt-1">{office.hours}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Interactive Map Placeholder */}
                <div className="bg-[#150e24] border border-[#5e5d77] rounded-lg p-8 flex flex-col items-center justify-center">
                  <div className="w-full h-[400px] bg-[#2c0087] rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#47d4aa] via-[#2c0087] to-[#f05623] opacity-20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-[#47d4aa] rounded-full flex items-center justify-center mx-auto mb-6">
                        <Image
                          src="/images/img_vector.svg"
                          alt="Map location pin"
                          width={48}
                          height={48}
                          className="filter brightness-0 invert"
                        />
                      </div>
                      <h4 className="text-[24px] font-outfit font-bold text-white mb-4">Interactive Map</h4>
                      <p className="text-[16px] font-open-sans font-normal text-white mb-6" style={{ lineHeight: '24px' }}>
                        Explore our {selectedLocation} office location with detailed directions and nearby landmarks
                      </p>
                      <Button
                        text="VIEW ON GOOGLE MAPS"
                        text_font_size="14"
                        text_font_family="Outfit"
                        text_font_weight="600"
                        text_line_height="18px"
                        text_color="#2c0087"
                        fill_background_color="#47d4aa"
                        border_border_radius="4px"
                        padding="10px 20px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 px-4">
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-12 items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-full max-w-[500px]">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Frequently Asked Questions
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* FAQ List */}
              <div className="flex flex-col gap-4 w-full max-w-[800px]">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-[#2c0087] border border-[#ffffff33] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full p-6 text-left flex flex-row justify-between items-center hover:bg-[#3d1ba8] transition-colors duration-200"
                    >
                      <h3 className="text-[18px] font-outfit font-semibold text-white pr-4" style={{ lineHeight: '24px' }}>
                        {faq.question}
                      </h3>
                      <div className={`transform transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180' : ''}`}>
                        <Image
                          src="/images/img_vector.svg"
                          alt="Expand"
                          width={16}
                          height={8}
                          className="filter brightness-0 invert"
                        />
                      </div>
                    </button>
                    
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-[16px] font-open-sans font-normal text-white" style={{ lineHeight: '24px' }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Banner */}
        <section className="w-full bg-[#f05623] py-8 px-4">
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/images/img_line_md_phone_call.svg"
                    alt="Emergency phone"
                    width={32}
                    height={32}
                    className="filter brightness-0"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-[24px] font-outfit font-bold text-white">Emergency Safety Consultation</h3>
                  <p className="text-[16px] font-open-sans font-normal text-white" style={{ lineHeight: '22px' }}>
                    24/7 immediate response for critical safety situations
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="text-center sm:text-right">
                  <p className="text-[32px] font-outfit font-bold text-white">+44 800 BEST-911</p>
                  <p className="text-[14px] font-outfit font-medium text-white">Available 24/7 across all regions</p>
                </div>
                <Button
                  text="CALL NOW"
                  text_font_size="16"
                  text_font_family="Outfit"
                  text_font_weight="600"
                  text_line_height="22px"
                  text_color="#f05623"
                  fill_background_color="#ffffff"
                  border_border_radius="4px"
                  padding="12px 24px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Media & Professional Networks */}
        <section className="w-full bg-[#150e24] py-16 px-4">
          <div className="max-w-[1202px] mx-auto">
            <div className="flex flex-col gap-12 items-center w-full">
              {/* Section Header */}
              <div className="flex flex-col gap-2 items-center w-full max-w-[500px]">
                <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold leading-tight text-white text-center" style={{ lineHeight: '51px' }}>
                  Connect With Us
                </h2>
                <div className="w-[66px] h-1 bg-[#47d4aa]"></div>
              </div>

              {/* Social Media Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {[
                  { platform: 'LinkedIn', handle: '@best-safety-services', icon: '/images/img_uil_linkedin.svg', color: '#0077B5', description: 'Professional updates and industry insights' },
                  { platform: 'Twitter', handle: '@BESTSafety', icon: '/images/img_fa6_brands_square_x_twitter.svg', color: '#1DA1F2', description: 'Latest news and safety tips' },
                  { platform: 'Facebook', handle: 'BESTHealthSafety', icon: '/images/img_uil_facebook.svg', color: '#1877F2', description: 'Community and event updates' },
                  { platform: 'Instagram', handle: '@bestsafety', icon: '/images/img_fa_brands_instagram_square.svg', color: '#E4405F', description: 'Behind-the-scenes content' }
                ].map((social, index) => (
                  <div key={index} className="bg-[#2c0087] border border-[#ffffff33] rounded-lg p-6 text-center hover:bg-[#3d1ba8] transition-colors duration-300 cursor-pointer">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: social.color }}>
                      <Image
                        src={social.icon}
                        alt={`${social.platform} icon`}
                        width={28}
                        height={28}
                        className="filter brightness-0 invert"
                      />
                    </div>
                    <h3 className="text-[18px] font-outfit font-bold text-white mb-2">{social.platform}</h3>
                    <p className="text-[16px] font-outfit font-medium text-[#47d4aa] mb-3">{social.handle}</p>
                    <p className="text-[14px] font-open-sans font-normal text-white" style={{ lineHeight: '20px' }}>
                      {social.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}