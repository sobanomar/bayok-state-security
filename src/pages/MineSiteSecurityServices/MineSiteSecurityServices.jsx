import React from "react";
import StaticHTML from "../../components/StaticHTML";
import HeroBanner from "../../components/HeroBanner";
import HeroImage from "../../assets/media/MineSiteSecurityServices/background_3.webp";
import mainImg from "../../assets/media/MineSiteSecurityServices/mine_security_company_1.webp";
import AboutSection from "../../components/AboutSection";
import prevention_of_theft_and_vandalism_1 from "../../assets/media/MineSiteSecurityServices/prevention_of_theft_and_vandalism_1.png";
import round_the_clock_surveillance_1 from "../../assets/media/MineSiteSecurityServices/round_the_clock_surveillance_1.png";
import compliance_with_industry_standards_1 from "../../assets/media/MineSiteSecurityServices/compliance_with_industry_standards_1.png";
import SafetyForEmployeesAndEquipment from "../../assets/media/MineSiteSecurityServices/safety_for_employees_and_equipment_1.png";
import MainImageWhyChoose from "../../assets/media/MineSiteSecurityServices/image_1_2.webp";
import TailoredSecuritySolutions from "../../assets/media/ConstructionSiteSecurity/security_solutions.png";
import ExperiencedGuards from "../../assets/media/ConstructionSiteSecurity/experienced_guards.png";
import advanced_monitoring_and_technology_2 from "../../assets/media/MineSiteSecurityServices/advanced_monitoring_and_technology_2.png";
import ReliableProtection from "../../assets/media/ConstructionSiteSecurity/reliable_protection.png";
import PerthSecurityGuards from "../../assets/media/MineSiteSecurityServices/mining_security_perth_2.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import InformationSection from "../../components/InformationSection";
import FAQSection from "../../components/FAQSection";

const MineSiteSecurityServices = () => {
  const aboutSectionList = [
    {
      title: "Safety for Employees and Equipment",
      description:
        "A professional mine security company ensures the safety of your workers and valuable equipment. Security personnel monitor all areas, reducing risks of accidents, theft, and unauthorized access.",
      icon: SafetyForEmployeesAndEquipment,
    },
    {
      title: "Round-the-Clock Surveillance",
      description:
        "With 24/7 monitoring and patrols, your mine site remains secure at all times. Continuous surveillance helps detect potential threats and ensures immediate response to emergencies.",
      icon: round_the_clock_surveillance_1,
    },
    {
      title: "Prevention of Theft and Vandalism",
      description:
        "Mining operations often deal with valuable resources and equipment. Hiring a security company helps deter theft, vandalism, and other criminal activities, protecting your assets and investments.",
      icon: prevention_of_theft_and_vandalism_1,
    },
    {
      title: "Compliance with Industry Standards",
      description:
        "Professional security companies understand industry regulations and standards. They ensure that your mine site adheres to all safety protocols, minimizing liability and maintaining a secure working environment.",
      icon: compliance_with_industry_standards_1,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Experienced Security Professionals",
      description:
        "Our team consists of highly trained security professionals with experience in mine site security. They understand the unique challenges of securing large, remote locations and are equipped to handle them efficiently.",
      icon: ExperiencedGuards,
    },
    {
      title: "Tailored Security Solutions",
      description:
        "We design customized security plans specific to your mine site, considering factors such as site layout, operation hours, and high-risk areas. Our flexible solutions adapt to your evolving security needs.",
      alt: "Tailored Security Solutions",
      icon: TailoredSecuritySolutions,
    },
    {
      title: "Advanced Monitoring and Technology",
      description:
        "We use cutting-edge technology, including CCTV surveillance, access control systems, and real-time alarm monitoring, to provide comprehensive security coverage for your mine site.",
      icon: advanced_monitoring_and_technology_2,
    },
    {
      title: "24/7 Security Presence",
      description:
        "Our mine security services offer round-the-clock protection, with patrols and surveillance ensuring that your site is safe from threats day and night, minimizing risks of theft and vandalism.",
      icon: ReliableProtection,
    },
  ];

  const FAQs = [
    {
      question:
        "What types of security measures do you implement for mine sites?",
      answer:
        "Our mine site security services include 24/7 surveillance, regular patrols, access control for restricted areas, and emergency response protocols. We also integrate advanced technology such as CCTV and alarm systems to ensure comprehensive protection.",
    },
    {
      question: "How do you ensure the safety of employees on a mine site?",
      answer:
        "We prioritize employee safety by conducting thorough security assessments, implementing health and safety compliance measures, and maintaining a visible security presence. Our trained security personnel monitor the site for potential hazards and ensure a secure working environment.",
    },
    {
      question:
        "Can your security services adapt to different mine site requirements?",
      answer:
        "Yes, our security solutions are tailored to meet the specific needs of each mine site. We assess various factors, such as site layout, operational hours, and potential risks, to create a customized security plan that effectively addresses your unique challenges",
    },
  ];
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner
        heading={"Mine Site Security Perth"}
        subHeading={
          "Bayok State Security Service provides specialized Mine Site Security Services in Perth, ensuring the safety and protection of your mine site operations with tailored security solutions."
        }
        img={HeroImage}
      />
      <AboutSection
        heading={"Benefits of Hiring a Mine Security Company"}
        subHeading={
          "Bayok State Security Service provides expert mine security solutions to protect your site and operations.."
        }
        serviceDetails={aboutSectionList}
        mainImg={mainImg}
      />

      <WhyChooseUs
        mainImg={MainImageWhyChoose}
        heading={"Why Choose Our Mine Security Services in Perth?"}
        subHeading={
          "Bayok State Security Service delivers reliable, comprehensive security solutions tailored for mine sites, ensuring the safety of operations, employees, and assets."
        }
        detailsList={whyChooseUsList}
      />

      <InformationSection
        img={PerthSecurityGuards}
        heading={"What is included in Our mine site security services"}
        paragraph={
          "At Bayok State Security Service, our Mine Site Security Services are designed to provide comprehensive protection for your site, employees, and valuable assets. We offer tailored solutions that address the unique challenges of mine site security."
        }
        bulletPoints={[
          "24/7 site surveillance and monitoring",
          "Regular security patrols across all site areas",
          "Access control for restricted zones",
          "Theft prevention and asset protection",
          "Emergency response and incident management",
          "Health and safety compliance monitoring",
          "Integration of advanced security technology, including CCTV and alarms",
        ]}
      />

      <FAQSection faqs={FAQs} />
    </div>
  );
};

export default MineSiteSecurityServices;
