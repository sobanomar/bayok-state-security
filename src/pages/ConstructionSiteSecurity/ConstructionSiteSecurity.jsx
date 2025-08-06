import React from "react";
import StaticHTML from "../../components/StaticHTML";
import HeroBanner from "../../components/HeroBanner";
import HeroImage from "../../assets/media/ConstructionSiteSecurity/background_hero.webp";
import mainImg from "../../assets/media/ConstructionSiteSecurity/construction_security_services.webp";
import AboutSection from "../../components/AboutSection";
import CrimePrevention from "../../assets/media/ConstructionSiteSecurity/PreventionofTheft.png";
import EnhancedWorkerSafety from "../../assets/media/ConstructionSiteSecurity/enhanced_worker_safety.png";
import MinimizedProjectDelays from "../../assets/media/ConstructionSiteSecurity/minimized_project_delays.png";
import SurveillanceAndMonitoring from "../../assets/media/ConstructionSiteSecurity/SurveillanceAndMonitoring.png";
import MainImageWhyChoose from "../../assets/media/ConstructionSiteSecurity/main_image_why_choose.webp";
import TailoredSecuritySolutions from "../../assets/media/ConstructionSiteSecurity/security_solutions.png";
import ExperiencedGuards from "../../assets/media/ConstructionSiteSecurity/experienced_guards.png";
import AdvancedSurveillanceTechnology from "../../assets/media/ConstructionSiteSecurity/advanced_surveillance_technology.png";
import ReliableProtection from "../../assets/media/ConstructionSiteSecurity/reliable_protection.png";
import PerthSecurityGuards from "../../assets/media/ConstructionSiteSecurity/construction_security_company.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import InformationSection from "../../components/InformationSection";
import FAQSection from "../../components/FAQSection";

const ConstructionSiteSecurity = () => {
  const aboutSectionList = [
    {
      title: "Prevention of Theft and Vandalism",
      description:
        "Having security guards on-site reduces the risk of theft and vandalism, protecting valuable materials and equipment. A constant security presence helps deter potential criminals from targeting your project.",
      icon: CrimePrevention,
    },
    {
      title: "Enhanced Worker Safety",
      description:
        "Security personnel not only protect assets but also ensure that workers are safe, monitoring the site for any hazards or unauthorized access. This creates a secure environment for the entire team.",
      icon: EnhancedWorkerSafety,
    },
    {
      title: "24/7 Surveillance and Monitoring",
      description:
        "Our construction site security service offers round-the-clock surveillance, ensuring that your site is protected at all times. Whether during working hours or overnight, we keep your site secure.",
      icon: SurveillanceAndMonitoring,
    },
    {
      title: "Minimized Project Delays",
      description:
        "By preventing theft, accidents, or unauthorized access, our security services help minimize costly delays. You can focus on completing your project on time without worrying about potential security risks.",
      icon: MinimizedProjectDelays,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Tailored Security Solutions",
      description:
        "We understand that every construction site is unique, and we provide customized security plans that address your specific needs and vulnerabilities.",
      alt: "Experienced and Trained Professionals",
      icon: TailoredSecuritySolutions,
    },
    {
      title: "Trained and Experienced Guards",
      description:
        "Our security personnel are highly trained and experienced in handling the unique challenges of construction site security, ensuring the best protection for your project.",
      alt: "Customized Security Solutions",
      icon: ExperiencedGuards,
    },
    {
      title: "Advanced Surveillance Technology",
      description:
        "We use state-of-the-art technology, including CCTV and real-time monitoring systems, to enhance site surveillance and quickly respond to any potential threats.",
      icon: AdvancedSurveillanceTechnology,
    },
    {
      title: "Reliable 24/7 Protection",
      description:
        "Our services offer continuous protection, ensuring that your construction site is secured day and night, giving you peace of mind at all times.",
      alt: "Rapid Response Capabilities",
      icon: ReliableProtection,
    },
  ];

  const FAQs = [
    {
      question:
        "How do I find a reliable construction site security company near me?",
      answer:
        "To find a dependable construction site security company near you, look for one with a proven track record and positive client reviews. Bayok State Security Service offers specialized construction security services in Perth, ensuring your site is well-protected with tailored solutions and experienced personnel.",
    },
    {
      question: "What does your construction site security service include?",
      answer:
        "Our construction site security service includes 24/7 surveillance, real-time monitoring, and on-site security personnel. We also provide customized security plans that address the specific needs and vulnerabilities of your construction site to ensure comprehensive protection.",
    },
  ];
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner
        heading={"Construction Site Security Perth"}
        subHeading={
          "Bayok State Security Service provides top-tier construction site security in Perth, ensuring the safety of your equipment, materials, and personnel against theft, vandalism, and unauthorized access."
        }
        img={HeroImage}
      />
      <AboutSection
        heading={"Benefits of Construction Site Security Perth Services"}
        subHeading={
          "Bayok State Security Service provides specialized protection to ensure your construction site is safe and secure."
        }
        serviceDetails={aboutSectionList}
        mainImg={mainImg}
      />

      <WhyChooseUs
        mainImg={MainImageWhyChoose}
        heading={"Why Choose Our Construction Site Security in Perth"}
        subHeading={
          "Bayok State Security Service provides extensive security solutions tailored to safeguard construction sites against theft, and various other risks."
        }
        detailsList={whyChooseUsList}
      />

      <InformationSection
        img={PerthSecurityGuards}
        heading={"Successful Construction Site Protection: What Sets Us Apart"}
        paragraph={
          "Effective construction site protection requires more than just a visible security presence; it demands a strategic approach tailored to the unique needs of each site. At Bayok State Security Service, we distinguish ourselves through our comprehensive security plans, which are meticulously designed to address the specific vulnerabilities of your construction site. Our team employs a combination of advanced surveillance technology, including CCTV and real-time monitoring systems, alongside highly trained security personnel. By offering tailored security solutions and maintaining a vigilant presence, we ensure that your construction project remains secure and on track. This proactive and personalized approach not only safeguards your assets but also contributes to the smooth progress of your project, minimizing delays and potential disruptions."
        }
      />

      <FAQSection faqs={FAQs} />
    </div>
  );
};

export default ConstructionSiteSecurity;
