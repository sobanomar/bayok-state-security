import { Plus } from "lucide-react";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
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
                  question: "Are your security guards trained for emergencies?",
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
                        className={`flex-shrink-0 transition-transform duration-300 cursor-pointer ${
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
  );
};

export default FAQSection;
