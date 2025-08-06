import React from "react";
import StaticHTML from "../../components/StaticHTML";
import AboutUsPage from "./AboutUsPage";

const AboutUs = () => {
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      {/* <StaticHTML path="/AboutUs.html" /> */}
      <AboutUsPage />
    </div>
  );
};

export default AboutUs;
