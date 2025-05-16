import React from "react";
import "../assests/css/footer.css";
import { Link } from "react-router-dom";
// icon
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { FaRegCopyright } from "react-icons/fa";
import Aryutech from "../assests/images/Aryutechnologies.svg";

// foot iamge

import FooterImage from "../assests/images/footimg.webp";
import FooterImage2 from "../assests/images/footimg2.webp";

function Footer() {
  return (
    <section>
      <div className="footer-body pt-2">
        <div className="p-2 p-md-5 d-flex flex-wrap justify-content-between footer-alingn-staright ">
          <div className="">
            <p className="footer-head">Popular Courses</p>

            <div className="pt-0 pt-md-2 d-flex flex-column">
             
            <h className="footer-details">
                <a
                  href="/ui-ux-desginer-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI/UX Design
                </a>
              </h>
              <h className="footer-details">
                <a
                  href="/react-native-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Native
                </a>
              </h>
              <h className="footer-details">
                <a
                  href="/python-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Python
                </a>
              </h>
             
              <h className="footer-details">
                <a
                  href="/laravel-course-in-chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laravel
                </a>
              </h>
            </div>
          </div>
          
          <div className="">
            <p className="footer-head">Company</p>
            <div className="pt-2 d-flex flex-column ">
              <h className="footer-details">
                <a
                  href="refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Refund Policy
                </a>
              </h>
            
              <h className="footer-details">
                <a href="/contact-us" target="_blank" rel="noopener noreferrer">
                  Contact us
                </a>
              </h>
              <h className="footer-details">
                <a href="/about-us" target="_blank" rel="noopener noreferrer">
                  About Us
                </a>
              </h>
            </div>
          </div>

          <div className="">
            <p className="footer-head">Resources</p>
            <div className="pt-2 d-flex flex-column">
            <h className="footer-details">
                <a href="/free-resource" target="_blank" rel="noopener noreferrer">
                  Free Resources
                </a>
              </h>
              <h className="footer-details">
                <a
                  href="/interview-tips"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interview Tips
                </a>
              </h>
              <h className="footer-details">
                <a href="/webinars" target="_blank" rel="noopener noreferrer">
                  Webinars
                </a>
              </h>
              
              <h className="footer-details">
                <a href="/Ebooks" target="_blank" rel="noopener noreferrer">
                  E Books
                </a>
              </h>

              <h className="footer-details">
                <a
                  href="/course-road-map"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Course Road Map
                </a>
              </h>
              <h className="footer-details">
                <a
                  href="https://blog.aryuacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </h>
            </div>
          </div>
          <div className="mb-2">
            <p className="footer-head">Follow Us</p>
            <div className="pt-2">
              <div>
                <div className=" all-footer-media">
                  <a
                    className="icon-container-footer"
                    href="https://youtube.com/@aryuacademyofficial?si=YvCK3p2aDx6tQXgA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="insta-footer" />
                  </a>

                  <a
                    className="icon-container-footer"
                    href="https://www.instagram.com/aryuacademyofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="insta-footer" />
                  </a>

                  <a
                    className="icon-container-footer"
                    href="https://whatsapp.com/channel/0029Vb4Rg7oGzzKU2OJYyQ0C"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="insta-footer" />
                  </a>

                  <a
                    className="icon-container-footer"
                    href="http://facebook.com/aryuacademyofficial "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="insta-footer" />
                  </a>
                  <a
                    className="icon-container-footer"
                    href="https://www.linkedin.com/company/aryuacademyofficial/ "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="insta-footer" />
                  </a>
                </div>
              </div>
              <div className=" mt-5">
                <p className="footer-head">Maps</p>
                <div className="pt-3">
                  <iframe
                    className="aryu-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.425812064147!2d80.21452517484319!3d13.072178087252524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17d61bbb0f3f96d%3A0x8334512f5fca845a!2sARYU%20ACADEMY!5e0!3m2!1sen!2sin!4v1737089927678!5m2!1sen!2sin"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>

                 
                </div>
              </div>
            </div>
          </div>

          
          <div className="foot-tech-aryu">
            <p className="footer-head">Crafting Excellence with 💙</p>
            <div className="pt-2 d-flex flex-column ">
              <a
                href="https://aryutechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Aryutech}
                  alt="Aryu Technologies Company"
                  className="aryu-tech-image"
                />
              </a>
              <div className="d-flex justify-content-start mx-4 gap-2">
                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://x.com/aryu_technology?s=21&t=tNxnphk60k8Oj1slXlxJQg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="insta-footer-aryu-tech" />
                </a>

                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://www.instagram.com/aryutechnologiesofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="insta-footer-aryu-tech" />
                </a>

                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://www.linkedin.com/company/aryutechnologyofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="insta-footer-aryu-tech" />
                </a>

                <a
                  className="icon-container-footer-aryu-tech"
                  href="https://www.facebook.com/aryutechnologiesofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="insta-footer-aryu-tech" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="aryu-footer-name text-center">
            {/* {"ARYU".split("").map((char, index) => (
            <span key={index} className="hover-letter">
              {char}
            </span>
          ))}
          <span className="space-aryu"> </span>
          {"ACADEMY".split("").map((char, index) => (
            <span key={index} className="hover-letter">
              {char}
            </span>
          ))} */}
            {/* ARYU ACADEMY */}
            {/* <h1 className="hove-desgin">
              <span>ARYU</span>
              <span className="">ACADEMY</span>
            </h1> */}
            <p class="text-aryu" data-text="ARYU ACADEMY">
              ARYU ACADEMY
            </p>
          </div>
        </div>
        <hr className="line-white"></hr>
        <div className="footer-aryu-copyright p-2 p-md-5 d-flex flex-wrap justify-content-between align-items-center">
          <div className="copyright-info">
            Copyright <FaRegCopyright /> ARYU ACADEMY 2025
          </div>
          <div className="footer-links d-flex  ">
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {" "}
              <a>Privacy Policy</a>
            </Link>
            <div className="border-foot"></div>
            <Link
              to="/terms-condition"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <a>Terms & Conditions</a>
            </Link>
            <div className="border-foot"></div>
            <Link
              to="/html-sitemap"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <a>Site Map</a>
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
