import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  PhoneCall,
  ClipboardList,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any previous status when user starts typing
    if (submitStatus) {
      setSubmitStatus(null);
      setStatusMessage("");
    }
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "phone", "subject", "message"];
    const emptyFields = requiredFields.filter(
      (field) => !formData[field].trim()
    );

    if (emptyFields.length > 0) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://bayokstatesecurity.com/api/submit-enquiry/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you! Your enquiry has been submitted successfully. We will get back to you soon."
        );
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.message || "Failed to submit enquiry. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        "Network error. Please check your connection and try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Mock hero image for demo - replace with actual import
  const heroImage =
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative min-h-[230px] lg:min-h-[230px] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 135, 239, 0.8) 0%, rgba(20, 24, 100, 0.8) 100%)",
            zIndex: 1,
          }}
        />

        {/* Background Image Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
          <h1 className="text-white font-bold text-[38px] lg:text-[38px] md:text-[32px] sm:text-[28px] xs:text-[26px] tracking-[2px] leading-[1.2]">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 lg:py-12">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-12 gap-6">
            {/* Contact Info Column */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[10px] p-4 lg:p-8 h-full shadow-[0_2px_8px_rgba(99,99,99,0.2)]">
                <div className="flex items-center mb-3">
                  <span className="text-[18px] leading-[30px] text-gray-600">
                    Contact Now
                  </span>
                  <div className="ml-2 w-5 h-[3px] bg-[#0087ef]"></div>
                </div>

                <h2 className="text-[25px] lg:text-[25px] md:text-[22px] sm:text-[22px] font-semibold text-black leading-[1.2] mb-3">
                  Feel Free to Write us
                </h2>

                <ul className="space-y-5 mb-0 list-none p-0">
                  {/* Email */}
                  <li className="cursor-pointer">
                    <a
                      href="mailto:admin@bayokstatesecurity.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 no-underline flex"
                    >
                      <div className="w-[60px] h-[60px] min-w-[60px] rounded-[10px] flex items-center justify-center text-white bg-gradient-to-b from-[rgba(0,135,239,0.9)] to-[rgba(20,24,100,0.9)] border-4 border-white shadow-[0_6px_6px_-2px_rgba(50,50,93,0.25),_0_3px_7px_-3px_rgba(0,0,0,0.3)] mr-4">
                        <Mail size={30} />
                      </div>
                      <div className="text">
                        <p className="mb-0 text-[16px]">
                          admin@bayokstatesecurity.com.au
                        </p>
                        <strong className="block text-[19px] leading-[26px] text-[#0087ef] font-semibold">
                          Send mail
                        </strong>
                      </div>
                    </a>
                  </li>

                  {/* Phone */}
                  <li className="cursor-pointer">
                    <a
                      href="tel:0408635693"
                      rel="noopener noreferrer"
                      className="text-gray-600 no-underline flex"
                    >
                      <div className="w-[60px] h-[60px] min-w-[60px] rounded-[10px] flex items-center justify-center text-white bg-gradient-to-b from-[rgba(0,135,239,0.9)] to-[rgba(20,24,100,0.9)] border-4 border-white shadow-[0_6px_6px_-2px_rgba(50,50,93,0.25),_0_3px_7px_-3px_rgba(0,0,0,0.3)] mr-4">
                        <Phone size={30} />
                      </div>
                      <div className="text">
                        <p className="mb-0 text-[16px]">0408 635 693</p>
                        <strong className="block text-[19px] leading-[26px] text-[#0087ef] font-semibold">
                          Phone Number
                        </strong>
                      </div>
                    </a>
                  </li>

                  {/* Location */}
                  <li className="cursor-pointer">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=PO+Box+2247+Ellenbrook+WA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 no-underline flex"
                    >
                      <div className="w-[60px] h-[60px] min-w-[60px] rounded-[10px] flex items-center justify-center text-white bg-gradient-to-b from-[rgba(0,135,239,0.9)] to-[rgba(20,24,100,0.9)] border-4 border-white shadow-[0_6px_6px_-2px_rgba(50,50,93,0.25),_0_3px_7px_-3px_rgba(0,0,0,0.3)] mr-4">
                        <MapPin size={30} />
                      </div>
                      <div className="text">
                        <p className="mb-0 text-[15px] leading-[20px] max-w-[250px]">
                          PO Box 2247 Ellenbrook WA
                        </p>
                        <strong className="block text-[19px] leading-[26px] text-[#0087ef] font-semibold">
                          Location
                        </strong>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[10px] p-4 lg:p-8 pl-4 lg:pl-6 h-full shadow-[0_2px_8px_rgba(99,99,99,0.2)]">
                <h2 className="text-center text-2xl font-semibold text-black leading-[1.2] mb-3 lg:mb-6">
                  Make An Enquiry
                </h2>

                {/* Status Messages */}
                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle
                        size={20}
                        className="text-green-600 flex-shrink-0"
                      />
                    ) : (
                      <XCircle
                        size={20}
                        className="text-red-600 flex-shrink-0"
                      />
                    )}
                    <p className="mb-0 text-sm font-medium">{statusMessage}</p>
                  </div>
                )}

                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    {/* Name Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <PhoneCall size={16} />
                        </span>
                        <input
                          type="tel"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <ClipboardList size={16} />
                        </span>
                        <input
                          type="text"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white disabled:bg-gray-50 disabled:text-gray-500"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="col-span-full mb-6">
                    <label className="block mb-2 font-medium text-[14px]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="w-full h-[110px] px-3 py-3 text-[14px] border border-[#d3d3d3] rounded-[10px] resize-none focus:outline-none focus:border-[#1b1464] bg-white disabled:bg-gray-50 disabled:text-gray-500"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`bg-gradient-to-r from-[#1b1464] via-[#0087ef] to-[#1b1464] bg-[length:200%_auto] hover:bg-right-center text-white text-[18px] font-normal tracking-[1px] border-0 rounded-[5px] px-8 py-[6px] transition-all duration-500 cursor-pointer flex items-center justify-center gap-2 min-w-[140px] mx-auto ${
                        isLoading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&display=swap");

        * {
          font-family: "Fira Sans", sans-serif;
        }

        @media (max-width: 991px) {
          .contact-icon {
            width: 60px !important;
            height: 60px !important;
            min-width: 60px !important;
          }

          .text-caption {
            font-size: 20px !important;
            line-height: 29px !important;
          }

          .min-h-\\[230px\\] {
            min-height: 190px !important;
          }
        }

        @media (max-width: 767px) {
          .contact-info li {
            width: 100% !important;
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
