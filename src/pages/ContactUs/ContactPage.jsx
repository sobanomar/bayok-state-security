import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  PhoneCall,
  ClipboardList,
} from "lucide-react";
import heroImage from "../../assets/media/guard-image-contact-page.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

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
            <div className="order-2 lg:order-1 lg:col-span-5 ">
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
                  <li className=" cursor-pointer">
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

                  <li className=" cursor-pointer">
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
            <div className="order-1 lg:order-2 lg:col-span-7 ">
              <div className="bg-white rounded-[10px] p-4 lg:p-8 pl-4 lg:pl-6 h-full shadow-[0_2px_8px_rgba(99,99,99,0.2)]">
                <h2 className="text-center text-2xl font-semibold text-black leading-[1.2] mb-3 lg:mb-6">
                  Make An Enquiry
                </h2>

                <div onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                    {/* Name Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Name
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white"
                          placeholder="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Email
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Phone
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <PhoneCall size={16} />
                        </span>
                        <input
                          type="tel"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white"
                          placeholder="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="mb-3">
                      <label className="block mb-2 font-medium text-[14px]">
                        Subject
                      </label>
                      <div className="flex border border-[#d3d3d3] rounded-[10px] overflow-hidden">
                        <span className="flex items-center px-3 bg-[#f0f3f6] text-gray-600 border-r border-[#f0f3f6]">
                          <ClipboardList size={16} />
                        </span>
                        <input
                          type="text"
                          className="w-full h-[46px] px-3 text-[14px] border-0 focus:outline-none focus:ring-0 bg-white"
                          placeholder="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="col-span-full mb-6">
                    <label className="block mb-2 font-medium text-[14px]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="w-full h-[110px] px-3 py-3 text-[14px] border border-[#d3d3d3] rounded-[10px] resize-none focus:outline-none focus:border-[#1b1464] bg-white"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="bg-gradient-to-r from-[#1b1464] via-[#0087ef] to-[#1b1464] bg-[length:200%_auto] hover:bg-right-center text-white text-[18px] font-normal tracking-[1px] border-0 rounded-[5px] px-8 py-[6px] transition-all duration-500 cursor-pointer"
                    >
                      Send Message
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
