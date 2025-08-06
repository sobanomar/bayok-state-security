import React from "react";

import AboutSection from "./AboutSection";
import HeroBanner from "./HeroBanner";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import HowWeEnhanceSecurity from "./HowWeEnhanceSecurity";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{
        fontFamily: '"Fira Sans", sans-serif',
        lineHeight: "1.6",
      }}
    >
      <HeroBanner />

      <AboutSection />

      <ServicesSection />

      <WhyChooseUs />

      <HowWeEnhanceSecurity />

      <TestimonialSection />

      <FAQSection />
    </div>
  );
};

export default HomePage;
