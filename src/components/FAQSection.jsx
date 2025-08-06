import { Plus } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const FAQSection = ({ faqs }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [heights, setHeights] = useState({});
  const contentRefs = useRef({});

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    // Calculate heights for all FAQ items
    const newHeights = {};
    Object.keys(contentRefs.current).forEach((index) => {
      if (contentRefs.current[index]) {
        newHeights[index] = contentRefs.current[index].scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [faqs]);

  return (
    <section className="pb-12 sm:py-16">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div>
              <h2 className="text-center mb-6 sm:mb-8 font-semibold text-xl sm:text-2xl lg:text-3xl">
                FAQ
              </h2>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="relative mb-4 transition-all duration-300 ease-in-out hover:shadow-lg"
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
                      className="w-full text-left flex items-center justify-between border-none overflow-hidden focus:shadow-none p-3 sm:p-4 transition-colors duration-200 hover:bg-white/30 rounded-t-[11px]"
                      style={{
                        color: "#1b1464",
                        background: "transparent",
                        fontSize: "14px",
                        boxShadow: "none",
                        fontWeight: "500",
                        borderRadius:
                          activeAccordion === index ? "11px 11px 0 0" : "11px",
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

                  {/* Animated content container */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight:
                        activeAccordion === index
                          ? `${heights[index] || 0}px`
                          : "0px",
                      opacity: activeAccordion === index ? 1 : 0,
                    }}
                  >
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="px-3 sm:px-4 pb-4"
                    >
                      <div
                        className="pt-2 text-sm sm:text-base leading-relaxed"
                        style={{ color: "#5a5a5a" }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
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
