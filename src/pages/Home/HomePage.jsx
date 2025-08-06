import React from "react";
import HowWeEnhanceSecurity from "./HowWeEnhanceSecurity";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import ServicesSection from "../../components/ServicesSection";
import HeroImage from "../../assets/media/HomeImages/hero_image.webp";
import HeroBanner from "../../components/HeroBanner";
import CustomerSafety from "../../assets/media/HomeImages/customer-safety.png";
import MonitoringOfPremises from "../../assets/media/HomeImages/monitoring-of-premises.png";
import RapidResponseSecurity from "../../assets/media/HomeImages/rapid-response-security.png";
import CrimePrevention from "../../assets/media/HomeImages/crime-prevention.png";
import SecurityGuardsPerthImage from "../../assets/media/HomeImages/security_guards_perth_1.webp";
import AboutSection from "../../components/AboutSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import AdvancedTechnologyAndTools from "../../assets/media/HomeImages/advanced_technology_and_tools_2.png";
import ExperiencedAndTrainedProfessionals from "../../assets/media/HomeImages/experienced_and_trained_professionals_2.png";
import CustomizedSecuritySolutions from "../../assets/media/HomeImages/customized_security_solutions_2.png";
import WhyChooseOurSecurityServices from "../../assets/media/HomeImages/why_choose_our_security_services_2.webp";

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

      <HowWeEnhanceSecurity />

      <TestimonialSection />

      <FAQSection />
    </div>
  );
};

export default HomePage;
