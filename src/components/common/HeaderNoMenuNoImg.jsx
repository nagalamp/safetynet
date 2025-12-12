'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// ---------- CONSTANTS ----------
const MENU_ITEMS = []; 

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

const HeaderNoMenuNoImg = () => {

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [country, setCountry] = useState(COUNTRY_LIST[0]);
  const [isLogoMenuOpen, setIsLogoMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const countryRef = useRef(null);
  const logoMenuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCountry = () => setIsCountryOpen((prev) => !prev);
  const toggleLogoMenu = () => setIsLogoMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) setIsCountryOpen(false);
      if (logoMenuRef.current && !logoMenuRef.current.contains(e.target)) setIsLogoMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ===============================
  // COUNTRY DROPDOWN
  // ===============================

  const renderCountryDropdown = () => (
    <div
      className={`
        absolute right-0 mt-3 w-36 z-50 bg-[#130D22]
        border border-[#3a3a4a] rounded shadow-xl overflow-hidden
        origin-top-right transition-all duration-200 ease-out
        ${isCountryOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
      `}
    >
      {COUNTRY_LIST.map((c) => (
        <div
          key={c.name}
          className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-[#1b1d29]"
          onClick={() => {
            setCountry(c);
            setIsCountryOpen(false);
          }}
        >
          <Image src={c.flag} width={20} height={14} alt={c.name} />
          <span className="text-sm text-white font-outfit">{c.name}</span>
        </div>
      ))}
    </div>
  );

  // ===============================
  // LOGO DROPDOWN
  // ===============================

  const renderLogoDropdown = () => (
    <div
      className={`
        absolute left-0 mt-3 w-40 z-50 bg-[#130D22]
        border border-[#3a3a4a] rounded shadow-xl overflow-hidden
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

  // ===============================
  // HEADER
  // ===============================

  return (
    <motion.header
      className={`
        sticky top-0 z-50 w-full transition-all duration-500
        ${isScrolled ? 'bg-[#130D22] border-b border-[#312e5c]' : 'bg-[#130D22]'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1202px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between gap-2 py-4">

          {/* LOGO */}
          <div ref={logoMenuRef} className="relative">
            <button onClick={toggleLogoMenu}>
              <Image
                src="/images/img_logo.png"
                alt="BEST Logo"
                width={162}
                height={38}
                className="object-contain"
                priority
              />
            </button>
            {renderLogoDropdown()}
          </div>

          {/* COUNTRY SELECTOR */}
          <div className="flex items-center gap-6">
            <div ref={countryRef} className="relative">
              <button
                className="flex items-center gap-2 text-white font-outfit font-semibold text-base hover:text-[#47d4aa]"
                onClick={toggleCountry}
              >
                {country.name}
                <Image src={country.flag} alt={country.name} width={18} height={14} />
                <Image
                  src="/images/img_vector.svg"
                  alt=""
                  width={18}
                  height={10}
                  className={`transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {renderCountryDropdown()}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#47d4aa]"
            onClick={toggleMenu}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`
            lg:hidden transition-all duration-500 overflow-hidden
            ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="p-6 mt-2 rounded-2xl bg-[#130D22]">
            <div ref={countryRef} className="relative flex justify-center mt-2">
              <button
                className="flex items-center gap-2 text-white font-outfit font-semibold"
                onClick={toggleCountry}
              >
                {country.name}
                <Image src={country.flag} width={18} height={14} alt={country.name} />
                <Image
                  src="/images/img_vector.svg"
                  width={8}
                  height={4}
                  alt=""
                  className={`w-2 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {renderCountryDropdown()}
            </div>
          </div>
        </div>

      </div>
    </motion.header>
  );
};

export default HeaderNoMenuNoImg;
