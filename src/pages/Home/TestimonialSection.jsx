import React, { useState } from "react";
import TestimonialIcon from "../../assets/media/HomeImages/testimonial-icon.png";
import TestimonialImage from "../../assets/media/HomeImages/testimonial_image.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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
  );
};

export default TestimonialSection;
