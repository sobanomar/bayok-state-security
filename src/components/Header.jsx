import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Phone, Menu, X, ArrowRight } from "lucide-react";
import BayokLogo from "../assets/media/bayok-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${
        window.innerWidth - document.documentElement.clientWidth
      }px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Cleanup function to reset styles when component unmounts or effect changes
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Closing
      setIsDrawerVisible(false);
      setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      // Opening
      setIsMenuOpen(true);
      setTimeout(() => setIsDrawerVisible(true), 10);
    }
  };

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const closeMenu = () => {
    setIsDrawerVisible(false);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsServicesOpen(false);
    }, 300);
  };

  const services = [
    {
      path: "/service/construction-site-security",
      name: "Construction Site Security",
    },
    {
      path: "/service/alarm-response-services",
      name: "Alarm Response Services",
    },
    {
      path: "/service/security-patrol-services",
      name: "Security Patrol Services",
    },
    {
      path: "/service/mine-site-security-services",
      name: "Mine Site Security Services",
    },
    {
      path: "/service/gatehouse-security-services",
      name: "Gatehouse Security Services",
    },
  ];

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/our-services", name: "Our Services", hasDropdown: true },
    { path: "/about-us", name: "About Us" },
    { path: "/contact-us", name: "Contact Us" },
  ];

  const renderNavItem = (item) => {
    if (item.hasDropdown) {
      return (
        <li
          key={item.path}
          className="group relative text-blue-900  hover:text-blue-600"
        >
          <Link
            to={item.path}
            className="group relative flex items-center gap-1 py-6 text-[17px] font-medium transition-colors duration-300 "
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {item.name}
            <ChevronDown className="h-5 w-5 " />
            <span className="absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full"></span>
          </Link>

          <ul
            className={`absolute left-0 top-full z-50 min-w-[270px] transform rounded-b-md bg-white p-2 shadow-lg transition-all duration-300 ${
              isServicesOpen
                ? "visible scale-y-100 opacity-100"
                : "invisible scale-y-0 opacity-0"
            }`}
            style={{ transformOrigin: "0 0 0" }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            {services.map((service, index) => (
              <li key={service.path} className="relative">
                <Link
                  to={service.path}
                  className={`group relative block py-2 pl-4 pr-1 text-sm font-semibold transition-all duration-300 hover:pl-5 ${
                    index < services.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="ml-4">{service.name}</div>
                  <span className="absolute left-1 top-1/2 -translate-y-1/2 text-xs opacity-0 transition-all duration-300 group-hover:left-2 group-hover:opacity-100">
                    <ArrowRight width={18} height={18} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li
        key={item.path}
        className="relative text-blue-900  hover:text-blue-600"
      >
        <Link
          to={item.path}
          className="group relative block py-6 text-[17px] font-medium  transition-colors duration-300 "
        >
          {item.name}
          <span className="absolute bottom-0 left-0 h-1 w-0 rounded-full  transition-all duration-500 group-hover:w-full"></span>
        </Link>
      </li>
    );
  };

  const renderMobileNavItem = (item) => {
    if (item.hasDropdown) {
      return (
        <div key={item.path} className="border-b border-white">
          <button
            onClick={toggleServices}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-medium text-white hover:bg-blue-700 transition-colors"
          >
            {item.name}
            <ChevronDown
              className={`h-5 w-5 text-white transition-transform duration-200 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-1 px-8 py-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="block py-1 text-base hover:bg-blue-700 transition-colors"
                    onClick={closeMenu}
                  >
                    <div className="text-white">{service.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className="block py-3 px-4 text-lg font-medium text-white hover:bg-blue-700 transition-colors border-b"
        onClick={closeMenu}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <>
      <header className="relative border-b border-gray-200 bg-white py-2 lg:py-0 font-fira">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="flex items-center">
            <div className="w-1/3 md:w-1/4 xl:w-1/3">
              <div className="absolute top-0 z-50 rounded-b-lg bg-white p-2">
                <Link to="/" className="inline-block">
                  <img
                    src={BayokLogo}
                    className="h-auto max-w-full w-14 md:w-32"
                    alt="Bayok State Security Service Logo"
                    width="130"
                    height="50"
                  />
                </Link>
              </div>
            </div>

            <div className="static flex w-2/3 justify-end md:w-3/4 lg:justify-between xl:w-2/3">
              <nav className="static hidden p-0 lg:block">
                <div className="flex">
                  <ul className="flex items-center gap-6 capitalize">
                    {navItems.map(renderNavItem)}
                  </ul>
                </div>
              </nav>

              <div className="flex items-center gap-3">
                <div className="relative flex items-center gap-2 font-semibold">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-gradient-to-b from-blue-500 to-blue-900 text-white shadow-lg">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex-col gap-1 sm:flex">
                    <strong className="block text-sm font-bold leading-4 text-black">
                      Phone Number
                    </strong>
                    <a
                      href="tel:0408635693"
                      className="leading-4 text-blue-600"
                    >
                      0408 635 693
                    </a>
                  </div>
                </div>

                <button
                  className="bg-blue-800 p-1 rounded-lg block lg:hidden"
                  onClick={toggleMenu}
                  aria-label="Toggle navigation"
                >
                  <Menu className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={closeMenu}>
          <div className="absolute inset-0 bg-opacity-50 transition-opacity duration-300"></div>
          <div
            className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-blue-800 shadow-xl transform transition-transform duration-500 ease-in-out ${
              isDrawerVisible ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center p-4 justify-end">
              <button
                onClick={closeMenu}
                className="p-2 hover:bg-blue-700 transition-colors bg-blue-600 rounded-full"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="overflow-y-auto h-full relative pb-32">
              <nav>
                <ul>{navItems.map(renderMobileNavItem)}</ul>
              </nav>

              <div className="mt-8 ml-4 absolute bottom-24">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-800">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-200">
                      Phone Number
                    </p>
                    <a
                      href="tel:0408635693"
                      className="text-lg font-semibold text-white hover:text-blue-200"
                    >
                      0408 635 693
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
