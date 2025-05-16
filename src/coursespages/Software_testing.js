import React, { useEffect, useState } from "react";

import Header from "../components/Header.js";
import "../assests/css/courses.css";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer.js";

// images

import Coursesimage from "../assests/images/courses-banner-Img/FullStack-Development-course-in-Chennai.png";
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
import ogimg from "../assests/images/metaogImg/fullStackDev.webp";

//tools
import VisualStudioCode from "../assests/images/tools/VisualStudioCode.svg";
import Git from "../assests/images/tools/Git.svg";
import Postman from "../assests/images/tools/Postman.svg";
import MongoDB from "../assests/images/tools/MongoDB.svg";
import XAMPP from "../assests/images/tools/XAMPP.svg";

import { useNavigate } from "react-router-dom";
function Software_testing() {
  useEffect(() => {
    // Set page title
    document.title = "Manual Testing course in Chennai";

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
      "Manual Testing course in Chennai trains you in frontend, backend, databases, and APIs, shaping you into a skilled developer for live projects."
    );
    setMetaTag(
      "keywords",
      "Manual Testing course in Chennai, UI / Frontend developer course in chennai"
    );

    // Set Open Graph meta tags
    setMetaTag("og:title", "Manual Testing course in Chennai", true);
    setMetaTag(
      "og:description",
      "Manual Testing course in Chennai trains you in frontend, backend, databases, and APIs, shaping you into a skilled developer for live projects.",
      true
    );
    setMetaTag("og:image", ogimg, true);
    setMetaTag("og:url", window.location.href, true);

    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag(
      "twitter:title",
      "MERN Stack development course in chennai",
      true
    );
    setMetaTag(
      "twitter:description",
      "Manual Testing course in Chennai trains you in frontend, backend, databases, and APIs, shaping you into a skilled developer for live projects.",
      true
    );
    setMetaTag("twitter:image", ogimg, true);
  }, []);
  const navigate = useNavigate();
  const homeRegisterForm = () => {
    navigate("/contact-us");

    setTimeout(() => {
      const element = document.getElementById("homeRegisterForm");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
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
                {/* Digital Marketing Course */}
                <span className="live-projects-text">
                  Manual Testing Course{" "}
                </span>
                <br></br>

                <span className="live-projects-text">in Chennai </span>
              </h1>
              <h2 className="live-projects-text">
                {` \{ 3 Months Course + 1 Month Internship \} `}
              </h2>

              <hr className="border-white w-75"></hr>
              <div className="courses-description pt-3">
                Get a Manual Testing Course in Chennai at Aryu academy for your
                next-level career!
              </div>
              <div>
                <div className="d-flex  align-items-center  gap-3 mt-5 ">
                  <div className="courses-call">
                    <FaPhoneAlt className="call-icon" />
                  </div>
                  <div>
                    <div className="courses-number pt-1">
                      Have any questions? Give us a call{" "}
                    </div>
                    <a href="tel:+918122869706" className="courses-number">
                      +91 8122869706
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <Coursesform type={"react_js_development"}></Coursesform>
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
            <div className="d-flex justify-content-between flex-wrap-reverse ">
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
                  Master the essentials of Software Testing with our practical
                  training program, designed for both beginners and experienced
                  professionals. Start with Manual Testing and explore key SDLC
                  models, such as Waterfall, Spiral, V&V, Hybrid, and the Agile
                  Model / Methodology. Learn core testing types, including White
                  Box, Black Box, and Grey Box Testing, as well as functional,
                  integration, and system testing for web and mobile
                  applications.
                </div>
                <div className="courses-trainig-details mt-4">
                  Build expertise in Non-Functional Testing areas like
                  Performance, Compatibility, Usability, and Regression Testing.
                  Learn to design effective test cases, understand the Software
                  Test Life Cycle (STLC), and generate test execution reports.
                  Develop practical skills in Test Planning, traceability, and
                  applying testing metrics.
                </div>
                <div className="courses-trainig-details mt-4">
                  Gain confidence in Defect Management by understanding bug
                  lifecycles, severity, and reporting practices. Explore Static
                  and Dynamic Testing Techniques, understand the role of QA and
                  QC, and discover the importance of Automation Testing using
                  tools like Selenium. Apply your knowledge through real-time
                  projects and become job-ready in the field of software
                  testing.
                </div>
              </div>
              <div className="about-training-image pt-0 pt-md-5 ">
                <img
                  className="mt-0 mt-md-5 training-iamge"
                  src={Coursesimage}
                  alt="Full Stack Development course at Aryu Academy in Chennai, teaching both front-end and back-end development skills."
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
                <img
                  title="VisualStudio"
                  src={VisualStudioCode}
                  alt="html"
                  className="Visual Studio Code tools used in Aryu Academy’s Full Stack Development course for writing and debugging code."
                />
                {/* <img
                  src={Git}
                  alt="css"
                  className="Git tools used in Aryu Academy’s Full Stack Development course for version control and collaboration on projects."
                /> */}
                {/* <img
                  src={Postman}
                  alt="Postman tool used in Aryu Academy’s Full Stack Development course for testing APIs and ensuring smooth communication."
                  className="tool-used-image"
                /> */}
                {/* <img
                  src={MongoDB}
                  alt="MongoDB tool used in Aryu Academy’s Full Stack Development course for managing & querying databases in JavaScript apps."
                  className="tool-used-image"
                /> */}
                {/* <img
                  src={XAMPP}
                  alt="XAMPP tool used in Aryu Academy’s Full Stack Development course for setting up a local server for web development."
                  className="tool-used-image"
                /> */}
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
                    Offers personalized one-on-one guidance, tailored to your
                    goals, helping you overcome challenges, refine skills, and
                    achieve personal and professional growth.
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
                  Find the answers you’re looking for and see how Aryu Academy
                  can build a successful career.
                </div>
                <button
                  className="courses-reg-btn mt-2"
                  onClick={homeRegisterForm}
                >
                  Contact Us
                </button>
              </div>
              <div>
                <img
                  src={Coursesgirl}
                  alt="This image shows a woman holding documents. Get in touch to start your journey with Aryu Academy today!"
                  className="courses-girl"
                />
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
            3 Months Course + 2 Months Internship
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
                          Introduction to Software Testing & SDLC
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    {/* <div className="list-line mx-2"></div> */}
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li className="text-drop-heading">
                            Software Development Life Cycle (SDLC)
                          </li>
                          <li className="mx-3">Waterfall Model</li>
                          <li className="mx-3">Spiral Model</li>
                          <li className="mx-3">Prototype Model</li>
                          <li className="mx-3">V & V Model</li>
                          <li className="mx-3">Hybrid Model</li>
                          <li className="mx-3">Agile Model / Methodology</li>
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
                          Testing Types and Approaches
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li className="text-drop-heading">
                            White Box Testing
                          </li>
                          <li className="mx-3">Path Testing</li>
                          <li className="mx-3">Loop Testing</li>
                          <li className="mx-3">Condition Testing</li>
                          <li className="mx-3">
                            From Memory and Performance Point of View
                          </li>
                          <li className="text-drop-heading">
                            Grey Box Testing
                          </li>
                          <li className="text-drop-heading">
                            Black Box Testing
                          </li>
                          <li className="mx-3">
                            Functionality/Component Testing
                          </li>
                          <li className="mx-3">Integration Testing</li>
                          <li className="mx-3 text-drop-heading">
                            System Testing
                          </li>
                          <li className="mx-5">
                            Build, Release, Patch, Test Cycle
                          </li>
                          <li className="mx-5">Continuous Integration</li>
                          <li className="mx-5">Incident Management</li>
                          <li className="mx-5">
                            Software Architecture and Testing
                          </li>
                          <li className="mx-5">
                            Testing for Web, Client-Server, and Standalone
                            Applications
                          </li>
                          <li className="mx-3">
                            Acceptance Testing: Alpha & Beta
                          </li>
                          <li className="mx-3">
                            Smoke, Sanity, and Dry Run Testing
                          </li>
                          <li className="mx-3">
                            Adhoc and Exploratory Testing
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
                          Non-Functional Testing Types
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Compatibility Testing</li>
                          <li className="text-drop-heading">
                            Performance Testing
                          </li>
                          <li className="mx-3">
                            Load, Stress, Volume, Soak Testing
                          </li>
                          <li>Reliability Testing</li>
                          <li>Usability Testing</li>
                          <li>Accessibility Testing</li>
                          <li className="text-drop-heading">
                            Globalization Testing
                          </li>
                          <li className="mx-3">Internationalization Testing</li>
                          <li className="mx-3">Localization Testing</li>
                          <li>Regression Testing</li>
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
                          Test Case Design & Execution
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Test Cases</li>
                          <li className="text-drop-heading">
                            Test Case Design Techniques
                          </li>
                          <li className="mx-3">
                            Specification-Based Techniques
                          </li>
                          <li className="mx-3">Experience-Based Techniques</li>
                          <li>Test Case Formats</li>
                          <li>
                            Writing Functional, Integration & System Test Cases
                          </li>
                          <li>
                            Procedures for Writing and Executing Test Cases
                          </li>
                          <li>Test Case Review Process</li>
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
                          Software Test Life Cycle (STLC)
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Understanding STLC Phases</li>
                          <li>Creating a Traceability Matrix</li>
                          <li>
                            Generating and Interpreting Test Execution Reports
                          </li>
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
                          Test Planning and Metrics
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Writing a Test Plan</li>
                          <li>Key Sections in a Test Plan</li>
                          <li>Understanding and Using Test Metrics</li>
                          <li>Using NavLink, Redirect, and Nested Routes</li>
                          <li>Passing Parameters Between Pages</li>
                          <li>Protected Routes and Route Guards</li>
                          <li>Deep Linking and Navigation Customization</li>
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
                          Defect Management
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Defects</li>
                          <li>Defect Life Cycle</li>
                          <li>Defect Status, Severity, and Priority</li>
                          <li>Writing Defect/Incident Reports </li>
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
                          Static and Dynamic Testing Techniques
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Importance of Static Testing (Reviews, Inspections)
                          </li>
                          <li>Dynamic Testing Overview and Execution </li>
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
                          QA vs. QC and Industry Standards
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Difference Between Quality Assurance (QA) and
                            Quality Control (QC)
                          </li>
                          <li>Role of Testing in Ensuring Software Quality </li>
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
                          Automation Tools & Real-Time Practice
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Why Automation Testing?</li>
                          <li className="text-drop-heading">
                            Overview of Automation Tools:
                          </li>
                          <li className="mx-3">Selenium</li>
                          <li className="text-drop-heading">
                            Real-Time Projects:
                          </li>
                          <li className="mx-3">
                            Project 1: Web Application Testing
                          </li>
                          <li className="mx-3">
                            Project 2: Mobile Application Testing
                          </li>
                          <li className="mx-3">
                            Project 3: Compatibility Testing Practice
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
                At Aryu Academy, our Manual Testing certification is trusted by
                leading global companies. With our comprehensive training,
                you’ll gain a certification that not only reflects your
                expertise but also carries recognition across industries
                worldwide.
              </div>

              <div className="benefits-courses mt-0 mt-md-5 pt-2">
                Benefits of our Manual Testing Certification
              </div>
              <div className="courses-trainig-details mt-0 mt-md-5">
                <ul>
                  <li>
                    Prove your expertise by mastering Manual Testing and
                    showcasing your skills.
                  </li>
                  <li>
                    Stand out by elevating your resume with a trusted
                    certification.
                  </li>
                  <li>
                    Gain credibility as a go-to Manual Testing expert who drives
                    results.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={Certification}
                alt="Get an Industry-Recognized Certification in Full Stack Development from ARYU Academy – 6-Month Course Completion"
                className="student-certificate"
              />
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
                Aryu Academy’s Manual Testing Training in Chennai. Led by
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
                      What is manual testing?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Manual testing is a software testing method where testers
                      check applications without using automated tools. It
                      involves manually executing test cases, identifying bugs,
                      and assessing usability from an end-user’s perspective.
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
                      Does manual testing need coding?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      No, manual testing doesn’t need coding. It focuses on
                      manually checking the software’s functionality,
                      identifying bugs, and verifying user requirements without
                      writing any code.
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
                      Can I learn software testing in 3 months?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, you can learn software testing in 3 months by
                      focusing on manual testing, test case design, bug
                      reporting, and gaining practical experience.
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
                      Is manual testing easy to learn?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, manual testing is generally easy to learn, especially
                      for beginners. It requires attention to detail, logical
                      thinking, and understanding of software functionality—no
                      coding skills are needed.
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
                      What is the difference between manual testing and
                      automation testing?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          Manual Testing: Testers manually execute test cases
                          without using tools, focusing on exploring the
                          application and identifying issues from a user’s
                          perspective. It requires no coding
                        </li>
                        <li>
                          Automation Testing: Uses scripts and tools to
                          automatically run tests, making it faster for
                          repetitive tasks but requires programming knowledge.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingsix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsesix"
                      aria-expanded="false"
                      aria-controls="flush-collapsesix"
                    >
                      How long is the social media marketing course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsesix"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingsix"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div> */}
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

export default Software_testing;
