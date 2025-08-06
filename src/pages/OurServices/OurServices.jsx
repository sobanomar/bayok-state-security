import React from "react";
import StaticHTML from "../../components/StaticHTML";
import ServicesSection from "../../components/ServicesSection";

const OurServices = () => {
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      {/* <StaticHTML path="/OurServices.html" /> */}
      <ServicesSection heading={"Our Services"} />
    </div>
  );
};

export default OurServices;
