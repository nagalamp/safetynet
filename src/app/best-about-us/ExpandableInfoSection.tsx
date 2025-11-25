'use client';

import { useState } from 'react';
import Image from 'next/image';

const ExpandableInfoSection = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const handleExpandToggle = (sectionId: string) => {
        setExpandedSection(current => current === sectionId ? null : sectionId);
    };

    const sections = [
        {
            id: 'tech-gdpr',
            title: 'Information Technology and GDPR',
            content: (
                <>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        All information technology systems used by BEST are company-owned; no personal systems are allowed to connect to our internal systems. BEST utilizes Microsoft Office 365 and SharePoint for all document communication and storage, ensuring a secure environment with regularly updated passwords. Anti-virus protection is provided by Norton 360 and is installed on all our systems, including smartphones and tablets.
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        Stand assessment tracking is conducted using Kohezion database software, protected by 128-bit encryption. PlanGrid (Autodesk) Building Software is employed for on-site management, task tracking, and photography. It is accessible on BEST Apple iPads, with the data centre set to the European Data Centre. Staff members are prohibited from taking photographs on personal phones.
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        Jot Forms are employed for information gathering during stand assessments and site inspections. All data is encrypted, and pictures and information are directly sent to the server, not stored on the device.
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        BEST is registered with the UK Data Protection Agency as a Data Handler, ensuring compliance with all current UK and EU requirements on GDPR. This requirement is extended to cover all our activities globally.
                    </p>
                </>
            ),
            hasTopDivider: false,
            hasBottomDivider: false,
            iconSize: 'small'
        },
        {
            id: 'environmental',
            title: 'Environmental and Sustainability',
            content: (
                <>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        BEST is committed to minimizing our environmental impact and promoting sustainable practices across all our operations. We adhere to the ISO 14001 environmental management standard and continuously work to reduce our carbon footprint.
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        Our sustainability initiatives include using FSC-certified timber, implementing waste reduction strategies with a target of 85% recycling rate, and preferring local suppliers to reduce transportation emissions. All our packaging materials are either reusable or recyclable.
                    </p>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        We monitor our energy consumption across all offices and implement energy-efficient lighting and equipment. Our team undergoes regular environmental awareness training to ensure best practices are followed on every project.
                    </p>
                </>
            ),
            hasTopDivider: true,
            hasBottomDivider: true,
            iconSize: 'small'
        },
        {
            id: 'help',
            title: 'Help and Assistance',
            content: (
                <>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        Our dedicated support team is available 24/7 to assist with any queries or issues you may encounter. We believe in providing comprehensive support throughout your project lifecycle.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        <div className="bg-[#0f1442] p-6 rounded-lg">
                            <h4 className="text-[18px] font-outfit font-bold text-teal-300 mb-3">Emergency Support</h4>
                            <p className="text-white text-[14px]">24/7 hotline: +44 (0) 20 7946 0958</p>
                            <p className="text-white text-[14px]">Email: emergency@best.com</p>
                            <p className="text-white text-[14px] mt-2">Available for urgent site issues and critical problems</p>
                        </div>
                        <div className="bg-[#0f1442] p-6 rounded-lg">
                            <h4 className="text-[18px] font-outfit font-bold text-teal-300 mb-3">General Inquiries</h4>
                            <p className="text-white text-[14px]">Phone: +44 (0) 20 7946 0950</p>
                            <p className="text-white text-[14px]">Email: info@best.com</p>
                            <p className="text-white text-[14px] mt-2">Mon-Fri: 8:00 AM - 6:00 PM GMT</p>
                        </div>
                    </div>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        We also offer on-site technical assistance, remote troubleshooting, and comprehensive documentation for all our services. Our knowledge base contains detailed guides, FAQs, and video tutorials to help you get the most out of our services.
                    </p>
                </>
            ),
            hasTopDivider: false,
            hasBottomDivider: false,
            iconSize: 'small'
        },
        {
            id: 'risk',
            title: 'Risk Assessment',
            content: (
                <>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        BEST employs a comprehensive risk assessment methodology for all projects, ensuring potential hazards are identified and mitigated before work commences. Our risk management process follows ISO 31000 standards.
                    </p>
                    <div className="w-full bg-[#0f1442] p-6 rounded-lg">
                        <h4 className="text-[20px] font-outfit font-bold text-teal-300 mb-4">Key Risk Categories</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
                            <li className="flex items-start">
                                <span className="text-teal-300 mr-2">•</span>
                                <span>Health & Safety hazards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-300 mr-2">•</span>
                                <span>Structural integrity risks</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-300 mr-2">•</span>
                                <span>Electrical safety</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-300 mr-2">•</span>
                                <span>Fire safety protocols</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-300 mr-2">•</span>
                                <span>Environmental impacts</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-teal-300 mr-2">•</span>
                                <span>Project timeline risks</span>
                            </li>
                        </ul>
                    </div>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        All risk assessments are documented, reviewed regularly, and communicated to all relevant stakeholders. We conduct site-specific risk assessments for each project location and maintain a central risk register that is updated in real-time.
                    </p>
                </>
            ),
            hasTopDivider: true,
            hasBottomDivider: true,
            iconSize: 'small'
        },
        {
            id: 'methods',
            title: 'Method Statements',
            content: (
                <>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        Our method statements provide detailed, step-by-step guides for all operational activities, ensuring consistency, quality, and safety across all projects. Each method statement is tailored to specific project requirements and site conditions.
                    </p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#0f1442] p-6 rounded-lg">
                            <h4 className="text-[18px] font-outfit font-bold text-teal-300 mb-3">Standard Method Statements</h4>
                            <ul className="text-white text-[14px] space-y-2">
                                <li>• Site setup and mobilization</li>
                                <li>• Structural installation procedures</li>
                                <li>• Electrical installation methods</li>
                                <li>• Health and safety protocols</li>
                                <li>• Quality control processes</li>
                            </ul>
                        </div>
                        <div className="bg-[#0f1442] p-6 rounded-lg">
                            <h4 className="text-[18px] font-outfit font-bold text-teal-300 mb-3">Compliance Features</h4>
                            <ul className="text-white text-[14px] space-y-2">
                                <li>• CDM 2015 compliant</li>
                                <li>• ISO 9001 aligned</li>
                                <li>• Regular audits and updates</li>
                                <li>• Stakeholder approved</li>
                                <li>• Site-specific adaptations</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        All method statements are developed by qualified professionals, reviewed by safety experts, and approved by project managers before implementation. They are living documents that are updated based on lessons learned and changing site conditions.
                    </p>
                </>
            ),
            hasTopDivider: false,
            hasBottomDivider: false,
            iconSize: 'small'
        },
        {
            id: 'env-policies',
            title: 'Environmental Policies',
            content: (
                <>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        BEST is committed to environmental excellence and sustainable development. Our environmental policies are integrated into every aspect of our operations, from project planning to execution and decommissioning.
                    </p>
                    <div className="w-full bg-[#0f1442] p-6 rounded-lg">
                        <h4 className="text-[20px] font-outfit font-bold text-teal-300 mb-4">Our Environmental Commitments</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                            <div className="flex items-start">
                                <span className="text-teal-300 mr-2">♻️</span>
                                <span>Reduce waste by 50% by 2025 through recycling and reuse programs</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-teal-300 mr-2">🌱</span>
                                <span>Source 100% sustainable materials by 2024</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-teal-300 mr-2">💧</span>
                                <span>Reduce water consumption by 30% across all operations</span>
                            </div>
                            <div className="flex items-start">
                                <span className="text-teal-300 mr-2">⚡</span>
                                <span>Transition to 100% renewable energy for offices by 2023</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] sm:text-[18px] font-opensans font-normal leading-[24px] sm:leading-[27px] text-left text-white">
                        We regularly monitor our environmental performance, conduct internal audits, and report on our progress toward sustainability goals. All employees receive environmental awareness training, and we work closely with suppliers who share our commitment to environmental responsibility.
                    </p>
                </>
            ),
            hasTopDivider: true,
            hasBottomDivider: false,
            iconSize: 'small'
        }
    ];

    return (
        <section className="w-full bg-[#070b23] py-16 px-4 sm:px-6 lg:px-[148px]">
            <div className="w-full flex flex-col gap-16">
                {sections.map((section) => (
                    <div key={section.id} className="flex flex-col gap-6 justify-start items-center">
                        {/* Top divider */}
                        {section.hasTopDivider && <div className="w-full h-[2px] bg-[#ffffff33]"></div>}

                        <div className="flex justify-between items-center w-full">
                            <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-outfit font-bold leading-[30px] sm:leading-[36px] lg:leading-[41px] text-left text-white">
                                {section.title}
                            </h3>
                            <button
                                onClick={() => handleExpandToggle(section.id)}
                                className={`flex items-center justify-center transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180' : 'rotate-0'
                                    }`}
                                aria-label={expandedSection === section.id ? 'Collapse section' : 'Expand section'}
                            >
                                <Image
                                    src={expandedSection === section.id ? "/images/Close.svg" : "/images/Open.svg"}
                                    alt={expandedSection === section.id ? 'Collapse' : 'Expand'}
                                    width={44}
                                    height={44}
                                    className="w-8 h-8"
                                />
                            </button>

                        </div>

                        {/* Accordion content with smooth animation */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${expandedSection === section.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="flex flex-col gap-6 justify-start items-center w-full pb-2">
                                {section.content}
                            </div>
                        </div>

                        {/* Bottom divider */}
                        {section.hasBottomDivider && <div className="w-full h-[2px] bg-[#ffffff33]"></div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpandableInfoSection;