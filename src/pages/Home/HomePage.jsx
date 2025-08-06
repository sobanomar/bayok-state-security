import React from "react";

import AboutSection from "./AboutSection";
import HeroBanner from "./HeroBanner";
import WhyChooseUs from "./WhyChooseUs";
import HowWeEnhanceSecurity from "./HowWeEnhanceSecurity";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import ServicesSection from "../../components/ServicesSection";

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      <HeroBanner />

      <AboutSection />

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
