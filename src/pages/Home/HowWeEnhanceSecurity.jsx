import React from "react";
import PerthSecurityGuards from "../../assets/media/HomeImages/perth_security_guards_2.webp";

const HowWeEnhanceSecurity = () => {
  return (
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
                In addition to their physical presence, our security guards are
                equipped with advanced technology to enhance their
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
  );
};

export default HowWeEnhanceSecurity;
