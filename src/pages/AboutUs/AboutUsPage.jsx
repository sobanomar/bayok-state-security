import React from "react";
import { Link } from "react-router-dom";
import CEOPortrait from "../../assets/media/coe_image.png";
import BusinessCard from "../../assets/business_card.pdf";

const AboutUsPage = () => {
  return (
    <div className="font-fira text-black leading-[1.6] relative overflow-hidden w-full">
      <section className="bg-[#f0f3f6] py-[50px] md:py-[30px] lg:py-[50px]">
        <div className="w-full px-6 mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1200px]">
          <div className="flex justify-center">
            <div className="w-full xl:w-11/12">
              <div className="bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mt-[25px] md:mt-[15px] lg:mt-[25px] p-[25px] md:p-[15px] lg:p-[25px] rounded-[10px]">
                <h1 className="text-center mb-3 lg:mb-6 text-[38px] xl:text-[38px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-black leading-[1.2] font-semibold">
                  About Us
                </h1>
                <div className="my-4">
                  <a
                    href={BusinessCard}
                    download="Business-Card.pdf"
                    className="bg-blue-500 w-full md:w-auto text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    Download Our Business Card
                  </a>
                </div>

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

                {/* CEO's Message Section */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg my-8">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="flex justify-center md:justify-start md:col-span-5">
                      <img
                        className="h-62 md:h-96 w-96 rounded-lg object-cover"
                        src={CEOPortrait}
                        alt="CEO Portrait"
                      />
                    </div>
                    <div className="md:col-span-7">
                      <h2 className="text-[28px] xl:text-[28px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-black leading-[1.2] font-semibold mb-4">
                        CEO's Message
                      </h2>
                      <p className="text-base leading-[1.6] mb-6 italic">
                        "As the CEO of Bayok State Security Service, I am proud
                        to lead a team dedicated to delivering reliable,
                        professional, and innovative security solutions our
                        clients can trust. Our journey began with a vision to
                        make safety a personal responsibility we share with
                        every client. Born on 08/05/1985 in Dubai, Sudan, I hold
                        a Bachelor of Business Management from MIT – Melbourne
                        Institute of Technology, graduating on 10 December 2019.
                        With this foundation, I remain committed to guiding our
                        team in setting the highest standards in the security
                        industry."
                      </p>
                      <div className="mt-6">
                        <p className="font-semibold text-blue-600 text-lg">
                          Christopher Bayok
                        </p>
                        <p className="text-sm text-gray-600">
                          Chief Executive Officer
                        </p>
                        <p className="text-sm text-gray-600">
                          Bayok State Security Service
                        </p>
                      </div>
                    </div>
                  </div>
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

                <p className="mb-4 text-base leading-[1.6]">
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
