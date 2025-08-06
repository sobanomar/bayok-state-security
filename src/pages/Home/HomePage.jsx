import React, { useState } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";
import SecurityGuardsPerthImage from "../../assets/media/HomeImages/security_guards_perth_1.webp";
import HeroImage from "../../assets/media/HomeImages/hero_image.webp";
import GateHouseSecurityServicesImage from "../../assets/media/HomeImages/gate_house_security_services_2.webp";
import MineSiteSecurityImage from "../../assets/media/HomeImages/mine_site_security_2.webp";
import SecurityPatrolServicesImage from "../../assets/media/HomeImages/mobile_patrol_2.webp";
import AlarmResponseServicesImage from "../../assets/media/HomeImages/alarm_response_2.webp";
import ConstructionSiteSecurityImage from "../../assets/media/HomeImages/construction_site_security_2.webp";
import WhyChooseOurSecurityServices from "../../assets/media/HomeImages/why_choose_our_security_services_2.webp";
import PerthSecurityGuards from "../../assets/media/HomeImages/perth_security_guards_2.webp";
import CrimePrevention from "../../assets/media/HomeImages/crime-prevention.png";
import RapidResponseSecurity from "../../assets/media/HomeImages/rapid-response-security.png";
import CustomerSafety from "../../assets/media/HomeImages/customer-safety.png";
import MonitoringOfPremises from "../../assets/media/HomeImages/monitoring-of-premises.png";
import AdvancedTechnologyAndTools from "../../assets/media/HomeImages/advanced_technology_and_tools_2.png";
import ExperiencedAndTrainedProfessionals from "../../assets/media/HomeImages/experienced_and_trained_professionals_2.png";
import CustomizedSecuritySolutions from "../../assets/media/HomeImages/customized_security_solutions_2.png";
import TestimonialIcon from "../../assets/media/HomeImages/testimonial-icon.png";
import TestimonialImage from "../../assets/media/HomeImages/testimonial_image.jpg";

import { Link } from "react-router-dom";

const gateHouseIcon = (
  <svg
    className="text-white relative z-10"
    style={{
      fontSize: "24px",
      margin: "0px 15px 15px 0px",
      display: "inline-block",
    }}
    width="40"
    height="40"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <g>
      <path
        d="M376 106h-60c-5.523 0-10 4.477-10 10s4.477 10 10 10h60c5.523 0 10-4.477 10-10s-4.477-10-10-10z"
        fill="white"
      ></path>
      <path
        d="M502 492h-10V50c0-16.576-13.425-30-30-30-16.542 0-30 13.458-30 30v16H306V50c0-27.622-22.374-50-50-50-27.57 0-50 22.43-50 50v16H80V50c0-16.576-13.425-30-30-30-16.542 0-30 13.458-30 30v442H10c-5.523 0-10 4.477-10 10s4.477 10 10 10h80c5.523 0 10-4.477 10-10s-4.477-10-10-10H80v-86h56c5.523 0 10-4.477 10-10s-4.477-10-10-10H80v-80h56c5.523 0 10-4.477 10-10s-4.477-10-10-10H80v-60h56c5.523 0 10-4.477 10-10s-4.477-10-10-10H80v-40h352v40h-56c-5.523 0-10 4.477-10 10s4.477 10 10 10h56v60h-56c-5.523 0-10 4.477-10 10s4.477 10 10 10h56v80h-56c-5.523 0-10 4.477-10 10s4.477 10 10 10h56v86h-10c-5.523 0-10 4.477-10 10s4.477 10 10 10h80c5.523 0 10-4.477 10-10s-4.477-10-10-10zm-442 0H40V50c0-5.514 4.486-10 10-10 5.521 0 10 4.478 10 10v442zM226 50c0-16.542 13.458-30 30-30 16.569 0 30 13.429 30 30v16h-60V50zm206 96H80V86h352v60zm40 346h-20V50c0-5.514 4.486-10 10-10 5.521 0 10 4.478 10 10v442z"
        fill="white"
      ></path>
      <path
        d="M288.441 274.001C299.176 264.823 306 251.197 306 236c0-27.57-22.43-50-50-50s-50 22.43-50 50c0 15.197 6.824 28.823 17.559 38.001C201.255 285.719 186 309.105 186 336v60c0 5.523 4.477 10 10 10h20.899l9.146 96.939a10 10 0 0 0 9.956 9.061h40a10 10 0 0 0 9.956-9.061L295.101 406H316c5.523 0 10-4.477 10-10v-60c0-26.895-15.255-50.281-37.559-61.999zM256 206c16.542 0 30 13.458 30 30s-13.458 30-30 30-30-13.458-30-30 13.458-30 30-30zm50 180h-20a10 10 0 0 0-9.956 9.061L266.899 492h-21.798l-9.146-96.939A10 10 0 0 0 226 386h-20v-50c0-27.57 22.43-50 50-50s50 22.43 50 50v50z"
        fill="currentCwhiteolor"
      ></path>
    </g>
  </svg>
);
const mineSiteIcon = (
  <svg
    className="text-white relative z-10"
    style={{
      fontSize: "24px",
      margin: "0px 15px 15px 0px",
      display: "inline-block",
    }}
    width="40"
    height="40"
    viewBox="0 0 50 50"
    fill="currentColor"
  >
    <g>
      <path
        d="M4.86 25c19.21 2.74 19.3 2.71 38.28 0a1 1 0 0 0 .86-1v-3a1 1 0 0 0-1-1h-1a17.83 17.83 0 0 0-2.93-9.81 2 2 0 0 0-.48-1.77C36.89 6.57 36.3 5.55 35 5.69c-.34 0-2.35-2.2-7-3.24A3 3 0 0 0 25 0h-2a3 3 0 0 0-2.94 2.45 17.82 17.82 0 0 0-7 3.25 2 2 0 0 0-1.74.63c-1.83 2-2.69 2.54-2.41 3.86A17.83 17.83 0 0 0 6 20H5a1 1 0 0 0-1 1v3a1 1 0 0 0 .86 1ZM28 4.51A15.89 15.89 0 0 1 33.29 7l-2.54 4.45A2.65 2.65 0 0 0 33 15.37c1.38 0 1.82-.74 4.75-3.48A15.86 15.86 0 0 1 40 20H28Zm9.12 5.27-3.65 3.41a.64.64 0 0 1-.88 0c-.46-.47-.3-.43 2.6-5.5ZM22 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v17h-4Zm-9.19 4.68c2.9 5.08 3.06 5 2.6 5.5a.63.63 0 0 1-.88 0l-3.65-3.4Zm-2.6 4.21c2.93 2.74 3.37 3.48 4.75 3.48a2.65 2.65 0 0 0 2.29-3.95L14.71 7A15.89 15.89 0 0 1 20 4.51V20H8a15.86 15.86 0 0 1 2.21-8.11ZM6 22h36v1.13c-18.8 2.69-19.21 2.4-36 0ZM37 34H11a1 1 0 0 0-1 1c0 5.29-.23 5.76.68 6.07 8.18 2.72 7.81 2.74 8.35 2.41l3.43-2a3 3 0 0 1 3.08 0c3.66 2.19 3.56 2.19 3.94 2.19s-.41.19 7.84-2.55c.9-.31.68-.74.68-6.07A1 1 0 0 0 37 34Zm-1 5.4-6.4 2.13c-5.41-3.25-5.14-3.63-11.2 0L12 39.4V36h24Z"
        fill="currentColor"
      ></path>
      <path
        d="M45 33h-3a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h3v.56a3 3 0 0 0 2.05 2.84L18.68 48c.6.19.45.14 5.32-2.78 5.1 3.01 4.63 2.78 5 2.78s-.63.26 11-3.6a3 3 0 0 0 2-2.84V41h3a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1ZM4 39v-4h2v4Zm36 2.56a1 1 0 0 1-.68.95l-10.2 3.4c-5-3-4.74-2.91-5.12-2.91s-.14-.08-5.12 2.91l-10.2-3.4a1 1 0 0 1-.68-.95V33a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM44 39h-2v-4h2Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);
const securityPatrolIcon = (
  <svg
    className="text-white relative z-10"
    style={{
      fontSize: "24px",
      margin: "0px 15px 15px 0px",
      display: "inline-block",
    }}
    width="40"
    height="40"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <g>
      <path
        d="M334.974 305.37c24.281-21.727 39.591-53.283 39.591-88.352 0-15.487-3.042-30.81-8.869-45.025 11.825-8.689 18.942-19.468 18.958-32.275l.002-.041-.001-.024v-7.596l45.511-54.878a15.303 15.303 0 0 0-7.095-24.338L261.031.735a15.314 15.314 0 0 0-9.37 0L89.617 52.84a15.304 15.304 0 0 0-7.095 24.338l45.511 54.878v7.62c0 12.635 6.908 23.3 18.433 31.931a118.815 118.815 0 0 0-9.029 45.411c0 35.069 15.309 66.626 39.591 88.352-78.987 5.621-141.533 71.673-141.533 152.066v39.261c0 8.451 6.852 15.303 15.303 15.303h410.404c8.451 0 15.303-6.852 15.303-15.303v-39.261c.002-80.394-62.546-146.445-141.531-152.066zm6.382 31.445-9.025 26.723-32.617-27.957h24.332c5.876-.001 11.654.426 17.31 1.234zM120.523 75.054l135.823-43.675 135.822 43.675-31.936 38.508c-6.841-2.605-14.215-4.444-20.845-5.855-22.368-4.756-51.827-7.375-82.948-7.375h-.185c-31.121 0-60.58 2.619-82.948 7.375-6.63 1.41-14.006 3.249-20.846 5.855l-31.937-38.508zm39.986 68.172c11.64-5.205 44.66-12.288 95.745-12.288h.185c51.082 0 84.102 7.081 95.744 12.286-2.873 3.393-9.357 8.277-21.476 12.942-19.359 7.452-46.428 11.724-74.268 11.724h-.185c-27.841 0-54.91-4.273-74.268-11.724-12.119-4.664-18.604-9.547-21.477-12.94zm27.448 192.353h26.983v.001l-32.748 28.037-9.282-27.108c4.932-.61 9.952-.93 15.047-.93zm55.1 145.813H66.102v-23.958c0-51.382 31.969-95.438 77.059-113.324l17.378 50.752a15.3 15.3 0 0 0 14.477 10.345c3.607 0 7.148-1.276 9.953-3.678l58.087-49.732v129.595zm-75.012-264.375a88.212 88.212 0 0 1 5.753-31.315c23.348 8.469 52.983 12.796 82.455 12.796h.185c29.218 0 58.597-4.252 81.85-12.577a88.228 88.228 0 0 1 5.67 31.096c0 48.499-39.458 87.956-87.957 87.956s-87.956-39.456-87.956-87.956zm277.856 264.376H273.664v-127.83l55.955 47.962a15.307 15.307 0 0 0 14.015 3.137 15.3 15.3 0 0 0 10.442-9.859l16.834-49.844c43.996 18.4 74.99 61.885 74.99 112.477v23.957z"
        fill="currentColor"
      ></path>
      <path
        d="M389.113 435.791h-47.326c-8.452 0-15.303 6.852-15.303 15.303s6.852 15.303 15.303 15.303h47.326c8.452 0 15.303-6.852 15.303-15.303.001-8.452-6.851-15.303-15.303-15.303z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);
const AlarmResponseIcon = (
  <svg
    className="text-white relative z-10"
    style={{
      fontSize: "24px",
      margin: "0px 15px 15px 0px",
      display: "inline-block",
    }}
    width="40"
    height="40"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <g>
      <path
        d="M426 437H86c-22.091 0-40 17.909-40 40v20h420v-20c0-22.091-17.909-40-40-40zM386 377H126c-22.091 0-40 17.909-40 40v20h340v-20c0-22.091-17.909-40-40-40zM256 115h0c-66.274 0-120 53.726-120 120v142h240V235c0-66.274-53.726-120-120-120zM256 55V15M436 235h40M36 235h40M411.885 145l34.641-20M346 79.115l20-34.641M166 79.115l-20-34.641M100.115 145l-34.641-20M256 175v80"
        fill="none"
        stroke="#ffffff"
        strokeWidth="30"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      ></path>
    </g>
  </svg>
);
const ConstructionSite = (
  <svg
    className="text-white relative z-10"
    style={{
      fontSize: "24px",
      margin: "0px 15px 15px 0px",
      display: "inline-block",
    }}
    width="40"
    height="40"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <g>
      <path
        d="M478.776 319.377c-35.558-21.097-63.722-30.504-91.321-30.504-19.228 0-38.733 4.573-60.819 14.476-19.106-13.346-40.128-22.915-62.286-28.443 35.653-17.118 60.337-53.562 60.389-95.672h1.269c11.642 0 21.113-9.471 21.113-21.112v-4.682c0-8.721-5.316-16.224-12.878-19.439v-.935c0-27.182-9.711-53.642-27.344-74.506-15.951-18.875-37.493-32.162-61.201-37.933v-.36C245.698 9.644 237.054 1 226.429 1H210.64c-10.624 0-19.268 8.644-19.268 19.268v.36c-23.708 5.77-45.249 19.058-61.2 37.933-17.633 20.864-27.344 47.324-27.344 74.506V134c-7.562 3.215-12.879 10.718-12.879 19.44v4.682c0 11.642 9.471 21.112 21.112 21.112h1.271c.052 42.148 24.782 78.62 60.488 95.718C95.3 294.403 35.571 362.055 29.364 444.786c-.431 5.738 1.553 11.434 5.442 15.626s9.421 6.598 15.176 6.598h273.845a95.758 95.758 0 0 0 3.181 2.398l55.777 40.088c1.395 1.003 3.032 1.504 4.669 1.504s3.274-.501 4.669-1.504l55.775-40.088c22.763-16.36 34.795-39.825 34.795-67.856v-75.295a7.995 7.995 0 0 0-3.917-6.88zM308.059 451.01h-81.524v-69.142l59.903-82.687a173.18 173.18 0 0 1 23.593 12.352 356.357 356.357 0 0 0-13.897 7.844 7.998 7.998 0 0 0-3.918 6.88v75.295c-.001 18.796 5.417 35.534 15.843 49.458zm-89.524-85.371-52.298-72.191a171.772 171.772 0 0 1 52.298-8.141c17.986 0 35.575 2.746 52.343 8.08zm-8 16.229v69.142H103.826c13.261-44.494 18.323-89.492 15.057-133.984a174.731 174.731 0 0 1 31.797-17.78zM265.297 45l-4.547 68.112a8.001 8.001 0 0 0 15.965 1.067l3.944-59.082c22.921 18.271 37.341 46.279 37.568 77.231h-72.529V37.146A99.567 99.567 0 0 1 265.297 45zM210.64 17h15.789c1.771 0 3.269 1.496 3.269 3.268v112.06h-22.325V20.268c0-1.772 1.496-3.268 3.267-3.268zm-54.228 38.097 3.944 59.081a8 8 0 1 0 15.965-1.067L171.773 45a99.628 99.628 0 0 1 19.599-7.854v95.181h-72.527c.227-30.951 14.646-58.959 37.567-77.23zM105.95 158.122v-4.682c0-2.771 2.341-5.113 5.112-5.113h214.945c2.771 0 5.113 2.342 5.113 5.113v4.682c0 2.771-2.342 5.112-5.113 5.112H111.062c-2.771 0-5.112-2.34-5.112-5.112zm22.383 21.112h180.406c-.072 49.678-40.508 90.072-90.203 90.072-49.695.001-90.132-40.394-90.203-90.072zM46.536 449.53c-.885-.953-1.317-2.213-1.217-3.546 3.486-46.468 25.413-87.743 58.228-116.822 1.668 40.495-3.846 81.386-16.447 121.847H49.982c-1.338.001-2.562-.525-3.446-1.479zm420.158-47.978c0 22.664-9.729 41.636-28.133 54.864l-51.106 36.732-51.108-36.732c-18.403-13.228-28.131-32.199-28.131-54.864v-70.71c60.135-34.754 98.344-34.754 158.479 0v70.71zm-79.24-84.734c-19.337 0-38.797 5.756-63.093 18.66a8.002 8.002 0 0 0-4.247 7.065v59.008c0 18.94 7.797 34.148 23.176 45.203l39.496 28.386c1.395 1.003 3.032 1.504 4.669 1.504s3.274-.501 4.669-1.504l39.494-28.386c15.38-11.055 23.179-26.264 23.179-45.203v-59.007a8 8 0 0 0-4.247-7.065c-24.299-12.905-43.758-18.661-63.096-18.661 0 0 .001 0 0 0zm51.342 84.734c0 13.687-5.402 24.223-16.517 32.211l-34.825 25.03-34.827-25.03c-11.112-7.987-16.514-18.524-16.514-32.211v-54.148c38.289-19.41 64.392-19.409 102.683.001zm-59.484-5.251 30.799-31.088a8 8 0 0 1 11.367 11.261l-36.384 36.725a7.978 7.978 0 0 1-5.684 2.369 7.976 7.976 0 0 1-5.584-2.271l-20.295-19.783a8 8 0 0 1 11.167-11.457z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);

const testimonials = [
  {
    text: `"Bayok State Security Service has been an invaluable partner
    in securing our premises. Their guards are professional,
    responsive, and always attentive to our needs."`,
    author: "John D.",
  },
  {
    text: `"Their team provided exceptional service during our event. The security presence was both reassuring and effective, helping everything run smoothly."`,
    author: "Sarah M.",
  },
  {
    text: `"We’ve relied on Bayok State Security for our construction sites, and they’ve consistently delivered outstanding protection. Their proactive approach has prevented several incidents."`,
    author: "Alex T.",
  },
];

const HomePage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div
      className="min-h-screen bg-white text-black"
      style={{
        fontFamily: '"Fira Sans", sans-serif',
        lineHeight: "1.6",
      }}
    >
      {/* Page Banner */}
      <section
        className="min-h-[450px] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{
          marginBottom: "50px",
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0087EFCC] to-[#141864CC]"></div>

        {/* Content */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 z-10">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl">
              <div className="text-center text-white mb-0">
                <h1
                  className="font-bold mb-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
                  style={{ lineHeight: "1.2" }}
                >
                  Security Services Perth
                </h1>
                <p
                  className="text-base sm:text-lg px-4"
                  style={{ marginBottom: "35px", lineHeight: "1.6" }}
                >
                  Bayok State Security Service offers professional and reliable
                  security services in Perth, ensuring the safety and protection
                  of businesses, events, and residential properties throughout
                  the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Services Section */}
      <section
        className="py-12 sm:py-16"
        style={{
          backgroundColor: "#f0f3f6",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="text-center mb-8 sm:mb-12">
                <h2
                  className="font-semibold text-center relative text-xl sm:text-2xl lg:text-3xl"
                  style={{
                    lineHeight: "1.2",
                    paddingBottom: "20px",
                    marginBottom: "20px",
                    color: "#000000",
                  }}
                >
                  Types of Security Services
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
                      border: "8px solid #f0f3f6",
                    }}
                  ></div>
                </h2>
                <p
                  className="text-base sm:text-lg"
                  style={{
                    color: "#5a5a5a",
                    marginBottom: "35px",
                    lineHeight: "1.6",
                  }}
                >
                  Bayok State Security Service provides a wide range of
                  specialized security solutions tailored to meet the needs of
                  various industries in Perth
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Gatehouse Security Services",
                description:
                  "Our gatehouse security services provide controlled access management, monitoring entry and exit points to ensure only authorized personnel enter your premises.",
                alt: "Gate House Security Services",
                image: GateHouseSecurityServicesImage,
                path: "/service/gatehouse-security-services",
                icon: gateHouseIcon,
              },
              {
                title: "Mine Site Security Services",
                description:
                  "With specialized experience in mine site security, we protect workers, equipment, and resources in high-risk areas, ensuring the safe operation of your mining projects.",
                alt: "Mine Site Security",
                image: MineSiteSecurityImage,
                path: "/service/mine-site-security-services",
                icon: mineSiteIcon,
              },
              {
                title: "Security Patrol Services",
                description:
                  "Our security patrol services involve regular inspections of your premises, providing constant surveillance and ensuring all areas remain safe and secure.",
                alt: "mobile patrol",
                image: SecurityPatrolServicesImage,
                path: "/service/security-patrol-services",
                icon: securityPatrolIcon,
              },
              {
                title: "Alarm Response Services",
                description:
                  "We offer rapid alarm response services to immediately address any security breaches or suspicious activities, minimizing potential risks and damages.",
                alt: "alarm-response",
                image: AlarmResponseServicesImage,
                path: "/service/alarm-response-services",
                icon: AlarmResponseIcon,
              },
              {
                title: "Construction Site Security",
                description:
                  "Our construction site security guards ensure that valuable equipment, materials, and workers are safeguarded from theft, vandalism, and unauthorized access at all times.",
                alt: "Construction Site Security",
                image: ConstructionSiteSecurityImage,
                path: "/service/construction-site-security",
                icon: ConstructionSite,
              },
            ].map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="group basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] cursor-pointer "
                style={{ textDecoration: "none" }}
              >
                <div
                  className=" bg-white block transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  }}
                >
                  <figure className="mb-0 relative overflow-hidden">
                    <div
                      className="w-full bg-gray-200 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 overflow-hidden"
                      style={{ height: "250px" }}
                    >
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <div className="relative">
                        {service.icon}
                        <div
                          className="absolute right-0 bottom-0 w-0 h-0 transition-all duration-300 "
                          style={{
                            borderBottom: "120px solid #1b1464",
                            borderLeft: "120px solid transparent",
                            borderBottomColor: "#1b1464",
                          }}
                        ></div>
                        <div
                          className="absolute bg-white transform rotate-45"
                          style={{
                            left: "-10px",
                            bottom: "-35px",
                            width: "7px",
                            height: "190px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </figure>
                  <div
                    className="p-4 sm:p-5"
                    style={{
                      fontSize: "15px",
                      lineHeight: "22px",
                      color: "#5a5a5a",
                    }}
                  >
                    <h3
                      className="relative mb-2 font-semibold  transition-colors text-lg sm:text-xl"
                      style={{
                        color: "#1b1464",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="mb-0 text-sm">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                <p
                  className="text-sm sm:text-base"
                  style={{ color: "#5a5a5a" }}
                >
                  Bayok State Security Service stands out as a trusted provider
                  of security services in Perth, delivering unmatched protection
                  and peace of mind for businesses and residential properties.
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

      {/* How Our Security Guards Section */}
      <section className="mb-12 sm:mb-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="relative z-10 mb-4 sm:mb-8">
                <div className="relative w-full">
                  <div
                    className="absolute rounded-lg"
                    style={{
                      top: "20px",
                      left: "-20px",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#1b1464",
                      zIndex: "-1",
                    }}
                  ></div>

                  <div className="w-full bg-gray-200 overflow-hidden rounded-lg">
                    <img
                      src={PerthSecurityGuards}
                      alt="Perth Security Guards"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <div>
                <h2
                  className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-4"
                  style={{ lineHeight: "1.2" }}
                >
                  How Our Security Guards Can Enhance Your Safety?
                </h2>
                <p
                  className="mb-4 text-sm sm:text-base"
                  style={{ lineHeight: "26px" }}
                >
                  Our Perth security guards are highly trained to handle a wide
                  range of security concerns, making a significant difference in
                  maintaining the safety and security of your property. From
                  patrolling large commercial sites to monitoring small
                  residential spaces.
                  {/* they provide a visible deterrent to
                    criminal activities. Their presence alone can prevent
                    incidents such as theft, vandalism, and unauthorized access.
                    In case of emergencies, our guards are quick to respond,
                    ensuring that appropriate measures are taken immediately,
                    minimizing potential damage and disruption. */}
                </p>
                <p
                  className="text-sm sm:text-base"
                  style={{ lineHeight: "26px" }}
                >
                  In addition to their physical presence, our security guards
                  are equipped with advanced technology to enhance their
                  effectiveness. With real-time reporting, surveillance
                  monitoring, and communication systems, they can keep track of
                  activities across your premises and address issues as they
                  arise. Whether it's managing crowd control at an event or
                  securing high-risk areas, our security guards operate with a
                  high level of professionalism and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="bg-overlay relative py-12 sm:py-16"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center 0",
          backgroundImage: `url(${TestimonialImage})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            opacity: "0.7",
            background: "#f0f3f6",
          }}
        ></div>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="relative">
            <div className="text-center font-light italic px-4 sm:px-8 lg:px-32">
              <div className="flex flex-col items-center gap-6 transition-all duration-300">
                {/* Icon box */}
                <figure
                  className="mb-0 flex items-center justify-center relative"
                  style={{
                    width: "70px",
                    height: "70px",
                    minWidth: "70px",
                    minHeight: "70px",
                    backgroundColor: "rgba(0, 135, 239, 0.8)",
                    borderRadius: "10px",
                    transform: "rotate(45deg)",
                  }}
                >
                  <div
                    className="flex items-center justify-center text-sm"
                    style={{
                      transform: "rotate(-45deg)",
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <img src={TestimonialIcon} alt="Icon" />
                  </div>
                </figure>

                {/* Testimonial content */}
                <div>
                  <p className="relative mb-0 text-sm sm:text-base lg:text-lg">
                    {testimonials[currentTestimonialIndex].text}
                    <span
                      className="block mx-auto"
                      style={{
                        background: "#0087ef",
                        width: "55px",
                        height: "2px",
                        marginTop: "25px",
                        marginBottom: "11px",
                      }}
                    ></span>
                  </p>
                  <span className="font-semibold mb-0 text-sm sm:text-base">
                    {testimonials[currentTestimonialIndex].author}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute hidden sm:flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:text-white border-2 rounded-full cursor-pointer"
              style={{
                width: "50px",
                height: "50px",
                border: "2px solid #0087ef",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "20px",
                zIndex: "1",
                opacity: "1",
                color: "#0087ef",
                left: "10px",
                background: "transparent",
              }}
              onClick={handlePrev}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              className="absolute hidden sm:flex items-center justify-center transition-all duration-300 hover:bg-blue-500 hover:text-white border-2 rounded-full cursor-pointer"
              style={{
                width: "50px",
                height: "50px",
                border: "2px solid #0087ef",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "20px",
                zIndex: "1",
                opacity: "1",
                color: "#0087ef",
                right: "10px",
                background: "transparent",
              }}
              onClick={handleNext}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div>
                <h2 className="text-center mb-6 sm:mb-8 font-semibold text-xl sm:text-2xl lg:text-3xl">
                  FAQ
                </h2>
                {[
                  {
                    question:
                      "How do I find a reliable security service company near me?",
                    answer:
                      "To find a reliable security service company, research local providers, check their licensing and certifications, read customer reviews, and request quotes from multiple companies to compare services and pricing.",
                  },
                  {
                    question:
                      "Are your security guards trained for emergencies?",
                    answer:
                      "Yes, all our security guards undergo comprehensive emergency response training, including first aid, evacuation procedures, and crisis management to ensure they can handle any situation effectively.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="relative mb-4"
                    style={{
                      border: "none",
                      borderRadius: "11px",
                      background: "#f0f3f6",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    }}
                  >
                    <h3 className="mb-0">
                      <button
                        className="w-full text-left flex items-center justify-between border-none overflow-hidden focus:shadow-none p-3 sm:p-4"
                        style={{
                          color: "#1b1464",
                          background: "transparent",
                          fontSize: "14px",
                          boxShadow: "none",
                          fontWeight: "500",
                          borderRadius: "0",
                        }}
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeAccordion === index}
                      >
                        <span className="pr-4 text-sm sm:text-base">
                          {faq.question}
                        </span>
                        <Plus
                          size={18}
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            activeAccordion === index ? "rotate-45" : ""
                          }`}
                        />
                      </button>
                    </h3>
                    {activeAccordion === index && (
                      <div className="px-3 sm:px-4 pb-4">
                        <div
                          className="pt-2 text-sm sm:text-base"
                          style={{ color: "#5a5a5a" }}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
