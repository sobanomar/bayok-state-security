import React from "react";
import StaticHTML from "../../components/StaticHTML";
import ContactPage from "./ContactPage";

const ContactUs = () => {
  return (
    <div
      style={{
        fontFamily: '"Fira Sans", sans-serif',
      }}
    >
      {/* <StaticHTML path="/ContactUs.html" /> */}
      <ContactPage />
    </div>
  );
};

export default ContactUs;
