import React from "react";

const AboutSection = ({ mainImg, heading, subHeading, serviceDetails }) => {
  return (
    <section className="relative mb-12 sm:mb-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col-reverse gap-4 lg:flex-col">
              <div className="img-holder">
                <div className="w-full bg-gray-200 flex items-center justify-center text-gray-600 rounded-lg">
                  <img
                    src={mainImg}
                    alt="SecurityGuardsPerthImage"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
              <div>
                <h2
                  className="font-semibold text-center relative text-xl sm:text-2xl lg:text-3xl "
                  style={{
                    lineHeight: "1.2",
                    paddingBottom: "20px",
                    marginBottom: "20px",
                    color: "#000000",
                  }}
                >
                  {heading}
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
                    lineHeight: "1.6",
                    color: "#5a5a5a",
                  }}
                >
                  {subHeading}
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
                {serviceDetails?.map((item, index) => (
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
                        <img src={item?.icon} />
                      </div>
                    </div>
                    <div className="pl-4 sm:pl-6">
                      <h3 className="block font-semibold capitalize mb-2 text-lg sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mb-0 text-sm sm:text-base">
                        {item?.description}
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
