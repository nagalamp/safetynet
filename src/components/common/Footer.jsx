'use client';

import React from 'react';

const Footer = () => {
  const serviceLinks = [
   
 
    { name: 'Stand Auditing Services', href: '/services/stand-auditing-services' },
    { name: 'Health & Safety Services', href: '/services/health-safety-services' },
    { name: 'Electrical Safety Services', href: '/services/electrical-safety-services' },
    { name: 'Fire Safety Services', href: '/services/fire-safety-services' },
    { name: 'Event Strategic Safety Services', href: '/services/event-strategic-safety-services' },
    { name: 'Rigging Services', href: '/services/rigging-services' },
    { name: 'Engineering Services', href: '/services/engineering-services' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Accreditations', href: '/accreditations' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Contact US', href: '/contact' }
  ];

  const ukAddress = [
    'The Ridings 27 Ash Tree Close, l South wood Village,',
    'Farnborough Hampshire GU14 0QP',
    'Registered in England and Wales'
  ];

  const indiaAddress = [
    'No 4,5/1, Rich Homes Richmond Road,',
    'Richmond Town Bangalore-560025,',
    'Karnataka, India'
  ];

  return (
    <footer className="w-full bg-[#150e24] border-t border-[#5e5d774c]">
      <div className="max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-[26px]">
        <div className="flex flex-col space-y-8 lg:space-y-0">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-6">
            {/* UK Headquarters */}
            <div className="w-full lg:w-[32%]">
              <h3 
                className="text-white font-medium text-xl lg:text-[22px] mb-2.5"
                style={{ fontFamily: 'Outfit', lineHeight: '28px' }}
              >
                Headquarters
              </h3>
              <h4 
                className="text-white font-semibold text-2xl lg:text-[28px] mb-4"
                style={{ fontFamily: 'Outfit', lineHeight: '34px' }}
              >
                United Kingdom (Global Head Quarters)
              </h4>
              <p 
                className="text-[#c5c5ee] text-base lg:text-lg mb-5 leading-relaxed"
                style={{ fontFamily: 'Open Sans', lineHeight: '27px' }}
              >
                {ukAddress?.join(' ')}
              </p>
              <div className="space-y-4">
                <p 
                  className="text-white font-medium text-lg lg:text-xl"
                  style={{ fontFamily: 'Outfit', lineHeight: '26px' }}
                >
                  Company Number: 11546221
                </p>
                <p 
                  className="text-white font-medium text-lg lg:text-xl"
                  style={{ fontFamily: 'Outfit', lineHeight: '26px' }}
                >
                  VAT Number: GB322950906
                </p>
              </div>
            </div>

            {/* India Office & Services */}
            <div className="w-full lg:flex-1 flex flex-col lg:flex-row gap-6 lg:gap-6">
              {/* India Office */}
              <div className="w-full lg:w-[60%]">
                <h3 
                  className="text-white font-medium text-xl lg:text-[22px] mb-2"
                  style={{ fontFamily: 'Outfit', lineHeight: '28px' }}
                >
                  Headquarters
                </h3>
                <h4 
                  className="text-white font-semibold text-2xl lg:text-[28px] mb-4"
                  style={{ fontFamily: 'Outfit', lineHeight: '36px' }}
                >
                  India Address (Head Office)
                </h4>
                <h5 
                  className="text-white font-semibold text-xl lg:text-2xl mb-4"
                  style={{ fontFamily: 'Outfit', lineHeight: '33px' }}
                >
                  Bluelemon Events Safety Training India Pvt, Ltd.
                </h5>
                <address className="not-italic">
                  <ul className="space-y-0.5">
                    {indiaAddress?.map((line, index) => (
                      <li key={index}>
                        <a 
                          href="#" 
                          className="text-[#c5c5ee] text-base lg:text-lg hover:text-white transition-colors"
                          style={{ fontFamily: 'Open Sans', lineHeight: '27px' }}
                        >
                          {line}
                        </a>
                      </li>
                    ))}
                  </ul>
                </address>
                <p 
                  className="text-white font-medium text-lg lg:text-xl mt-6 lg:mt-8"
                  style={{ fontFamily: 'Outfit', lineHeight: '26px' }}
                >
                  The Corporate Identity Company
                </p>
                <p 
                  className="text-white font-medium text-lg lg:text-xl mt-4"
                  style={{ fontFamily: 'Outfit', lineHeight: '26px' }}
                >
                  Number: U88230KA2023PTC172360
                </p>
              </div>

              {/* Our Services */}
              <div className="w-full lg:w-auto">
                <h3 
                  className="text-white font-semibold text-2xl lg:text-[28px] mb-4"
                  style={{ fontFamily: 'Outfit', lineHeight: '36px' }}
                >
                  Our Services
                </h3>
                <nav>
                  <ul className="space-y-0.5">
                    {serviceLinks?.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link?.href} 
                          className="text-white text-base lg:text-lg hover:text-[#47d4aa] transition-colors block py-2"
                          style={{ fontFamily: 'Outfit', lineHeight: '39px' }}
                        >
                          {link?.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-auto">
              <h3 
                className="text-white font-semibold text-2xl lg:text-[28px] mb-4"
                style={{ fontFamily: 'Outfit', lineHeight: '36px' }}
              >
                Quick Link
              </h3>
              <nav>
                <ul className="space-y-0.5">
                  {quickLinks?.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link?.href} 
                        className="text-white text-base lg:text-lg hover:text-[#47d4aa] transition-colors block py-2"
                        style={{ fontFamily: 'Outfit', lineHeight: '39px' }}
                      >
                        {link?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 lg:pt-[66px]">
            {/* Divider Line */}
            <div className="w-full h-px bg-[#ffffff4c] mb-7"></div>
            
            {/* Copyright */}
            <div className="text-center">
              <p 
                className="text-white text-sm lg:text-base"
                style={{ fontFamily: 'Outfit', lineHeight: '21px' }}
              >
                Copyright © 2025 BEST
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;