'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import HeroSection from '../../best-services/HeroSection';
import ContactSection from '../../Home/ContactSection';
import ServicesSectionHorizontal from '../../Home/ServicesSectionHorizontal';
import ServiceCard from './ServiceCards';
import ServiceHead from './ServiceHead';
import { services } from '../../../data/services';

interface FormData {
  inquiryType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const [formData, setFormData] = useState<FormData>({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleFormChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (): void => {};

  if (!service) {
    return <p className="text-white text-center py-20">Service not found.</p>;
  }

  // All service cards
  const serviceCards = [
    // Stand Auditing Services
    { icon: "/images/Services/StandAuditingServices/Setup_01.svg", hoverIcon: "/images/Close-hover.svg", title: "Planningn", points: ["Weekly task scheduling", "Progress tracking and reporting", "Vendor and material coordination"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", hoverIcon: "/images/plan-hover.png", title: "Execution Monitoring", points: ["Track progress of tasks", "Report deviations", "Coordinate teams"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", hoverIcon: "/images/plan-hover.png", title: "Vendor Coordination", points: ["Manage vendor communication", "Track material delivery", "Ensure timelines"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", hoverIcon: "/images/plan-hover.png", title: "Audit Reporting", points: ["Prepare audit reports", "Highlight issues", "Suggest corrective actions"], slug: "stand-auditing-services" },

    // Health & Safety Services
    { icon: "/images/Services/HealthSafetyServices/Setup_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Setup_02.svg", title: "Set Up", points: ["On-site monitoring of construction activities", "Evaluate risk levels", "Provide mitigation strategies"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Show_Day_02.svg", title: "Show Day", points: ["Continuous supervision of visitor and exhibitor areas", "Maintain emergency access routes, crowd safety", "Housekeeping standards"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Breakdown_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Breakdown_02.svg", title: "Breakdown", points: ["Oversight of dismantling activities", "Safe removal of materials, waste management", "Prevention of accidents"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Incident_Response_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Incident_Response_02.svg", title: "Incident Response", points: ["Immediate support and coordination in case of any accident, medical emergency, or safety breach"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Reporting_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Reporting_02.svg", title: "Reporting", points: ["Post-show safety summary highlighting observations, incidents (if any), and recommendations for future improvement"], slug: "health-safety-services" },

    // Electrical Safety Services
    { icon: "/images/Services/ElectricalSafetyServices/Pre_Event_Inspection_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/Pre_Event_Inspection_02.svg", title: "Pre-Event Inspection", points: ["Review of electrical layouts, load schedules, and cable management plans to ensure compliance with venue safety standard"], slug: "electrical-safety-services" },
    { icon: "/images/Services/ElectricalSafetyServices/During_Setup_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/During_Setup_02.svg", title: "During Setup", points: ["Supervision of temporary power installation, proper earthing, circuit protection, and use of approved cables and connectors."], slug: "electrical-safety-services" },
    { icon: "/images/Services/ElectricalSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/Show_Day_02.svg", title: "Show Days", points: ["Continuous monitoring of live electrical systems to prevent overloads, short circuits, and hazards from unauthorized connections"], slug: "electrical-safety-services" },
    { icon: "/images/Services/ElectricalSafetyServices/Breakdown_period_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/Breakdown_period_02.svg", title: "Breakdown Period", points: ["Safe disconnection of temporary power systems, controlled removal of cabling, and confirmation of zero live circuits"], slug: "electrical-safety-services" },

    // Fire Safety Services
    { icon: "/images/Services/FireSafetyServices/Pre-Event_Inspection_01.svg", hoverIcon: "/images/Services/FireSafetyServices/Pre-Event_Inspection_02.svg", title: "Pre-Event Planning", points: ["Evaluation fo fire risks, placement of extinguishers, and compliance of exhibit materials with fire safety regulations."], slug: "fire-safety-services" },
    { icon: "/images/Services/FireSafetyServices/During_Setup_01.svg", hoverIcon: "/images/Services/FireSafetyServices/During_Setup_02.svg", title: "During Setup", points: ["Supervision of  fire extinguisher placement, clear access to exits, and safe storage of flammable materials"], slug: "fire-safety-services" },
    { icon: "/images/Services/FireSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/FireSafetyServices/Show_Day_02.svg", title: "Show Days", points: ["Continuous inspection fo fire exits, extinguisher readiness, and adherence to no-smoking plicies"], slug: "fire-safety-services" },
    { icon: "/images/Services/FireSafetyServices/Breakdown_period_01.svg", hoverIcon: "/images/Services/FireSafetyServices/Breakdown_period_02.svg", title: "Breakdown Period", points: ["Monitoring safe removal of combustibles, proper extinguisher collection, and exit accessibility until teardown"], slug: "fire-safety-services" },

    // Event Strategic Safety Services
    { icon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_02.svg", title: "Risk Assessment & Planning", points: ["Review of event activities, venue hazards, and external threats", "Development of a comprehensive safety management plan"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02.svg", title: "Capacity Planning", points: ["Evaluation of venue capacity and crowd density limits", "Measures to prevent overcrowding and ensure safe flow of attendees"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Show_Day_02.svg", title: "Crowd Management", points: ["Strategies for controiling entry, managing queues, and diracting traffic flow", "Deployment of trained personnel to monitor and guide crowds"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_02.svg", title: "Crisis Management", points: ["Preparation of response plans for potential emergencies or incidents", "Training staff to handie medical, security, and operational issues"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg", title: "Capacity Planning", points: ["Establishment of backup blans for critical event functions and services", "Identification of alternative arrangements in case of failure"], slug: "event-strategic-safety-services" },

    // Rigging Services
    { icon: "/images/Services/RiggingServices/Experienced_Mechanical_Engineers_01.svg", hoverIcon: "/images/Services/RiggingServices/Experienced_Mechanical_Engineers_02.svg", title: "Experienced Mechanical Engineers", points: ["Mechanical engineering experts with extensive rigging knowledge"], slug: "rigging-services" },
    { icon: "/images/Services/RiggingServices/Project_Lifecycle_Support_01.svg", hoverIcon: "/images/Services/RiggingServices/Project_Lifecycle_Support_02.svg", title: "Full Project Lifecycle Support", points: ["From initial planning and design to successful execution"], slug: "rigging-services" },
    { icon: "/images/Services/RiggingServices/Safe_Innovative_Solutions_01.svg", hoverIcon: "/images/Services/RiggingServices/Safe_Innovative_Solutions_02.svg", title: "Safe and Innovative Solutions", points: ["Rigging plans that ensure structural integrity and safety"], slug: "rigging-services" },
    { icon: "/images/Services/RiggingServices/Diverse_Rigging_Capabilities_01.svg", hoverIcon: "/images/Services/RiggingServices/Diverse_Rigging_Capabilities_02.svg", title: "Diverse Rigging Capabilities", points: ["Experienced in all types of rigging for exhibitions and events"], slug: "rigging-services" },

    // Engineering Services
    { icon: "/images/Services/EngineeringServices/Floor_Plans_01.svg", hoverIcon: "/images/Services/EngineeringServices/Floor_Plans_02.svg", title: "Floor Plans", points: ["Development of detailed and accurate floor plans"], slug: "engineering-services" },
    { icon: "/images/Services/EngineeringServices/Safe_Innovative_Solutions_01.svg", hoverIcon: "/images/Services/EngineeringServices/Safe_Innovative_Solutions_02.svg", title: "MEP Drawings", points: ["Preparation of mechanical, electrical, and plumbing schematics"], slug: "engineering-services" },
    { icon: "/images/Services/EngineeringServices/Design_mezzanine_stands_01.svg", hoverIcon: "/images/Services/EngineeringServices/Design_mezzanine_stands_02.svg", title: "Design of mezzanine stands", points: ["Creation of mezzanine stand designs complete with stability certificates and STAAD reports"], slug: "engineering-services" },
    { icon: "/images/Services/EngineeringServices/Board_Certified_structural_Engineers_01.svg", hoverIcon: "/images/Services/EngineeringServices/Board_Certified_structural_Engineers_02.svg", title: "Board-Certified structural Engineers", points: ["Qualified structural engineers with experience on large-scale projects"], slug: "engineering-services" },
  ];

  // Filter cards by service slug
  const filteredServiceCards = serviceCards.filter(card => card.slug === service.slug);

  return (
    <div className="min-h-screen bg-[#070b23]">

      {/* Hero Section */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('${service.headerImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Header />
        <HeroSection title={service.title} />
      </div>

      {/* Service Details */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-0">
        <div className="w-full max-w-[1200px] mx-auto bg-[#070B23] rounded mb-6">

          <ServiceHead
            title={service.title}
            description={service.description}
            image={service.serviceImage}
          />

          <div className="flex flex-col gap-2 items-center w-full mb-12 mt-12">
            <div className="flex flex-col gap-2 items-center w-[32%] px-4 sm:px-11 w-full">
              <h2 className="text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-outfit font-semibold text-white text-center leading-tight" style={{ lineHeight: '51px' }}>
                {service.title}
              </h2>
              <div className="w-[66px] h-1 bg-[#47d4aa] rounded mt-3" />
            </div>
          </div>

          {service.slug === 'stand-auditing-services' ? (
          <div className="grid mt-5 mb-30">
            <h4 className="text-[20px] sm:text-[24px] font-outfit font-semibold leading-[26px] sm:leading-[31px] text-center text-white mt-2">
                Stand Design+Mandate Documents
            </h4>
            <img
                  src="/images/Services/StandAuditingServices/Assets_Stand_Auditing_Services.png"
                  alt="Stand Auditing Services"
                  className="w-[60%] h-auto mx-auto"
                />
            
          
          </div>
          ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mb-30">
          {filteredServiceCards && filteredServiceCards.length > 0 ? (
            filteredServiceCards.map((card, index) => (
              <div key={index} className="w-full flex flex-col gap-4">
                <ServiceCard
                  icon={card.icon}
                  hoverIcon={card.hoverIcon}
                  title={card.title}
                  points={card.points}
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-white">No services found.</p>
          )}
</div>
  )}
        </div>
      </section>

      <ServicesSectionHorizontal />
      <ContactSection />
      <Footer />
    </div>
  );
}
