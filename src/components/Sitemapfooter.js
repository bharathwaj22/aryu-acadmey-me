import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

function Site_map_html() {
  return (
    <>
      <section>
        <Header />
      </section>

      <div className="pt-5 text-center type-of-course">
        Site<span className="type-of-course-create"> Map</span>
      </div>
      <div className="container mt-4">
        <div className="list-unstyled d-flex  flex-wrap justify-content-between">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            Home
          </a>

          <a
            href="/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            About Us
          </a>

          <a
            href="/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            Contact Us
          </a>

          <a
            href="https://blog.aryuacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            Blog
          </a>

          <a
            href="/refund-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            Refund Policy
          </a>

          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            Privacy Policy
          </a>

          <a
            href="/terms-condition"
            target="_blank"
            rel="noopener noreferrer"
            className="site-map-text"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
      <div className="container mt-4">
        <div className="type-of-course-create">Courses</div>
        <div className="row d-flex  justify-content-between p-2">
          {/* Web Design */}
          <div className="col">
            <h5 className="fw-bold">Designer Course</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/ui-ux-desginer-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  UI/UX design
                </a>
              </li>
              <li>
                <a
                  href="/graphic-desgin-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Graphic Design
                </a>
              </li>
              <li>
                <a
                  href="/video-editing-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Video Editing
                </a>
              </li>
            </ul>
          </div>

          {/* Web & Development */}
          <div className="col">
            <h5 className="fw-bold">Full Stack Development</h5>
            <ul className="list-unstyled">
              {/* <li>
                <a
                  href="/full-stack-development-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Full Stack Development
                </a>
              </li> */}
              <li>
                <a
                  href="/mern-stack-development-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  MERN Stack Development
                </a>
              </li>
              <li>
                <a
                  href="/python-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Python
                </a>
              </li>
            </ul>
            <div>
              <h5 className="fw-bold">App Development</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="/react-native-course-in-chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-map-text"
                  >
                    React Native
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* PHP Frameworks */}
          <div className="col">
            <h5 className="fw-bold">PHP Frameworks</h5>
            <ul className="list-unstyled">
              {/* <li>
                <a
                  href="/php-mysql-course-in-chennai"
                   target="_blank"
                rel="noopener noreferrer"
                className="site-map-text"
                >
                  PHP Development
                </a>
              </li> */}
              <li>
                <a
                  href="/laravel-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Laravel
                </a>
              </li>
              {/* <li>
                <a
                  href="/codeigniter-course-in-chennai"
                   target="_blank"
                rel="noopener noreferrer"
                className="site-map-text"
                >
                  Codelgniter
                </a>
              </li> */}
            </ul>
          </div>

          {/* CMS */}
          <div className="col">
            <h5 className="fw-bold">CMS</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/wordpress-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href="/webflow-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Webflow
                </a>
              </li>
              <li>
                <a
                  href="/shopify-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Shopify
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="col">
            <h5 className="fw-bold"> Marketing</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/digital-marketing-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/seo-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  SEO
                </a>
              </li>
              <li>
                <a
                  href="/smm-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-map-text"
                >
                  SMM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-2">
        <div className="type-of-course-create">Resources</div>
        <div className="list-unstyled d-flex  flex-wrap justify-content-between">
          <a href="/interview-tips" target="_blank" rel="noopener noreferrer"className="site-map-text">
            Interview Tips
          </a>
          <a href="/webinars" target="_blank" rel="noopener noreferrer"className="site-map-text">
            Webinars
          </a>

          <a href="/Ebooks" target="_blank" rel="noopener noreferrer"className="site-map-text">
            Free Resources
          </a>

          <a href="/course-road-map" target="_blank" rel="noopener noreferrer"className="site-map-text">
            Course Road Map
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Site_map_html;
