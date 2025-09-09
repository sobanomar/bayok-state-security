import React from "react";
import { Link } from "react-router-dom";
import CEOPortrait from "../../assets/media/ceo_portrait.jpg";
import ASIAL_LOGO from "../../assets/media/ASIAL_LOGO.jpg";
import BusinessCard from "../../assets/business_card.png";

// Mock hero image for demo - replace with actual import
const heroImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

const AboutUsPage = () => {
  return (
    <div className="font-fira text-black leading-[1.6] relative overflow-hidden w-full">
      <section className="relative min-h-[230px] lg:min-h-[230px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 135, 239, 0.8) 0%, rgba(20, 24, 100, 0.8) 100%)",
            zIndex: 1,
          }}
        />

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
          <h1 className="text-white font-bold text-[38px] lg:text-[38px] md:text-[32px] sm:text-[28px] xs:text-[26px] tracking-[2px] leading-[1.2]">
            About Us
          </h1>
        </div>
      </section>
      <section className="bg-[#f0f3f6] py-[20px] md:py-[50px]">
        <div className="w-full px-4 mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1200px]">
          <div className="flex justify-center">
            <div className="w-full xl:w-11/12">
              <div className="bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mt-2 sm:mt-8 p-6 sm:p-8 rounded-xl">
                {/* <h1 className="text-center mb-3 lg:mb-6 text-[38px] xl:text-[38px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-black leading-[1.2] font-semibold">
                  About Us
                </h1> */}

                <p className="mb-4 text-base leading-[1.6]">
                  At{" "}
                  <Link
                    to={"/"}
                    className="text-blue-600 hover:text-blue-800 no-underline"
                  >
                    Bayok State Security Service
                  </Link>
                  , we are dedicated to providing top-tier security solutions
                  across Perth, ensuring the safety and protection of
                  businesses, construction sites, and specialized facilities.
                  With years of experience and a team of highly trained
                  professionals, we offer comprehensive security services that
                  are tailored to meet the specific needs of each client. Our
                  mission is to deliver exceptional security support that
                  enhances the safety of people, assets, and operations.
                </p>

                {/* CEOs Message */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 rounded-lg my-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-start md:col-span-5 h-full">
                      <img
                        className="h-full w-full rounded-lg object-cover"
                        src={CEOPortrait}
                        alt="CEO Portrait"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="md:col-span-7 flex flex-col justify-between">
                      <h2 className="text-[28px] xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-black leading-[1.2] font-semibold mb-4">
                        CEO's Message
                      </h2>
                      <p className="text-base leading-[1.6] mb-4  italic">
                        "As the CEO of Bayok State Security Service, I am proud
                        to lead a team committed to delivering reliable,
                        professional, and innovative security solutions our
                        clients can trust.
                        <br />
                        Our journey began with a simple vision—to make safety a
                        shared responsibility. Today, that vision drives
                        everything we do, from protecting businesses and
                        construction sites to ensuring peace of mind for our
                        clients.
                        <br />I remain dedicated to upholding the highest
                        standards in the security industry and ensuring our
                        services reflect integrity, accountability, and
                        excellence."
                      </p>
                      <div>
                        <p className="font-semibold text-blue-600 text-lg">
                          Christopher Bayok
                        </p>
                        <p className="text-sm text-gray-600">
                          Chief Executive Officer
                        </p>
                        <p className="text-sm text-gray-600">
                          Bayok State Security Service
                        </p>
                        <div className="mt-2">
                          <a
                            href={BusinessCard}
                            download="Business-Card.pngP"
                            className="bg-gradient-to-r from-[#1b1464] via-[#0087ef] to-[#1b1464] 
              bg-[length:200%_auto] hover:bg-right-center text-white 
              font-normal tracking-[1px] border-0 rounded-[5px] 
              px-4 md:px-8 transition-all duration-500 cursor-pointer py-1.5 
              whitespace-normal break-words text-center"
                          >
                            Business Card
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center">
                    <img
                      src={ASIAL_LOGO}
                      alt="ASIAL_LOGO"
                      className="w-32 sm:w-20 object-contain pb-4 sm:pb-6"
                    />
                    <h2 className="text-2xl sm:text-3xl text-black leading-[1.2] font-semibold mb-2 text-center sm:text-start">
                      Industry Association Membership
                    </h2>
                  </div>
                  <p className="mb-8 text-base leading-[1.6]">
                    Bayok State Security is a proud member of the Australian
                    Security Industry Association Limited (ASIAL), the peak
                    national body for security professionals in Australia .
                    Membership in ASIAL is recognized as a mark of distinction,
                    indicating that we meet the highest standards of
                    professionalism valued by clients, the public, and
                    government . As an ASIAL member, we adhere to the
                    association’s strict code of conduct and all required
                    industry regulations, demonstrating our commitment to
                    best-practice standards and ethical service . We proudly
                    display the ASIAL member logo as a symbol of this commitment
                    to quality and continuous improvement, giving our clients
                    added confidence in the reliability and integrity of our
                    security services
                  </p>
                </div>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Our Core Services
                </h2>

                <p className="mb-4 text-base leading-[1.6]">
                  We specialize in a variety of security services that ensure
                  optimal protection for different industries:
                </p>

                <h3 className="text-[20px] xl:text-[20px] lg:text-[18px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Construction Site Security
                </h3>

                <p className="mb-4 text-base leading-[1.6]">
                  Our Construction Site Security services are designed to
                  safeguard your project from theft, vandalism, and unauthorized
                  access. With 24/7 monitoring, patrols, and advanced
                  surveillance technology, we provide a secure environment that
                  allows your construction activities to proceed without
                  disruption.
                </p>

                <h3 className="text-[20px] xl:text-[20px] lg:text-[18px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Alarm Response Services
                </h3>

                <p className="mb-4 text-base leading-[1.6]">
                  Our Alarm Response Services in Perth provide rapid reaction to
                  security alarms, ensuring immediate action in the event of an
                  incident. We offer 24/7 monitoring and a dedicated team ready
                  to respond quickly, minimizing risks and potential damage to
                  your property.
                </p>

                <h3 className="text-[20px] xl:text-[20px] lg:text-[18px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Mobile Patrol Security Services
                </h3>

                <p className="mb-4 text-base leading-[1.6]">
                  Our Mobile Patrol Security services deliver flexible and
                  dynamic security for various locations. With regular patrols
                  and real-time monitoring, we ensure ongoing protection,
                  detecting and responding to threats before they escalate.
                </p>

                <h3 className="text-[20px] xl:text-[20px] lg:text-[18px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Mine Site Security Services
                </h3>

                <p className="mb-4 text-base leading-[1.6]">
                  We offer specialized Mine Site Security Services that cater to
                  the unique challenges of securing large and remote mining
                  operations. From theft prevention to access control, our
                  solutions protect your valuable resources, equipment, and
                  personnel.
                </p>

                <h3 className="text-[20px] xl:text-[20px] lg:text-[18px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Gatehouse Security Services
                </h3>

                <p className="mb-4 text-base leading-[1.6]">
                  Our Gatehouse Security Services ensure that only authorized
                  individuals can access your premises. With professional guards
                  stationed at entry points, we manage visitor verification,
                  monitor activities, and respond swiftly to security breaches.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Why Choose Us?
                </h2>

                <p className=" text-base leading-[1.6]">
                  Bayok State Security Service stands out for our commitment to
                  professionalism, reliability, and advanced security
                  technology. We pride ourselves on providing tailored security
                  solutions, adapting to the specific requirements of our
                  clients while maintaining a proactive approach to risk
                  management. Whether it's construction, mining, or business
                  properties, we ensure comprehensive protection that allows you
                  to focus on your operations with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
