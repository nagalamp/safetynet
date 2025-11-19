export interface ServiceCard {
  id: number;
  title: string;
  image: string;
  description?: string;
  features?: string[];
  slug?: string;
}

export const services: ServiceCard[] = [
  {
    id: 1,
    title: "Stand Auditing Services",
    image: "/images/img_frame_42.png",
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
    description: "Protecting people and property from fire hazards",
    features: [
      "Fire risk assessments",
      "Evacuation planning",
      "Safety audits"
    ],
    slug: "fire-safety-services",
  },
  {
    id: 5,
    title: "Sustainability Solutions Services",
    image: "/images/img_frame_44_1.png",
    description: "Eco-friendly and sustainable solutions",
    features: [
      "Environmental audits",
      "Sustainability planning",
      "Waste management"
    ],
    slug: "sustainability-solutions-services",
  },
  {
    id: 6,
    title: "Event Strategic Safety Services",
    image: "/images/img_frame_44_312x282.png",
    description: "Safety planning for events",
    features: [
      "Crowd management",
      "Risk assessment",
      "On-site monitoring"
    ],
    slug: "event-strategic-safety-services",
  },
  {
    id: 7,
    title: "Event Strategic Management Services",
    image: "/images/img_frame_44_2.png",
    description: "End-to-end event management solutions",
    features: [
      "Event planning",
      "Vendor coordination",
      "Operational safety"
    ],
    slug: "event-strategic-management-services",
  },
  {
    id: 8,
    title: "Venue Fire Safety Services",
    image: "/images/img_frame_44_3.png",
    description: "Fire safety solutions for venues",
    features: [
      "Fire drills",
      "Equipment inspection",
      "Emergency planning"
    ],
    slug: "venue-fire-safety-services",
  },
  {
    id: 9,
    title: "Health & Safety Training and Development Services",
    image: "/images/img_frame_44_4.png",
    description: "Training programs for health and safety",
    features: [
      "Employee training",
      "Safety workshops",
      "Certification programs"
    ],
    slug: "health-safety-training-and-development-services",
  },
  {
    id: 10,
    title: "Rigging Services",
    image: "/images/img_frame_44_5.png",
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
    description: "Expert engineering solutions",
    features: [
      "Structural assessments",
      "Design validation",
      "Project consultation"
    ],
    slug: "engineering-services",
  }
];
