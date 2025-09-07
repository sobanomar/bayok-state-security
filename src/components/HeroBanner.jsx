import React from "react";

const HeroBanner = ({ heading, subHeading, img }) => {
  return (
    <section
      className="min-h-[450px] bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        marginBottom: "50px",
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundImage: `url(${img})`,
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
                {heading}
              </h1>
              <p
                className="text-base px-4"
                style={{ marginBottom: "35px", lineHeight: "1.6" }}
              >
                {subHeading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
