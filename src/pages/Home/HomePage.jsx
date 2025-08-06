import React from "react";
import WhyChooseUs from "./WhyChooseUs";
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
          "  Hiring professional security guards in Perth ensures safety and peace of mind for both businesses and residential properties."
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

      <WhyChooseUs />

      <HowWeEnhanceSecurity />

      <TestimonialSection />

      <FAQSection />
    </div>
  );
};

export default HomePage;
