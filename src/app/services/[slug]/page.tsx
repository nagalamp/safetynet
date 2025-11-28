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
    // Stand Auditing Services
    { icon: "/images/plan.png", title: "Planningn", points: ["Weekly task scheduling", "Progress tracking and reporting", "Vendor and material coordination"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", title: "Execution Monitoring", points: ["Track progress of tasks", "Report deviations", "Coordinate teams"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", title: "Vendor Coordination", points: ["Manage vendor communication", "Track material delivery", "Ensure timelines"], slug: "stand-auditing-services" },
    { icon: "/images/plan.png", title: "Audit Reporting", points: ["Prepare audit reports", "Highlight issues", "Suggest corrective actions"], slug: "stand-auditing-services" },

    // Health & Safety Services
    { icon: "/images/health.png", title: "Risk Assessment", points: ["Identify potential hazards", "Evaluate risk levels", "Provide mitigation strategies"], slug: "health-safety-services" },
    { icon: "/images/health.png", title: "Safety Training", points: ["Conduct safety workshops", "Provide emergency response training", "Certify employees for compliance"], slug: "health-safety-services" },
    { icon: "/images/health.png", title: "Compliance Audits", points: ["Check adherence to safety regulations", "Review documentation", "Report compliance gaps"], slug: "health-safety-services" },
    { icon: "/images/health.png", title: "Incident Reporting", points: ["Record workplace incidents", "Investigate causes", "Recommend preventive measures"], slug: "health-safety-services" },

    // Electrical Safety Services
    { icon: "/images/electrical.png", title: "Electrical Inspection", points: ["Routine inspection of circuits", "Detect electrical hazards", "Ensure equipment safety"], slug: "electrical-safety-services" },
    { icon: "/images/electrical.png", title: "Wiring Safety", points: ["Check building wiring compliance", "Identify overloaded circuits", "Recommend upgrades"], slug: "electrical-safety-services" },
    { icon: "/images/electrical.png", title: "Equipment Testing", points: ["Test electrical equipment performance", "Detect faulty components", "Certify safe operation"], slug: "electrical-safety-services" },
    { icon: "/images/electrical.png", title: "Emergency Response", points: ["Prepare for electrical accidents", "Conduct drills", "Train staff in emergency protocols"], slug: "electrical-safety-services" },

    // Fire Safety Services
    { icon: "/images/fire.png", title: "Fire Risk Assessment", points: ["Identify fire hazards", "Evaluate risk levels", "Recommend preventive measures"], slug: "fire-safety-services" },
    { icon: "/images/fire.png", title: "Fire Safety Training", points: ["Conduct fire drills", "Train staff in fire response", "Certify emergency preparedness"], slug: "fire-safety-services" },
    { icon: "/images/fire.png", title: "Fire Equipment Inspection", points: ["Check fire extinguishers and alarms", "Test sprinkler systems", "Ensure equipment compliance"], slug: "fire-safety-services" },
    { icon: "/images/fire.png", title: "Emergency Evacuation Planning", points: ["Design evacuation routes", "Conduct mock drills", "Provide evacuation guidelines"], slug: "fire-safety-services" },

    // Sustainability Solutions Services
    { icon: "/images/sustainability.png", title: "Energy Efficiency", points: ["Assess energy consumption", "Implement efficient solutions", "Reduce carbon footprint"], slug: "sustainability-solutions-services" },
    { icon: "/images/sustainability.png", title: "Waste Management", points: ["Optimize waste disposal", "Promote recycling initiatives", "Ensure regulatory compliance"], slug: "sustainability-solutions-services" },
    { icon: "/images/sustainability.png", title: "Sustainable Procurement", points: ["Source eco-friendly materials", "Assess supplier sustainability", "Implement green policies"], slug: "sustainability-solutions-services" },
    { icon: "/images/sustainability.png", title: "Environmental Monitoring", points: ["Track emissions and pollution", "Conduct environmental audits", "Recommend corrective actions"], slug: "sustainability-solutions-services" },

    // Event Strategic Safety Services
    { icon: "/images/event.png", title: "Event Risk Assessment", points: ["Identify risks at large events", "Plan mitigation strategies", "Ensure participant safety"], slug: "event-strategic-safety-services" },
    { icon: "/images/event.png", title: "Crowd Management", points: ["Monitor crowd flow", "Prevent overcrowding", "Train staff in crowd control"], slug: "event-strategic-safety-services" },
    { icon: "/images/event.png", title: "Emergency Planning", points: ["Develop event emergency plans", "Coordinate with authorities", "Conduct mock drills"], slug: "event-strategic-safety-services" },
    { icon: "/images/event.png", title: "Security Coordination", points: ["Align with security teams", "Manage access points", "Ensure overall event safety"], slug: "event-strategic-safety-services" },

    // Event Strategic Management Services
    { icon: "/images/management.png", title: "Event Planning", points: ["Develop comprehensive event plans", "Coordinate with vendors", "Manage timelines and budgets"], slug: "event-strategic-management-services" },
    { icon: "/images/management.png", title: "Resource Allocation", points: ["Assign staff and equipment", "Optimize resource usage", "Ensure smooth operations"], slug: "event-strategic-management-services" },
    { icon: "/images/management.png", title: "Stakeholder Coordination", points: ["Communicate with clients and partners", "Ensure expectations are met", "Report progress regularly"], slug: "event-strategic-management-services" },
    { icon: "/images/management.png", title: "Performance Review", points: ["Analyze event success metrics", "Document lessons learned", "Recommend improvements for future events"], slug: "event-strategic-management-services" },

    // Venue Fire Safety Services
    { icon: "/images/venue-fire.png", title: "Venue Fire Risk Assessment", points: ["Identify potential fire hazards in venues", "Evaluate fire safety compliance", "Recommend mitigation measures"], slug: "venue-fire-safety-services" },
    { icon: "/images/venue-fire.png", title: "Fire Equipment Maintenance", points: ["Inspect extinguishers and alarms", "Test sprinkler and suppression systems", "Ensure operational readiness"], slug: "venue-fire-safety-services" },
    { icon: "/images/venue-fire.png", title: "Emergency Evacuation Planning", points: ["Design venue-specific evacuation plans", "Conduct mock drills", "Train staff for emergencies"], slug: "venue-fire-safety-services" },
    { icon: "/images/venue-fire.png", title: "Fire Safety Training", points: ["Train venue staff in fire response", "Conduct fire drills", "Certify preparedness for emergencies"], slug: "venue-fire-safety-services" },

    // Health Safety Training & Development Services
    { icon: "/images/training.png", title: "Workplace Safety Training", points: ["Conduct workshops on safety protocols", "Educate employees on emergency response", "Certify workforce competency"], slug: "health-safety-training-and-development-services" },
    { icon: "/images/training.png", title: "Leadership Development", points: ["Train managers on safety leadership", "Improve decision-making under emergencies", "Promote safety culture"], slug: "health-safety-training-and-development-services" },
    { icon: "/images/training.png", title: "Compliance Training", points: ["Educate staff on regulatory standards", "Conduct regular assessments", "Maintain compliance records"], slug: "health-safety-training-and-development-services" },
    { icon: "/images/training.png", title: "Continuous Learning Programs", points: ["Provide ongoing safety workshops", "Introduce new safety technologies", "Encourage skill upgrades"], slug: "health-safety-training-and-development-services" },

    // Rigging Services
    { icon: "/images/rigging.png", title: "Rigging Planning", points: ["Design rigging setup plans", "Assess load requirements", "Ensure safety standards compliance"], slug: "rigging-services" },
    { icon: "/images/rigging.png", title: "Equipment Setup", points: ["Install rigging equipment safely", "Coordinate lifting operations", "Monitor equipment performance"], slug: "rigging-services" },
    { icon: "/images/rigging.png", title: "Safety Inspection", points: ["Check rigging connections", "Verify load-bearing components", "Conduct regular safety audits"], slug: "rigging-services" },
    { icon: "/images/rigging.png", title: "Operational Support", points: ["Assist during live events", "Monitor rigging performance", "Respond to operational issues"], slug: "rigging-services" },

    // Engineering Services
    { icon: "/images/engineering.png", title: "Structural Design", points: ["Design building and structural layouts", "Ensure compliance with safety codes", "Provide optimization recommendations"], slug: "engineering-services" },
    { icon: "/images/engineering.png", title: "Project Management", points: ["Oversee engineering projects", "Coordinate resources and schedules", "Monitor progress and quality"], slug: "engineering-services" },
    { icon: "/images/engineering.png", title: "Technical Consultation", points: ["Provide engineering expertise", "Recommend innovative solutions", "Ensure regulatory compliance"], slug: "engineering-services" },
    { icon: "/images/engineering.png", title: "Maintenance & Inspection", points: ["Conduct routine equipment inspections", "Ensure operational efficiency", "Provide maintenance schedules"], slug: "engineering-services" },
  ];

  // 🔥 Filter service cards based on selected service
  const filteredServiceCards = serviceCards.filter(card => card.slug === service.slug);

  return (
    <div className="min-h-screen bg-[#150e24]">

      {/* Hero Section */}
      <div
        className="relative"
        style={{
          backgroundImage: `url('${service.image}')`,
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
