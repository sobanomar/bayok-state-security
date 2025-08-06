import React from "react";
import HeroImage from "../../assets/media/HomeImages/hero_image.webp";

const HeroBanner = () => {
  return (
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
                of businesses, events, and residential properties throughout the
                area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
