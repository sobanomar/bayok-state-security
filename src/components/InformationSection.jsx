import { CircleCheckBig } from "lucide-react";

const InformationSection = ({ img, paragraph, heading, bulletPoints }) => {
  return (
    <section className="my-12 sm:mt-20">
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
                    src={img}
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
                {heading}
              </h2>
              <p className="mb-4 text-base" style={{ lineHeight: "26px" }}>
                {paragraph}
              </p>
              <ol className="gap-2 flex flex-col">
                {bulletPoints?.map((item, index) => (
                  <div className="flex">
                    <CircleCheckBig className="mr-2 w-14 md:w-8 mt-1  text-blue-600" />
                    <li className="" key={index}>
                      {item}
                    </li>
                  </div>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
