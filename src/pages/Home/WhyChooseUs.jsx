import React from "react";
import RapidResponseSecurity from "../../assets/media/HomeImages/rapid-response-security.png";
import AdvancedTechnologyAndTools from "../../assets/media/HomeImages/advanced_technology_and_tools_2.png";
import ExperiencedAndTrainedProfessionals from "../../assets/media/HomeImages/experienced_and_trained_professionals_2.png";
import CustomizedSecuritySolutions from "../../assets/media/HomeImages/customized_security_solutions_2.png";
import WhyChooseOurSecurityServices from "../../assets/media/HomeImages/why_choose_our_security_services_2.webp";

const WhyChooseUs = () => {
  return (
    <section className="relative mb-12 sm:mb-16">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 ">
          <img
            className="h-full object-cover md:rounded-br-lg"
            src={WhyChooseOurSecurityServices}
            alt="WhyChooseOurSecurityServices"
          />
          <span
            className="hidden lg:block font-medium text-white text-center absolute rounded-lg"
            style={{
              fontSize: "28px",
              width: "80%",
              lineHeight: "36px",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              top: "50%",
              padding: "18px 30px",
              background: "#8f0558",
            }}
          >
            Reasons Why Should Choose Us?
          </span>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="p-4 sm:p-8">
            <div
              className="mb-6"
              style={{ fontSize: "16px", lineHeight: "25px" }}
            >
              <h2
                className="font-semibold relative text-xl sm:text-2xl lg:text-3xl"
                style={{
                  lineHeight: "1.2",
                  paddingBottom: "20px",
                  marginBottom: "20px",
                  color: "#000000",
                }}
              >
                Why Choose Our Security Services
                <div
                  className="absolute"
                  style={{
                    content: '""',
                    bottom: "0",
                    left: "0",
                    width: "120px",
                    height: "2px",
                    backgroundColor: "#8f0558",
                  }}
                ></div>
                <div
                  className="absolute"
                  style={{
                    content: '""',
                    left: "48.5px",
                    width: "23px",
                    height: "23px",
                    borderRadius: "100%",
                    backgroundColor: "#8f0558",
                    bottom: "-10.5px",
                    border: "8px solid #fff",
                  }}
                ></div>
              </h2>
              <p className="text-sm sm:text-base" style={{ color: "#5a5a5a" }}>
                Bayok State Security Service stands out as a trusted provider of
                security services in Perth, delivering unmatched protection and
                peace of mind for businesses and residential properties.
              </p>
            </div>
            <ul
              className="list-none mb-0 grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{
                lineHeight: "22px",
                fontSize: "14px",
              }}
            >
              {[
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
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div
                    className="flex items-center justify-center flex-shrink-0 rounded-lg"
                    style={{
                      width: "65px",
                      minWidth: "65px",
                      border: "2px solid #8f0558",
                      padding: "6px",
                    }}
                  >
                    <div>
                      <img src={item.icon} />
                    </div>
                  </div>
                  <div className="pl-3">
                    <h3 className="mb-2 font-semibold text-base sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mb-0 text-xs sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
