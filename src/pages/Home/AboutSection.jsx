import React from "react";

import CustomerSafety from "../../assets/media/HomeImages/customer-safety.png";
import MonitoringOfPremises from "../../assets/media/HomeImages/monitoring-of-premises.png";
import RapidResponseSecurity from "../../assets/media/HomeImages/rapid-response-security.png";
import CrimePrevention from "../../assets/media/HomeImages/crime-prevention.png";
import SecurityGuardsPerthImage from "../../assets/media/HomeImages/security_guards_perth_1.webp";

const AboutSection = () => {
  return (
    <section className="relative mb-12 sm:mb-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              <div className="img-holder">
                <div className="w-full bg-gray-200 flex items-center justify-center text-gray-600 rounded-lg">
                  <img
                    src={SecurityGuardsPerthImage}
                    alt="SecurityGuardsPerthImage"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div>
                <h2
                  className="font-semibold text-center relative text-xl sm:text-2xl lg:text-3xl"
                  style={{
                    lineHeight: "1.2",
                    paddingBottom: "20px",
                    marginBottom: "20px",
                    color: "#000000",
                  }}
                >
                  Benefits of Security Guards Perth Services
                  <div
                    className="absolute"
                    style={{
                      content: '""',
                      bottom: "0",
                      width: "120px",
                      height: "2px",
                      backgroundColor: "#8f0558",
                      transform: "translateX(-50%)",
                      left: "50%",
                    }}
                  ></div>
                  <div
                    className="absolute"
                    style={{
                      content: '""',
                      left: "50%",
                      width: "23px",
                      height: "23px",
                      borderRadius: "100%",
                      transform: "translateX(-50%)",
                      backgroundColor: "#8f0558",
                      bottom: "-10.5px",
                      border: "8px solid #fff",
                    }}
                  ></div>
                </h2>
                <p
                  className="text-base sm:text-lg text-center lg:text-left"
                  style={{
                    marginBottom: "35px",
                    lineHeight: "1.6",
                    color: "#5a5a5a",
                  }}
                >
                  Hiring professional security guards in Perth ensures safety
                  and peace of mind for both businesses and residential
                  properties.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div
              className="h-full p-4 sm:p-6 rounded-lg"
              style={{ backgroundColor: "#f0f3f6" }}
            >
              <ul
                className="list-none relative mb-0 h-full flex flex-col justify-center space-y-6 sm:space-y-8"
                style={{
                  fontSize: "15px",
                  lineHeight: "24px",
                  backgroundColor: "rgba(240, 243, 246, 0.9)",
                }}
              >
                {[
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
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className="flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "#ffffff",
                        transform: "rotate(45deg)",
                        minWidth: "45px",
                        width: "60px",
                        height: "60px",
                        borderRadius: "8px",
                        padding: "8px",
                      }}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{
                          transform: "rotate(-45deg)",
                        }}
                      >
                        <img src={item.icon} />
                      </div>
                    </div>
                    <div className="pl-4 sm:pl-6">
                      <h3 className="block font-semibold capitalize mb-2 text-lg sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mb-0 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
