import React from "react";
import FAQSection from "../../components/FAQSection";
import TestimonialSection from "./TestimonialSection";
import AboutSection from "../../components/AboutSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import InformationSection from "../../components/InformationSection";
import ServicesSection from "../../components/ServicesSection";
import HeroImage from "../../assets/media/HomeImages/hero_image.webp";
import HeroBanner from "../../components/HeroBanner";
import CustomerSafety from "../../assets/media/HomeImages/customer-safety.png";
import MonitoringOfPremises from "../../assets/media/HomeImages/monitoring-of-premises.png";
import RapidResponseSecurity from "../../assets/media/HomeImages/rapid-response-security.png";
import CrimePrevention from "../../assets/media/HomeImages/crime-prevention.png";
import SecurityGuardsPerthImage from "../../assets/media/HomeImages/security_guards_perth_1.webp";
import AdvancedTechnologyAndTools from "../../assets/media/HomeImages/advanced_technology_and_tools_2.png";
import ExperiencedAndTrainedProfessionals from "../../assets/media/HomeImages/experienced_and_trained_professionals_2.png";
import CustomizedSecuritySolutions from "../../assets/media/HomeImages/customized_security_solutions_2.png";
import WhyChooseOurSecurityServices from "../../assets/media/HomeImages/why_choose_our_security_services_2.webp";
import PerthSecurityGuards from "../../assets/media/HomeImages/perth_security_guards_2.webp";

const HomePage = () => {
  const aboutSectionList = [
    {
      title: "Crime Prevention and Deterrence",
      description:
        "Having trained security guards on-site acts as a visible deterrent to potential criminals, reducing the chances of theft, vandalism, and other criminal activities.",
      icon: CrimePrevention,
    },
    {
      title: "Rapid Response to Emergencies",
      description:
        "Security guards are trained to respond quickly and effectively in emergency situations, ensuring the safety of people and property until law enforcement or emergency services arrive.",
      icon: RapidResponseSecurity,
    },
    {
      title: "Enhanced Customer Safety",
      description:
        "In addition to protecting property, security guards provide a reassuring presence, ensuring customers and visitors feel safe and secure in any environment.",
      icon: CustomerSafety,
    },
    {
      title: "Professional Monitoring of Premises",
      description:
        "Security guards continuously monitor entrances, exits, and high-risk areas, ensuring any suspicious activities are identified and addressed before they escalate.",
      icon: MonitoringOfPremises,
    },
  ];

  const whyChooseUsList = [
    {
      title: "Experienced and Trained Professionals",
      description:
        "Our security personnel undergo rigorous training and have extensive experience in various security environments.",
      alt: "Experienced and Trained Professionals",
      icon: ExperiencedAndTrainedProfessionals,
    },
    {
      title: "Customized Security Solutions",
      description:
        "We offer tailored security plans designed to meet the unique needs of your business or property. Whether you need 24/7 monitoring or periodic patrols.",
      alt: "Customized Security Solutions",
      icon: CustomizedSecuritySolutions,
    },
    {
      title: "Advanced Technology and Tools",
      description:
        "We use the latest security technologies, including surveillance systems, real-time reporting, and alarm monitoring, ensuring top-notch protection for your premises.",
      alt: "Advanced Technology and Tools",
      icon: AdvancedTechnologyAndTools,
    },
    {
      title: "Rapid Response Capabilities",
      description:
        "Our team is trained to respond swiftly and effectively to any security threats or emergencies. Whether it's an alarm activation or a suspicious situation, we ensure immediate action to prevent potential risks.",
      alt: "Rapid Response Capabilities",
      icon: RapidResponseSecurity,
    },
  ];

  const homeFAQs = [
    {
      question: "How do I find a reliable security service company near me?",
      answer:
        "To find a reliable security service company, research local providers, check their licensing and certifications, read customer reviews, and request quotes from multiple companies to compare services and pricing.",
    },
    {
      question: "Are your security guards trained for emergencies?",
      answer:
        "Yes, all our security guards undergo comprehensive emergency response training, including first aid, evacuation procedures, and crisis management to ensure they can handle any situation effectively.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner
        heading={"Security Services Perth"}
        subHeading={
          "Bayok State Security Service offers professional and reliable security services in Perth, ensuring the safety and protection of businesses, events, and residential properties throughout the area."
        }
        img={HeroImage}
      />

      <AboutSection
        heading={"Benefits of Security Guards Perth Services"}
        subHeading={
          "Hiring professional security guards in Perth ensures safety and peace of mind for both businesses and residential properties."
        }
        serviceDetails={aboutSectionList}
        mainImg={SecurityGuardsPerthImage}
      />

      <ServicesSection
        heading={"Types of Security Services"}
        subHeading={
          "Bayok State Security Service provides a wide range of specialized security solutions tailored to meet the needs of various industries in Perth"
        }
      />

      <WhyChooseUs
        mainImg={WhyChooseOurSecurityServices}
        heading={"Why Choose Our Security Services"}
        subHeading={
          "Bayok State Security Service stands out as a trusted provider of security services in Perth, delivering unmatched protection and peace of mind for businesses and residential properties."
        }
        detailsList={whyChooseUsList}
      />
      <InformationSection
        img={PerthSecurityGuards}
        heading={"How Our Security Guards Can Enhance Your Safety?"}
        paragraph={
          "Our Perth security guards are highly trained to handle a wide range of security concerns, making a significant difference in maintaining the safety and security of your property. From patrolling large commercial sites to monitoring small residential spaces. In addition to their physical presence, our security guards are equipped with advanced technology to enhance their effectiveness. With real-time reporting, surveillance monitoring, and communication systems, they can keep track of activities across your premises and address issues as they arise. Whether it's managing crowd control at an event or securing high-risk areas, our security guards operate with a high level of professionalism and attention to detail."
        }
      />

      <TestimonialSection />

      <FAQSection faqs={homeFAQs} />
    </div>
  );
};

export default HomePage;
