import React from "react";
import StaticHTML from "../../components/StaticHTML";
import HeroBanner from "../../components/HeroBanner";
import HeroImage from "../../assets/media/GatehouseSecurityService/background_3.webp";
import mainImg from "../../assets/media/GatehouseSecurityService/gate_security_services_1.webp";
import AboutSection from "../../components/AboutSection";
import improved_visitor_management_1 from "../../assets/media/GatehouseSecurityService/improved_visitor_management_1.png";
import increased_surveillance_and_monitoring_1 from "../../assets/media/GatehouseSecurityService/increased_surveillance_and_monitoring_1.png";
import rapid_response_to_security_incidents_1 from "../../assets/media/GatehouseSecurityService/rapid_response_to_security_incidents_1.png";
import enhanced_access_control_1 from "../../assets/media/GatehouseSecurityService/enhanced_access_control_1.png";
import MainImageWhyChoose from "../../assets/media/GatehouseSecurityService/image_1_2.webp";
import customized_security_solutions_2 from "../../assets/media/GatehouseSecurityService/customized_security_solutions_2.png";
import highly_trained_security_personnel_2 from "../../assets/media/GatehouseSecurityService/highly_trained_security_personnel_2.png";
import enhanced_visitor_management_systems_2 from "../../assets/media/GatehouseSecurityService/enhanced_visitor_management_systems_2.png";
import ReliableProtection from "../../assets/media/ConstructionSiteSecurity/reliable_protection.png";
import gatehouse_security_guard_2 from "../../assets/media/GatehouseSecurityService/gatehouse_security_guard_2.webp";
import WhyChooseUs from "../../components/WhyChooseUs";
import InformationSection from "../../components/InformationSection";
import FAQSection from "../../components/FAQSection";

const GatehouseSecurityService = () => {
  const aboutSectionList = [
    {
      title: "Enhanced Access Control",
      description:
        "Gatehouse security allows for effective management of who enters and exits your property. This controlled access reduces the risk of unauthorized individuals gaining entry, ensuring a safer environment.",
      icon: enhanced_access_control_1,
    },
    {
      title: "Increased Surveillance and Monitoring",
      description:
        "With dedicated personnel stationed at the gatehouse, continuous surveillance is maintained. This monitoring helps detect suspicious activities and ensures prompt action can be taken if necessary.",
      icon: increased_surveillance_and_monitoring_1,
    },
    {
      title: "Improved Visitor Management",
      description:
        "Our gatehouse security guards streamline the process of managing visitors to your site. We verify identities, maintain logs, and ensure that all guests are accounted for, enhancing overall security.",
      icon: improved_visitor_management_1,
    },
    {
      title: "Rapid Response to Security Incidents",
      description:
        "In the event of a security breach or emergency, our gatehouse personnel are trained to respond quickly and effectively. Their immediate action can mitigate risks and protect your property and personnel.",
      icon: rapid_response_to_security_incidents_1,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Highly Trained Security Personnel",
      description:
        "Our gatehouse security team consists of skilled professionals trained in access control and surveillance techniques. Their expertise ensures that your property is protected by knowledgeable individuals who can handle various security scenarios.",
      icon: highly_trained_security_personnel_2,
    },
    {
      title: "Customized Security Solutions",
      description:
        "We understand that every property has different security needs. Our gatehouse services are tailored to your specific requirements, allowing for flexible and effective security measures that adapt to your operations.",
      icon: customized_security_solutions_2,
    },
    {
      title: "24/7 Monitoring and Support",
      description:
        "Our gatehouse security services provide round-the-clock monitoring, ensuring that your property is safeguarded at all times. This continuous oversight helps identify and address security concerns promptly.",
      icon: ReliableProtection,
    },
    {
      title: "Enhanced Visitor Management Systems",
      description:
        "We implement efficient visitor management procedures at the gatehouse, ensuring that all guests are verified and logged. This systematic approach adds an extra layer of security while streamlining the entry process.",
      icon: enhanced_visitor_management_systems_2,
    },
  ];

  const FAQs = [
    {
      question: "What services do your gatehouse security guards provide?",
      answer:
        "Our gatehouse security guards offer a range of services, including controlled access management, visitor verification, continuous surveillance, and emergency response. They ensure that only authorized individuals enter the premises while monitoring for any suspicious activity.",
    },
    {
      question:
        "How do you ensure the effectiveness of your gatehouse security services?",
      answer:
        "We employ highly trained security personnel and utilize advanced technology, such as surveillance cameras and access control systems. Regular training and updates on security protocols ensure that our guards are well-prepared to handle various situations effectively.",
    },
    {
      question:
        "Can your gatehouse security services be customized to fit my property’s needs?",
      answer:
        "Absolutely! We tailor our gatehouse security solutions to meet the specific requirements of each property. This customization allows us to address unique challenges and enhance the overall security of your site.",
    },
  ];
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner
        heading={"Gatehouse Security Perth"}
        subHeading={
          "Bayok State Security Service provides professional Gatehouse Security Services in Perth, ensuring controlled access and enhanced safety for your premises."
        }
        img={HeroImage}
      />
      <AboutSection
        heading={"Benefits of Gatehouse Security Services in Perth"}
        subHeading={
          "Bayok State Security Service offers effective gatehouse security solutions to enhance access control and safety for your property."
        }
        serviceDetails={aboutSectionList}
        mainImg={mainImg}
      />

      <WhyChooseUs
        mainImg={MainImageWhyChoose}
        heading={"Why Choose Our Gatehouse Security Services?"}
        subHeading={
          "Bayok State Security Service delivers reliable and efficient gatehouse security solutions tailored to meet the unique needs of your property, ensuring maximum safety and control."
        }
        detailsList={whyChooseUsList}
      />

      <InformationSection
        img={gatehouse_security_guard_2}
        heading={"Why are gatehouse security guard services important?"}
        paragraph={
          "Gatehouse security guard services are essential for ensuring the safety and security of a property. They provide a first line of defense against unauthorized access, protecting both assets and individuals on-site."
        }
        bulletPoints={[
          "Controlled Access: Security guards manage entry points, ensuring that only authorized personnel and visitors can access the premises.",
          "Continuous Surveillance: They monitor the area around the gatehouse, helping to detect suspicious behavior and respond promptly to potential threats.",
          "Emergency Response: Trained guards are equipped to handle emergencies, providing immediate assistance and coordinating with law enforcement if needed.",
          "Deterrent Against Crime: A visible security presence discourages criminal activity, reducing the likelihood of theft or vandalism on the property.",
          "Enhanced Safety for Employees: Employees feel safer knowing that trained security personnel are present, contributing to a more secure working environment.",
        ]}
      />

      <FAQSection faqs={FAQs} />
    </div>
  );
};

export default GatehouseSecurityService;
