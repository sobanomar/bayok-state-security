import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialIcon from "../../assets/media/HomeImages/testimonial-icon.png";
import TestimonialImage from "../../assets/media/HomeImages/testimonial_image.jpg";

const testimonials = [
  {
    text: "Bayok State Security Service has been an invaluable partner in securing our premises. Their guards are professional, responsive, and always attentive to our needs.",
    author: "John D.",
  },
  {
    text: "Their team provided exceptional service during our event. The security presence was both reassuring and effective, helping everything run smoothly.",
    author: "Sarah M.",
  },
  {
    text: "We’ve relied on Bayok State Security for our construction sites, and they’ve consistently delivered outstanding protection. Their proactive approach has prevented several incidents.",
    author: "Alex T.",
  },
];

// Add cloned slides for smooth infinite animation
const extendedTestimonials = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  // Auto slide every 6s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const handleTransitionEnd = () => {
    // If we've reached the cloned first slide, jump back to the real first slide.
    if (index === extendedTestimonials.length - 1) {
      setIsAnimating(false);
      setIndex(1);
    }
    // If we've reached the cloned last slide, jump back to the real last slide.
    if (index === 0) {
      setIsAnimating(false);
      setIndex(testimonials.length);
    }
  };

  const goToPrev = () => {
    if (isAnimating) {
      setIsAnimating(true);
      setIndex((prev) => prev - 1);
    }
  };

  const goToNext = () => {
    if (isAnimating) {
      setIsAnimating(true);
      setIndex((prev) => prev + 1);
    }
  };

  // Re-enable animation for user clicks after a jump
  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <section
      className="relative my-12 py-12 sm:py-16"
      style={{
        backgroundImage: `url(${TestimonialImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center 0",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ opacity: "0.7", background: "#f0f3f6" }}
      ></div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="overflow-hidden relative md:mx-10 pt-8">
          <div
            ref={containerRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex transition-transform ease-in-out"
            style={{
              transform: `translateX(-${
                index * (100 / extendedTestimonials.length)
              }%)`,
              width: `${extendedTestimonials.length * 100}%`,
              transitionDuration: isAnimating ? "500ms" : "0ms",
            }}
          >
            {extendedTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 flex flex-col items-center text-center px-4 sm:px-8 lg:px-16"
                style={{ flex: `0 0 ${100 / extendedTestimonials.length}%` }}
              >
                <figure
                  className="mb-4 flex items-center justify-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "rgba(0, 135, 239, 0.8)",
                    borderRadius: "10px",
                    transform: "rotate(45deg)",
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      transform: "rotate(-45deg)",
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <img src={TestimonialIcon} alt="icon" />
                  </div>
                </figure>
                <p className="text-sm sm:text-base lg:text-lg font-light italic max-w-2xl">
                  "{testimonial.text}"
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
                <span className="font-semibold text-sm sm:text-base">
                  {testimonial.author}
                </span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={goToPrev}
          className="absolute hidden sm:flex items-center cursor-pointer justify-center hover:bg-blue-500 hover:text-white border-2 rounded-full transition-all duration-300"
          style={{
            width: "50px",
            height: "50px",
            border: "2px solid #0087ef",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "20px",
            zIndex: 10,
            left: "10px",
            background: "transparent",
            color: "#0087ef",
          }}
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={goToNext}
          className="absolute hidden sm:flex items-center cursor-pointer justify-center hover:bg-blue-500 hover:text-white border-2 rounded-full transition-all duration-300"
          style={{
            width: "50px",
            height: "50px",
            border: "2px solid #0087ef",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "20px",
            zIndex: 10,
            right: "10px",
            background: "transparent",
            color: "#0087ef",
          }}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
