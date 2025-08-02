import React from "react";
import { Link } from "react-router-dom";
import BayokLogo from "../assets/media/bayok-logo.jpeg";

const Footer = () => {
  return (
    <footer className="asr-footer">
      <div className="container">
        <ul className="list-unstyled mb-0 d-flex justify-content-between asr-contact-list flex-column flex-md-row">
          <li>
            <div className="ico">
              <svg width="40" height="40" x="0" y="0" viewBox="0 0 64 64">
                <g>
                  <g fill="currentColor">
                    <path
                      d="M38.07 62H11.11c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5h26.96c2.76 0 5 2.24 5 5v5.21c0 .55-.45 1-1 1s-1-.45-1-1V7c0-1.65-1.35-3-3-3H11.11c-1.65 0-3 1.35-3 3v50c0 1.65 1.35 3 3 3h26.96c1.65 0 3-1.35 3-3V31.79c0-.55.45-1 1-1s1 .45 1 1V57c0 2.76-2.24 5-5 5z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M42.07 53.86H7.11c-.55 0-1-.45-1-1V8.23c0-.55.45-1 1-1h34.96c.55 0 1 .45 1 1v44.63c0 .55-.45 1-1 1zm-33.96-2h32.96V9.23H8.11zM27.27 57.9h-5.36c-.55 0-1-.45-1-1s.45-1 1-1h5.36c.55 0 1 .45 1 1s-.45 1-1 1z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <path
                    fill="#0087ef"
                    d="M28.84 46.78c-.71 0-1.42-.11-2.11-.33a6.878 6.878 0 0 1-4.04-3.42L13.6 25.39c-.85-1.64-1-3.51-.44-5.27s1.78-3.19 3.42-4.04l3.12-1.61c.96-.5 2.13-.28 2.84.52.76.85 1.41 1.8 1.93 2.82.41.81.74 1.66.99 2.54a2.36 2.36 0 0 1-2.01 2.99l-1.07.12c-.2.02-.34.19-.32.38.23 2.55.94 4.99 2.11 7.26s2.75 4.27 4.69 5.93c.14.12.37.1.5-.04l.67-.74c.47-.53 1.16-.8 1.86-.78.71.03 1.37.38 1.8.95.39.52.76 1.07 1.08 1.64.65 1.14 1.16 2.36 1.51 3.63.3 1.07-.21 2.22-1.2 2.73L32.01 46c-.99.51-2.07.77-3.16.77zm-8.05-30.57c-.06 0-.12.01-.17.04l-3.12 1.61c-1.17.6-2.03 1.62-2.43 2.87s-.29 2.58.31 3.74l9.09 17.64c.6 1.17 1.62 2.03 2.87 2.43s2.58.29 3.74-.31l3.07-1.58c.16-.08.23-.25.19-.42-.31-1.11-.75-2.17-1.32-3.17-.28-.49-.6-.98-.94-1.43-.1-.13-.23-.15-.29-.16a.306.306 0 0 0-.28.12l-.67.74c-.85.95-2.33 1.05-3.29.22-2.14-1.84-3.88-4.03-5.17-6.53s-2.07-5.19-2.32-8c-.11-1.26.82-2.4 2.09-2.55l1.07-.12c.14-.02.21-.09.26-.15.04-.05.09-.17.05-.32-.2-.75-.49-1.47-.84-2.16-.44-.87-.99-1.67-1.64-2.4a.347.347 0 0 0-.26-.11z"
                    opacity="1"
                    data-original="#ffbd98"
                  ></path>
                  <g fill="currentColor">
                    <path
                      d="M47.35 38.11a.999.999 0 0 1-.76-1.65c.75-.89 2.01-2.74 2-5.21-.01-2.44-1.26-4.27-2-5.15a.999.999 0 1 1 1.52-1.3c.92 1.08 2.47 3.36 2.48 6.44.01 3.11-1.55 5.42-2.48 6.52-.2.23-.48.35-.76.35z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M51.58 45.1c-.33 0-.65-.16-.84-.45a1 1 0 0 1 .29-1.38c1.8-1.18 4.85-5.04 4.85-12.02 0-6.54-2.69-10.19-4.95-12.09a1.01 1.01 0 0 1-.12-1.41 1 1 0 0 1 1.41-.12c2.58 2.18 5.66 6.31 5.66 13.62s-3.1 11.95-5.76 13.69c-.17.11-.36.16-.55.16z"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="content">
              <strong className="d-block fw-medium">Phone</strong>
              <a href="tel:0408635693">0408 635 693</a>
            </div>
          </li>
          <li>
            <div className="ico">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40"
                height="40"
                x="0"
                y="0"
                viewBox="0 0 60 60"
              >
                <g>
                  <g fill="#000" fillRule="nonzero">
                    <path
                      d="M31.238 33.99a22.112 22.112 0 0 1-6.604-1.042 9.99 9.99 0 0 1-6.636-7.563c-.753-3.626.62-7.46 3.764-10.52a17.43 17.43 0 0 1 1.052-.944 12.746 12.746 0 0 1 11.605-2.505 9.717 9.717 0 0 1 6.756 8.937 9.206 9.206 0 0 1-2.152 6.506 5.058 5.058 0 0 1-4.946 1.816A2.857 2.857 0 0 1 32.24 27.4a2.715 2.715 0 0 1-.264-2.11c.875-3.306 1.764-8.33 1.773-8.38a1 1 0 1 1 1.97.348c-.037.209-.913 5.157-1.809 8.543a.722.722 0 0 0 .045.569.89.89 0 0 0 .58.357 3.106 3.106 0 0 0 2.985-1.185 7.198 7.198 0 0 0 1.66-5.087 7.735 7.735 0 0 0-5.356-7.13 10.701 10.701 0 0 0-9.734 2.135c-.321.267-.634.546-.934.838-1.554 1.512-4.037 4.65-3.2 8.68a8.098 8.098 0 0 0 5.285 6.064c4.69 1.496 11.43 1.677 14.98-2.738a1 1 0 0 1 1.559 1.252c-2.626 3.266-6.622 4.434-10.542 4.434z"
                      fill="#0089e7"
                    ></path>
                    <path
                      d="M27.815 28.805a4.598 4.598 0 0 1-2.92-.981c-1.919-1.536-1.972-4.205-1.434-6.022.182-.605.425-1.19.727-1.745a8.198 8.198 0 0 1 3.435-3.565 4.729 4.729 0 0 1 5.563.896 7.484 7.484 0 0 1 1.594 2.746 1 1 0 0 1-1.884.67 5.579 5.579 0 0 0-1.156-2.035 2.707 2.707 0 0 0-3.234-.483 6.269 6.269 0 0 0-2.565 2.733 7.16 7.16 0 0 0-.563 1.356c-.389 1.314-.303 3.03.769 3.888 1.172.942 3.15.544 4.263-.416a11.152 11.152 0 0 0 2.113-2.572 1 1 0 1 1 1.7 1.055 13.128 13.128 0 0 1-2.503 3.027 6.144 6.144 0 0 1-3.905 1.448z"
                      fill="#0089e7"
                    ></path>
                    <path
                      d="M57 60H3a3.003 3.003 0 0 1-3-3V20a1 1 0 0 1 1.64-.769l24.536 20.392a6.005 6.005 0 0 0 7.65 0L58.36 19.23A1 1 0 0 1 60 20v37a3.003 3.003 0 0 1-3 3zM2 22.131V57c0 .552.448 1 1 1h54a1 1 0 0 0 1-1V22.131l-22.898 19.03a8.01 8.01 0 0 1-10.203.002z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M1.001 21a1 1 0 0 1-.58-1.816l9-6.38a1 1 0 0 1 1.157 1.632l-9 6.38a.994.994 0 0 1-.577.184zM58.999 21a.994.994 0 0 1-.577-.184l-9-6.38a1 1 0 0 1 1.156-1.632l9 6.38A1 1 0 0 1 59 21zM39.24 7a.997.997 0 0 1-.578-.184l-4.78-3.39a6.01 6.01 0 0 0-7.703-.047l-4.84 3.437a1 1 0 1 1-1.157-1.632l4.78-3.39a7.963 7.963 0 0 1 10.137.046l4.72 3.344A1 1 0 0 1 39.239 7zM1.65 59.46a1 1 0 0 1-.64-1.77l22.82-18.96a1 1 0 1 1 1.278 1.539l-22.82 18.96a.997.997 0 0 1-.638.231zM58.349 59.46a.994.994 0 0 1-.638-.231l-22.82-18.96a1 1 0 1 1 1.278-1.538l22.82 18.96a1 1 0 0 1-.64 1.77z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M50 28.48a1 1 0 0 1-1-1V7.008c-.003.02-.043-.008-.11-.008H11.11a.162.162 0 0 0-.12.043L11 27.48a1 1 0 0 1-2 0V7a2.06 2.06 0 0 1 2.11-2h37.78A2.06 2.06 0 0 1 51 7v20.48a1 1 0 0 1-1 1z"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="content">
              <strong className="d-block fw-medium">Email</strong>
              <a href="mailto:admin@bayokstatesecurity.com.au">
                admin@bayokstatesecurity.com.au
              </a>
            </div>
          </li>
          <li>
            <div className="ico">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40"
                height="40"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z"
                    fill="#0087ef"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="content">
              <strong className="d-block fw-medium">Address</strong>
              <span className="d-block address">PO Box 2247 Ellenbrook WA</span>
            </div>
          </li>
        </ul>
        <div className="asr-footer-page text-white py-4 py-lg-5">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="pe-xl-5">
                <div className="ft-logo mb-3 mb-xl-4">
                  <Link to="/" className="d-inline-block">
                    <img
                      src={BayokLogo}
                      className="img-fluid"
                      alt="Bayok State Security Service Logo"
                      width="130"
                      height="50"
                    />
                  </Link>
                </div>
                <div className="asr-footer-wrap mb-4">
                  <p>
                    Bayok State Security Service offers professional security
                    solutions tailored to protect businesses and properties
                    across Perth. We specialize in construction site security,
                    mobile patrols, alarm response, mine site security, and
                    gatehouse services.
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap flex-md-nowrap mb-0 asr-ft-social">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      aria-label="facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 320 512"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/"
                      aria-label="pinterest"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 384 512"
                      >
                        <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pe-xl-5">
                <h4 className="widget-title text-uppercase">Our Services</h4>
                <ul className="list-unstyled asr-ft-list d-flex flex-column mb-0">
                  <li>
                    <Link to="/service/construction-site-security">
                      Construction Site Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/alarm-response-services">
                      Alarm Response Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/security-patrol-services">
                      Security Patrol Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/mine-site-security-services">
                      Mine Site Security Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/gatehouse-security-services">
                      Gatehouse Security Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pe-xl-5">
                <h4 className="widget-title text-uppercase">Pages</h4>
                <ul className="list-unstyled asr-ft-list d-flex flex-column mb-0">
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/our-services">Services</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">
                      Terms &amp; Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center py-2">
        <span>
          <span>
            Copyright © 2023 <Link to="/">Bayok State Security</Link>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
