export interface ServiceCard {
  id: number;
  title: string;
  image: string;
  headerImage?: string;   // 👈 NEW FIELD ADDED
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
    description: "Comprehensive stand auditing solutions",
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
    description: "Comprehensive safety management solutions",
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
    description: "Ensuring safe electrical operations",
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
    description: "Protecting people and property from fire hazards",
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
    description: "Safety planning for events",
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
    description: "Professional rigging solutions",
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
    description: "Expert engineering solutions",
    features: [
      "Structural assessments",
      "Design validation",
      "Project consultation"
    ],
    slug: "engineering-services",
  }
];
