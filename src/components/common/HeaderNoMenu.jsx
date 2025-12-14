'use client';

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// ---------- CONSTANTS ----------
const MENU_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/best-about-us' },
  { name: 'Our Services', href: '/best-services' },
  { name: 'How We Do IT', href: '/how-we-work' },
  { name: 'Contact Us', href: '/best-contact' }
];

const COUNTRY_LIST = [
  { name: 'India', flag: '/images/india.png' },
  { name: 'US', flag: '/images/us.png' },
  { name: 'UAE', flag: '/images/uae.png' },
  { name: 'Europe', flag: '/images/europe.png' },
];

const LOGO_MENU = [
  { name: 'B4-GLOBAL 1', href: '/' },
  { name: 'B4-GLOBAL 2', href: '/best-rigging' },
  { name: 'B4-GLOBAL 3', href: '/best-electricals' },
];

// --------------------------------------------------------------------

const HeaderNoMenu = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRY_LIST[0]);
  const [isLogoMenuOpen, setIsLogoMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const countryRef = useRef(null);
  const logoMenuRef = useRef(null);

  const isActiveItem = useCallback((href) => pathname === href, [pathname]);

  const menuItems = useMemo(() => MENU_ITEMS, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCountry = () => setIsCountryOpen((prev) => !prev);
  const toggleLogoMenu = () => setIsLogoMenuOpen((prev) => !prev);

  // SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CLOSE DROPDOWNS ON OUTSIDE CLICK
  useEffect(() => {
    const handler = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setIsCountryOpen(false);
      }
      if (logoMenuRef.current && !logoMenuRef.current.contains(e.target)) {
        setIsLogoMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // COUNTRY DROPDOWN
  const renderCountryDropdown = () => (
    <div
      className={`
        absolute right-0 mt-3 w-36 z-50
        bg-[#0f111a] border border-[#3a3a4a]
        rounded shadow-xl overflow-hidden
        origin-top-right transition-all duration-200 ease-out
        ${isCountryOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
      `}
    >
      {COUNTRY_LIST.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-[#1b1d29] transition-colors"
          onClick={() => {
            setCountry(c);
            setIsCountryOpen(false);
          }}
        >
          <Image src={c.flag} width={20} height={14} alt={c.name} />
          <span className="font-outfit text-sm text-white">{c.name}</span>
        </div>
      ))}
    </div>
  );

  // LOGO DROPDOWN
  const renderLogoDropdown = () => (
    <div
      className={`
        absolute left-0 mt-3 w-40 z-50
        bg-[#0f111a] border border-[#3a3a4a]
        rounded shadow-xl overflow-hidden
        origin-top-left transition-all duration-200 ease-out
        ${isLogoMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
      `}
    >
   {LOGO_MENU.map((item) => (
  <Link key={item.name} href={item.href}>
    <button className="w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#1b1d29]">
      {item.name}
    </button>
  </Link>
))}
    </div>
  );

  // MAIN MENU
  const renderMenu = (isMobile = false) => (
    <ul className={isMobile ? 'space-y-4' : 'flex items-center gap-10'}>
      {menuItems.map((item) => {
        const active = isActiveItem(item.href);

        return (
          <li key={item.href} className="text-center group">
            <Link
              href={item.href}
              className={`
                block uppercase transition-all duration-300 hover:text-[#47d4aa]
                font-outfit
                ${active ? 'text-[#47d4aa] font-semibold' : 'text-white font-medium'}
              `}
              onClick={() => isMobile && setIsMenuOpen(false)}
            >
              {item.name}
            </Link>

            <div
              className={`
                h-0.5 bg-[#47d4aa] mx-auto mt-1.5 transition-all duration-300
                ${active ? 'w-[66px] opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-60'}
              `}
            ></div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <motion.header 
      className={`
        sticky top-0 z-50 w-full transition-all duration-500
        ${isScrolled 
          ? ' backdrop-blur-md  shadow-lg' 
          : 'bg-transparent'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER ROW */}
        <div className="flex items-center justify-between gap-2 py-4">
          {/* LOGO */}
          <div ref={logoMenuRef} className="relative">
            <button onClick={toggleLogoMenu}>
              <Image
                src="/images/img_logo.png"
                alt="BEST Logo"
                width={162}
                height={38}
                className="object-contain w-[162px] h-[38px]"
                priority
              />
            </button>
            {renderLogoDropdown()}
          </div>

          {/* DESKTOP MENU */}
          <div className=" lg:flex items-center justify-between flex-1">
            <Image
              src="/images/img_vector.svg"
              alt=""
              width={18}
              height={10}
              className="w-4  object-contain"
            />

          

            {/* COUNTRY */}
            <div ref={countryRef} className="relative">
              <button
                className="flex items-center gap-2 text-white font-outfit font-semibold text-base hover:text-[#47d4aa] transition-colors"
                onClick={toggleCountry}
              >
                {country.name}

                <Image src={country.flag} alt={country.name} width={18} height={14} />

                <Image
                  src="/images/img_vector.svg"
                  alt=""
                  width={18}
                  height={10}
                  className={`w-4  transition-transform duration-300 ${
                    isCountryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {renderCountryDropdown()}
            </div>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#47d4aa] transition-all"
            onClick={toggleMenu}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            lg:hidden transition-all duration-500 ease-out overflow-hidden
            ${isMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-3'}
          `}
        >
          <nav className={`
            BG-BLOBAL1 BG-BLOBAL2 BG-BLOBAL3 rounded-2xl p-6 mb-4 backdrop-blur-md
            ${isScrolled ? 'bg-[#150e24]/80' : ''}
          `}>
            {renderMenu(true)}

            {/* MOBILE COUNTRY */}
            <div ref={countryRef} className="relative flex justify-center mt-6 pt-4 border-t border-[#5e5d7799]">
              <button
                className="flex items-center gap-2 text-white font-outfit font-semibold text-base hover:text-[#47d4aa] transition"
                onClick={toggleCountry}
              >
                {country.name}

                <Image src={country.flag} width={18} height={14} alt={country.name} />

                <Image
                  src="/images/img_vector.svg"
                  width={8}
                  height={4}
                  alt=""
                  className={`w-2 h-1 transition-transform duration-300 ${isCountryOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {renderCountryDropdown()}
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default HeaderNoMenu;