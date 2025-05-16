import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import "../assests/css/courses.css";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer.js";

// images

import Coursesimage from "../assests/images/courses-banner-Img/Shopify-course-in-Chennai.png";
import Html from "../assests/images/html.webp";

import Css from "../assests/images/css.webp";

import JavaScript from "../assests/images/js.webp";

import WordPress from "../assests/images/wp.webp";

import PHP from "../assests/images/php.webp";

import Report from "../assests/images/report.webp";
import Desktop from "../assests/images/desktop.webp";
import Readlines from "../assests/images/readlines.webp";
import Bluebackground from "../assests/images/blueback.webp";
import Coursesgirl from "../assests/images/AcademyGoals.png";
import Redbox from "../assests/images/redline.webp";
import Certification from "../assests/images/Course-Certification.png";
import Training_benefits from "../assests/images/Training-Benefits.webp";

// accoradion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
import Coursesform from "../coursespages/Courses_form.js";
import ogimg from "../assests/images/metaogImg/shopify.webp";

//tools
import klaviyo from "../assests/images/tools/klaviyo.svg";
import pagefly from "../assests/images/tools/pagefly.svg";
import pluginseo from "../assests/images/tools/puginseo.svg";
import oberlo from "../assests/images/tools/oberlo.svg";
import shipstaion from "../assests/images/tools/shipstation.svg";

import { useNavigate } from "react-router-dom";
function Shopify() {
  useEffect(() => {
    // Set page title
    document.title = "Shopify course in Chennai";

    // Function to dynamically update meta tags
    const setMetaTag = (name, content, isProperty = false) => {
      let metaTag = document.querySelector(
        `${
          isProperty
            ? 'meta[property="' + name + '"]'
            : 'meta[name="' + name + '"]'
        }`
      );
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.setAttribute(isProperty ? "property" : "name", name);
        newMeta.setAttribute("content", content);
        document.head.appendChild(newMeta);
      }
    };

    // Set meta tags
    setMetaTag(
      "description",
      "Learn to build, manage, and grow your online store with our Shopify course in Chennai. Master product setup, marketing, and customization. Enroll today!"
    );
    setMetaTag(
      "keywords",
      "Shopify courses in Chennai, Shopify Training In Chennai"
    );

    // Set Open Graph meta tags
    setMetaTag("og:title", "Shopify course in Chennai", true);
    setMetaTag(
      "og:description",
      "Learn to build, manage, and grow your online store with our Shopify course in Chennai. Master product setup, marketing, and customization. Enroll today!",
      true
    );
    setMetaTag("og:image", ogimg, true);
    setMetaTag("og:url", window.location.href, true);

    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:title", "Shopify course in Chennai", true);
    setMetaTag(
      "twitter:description",
      "Learn to build, manage, and grow your online store with our Shopify course in Chennai. Master product setup, marketing, and customization. Enroll today!",
      true
    );
    setMetaTag("twitter:image", ogimg, true);
  }, []);

  const navigate = useNavigate();
const homeRegisterForm = ()=>{
  
  navigate("/contact-us");

  setTimeout(() => {
    const element = document.getElementById("homeRegisterForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}
  return (
    <>
      <section className="">
        <Header />
        <section className="p-4">
          <div className="courses-container ">
            <div className="courses-title mt-3">
              <div className="live-projects pt-2">
                Learn by doing live projects
              </div>

              <h1 className="pt-2 courses-texted">
                  <span className="live-projects-text">Shopify Course</span><br></br>
                  <span className="live-projects-text">in Chennai </span>
              </h1>
              <h2 className="live-projects-text">
              {` \{ 2 Months Course + 1 Month Internship \} `}
              </h2>
              <hr className="border-white w-75"></hr>
              <div className="courses-description pt-3">
                Get a Shopify course in Chennai at Aryu Academy for your
                next-level career!
              </div>
              <div>
                <div className="d-flex  align-items-center  gap-3 mt-5 ">
                  <div className="courses-call">
                    <FaPhoneAlt className="call-icon" />
                  </div>
                  <div>
                    <div className="courses-number pt-1">
                    Have any questions? Give us a call                     </div>
                    <a href="tel:+918122869706" className="courses-number">
                      +91 8122869706
                    </a>                    </div>
                </div>
              </div>
            </div>
            <Coursesform type={"shopify"}></Coursesform>
          </div>
          {/* <div className="d-flex  justify-content-center d-none d-md-flex">
            <div className="courses-training  ">
              <div className="courses-types">
                <div className="time-duration">Type</div>
                <div className="courses-intership mt-3">
                  Certificate + Internship
                </div>
              </div>
              <div className="courses-red-border"></div>
              <div className="courses-types">
                <div className="time-duration">Duration</div>
                <div className="courses-intership mt-3">6 Months</div>
              </div>
              <div className="courses-red-border"></div>
              <div className="courses-types">
                <div className="time-duration">Training Timing</div>
                <div className="courses-intership mt-3">
                  Mon - Fri (10 Am - 6 PM)
                </div>
              </div>
              <div className="courses-red-border"></div>
              <div className="courses-types">
                <div className="time-duration">Training Cost</div>
                <div className="courses-intership mt-3">₹ 60,000</div>
              </div>
              <div className="courses-red-border"></div>
              <div className="courses-types">
                <div className="time-duration">Training Type</div>
                <div className="courses-intership mt-3">Offline</div>
              </div>
              <div className="courses-red-border"></div>
              <div className="courses-types mt-3">
                <div className="time-duration">Application Ends in</div>

                <div className="courses-time-line  mt-2 ">
                  <div>
                    <div class="time-circle-container">
                      <div class="time-running-line"></div>
                      <div class="time-center-circle">1</div>
                    </div>
                    <div className="text-center ">
                      <div className="courses-days-circle">Days</div>
                    </div>
                  </div>
                  <div>
                    <div class="time-circle-container">
                      <div class="time-running-line"></div>
                      <div class="time-center-circle">12</div>
                    </div>
                    <div className="text-center ">
                      <div className="courses-days-circle">hrs</div>
                    </div>
                  </div>
                  <div>
                    <div class="time-circle-container">
                      <div class="time-running-line"></div>
                      <div class="time-center-circle">57</div>
                    </div>
                    <div className="text-center ">
                      <div className="courses-days-circle">Mins</div>
                    </div>
                  </div>
                  <div>
                    <div class="time-circle-container">
                      <div class="time-running-line"></div>
                      <div class="time-center-circle">04</div>
                    </div>
                    <div className="text-center ">
                      <div className="courses-days-circle">secs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  d-md-none mt-3">
            <div className="courses-training-mobile  ">
              <div className="d-flex justify-content-between gap-2">
                <div className="courses-types">
                  <div className="time-duration">Type</div>
                  <div className="courses-intership mt-3">
                    Certificate + Internship
                  </div>
                </div>
                <div className="courses-red-border"></div>
                <div className="courses-types">
                  <div className="time-duration">Duration 6 Months</div>
                  <div className="courses-intership mt-3">6 Months</div>
                </div>
                <div className="courses-red-border"></div>

                <div className="courses-types">
                  <div className="time-duration">Training Cost</div>
                  <div className="courses-intership mt-3">₹ 60,000</div>
                </div>
              </div>
              <div className="courses-red-border-mobile"></div>
              <div className="d-flex justify-content-between gap-1">
                <div className="courses-types">
                  <div className="time-duration">Training Timing</div>
                  <div className="courses-intership mt-3">
                    Mon - Fri (10 Am - 6 PM)
                  </div>
                </div>
                <div className="courses-red-border"></div>
                <div className="courses-types">
                  <div className="time-duration">Training Type</div>
                  <div className="courses-intership mt-3">Offline</div>
                </div>
              </div>
              <div className="courses-red-border-mobile"></div>

              <div className="courses-time-line mt-5 ">
                <div>
                  <div class="time-circle-container">
                    <div class="time-running-line"></div>
                    <div class="time-center-circle">1</div>
                  </div>
                  <div className="text-center ">
                    <div className="courses-days-circle">Days</div>
                  </div>
                </div>
                <div>
                  <div class="time-circle-container">
                    <div class="time-running-line"></div>
                    <div class="time-center-circle">12</div>
                  </div>
                  <div className="text-center ">
                    <div className="courses-days-circle">hrs</div>
                  </div>
                </div>
                <div>
                  <div class="time-circle-container">
                    <div class="time-running-line"></div>
                    <div class="time-center-circle">57</div>
                  </div>
                  <div className="text-center ">
                    <div className="courses-days-circle">Mins</div>
                  </div>
                </div>
                <div>
                  <div class="time-circle-container">
                    <div class="time-running-line"></div>
                    <div class="time-center-circle">04</div>
                  </div>
                  <div className="text-center ">
                    <div className="courses-days-circle">secs</div>
                  </div>
                </div>
              </div>
              <div className="courses-red-border-mobile"></div>
            </div>
          </div> */}
        </section>
        <section>
          <div className="tool-used ">
            <div className="d-flex justify-content-between flex-wrap-reverse flex-xl-nowrap ">
              <div className="about-training">
                <div className="pt-0 pt-md-5">
                  <div className="  type-of-course-about ">
                    About
                    <span className="type-of-course-create-about ">
                      {" "}
                      Training
                    </span>
                  </div>
                </div>
                <div className="courses-trainig-details mt-4">
                  Our Shopify course is your ultimate guide to mastering
                  e-commerce. Learn to build, design, and manage your own online
                  store using Shopify’s powerful features. Starting with the
                  basics, you'll understand how to set up your store, customize
                  its look, and add products seamlessly. The course dives deep
                  into essential topics like payment gateways, inventory
                  management, and SEO optimization to increase store visibility.
                </div>
                <div className="courses-trainig-details mt-4">
                  Through hands-on sessions, you will create marketing
                  campaigns, integrate sales channels, and analyze performance
                  data to boost sales. By the end of the course, you’ll have the
                  skills to launch and manage a thriving e-commerce business.
                  Whether you’re new to online selling or looking to enhance
                  your skills, this course will equip you with practical, real-world expertise to run a successful Shopify
                  store. Start your journey to becoming an e-commerce pro today!
                </div>
                
              </div>
              <div className="about-training-image pt-0 pt-md-5  pt-xl-0">
                <img
                  className="mt-md-3 training-iamge"
                  src={Coursesimage}
                  alt="Shopify course at Aryu Academy in Chennai, teaching e-commerce website creation and management using Shopify platform."
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" ">
            <div className="tool-used">
              <div className="pt-0 pt-md-5">
                <div className="  type-of-course-about ">
                  Tools
                  <span className="type-of-course-create-about "> Used</span>
                </div>
              </div>
              <div className="d-flex  flex-wrap  ">
                <img src={klaviyo} alt="Klaviyo tools used in Aryu Academy’s Shopify course for email marketing automation and customer segmentation." className="tool-used-image" />
                <img src={pagefly} alt="PageFly tools used in Aryu Academy’s Shopify course for creating high-converting landing pages and store designs." className="tool-used-image" />
                <img src={pluginseo} alt="Plug in SEO tools used in Aryu Academy’s Shopify course for optimizing online stores & improving search engine rankings." className="tool-used-image" />
                <img src={oberlo} alt="Oberlo (or Spocket) tools used in Aryu Academy’s Shopify course for sourcing and dropshipping products to online stores." className="tool-used-image" />
                <img
                  src={shipstaion}
                  alt="ShipStation tools used in Aryu Academy’s Shopify course for streamlining order fulfillment and shipping processes."
                  className="tool-used-image"
                />
              </div>
              {/* <div className="d-flex justify-content-center d-lg-none ">
                <img src={Html} alt="html"className="tool-used-image" />
                <img src={Css} alt="css" className="tool-used-image" />
                </div>
                <div className="d-flex justify-content-center  ">
                <img src={JavaScript} alt="js" className="tool-used-image" />
                <img src={PHP} alt="php" className="tool-used-image" />
                <img src={WordPress} alt="wordpress" className="tool-used-image" />
              </div> */}
            </div>
          </div>
        </section>

        <section className="pb-0 pb-md-5">
          <div className=" ">
            <div className="tool-used">
              <div className="pt-5">
                <div className="  type-of-course-about ">
                  How Does This
                  <span className="type-of-course-create-about px-2 ">
                    Training Work?
                  </span>
                </div>
              </div>
              <div className="trainig-work mt-0 mt-md-5 mx-1">
                Our training offers a genuine corporate experience, unlike other
                institutes and training companies. You’ll work on real tasks and
                projects, simulating a professional work environment.
              </div>
              <div className="trainig-work d-flex flex-wrap justify-content-between  mt-5 pt-2 p-1">
                <div className="daily-report">
                  <img
                    src={Report}
                    alt="report"
                    className="mt-2 report-image"
                  />
                  <div className="daily-report-text mt-4">Daily Reporting</div>
                  <div className="daily-text-description mt-4">
                    You'll submit daily reports detailing your tasks and
                    progress, just like in a corporate setting. This daily
                    reporting helps you stay organized and prepares you for
                    real-world job responsibilities.
                  </div>
                </div>
                <div className="daily-report">
                  <img
                    src={Desktop}
                    alt="report"
                    className="mt-2 report-image"
                  />
                  <div></div>
                  <div className="daily-report-text mt-4">
                    Real-Time Experience
                  </div>
                  <div className="daily-text-description mt-4">
                    you'll address actual challenges enhancing your skills and
                    gaining the confidence needed to step into professional
                    roles through active involvement and immediate feedback.
                  </div>
                </div>
                <div className="daily-report">
                  <img
                    src={Readlines}
                    alt="report"
                    className="mt-2 report-image"
                  />
                  <div className="daily-report-text mt-4">
                  Personalized Coaching
                  </div>
                  <div className="daily-text-description mt-4">
                  Offers personalized one-on-one guidance, tailored to your goals, helping you overcome challenges, refine skills, and achieve personal and professional growth.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center mt-0 mt-md-5 d-none d-lg-flex">
          <div className="courses-image mt-5">
            <img src={Bluebackground} alt="" className="w-100" />

            <div className="position-absolute image-content d-flex justify-content-between p-3 ">
              <div className="pt-2">
                <div className="  type-of-course-about-images ">
                Looking for More Info? We’ve Got You Covered!
                  {/* Achieve Your Goals With
                  <span className="type-of-course-create-about mx-3">
                    Aryu Academy
                  </span> */}
                </div>
                <div className="reg-text mt-2">
                Find the answers you’re looking for and see how Aryu Academy can build a successful career.
                </div>
                <button className="courses-reg-btn mt-2" onClick={homeRegisterForm}>Contact Us</button>
              </div>
              <div>
                <img src={Coursesgirl} alt="This image shows a woman holding documents. Get in touch to start your journey with Aryu Academy today!" className="courses-girl" />
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex flex-wrap justify-content-around mt-5">
          <div className="">
            <div className="  type-of-course-about ">
              What
              <span className="type-of-course-create-about mx-3">
                You'll Learn
              </span>
            </div>
          </div>
          <div className="moduals-courses pt-4">
             2 Months Course + 1 Month Internship
          </div>
        </section>
        <section className="accordion">
          <div className="d-flex justify-content-center p-3 p-md-5">
            <div className=" d-flex justify-content-around flex-wrap flex-xl-nowrap gap-4  ">
              <div>
                <div className="javascript">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 1:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Introduction to Shopify
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    {/* <div className="list-line mx-2"></div> */}
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>What is Shopify?</li>
                          <li>Key Features and Benefits of Shopify</li>
                          <li>Overview of Shopify Dashboard and Interface</li>
                          <li>Setting Up Your First Shopify Store</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 2:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify Store Setup and Design
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Choosing and Customizing Shopify Themes</li>
                          <li>
                            Understanding Shopify Store Structure (Home Page,
                            Collections, Products)
                          </li>
                          <li>
                            Adding Products, Product Variants, and Collections
                          </li>
                          <li>
                            Designing Your Store with Shopify's Drag-and-Drop
                            Editor
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 3:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify Payments and Store Configuration
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Setting Up Payment Gateways and Methods</li>
                          <li>
                            Managing Taxes, Shipping, and Delivery Options
                          </li>
                          <li>
                            Configuring Store Settings (Currency, Notifications,
                            etc.)
                          </li>
                          <li>
                            Setting Up Legal Pages (Privacy Policy, Terms &
                            Conditions)
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 4:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify Marketing and Sales Tools
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Creating Discount Codes and Promotions</li>
                          <li>
                            Integrating Social Media and Shopify’s Marketing
                            Tools
                          </li>
                          <li>
                            Setting Up Google Analytics and Tracking Sales
                          </li>
                          <li>Email Marketing with Shopify Email</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 5:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify SEO Optimization
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Optimizing Your Shopify Store for Search Engines
                          </li>
                          <li>
                            Managing Meta Tags, Product Descriptions, and SEO
                            Settings
                          </li>
                          <li>Creating SEO-Friendly URLs and Product Pages</li>
                          <li>Implementing Structured Data for Rich Results</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              <div className="">
                <div className="javascript">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 6:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify Apps and Integrations
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Adding and Managing Shopify Apps for Enhanced
                            Functionality
                          </li>
                          <li>
                            Integrating Third-Party Apps for Marketing,
                            Accounting, and Inventory
                          </li>
                          <li>
                            Automating Tasks with Shopify Flow and other Apps
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 7:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify E-commerce Analytics
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Understanding Shopify Analytics and Reporting</li>
                          <li>
                            Tracking Sales, Visitors, and Conversion Rates
                          </li>
                          <li>
                            Using Data Insights for Improving Sales and Customer
                            Retention
                          </li>
                          <li>Understanding Shopify's Performance Metrics</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 8:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify Mobile Optimization
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Ensuring Your Shopify Store is Mobile-Responsive
                          </li>
                          <li>Customizing Your Store’s Mobile Experience</li>
                          <li>
                            Using Shopify’s Mobile App for Store Management
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 9:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Shopify Advanced Customization
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Using Liquid to Customize Shopify Themes</li>
                          <li>Advanced Product Page Customization</li>
                          <li>Editing Shopify Templates and Sections</li>
                          <li>
                            Working with Custom Code (HTML, CSS, JavaScript)
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div className="javascript pt-3">
                  <Accordion className="accordion-box">
                    <AccordionSummary
                      expandIcon={<ArrowDropDownIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                      className="accordion-box-div"
                    >
                      <Typography>
                        <Typography variant="h6" className="custom-text-accord">
                          Module 10:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Final Project and Career Development
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Launching a Fully Functional Shopify Store</li>
                          <li>
                            Final Project: Creating and Launching a Store in
                            Your Niche
                          </li>
                          <li>
                            Building a Portfolio to Showcase Your Shopify
                            Expertise
                          </li>
                          <li>
                            Career Opportunities in E-commerce and Freelancing
                            Tips
                          </li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="d-flex justify-content-center">
            <button className="download-syllabus">DOWNLOAD SYLLABUS</button>
          </div> */}
        </section>
        <section>
          <img src={Redbox} alt="redline" className="w-100" />
        </section>
        <section className="pb-3">
          <div className="d-flex flex-wrap-reverse justify-content-around mt-2 mt-md-5">
            <div className="industry-certificate">
              <div className="">
                <div className="  type-of-course-about ">
                  Get Industry
                  <span className="type-of-course-create-about mx-3">
                    Recognized Certification
                  </span>
                </div>
              </div>
              <div className="courses-trainig-details mt-2 mt-md-5">
                At Aryu Academy, our Shopify certification is trusted by leading
                global companies. With our comprehensive training, you’ll gain a
                certification that not only reflects your expertise but also
                carries recognition across industries worldwide.
              </div>

              <div className="benefits-courses mt-0 mt-md-5 pt-2">
                Benefits of Shopify Certification
              </div>
              <div className="courses-trainig-details mt-0 mt-md-5">
                <ul>
                  <li>
                    Prove your expertise by mastering Shopify and showcasing
                    your skills.
                  </li>
                  <li>
                    Stand out by elevating your resume with a trusted
                    certification.
                  </li>
                  <li>
                    Gain credibility as a go-to Shopify expert who drives
                    results.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img src={Certification} alt="Get an Industry-Recognized Certification in Shopify from ARYU Academy – 6-Month Course Completion." className="student-certificate" />
            </div>
          </div>
        </section>
        <section className="mt-5 traning-benefits pb-5">
          <div className="d-flex flex-wrap justify-content-around   pt-5">
            <div>
              <img src={Training_benefits} alt="" />
            </div>
            <div className="industry-certificate p-3 p-md-0 ">
              <div className="benefits-head">Training Benefits</div>
              <div className="benefits-line"></div>
              <div className="courses-trainig-benefits-para mt-5">
                Aryu Academy’s Shopify Training in Chennai. Led by
                industry professionals, this course provides 100% practical
                training with live projects, career guidance, and interview
                preparation. We also offer lifetime support to ensure your
                growth.
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-center benefits-complete-box mt-4 pt-2 ">
                  <div className="completed-count-about-course">
                    Resume Building
                  </div>
                  <div className="completed-name-about text-center">
                    Build a professional resume
                  </div>
                </div>
                <div className="text-center benefits-complete-box mt-4 pt-2 ">
                  <div className="completed-count-about-course">
                    Portfolio Creation
                  </div>
                  <div className="completed-name-about text-center">
                    Create an impactful portfolio
                  </div>
                </div>
                <div className="text-center benefits-complete-box mt-4 pt-2 ">
                  <div className="completed-count-about-course">
                    Mock Interviews
                  </div>
                  <div className="completed-name-about text-center">
                    Conduct mock interviews confidently
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center  mt-5 pb-3">
          <div>
            <div className="text-center">
              <div className="type-of-course-about ">
                Frequently
                <span className="type-of-course-create-about mx-3">
                  Asked Questions
                </span>
              </div>
            </div>
            <div className="accordion-container mt-5 p-1 p-md-5 ">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Is Shopify good for beginners?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, Shopify is beginner-friendly. It provides templates
                      and tools that make it easy to set up an online store,
                      even if you have no prior experience. The platform is
                      designed with simplicity in mind and has plenty of
                      resources to help you get started.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Can alumni with no prior experience in eCommerce benefit
                      from the Shopify course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, this course is designed for beginners as well as
                      those with prior experience. You’ll learn everything from
                      setting up a store to customizing it and running marketing
                      campaigns, regardless of your background.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      How will a Shopify course help me in my career as an alum?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      A Shopify course can give you the skills needed to either
                      start your own online business or help you land a job in
                      eCommerce, digital marketing, or web development. It’s a
                      highly marketable skill in today’s digital world.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingfour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsefour"
                      aria-expanded="false"
                      aria-controls="flush-collapsefour"
                    >
                      What kind of career opportunities can I explore after
                      completing the Shopify course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      After completing the Shopify course, you can explore
                      careers in eCommerce, digital marketing, Shopify store
                      management, web development, and even start your own
                      online business.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingfive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsefive"
                      aria-expanded="false"
                      aria-controls="flush-collapsefive"
                    >
                      Will I get hands-on experience in the Shopify course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, a good Shopify course will provide practical,
                      hands-on experience in building and managing a real
                      Shopify store. This is essential for gaining confidence in
                      using the platform and applying your knowledge in
                      real-world scenarios.
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <Footer></Footer>
        </section>
      </section>
    </>
  );
}

export default Shopify;
