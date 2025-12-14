'use client';

import { useState } from 'react';
import Image from 'next/image';

// -------------------- SECTION DATA --------------------
const sectionsData = [
  {
    id: 'tech-gdpr',
    title: 'Information Technology and GDPR',
    hasTopDivider: false,
    hasBottomDivider: false,
    content: [
      "All information technology systems used by BEST are company-owned; no personal systems are allowed to connect to our internal systems. BEST utilizes Microsoft Office 365 and SharePoint for all document communication and storage, ensuring a secure environment with regularly updated passwords. Anti-virus protection is provided by Norton 360 and is installed on all our systems, including smartphones and tablets.",
      "Stand assessment tracking is conducted using Kohezion database software, protected by 128-bit encryption. PlanGrid (Autodesk) Building Software is employed for on-site management, task tracking, and photography. It is accessible on BEST Apple iPads, with the data centre set to the European Data Centre. Staff members are prohibited from taking photographs on personal phones.",
      "Jot Forms are employed for information gathering during stand assessments and site inspections. All data is encrypted, and pictures and information are directly sent to the server, not stored on the device.",
      "BEST is registered with the UK Data Protection Agency as a Data Handler, ensuring compliance with all current UK and EU requirements on GDPR. This requirement is extended to cover all our activities globally."
    ]
  },
  {
    id: 'environmental',
    title: 'Environmental and Sustainability',
    hasTopDivider: true,
    hasBottomDivider: true,
    content: [
      "BEST is committed to minimizing our environmental impact and promoting sustainable practices across all our operations. We adhere to the ISO 14001 environmental management standard and continuously work to reduce our carbon footprint.",
      "Our sustainability initiatives include using FSC-certified timber, implementing waste reduction strategies with a target of 85% recycling rate, and preferring local suppliers to reduce transportation emissions. All our packaging materials are either reusable or recyclable.",
      "We monitor our energy consumption across all offices and implement energy-efficient lighting and equipment. Our team undergoes regular environmental awareness training to ensure best practices are followed on every project."
    ]
  },
  {
    id: 'help',
    title: 'Help and Assistance',
    hasTopDivider: false,
    hasBottomDivider: false,
    content: [
      "Our dedicated support team is available 24/7 to assist with any queries or issues you may encounter. We believe in providing comprehensive support throughout your project lifecycle.",
      "We also offer on-site technical assistance, remote troubleshooting, and comprehensive documentation for all our services."
    ],
    cards: [
      {
        title: 'Emergency Support',
        info: [
          "24/7 hotline: +44 (0) 20 7946 0958",
          "Email: emergency@best.com",
          "Available for urgent site issues and critical problems"
        ]
      },
      {
        title: 'General Inquiries',
        info: [
          "Phone: +44 (0) 20 7946 0950",
          "Email: info@best.com",
          "Mon-Fri: 8:00 AM - 6:00 PM GMT"
        ]
      }
    ]
  },
  {
    id: 'risk',
    title: 'Risk Assessment',
    hasTopDivider: true,
    hasBottomDivider: true,
    content: [
      "BEST employs a comprehensive risk assessment methodology for all projects, ensuring potential hazards are identified and mitigated before work commences. Our risk management process follows ISO 31000 standards.",
      "All risk assessments are documented, reviewed regularly, and communicated to all relevant stakeholders."
    ],
    listItems: [
      "Health & Safety hazards",
      "Structural integrity risks",
      "Electrical safety",
      "Fire safety protocols",
      "Environmental impacts",
      "Project timeline risks"
    ]
  },
  {
    id: 'methods',
    title: 'Method Statements',
    hasTopDivider: false,
    hasBottomDivider: false,
    content: [
      "Our method statements provide detailed, step-by-step guides for all operational activities, ensuring consistency, quality, and safety across all projects.",
      "All method statements are reviewed by safety experts and updated regularly."
    ],
    cards: [
      {
        title: 'Standard Method Statements',
        info: [
          "Site setup and mobilization",
          "Structural installation procedures",
          "Electrical installation methods",
          "Health and safety protocols",
          "Quality control processes"
        ]
      },
      {
        title: 'Compliance Features',
        info: [
          "CDM 2015 compliant",
          "ISO 9001 aligned",
          "Regular audits and updates",
          "Stakeholder approved",
          "Site-specific adaptations"
        ]
      }
    ]
  },
  {
    id: 'env-policies',
    title: 'Environmental Policies',
    hasTopDivider: true,
    hasBottomDivider: false,
    content: [
      "BEST is committed to environmental excellence and sustainable development.",
      "We perform regular audits and work with eco-friendly suppliers."
    ],
    listItems: [
      "♻️ Reduce waste by 50% by 2025",
      "🌱 Source 100% sustainable materials",
      "💧 Reduce water consumption by 30%",
      "⚡ Transition to 100% renewable energy"
    ]
  }
];

// -------------------- COMPONENT --------------------
const ExpandableInfoSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleExpandToggle = (sectionId: string) => {
    setExpandedSection(prev => (prev === sectionId ? null : sectionId));
  };

  return (
    <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 mt-10">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-4">

        {sectionsData.map(section => (
          <div key={section.id} className="flex flex-col gap-4 w-full">

            {section.hasTopDivider && (
              <div className="w-full h-[2px] bg-[#ffffff33]" />
            )}

            {/* CLICKABLE HEADER (TITLE + ICON) */}
            <div
              onClick={() => handleExpandToggle(section.id)}
              className="flex justify-between items-center w-full cursor-pointer select-none"
              role="button"
              aria-expanded={expandedSection === section.id}
            >
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold text-white">
                {section.title}
              </h3>

              <div
                className={`transition-transform duration-300 ${
                  expandedSection === section.id ? 'rotate-180' : ''
                }`}
              >
                <Image
                  src={
                    expandedSection === section.id
                      ? '/images/Close.svg'
                      : '/images/Open.svg'
                  }
                  alt="toggle"
                  width={44}
                  height={44}
                  className="w-8 h-8"
                />
              </div>
            </div>

            {/* EXPANDABLE CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                expandedSection === section.id
                  ? 'max-h-[2000px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col gap-4 w-full">

                {/* PARAGRAPHS */}
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-[16px] sm:text-[18px] font-opensans leading-[28px] sm:leading-[30px] text-white"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* CARDS */}
                {section.cards && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {section.cards.map((card, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0f1442] p-4 rounded-lg flex flex-col gap-2"
                      >
                        <h4 className="text-[18px] font-outfit font-bold text-teal-300">
                          {card.title}
                        </h4>
                        {card.info.map((line, idy) => (
                          <p key={idy} className="text-white text-[14px]">
                            {line}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* LIST ITEMS */}
                {section.listItems && (
                  <div className="w-full bg-[#0f1442] p-4 rounded-lg">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white">
                      {section.listItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-teal-300">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>

            {section.hasBottomDivider && (
              <div className="w-full h-[2px] bg-[#ffffff33]" />
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

export default ExpandableInfoSection;
