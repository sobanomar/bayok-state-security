import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditionsPage = () => {
  return (
    <div className="font-fira text-black leading-[1.6] relative overflow-hidden w-full">
      <section className="bg-[#f0f3f6] py-[30px] md:py-[50px]">
        <div className="w-full px-4 mx-auto max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1200px]">
          <div className="flex justify-center">
            <div className="w-full xl:w-11/12">
              <div className="bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] mt-[25px] md:mt-[15px] lg:mt-[25px] p-[20px] md:p-[15px] lg:p-[25px] rounded-[10px]">
                <h1 className="text-center mb-4 lg:mb-6 text-[30px] xl:text-[38px] lg:text-[32px] md:text-[28px] sm:text-[26px] text-black leading-[1.2] font-semibold">
                  Terms and Conditions
                </h1>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Introduction
                </h2>

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

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Services Offered
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  Bayok State Security Service provides a range of security
                  services, including but not limited to, construction site
                  security, mobile patrol services, alarm response, mine site
                  security, and gatehouse security services. These services are
                  governed by individual agreements, and the details are
                  provided at the time of contracting.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Privacy Policy
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  We respect your privacy and are committed to protecting your
                  personal information. Unauthorized use or distribution of
                  personal data collected through our site is prohibited.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Payments
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  All services are subject to payment terms agreed upon at the
                  time of booking. Payments must be made promptly according to
                  the payment schedule. Delays in payment could result in
                  penalties or cancellation of services. Invoices are typically
                  due within 30 days unless stated otherwise.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Cancellations
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  Clients must notify us of any cancellations at least 48 hours
                  prior to the scheduled service. Cancellations made with less
                  notice may incur a cancellation fee. Refunds, if applicable,
                  will be processed after deduction of the service or
                  administrative fee.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Intellectual Property
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  All content on the Bayok State Security Service website,
                  including text, images, and other materials, is the
                  intellectual property of Bayok State Security Service.
                  Unauthorized use, reproduction, or distribution of any site
                  content is strictly prohibited.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Dispute Resolution
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  Any disputes arising from the use of our services or website
                  will be resolved through negotiation or, if necessary, through
                  arbitration under the laws of Western Australia.
                </p>

                <h2 className="text-[32px] xl:text-[32px] lg:text-[28px] md:text-[24px] sm:text-[23px] text-black leading-[1.2] font-semibold mb-2 mt-0">
                  Changes to Terms
                </h2>
                <p className="mb-4 text-base leading-[1.6]">
                  Bayok State Security Service reserves the right to modify
                  these terms and conditions at any time. Continued use of our
                  services or website implies acceptance of any updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
