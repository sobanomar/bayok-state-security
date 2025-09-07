import React from "react";

const WhyChooseUs = ({ heading, subHeading, detailsList, mainImg }) => {
  return (
    <section className="relative mb-12 sm:mb-16">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0 ">
          {mainImg && (
            <img
              className="h-full w-full object-cover lg:rounded-br-lg"
              src={mainImg}
              alt={heading}
            />
          )}
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
            Reasons Why You Should Choose Us?
          </span>
        </div>
        <div className="w-full lg:w-1/2 ">
          <div className="p-4 sm:p-8 ml-4">
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
                {heading}
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
              <p className="text-base" style={{ color: "#5a5a5a" }}>
                {subHeading}
              </p>
            </div>
            <ul
              className="list-none mb-0 grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{
                lineHeight: "22px",
                fontSize: "14px",
              }}
            >
              {detailsList?.map((item, index) => (
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
                    <h3 className="mb-2 font-semibold text-lg sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mb-0 text-base">{item.description}</p>
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
