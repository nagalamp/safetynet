'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';
import HeroSection from '../../best-services/HeroSection';
import ContactSection from '../../Home/ContactSection';
import ServicesSectionHorizontal from '../../Home/ServicesSectionHorizontal';
import ServiceCard from './ServiceCards';
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

  const handleFormSubmit = (): void => {
    // Form submission logic here
  };

  if (!service) {
    return <p className="text-white text-center py-20">Service not found.</p>;
  }

  // 🔥 Full array of service cards
  const serviceCards = [
    // Stand Auditing Services.     
    { icon: "/images/Services/StandAuditingServices/Setup_01.svg", hoverIcon: "/images/Close-hover.svg", title: "Planningn", points: ["Weekly task scheduling", "Progress tracking and reporting", "Vendor and material coordination"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", hoverIcon: "/images/plan-hover.png", title: "Execution Monitoring", points: ["Track progress of tasks", "Report deviations", "Coordinate teams"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", hoverIcon: "/images/plan-hover.png", title: "Vendor Coordination", points: ["Manage vendor communication", "Track material delivery", "Ensure timelines"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", hoverIcon: "/images/plan-hover.png", title: "Audit Reporting", points: ["Prepare audit reports", "Highlight issues", "Suggest corrective actions"], slug: "stand-auditing-services" },
    
    // Health & Safety Services
    { icon: "/images/Services/HealthSafetyServices/Setup_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Setup_02.svg", title: "Set Up", points: ["On-site monitoring of construction activities", "Evaluate risk levels", "Provide mitigation strategies"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Show_Day_02.svg", title: "Show Day", points: ["Conduct safety workshops", "Provide emergency response training", "Certify employees for compliance"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Breakdown_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Breakdown_02.svg", title: "Breakdown", points: ["Check adherence to safety regulations", "Review documentation", "Report compliance gaps"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Incident_Response_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Incident_Response_02.svg", title: "Incident Response", points: ["Record workplace incidents", "Investigate causes", "Recommend preventive measures"], slug: "health-safety-services" },
    { icon: "/images/Services/HealthSafetyServices/Reporting_01.svg", hoverIcon: "/images/Services/HealthSafetyServices/Reporting_02.svg", title: "Reporting", points: ["Record workplace incidents", "Investigate causes", "Recommend preventive measures"], slug: "health-safety-services" },
  
    // Electrical Safety Services
    { icon: "/images/Services/ElectricalSafetyServices/Pre_Event_Inspection_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/Pre_Event_Inspection_02.svg", title: "Pre-Event Inspection", points: ["Routine inspection of circuits", "Detect electrical hazards", "Ensure equipment safety"], slug: "electrical-safety-services" },
    { icon: "/images/Services/ElectricalSafetyServices/During_Setup_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/During_Setup_02.svg", title: "During Setup", points: ["Routine inspection of circuits", "Detect electrical hazards", "Ensure equipment safety"], slug: "electrical-safety-services" },
    { icon: "/images/Services/ElectricalSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/Show_Day_02.svg", title: "Show Days", points: ["Routine inspection of circuits", "Detect electrical hazards", "Ensure equipment safety"], slug: "electrical-safety-services" },
    { icon: "/images/Services/ElectricalSafetyServices/Breakdown_period_01.svg", hoverIcon: "/images/Services/ElectricalSafetyServices/Breakdown_period_02.svg", title: "Breakdown Period", points: ["Routine inspection of circuits", "Detect electrical hazards", "Ensure equipment safety"], slug: "electrical-safety-services" },

    // Fire Safety Services
    { icon: "/images/Services/FireSafetyServices/Pre-Event_Inspection_01.svg", hoverIcon: "/images/Services/FireSafetyServices/Pre-Event_Inspection_02.svg", title: "Pre-Event Planning", points: ["Identify fire hazards", "Evaluate risk levels", "Recommend preventive measures"], slug: "fire-safety-services" },
    { icon: "/images/Services/FireSafetyServices/During_Setup_01.svg", hoverIcon: "/images/Services/FireSafetyServices/During_Setup_02.svg", title: "During Setup", points: ["Identify fire hazards", "Evaluate risk levels", "Recommend preventive measures"], slug: "fire-safety-services" },
    { icon: "/images/Services/FireSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/FireSafetyServices/Show_Day_02.svg", title: "Show Days", points: ["Identify fire hazards", "Evaluate risk levels", "Recommend preventive measures"], slug: "fire-safety-services" },
    { icon: "/images/Services/FireSafetyServices/Breakdown_period_01.svg", hoverIcon: "/images/Services/FireSafetyServices/Breakdown_period_02.svg", title: "Breakdown Period", points: ["Identify fire hazards", "Evaluate risk levels", "Recommend preventive measures"], slug: "fire-safety-services" },

    // // Sustainability Solutions Services
    // { icon: "/images/sustainability.png", hoverIcon: "/images/sustainability-hover.png", title: "Energy Efficiency", points: ["Assess energy consumption", "Implement efficient solutions", "Reduce carbon footprint"], slug: "sustainability-solutions-services" },
    // { icon: "/images/sustainability.png", hoverIcon: "/images/sustainability-hover.png", title: "Waste Management", points: ["Optimize waste disposal", "Promote recycling initiatives", "Ensure regulatory compliance"], slug: "sustainability-solutions-services" },
    // { icon: "/images/sustainability.png", hoverIcon: "/images/sustainability-hover.png", title: "Sustainable Procurement", points: ["Source eco-friendly materials", "Assess supplier sustainability", "Implement green policies"], slug: "sustainability-solutions-services" },
    // { icon: "/images/sustainability.png", hoverIcon: "/images/sustainability-hover.png", title: "Environmental Monitoring", points: ["Track emissions and pollution", "Conduct environmental audits", "Recommend corrective actions"], slug: "sustainability-solutions-services" },
  
    // Event Strategic Safety Services
    { icon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Risk_Assessment_Planning_02.svg", title: "Risk Assessment & Planning", points: ["Identify risks at large events", "Plan mitigation strategies", "Ensure participant safety"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02.svg", title: "Capacity Planning", points: ["Identify risks at large events", "Plan mitigation strategies", "Ensure participant safety"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Show_Day_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Show_Day_02.svg", title: "Crowd Management", points: ["Identify risks at large events", "Plan mitigation strategies", "Ensure participant safety"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_01.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Crisis_Management_02.svg", title: "Crisis Management", points: ["Identify risks at large events", "Plan mitigation strategies", "Ensure participant safety"], slug: "event-strategic-safety-services" },
    { icon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_01-1.svg", hoverIcon: "/images/Services/EventStrategicSafetyServices/Capacity_Planning_02-1.svg", title: "Capacity Planning", points: ["Identify risks at large events", "Plan mitigation strategies", "Ensure participant safety"], slug: "event-strategic-safety-services" },

    // // Event Strategic Management Services
    // { icon: "/images/management.png", hoverIcon: "/images/management-hover.png", title: "Event Planning", points: ["Develop comprehensive event plans", "Coordinate with vendors", "Manage timelines and budgets"], slug: "event-strategic-management-services" },
    // { icon: "/images/management.png", hoverIcon: "/images/management-hover.png", title: "Resource Allocation", points: ["Assign staff and equipment", "Optimize resource usage", "Ensure smooth operations"], slug: "event-strategic-management-services" },
    // { icon: "/images/management.png", hoverIcon: "/images/management-hover.png", title: "Stakeholder Coordination", points: ["Communicate with clients and partners", "Ensure expectations are met", "Report progress regularly"], slug: "event-strategic-management-services" },
    // { icon: "/images/management.png", hoverIcon: "/images/management-hover.png", title: "Performance Review", points: ["Analyze event success metrics", "Document lessons learned", "Recommend improvements for future events"], slug: "event-strategic-management-services" },
  
    // // Venue Fire Safety Services
    // { icon: "/images/venue-fire.png", hoverIcon: "/images/venue-fire-hover.png", title: "Venue Fire Risk Assessment", points: ["Identify potential fire hazards in venues", "Evaluate fire safety compliance", "Recommend mitigation measures"], slug: "venue-fire-safety-services" },
    // { icon: "/images/venue-fire.png", hoverIcon: "/images/venue-fire-hover.png", title: "Fire Equipment Maintenance", points: ["Inspect extinguishers and alarms", "Test sprinkler and suppression systems", "Ensure operational readiness"], slug: "venue-fire-safety-services" },
    // { icon: "/images/venue-fire.png", hoverIcon: "/images/venue-fire-hover.png", title: "Emergency Evacuation Planning", points: ["Design venue-specific evacuation plans", "Conduct mock drills", "Train staff for emergencies"], slug: "venue-fire-safety-services" },
    // { icon: "/images/venue-fire.png", hoverIcon: "/images/venue-fire-hover.png", title: "Fire Safety Training", points: ["Train venue staff in fire response", "Conduct fire drills", "Certify preparedness for emergencies"], slug: "venue-fire-safety-services" },
  
    // // Health Safety Training & Development Services
    // { icon: "/images/training.png", hoverIcon: "/images/training-hover.png", title: "Workplace Safety Training", points: ["Conduct workshops on safety protocols", "Educate employees on emergency response", "Certify workforce competency"], slug: "health-safety-training-and-development-services" },
    // { icon: "/images/training.png", hoverIcon: "/images/training-hover.png", title: "Leadership Development", points: ["Train managers on safety leadership", "Improve decision-making under emergencies", "Promote safety culture"], slug: "health-safety-training-and-development-services" },
    // { icon: "/images/training.png", hoverIcon: "/images/training-hover.png", title: "Compliance Training", points: ["Educate staff on regulatory standards", "Conduct regular assessments", "Maintain compliance records"], slug: "health-safety-training-and-development-services" },
    // { icon: "/images/training.png", hoverIcon: "/images/training-hover.png", title: "Continuous Learning Programs", points: ["Provide ongoing safety workshops", "Introduce new safety technologies", "Encourage skill upgrades"], slug: "health-safety-training-and-development-services" },
  
    // Rigging Services
    { icon: "/images/Services/RiggingServices/Experienced_Mechanical_Engineers_01.svg", hoverIcon: "/images/Services/RiggingServices/Experienced_Mechanical_Engineers_02.svg", title: "Experienced Mechanical Engineers", points: ["Design rigging setup plans", "Assess load requirements", "Ensure safety standards compliance"], slug: "rigging-services" },
    { icon: "/images/Services/RiggingServices/Project_Lifecycle_Support_01.svg", hoverIcon: "/images/Services/RiggingServices/Project_Lifecycle_Support_02.svg", title: "Full Project Lifecycle Support", points: ["Design rigging setup plans", "Assess load requirements", "Ensure safety standards compliance"], slug: "rigging-services" },
    { icon: "/images/Services/RiggingServices/Safe_Innovative_Solutions_01.svg", hoverIcon: "/images/Services/RiggingServices/Safe_Innovative_Solutions_02.svg", title: "Safe and Innovative Solutions", points: ["Design rigging setup plans", "Assess load requirements", "Ensure safety standards compliance"], slug: "rigging-services" },
    { icon: "/images/Services/RiggingServices/Diverse_Rigging_Capabilities_01.svg", hoverIcon: "/images/Services/RiggingServices/Diverse_Rigging_Capabilities_02.svg", title: "Diverse Rigging Capabilities", points: ["Design rigging setup plans", "Assess load requirements", "Ensure safety standards compliance"], slug: "rigging-services" },

    // Engineering Services
    { icon: "/images/Services/EngineeringServices/Floor_Plans_01.svg", hoverIcon: "/images/Services/EngineeringServices/Floor_Plans_02.svg", title: "Floor Plans", points: ["Design building and structural layouts", "Ensure compliance with safety codes", "Provide optimization recommendations"], slug: "engineering-services" },
    { icon: "/images/Services/EngineeringServices/Safe_Innovative_Solutions_01.svg", hoverIcon: "/images/Services/EngineeringServices/Safe_Innovative_Solutions_02.svg", title: "MEP Drawings", points: ["Design building and structural layouts", "Ensure compliance with safety codes", "Provide optimization recommendations"], slug: "engineering-services" },
    { icon: "/images/Services/EngineeringServices/Design_mezzanine_stands_01.svg", hoverIcon: "/images/Services/EngineeringServices/Design_mezzanine_stands_02.svg", title: "Design of mezzanine stands", points: ["Design building and structural layouts", "Ensure compliance with safety codes", "Provide optimization recommendations"], slug: "engineering-services" },
    { icon: "/images/Services/EngineeringServices/Board_Certified_structural_Engineers_01.svg", hoverIcon: "/images/Services/EngineeringServices/Board_Certified_structural_Engineers_02.svg", title: "Board-Certified structural Engineers", points: ["Design building and structural layouts", "Ensure compliance with safety codes", "Provide optimization recommendations"], slug: "engineering-services" },

  ];
  
  // 🔥 Filter service cards based on selected service
  const filteredServiceCards = serviceCards.filter(card => card.slug === service.slug);

  return (
    <div className="min-h-screen bg-[#150e24]">

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
        <div className="w-full max-w-[1200px] mx-auto bg-[#070B23]">
          <div className="flex flex-col gap-2 justify-start items-center mb-10">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-outfit font-semibold leading-[36px] sm:leading-[40px] lg:leading-[46px] text-left text-white">
              {service.title}
            </h1>
            <div className="w-[50px] sm:w-[66px] h-[4px] bg-[#47d4aa]"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mb-30">
            {filteredServiceCards.map((card, index) => (
      

          <ServiceCard
            key={index}
            icon={card.icon}
            hoverIcon={card.hoverIcon}
            title={card.title}
            points={card.points}
          />

            ))}
          </div>
        </div>
      </section>

      <ServicesSectionHorizontal />
      <ContactSection />
      <Footer />
    </div>
  );
}
