export interface ServiceCard {
  id: number;
  title: string;
  image: string;
  headerImage?: string;   // 👈 NEW FIELD ADDED
  serviceImage?:string;
  description?: string;
  features?: string[];
  slug?: string;
}

export const services: ServiceCard[] = [
  {
    id: 1,
    title: "Stand Auditing Services",
    image: "/images/img_frame_42.png",
    headerImage: "/images/Services/StandAuditingServices/Stand Auditing Services.png",
    serviceImage: "/images/Services/StandAuditingServices/Event Experience.png",
    description: "Stand Auditing: Stand Auditing is the process of reviewing and approving exhibition stand designs to ensure they comply with venue regulations, safety standards, and structural requirements. It involves assessing submitted plans, verifying technical details, and issuing a Permission to Build (PTB) before construction begins.",
    features: [
      "Site inspections and audits",
      "Compliance assessment",
      "Detailed reporting"
    ],
    slug: "stand-auditing-services",
  },
  {
    id: 2,
    title: "Health & Safety Services",
    image: "/images/Health_Safety_Services.png",
    headerImage: "/images/Services/HealthSafetyServices/Health & Safety Services.png",
    serviceImage: "/images/Services/HealthSafetyServices/Health_Safety_Services.png",
    description: "Health & Safety Services ensure the well-being of everyone involved in an event while safeguarding the reputation and integrity of the brands we represent. Through proactive risk management, compliance monitoring, and on-site supervision, we help create a safe, controlled, and professional event environment from setup to breakdown.",
    features: [
      "Stand audits and contractor assessments",
      "Regulatory compliance reviews",
      "Design verification and PTB issuance"
    ],
    slug: "health-safety-services",
  },
  {
    id: 3,
    title: "Electrical Safety Services",
    image: "/images/img_frame_44.png",
    headerImage: "/images/header_electrical_safety.png",
    serviceImage: "/images/Services/ElectricalSafetyServices/Electrical_Safety_Services.png",
    description: "Electrical Safety Services ensure safe and reliable power management throughout an event — from setup to dismantling. By overseeing design compliance, installation quality, and live system monitoring, we protect both people and property while upholding the operational integrity of every brand we support",
    features: [
      "Electrical inspections",
      "Risk analysis",
      "Safety compliance reporting"
    ],
    slug: "electrical-safety-services",
  },
  {
    id: 4,
    title: "Fire Safety Services",
    image: "/images/img_frame_44_438x282.png",
    headerImage: "/images/Services/FireSafetyServices/Fire Safety Services.png",
    serviceImage: "/images/Services/FireSafetyServices/Fire_Safety_Services.png",
    description: "Focus on preventing and managing fire-related risks throughout an event. By ensuring compliance with fire regulations, monitoring equipment readiness, and maintaining safe evacuation routes, we help protect lives, property, and the reputation of the brands we work with.",
    features: [
      "Fire risk assessments",
      "Evacuation planning",
      "Safety audits"
    ],
    slug: "fire-safety-services",
  },
  {
    id: 6,
    title: "Event Strategic Safety Services",
    image: "/images/img_frame_44_312x282.png",
    headerImage: "/images/Services/EventStrategicSafetyServices/Event Strategic Safety Services.png",
    serviceImage: "/images/Services/EventStrategicSafetyServices/Event_Strategic_Safety_Services.png",
    description: "provide a structured approach to identifying, assessing, and mitigating risks across all event phases. Through proactive planning, on-site supervision, and compliance with local safety regulations, we ensure seamless event execution while safeguarding participants, assets, and the brand’s reputation.",
    features: [
      "Crowd management",
      "Risk assessment",
      "On-site monitoring"
    ],
    slug: "event-strategic-safety-services",
  },
  {
    id: 10,
    title: "Rigging Services",
    image: "/images/img_frame_44_5.png",
    headerImage: "/images/Services/RiggingServices/Rigging Services.png",
    serviceImage: "/images/Services/RiggingServices/Rigging_Services.png",
    description: "A premium branding and technical offering executed by certified riggers who are qualified mechanical engineers with over 20 years of hands-on experience. Our team specializes in designing and implementing safe, precise, and innovative rigging solutions for exhibitions and events of any scale ensuring structural integrity, brand impact, and flawless execution every time.",
    features: [
      "Rigging inspections",
      "Safety assessments",
      "Equipment certification"
    ],
    slug: "rigging-services",
  },
  {
    id: 11,
    title: "Engineering Services",
    image: "/images/img_2150440970_1.png",
    headerImage: "/images/Services/EngineeringServices/Engineering Services.png",
    serviceImage: "/images/Services/EngineeringServices/Engineering_Services.png",
    description: "Engineering Services in the Events Industry involve the design, planning, and technical execution of event infrastructure to ensure safety, efficiency, and compliance. This includes creating detailed floor plans, MEP (Mechanical, Electrical & Plumbing) layouts, and structural designs for stages, mezzanines, and temporary installations. Certified engineers prepare stability certificates and STAAD reports, ensuring all structures meet venue and statutory regulations. These services are critical in transforming creative event concepts into safe, functional spaces that support lighting, rigging, power, and crowd management systems effectively.",
    features: [
      "Structural assessments",
      "Design validation",
      "Project consultation"
    ],
    slug: "engineering-services",
  }
];

