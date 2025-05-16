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
function React_js_development() {
  useEffect(() => {
    // Set page title
    document.title = "React JS course in Chennai";

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
      "React JS course in Chennai trains you in frontend, backend, databases, and APIs, shaping you into a skilled developer for live projects."
    );
    setMetaTag(
      "keywords",
      "React JS course in Chennai, UI / Frontend developer course in chennai"
    );

    // Set Open Graph meta tags
    setMetaTag("og:title", "React JS course in Chennai", true);
    setMetaTag(
      "og:description",
      "React JS course in Chennai trains you in frontend, backend, databases, and APIs, shaping you into a skilled developer for live projects.",
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
      "React JS course in Chennai trains you in frontend, backend, databases, and APIs, shaping you into a skilled developer for live projects.",
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
                <span className="live-projects-text">React JS Course </span>
                <br></br>

                <span className="live-projects-text">in Chennai </span>
              </h1>
              <h2 className="live-projects-text">
                {` \{ 3 Months Course + 1 Month Internship \} `}
              </h2>

              <hr className="border-white w-75"></hr>
              <div className="courses-description pt-3">
                Get a React JS Course in Chennai at Aryu academy for your
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
                  Learn to build fast, interactive web applications with our
                  ReactJS course, ideal for both beginners and experienced
                  coders. Start with setting up your environment, exploring JSX
                  syntax, and creating your first app using components and the
                  virtual DOM. Dive into core concepts like props, state, and
                  hooks (useState, useEffect) to manage data and app behavior.
                </div>
                <div className="courses-trainig-details mt-4">
                  Master form management and routing using React Router. Gain a
                  solid understanding of state management using Redux and
                  Context API, and learn to integrate APIs with Axios or Fetch.
                  Style your apps using CSS, Flexbox, and animation libraries to
                  enhance user experience.
                </div>
                <div className="courses-trainig-details mt-4">
                  The course also covers performance optimization with useMemo
                  and React.memo, and guides you through deployment using
                  platforms like Netlify or Firebase. By the end, you’ll
                  complete a capstone project—a fully functional React
                  app—equipping you with the skills to launch your career as a
                  confident React developer.
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
                          Introduction to ReactJS
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    {/* <div className="list-line mx-2"></div> */}
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>What is ReactJS?</li>
                          <li>Key Features and Advantages</li>
                          <li>React vs Other Frameworks</li>
                          <li>Setting Up Environment (Node.js, npm, IDEs)</li>
                          <li>Create React App Basics</li>
                          <li>Understanding JSX Syntax</li>
                          <li>How Virtual DOM Works</li>
                          <li>First App with JSX and Components</li>
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
                          Components and JSX
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Functional vs Class Components</li>
                          <li>Creating Reusable Components</li>
                          <li>Nesting Components</li>
                          <li>JSX Expressions and JavaScript Logic</li>
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
                          Props and State
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>What Are Props and How to Use Them</li>
                          <li>Passing Data Between Components</li>
                          <li>Introduction to State</li>
                          <li>useState Hook in Functional Components</li>
                          <li>Initializing and Updating State</li>
                          <li>Props Validation</li>
                          <li>Conditional Rendering</li>
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
                          Lifecycle and Hooks
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to useEffect</li>
                          <li>Side Effects and Data Fetching</li>
                          <li>Component Mounting and Unmounting</li>
                          <li>Lifting State Up</li>
                          <li>Prop Drilling and Component Re-rendering</li>
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
                          Forms and User Input
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Controlled vs Uncontrolled Components</li>
                          <li>Handling Events (onChange, onClick, etc.)</li>
                          <li>Handling Text Inputs, Buttons, Checkboxes</li>
                          <li>Setting Default Values</li>
                          <li>Form Validation Techniques</li>
                          <li>Using useRef for Direct DOM Access</li>
                          <li>Building a Simple Form with Validation</li>
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
                          Routing and Navigation
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>What is Client-side Routing?</li>
                          <li>Setting Up React Router</li>
                          <li>Creating Routes, Links, and Navigation</li>
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
                          State Management with Redux & Context
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Why Use Redux?</li>
                          <li>Redux Architecture: Store, Actions, Reducers</li>
                          <li>Setting Up Redux in React</li>
                          <li>Connecting Components to Redux Store</li>
                          <li>Using Middleware – Redux Thunk, Saga (intro)</li>
                          <li>Introduction to Context API for Global State</li>
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
                          API Integration and Data Handling
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Fetching Data with fetch and Axios</li>
                          <li>Displaying API Data in Components </li>
                          <li>Handling Loading, Error, and Empty States</li>
                          <li>useEffect with API Calls</li>
                          <li>Securely Handling Tokens and Cookies</li>
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
                          Styling and Animations
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Using Inline CSS and External Styles</li>
                          <li>Styled-Components Overview </li>
                          <li>Flexbox Layout in React</li>
                          <li>Adding Animations with Animated API</li>
                          <li>CSS Transitions and Animation Libraries </li>
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
                          Optimization, and Deployment
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Optimizing Performance with React.memo,
                            useMemo,usecallback
                          </li>
                          <li>Code Splitting and Lazy Loading</li>
                          <li>Building for Production</li>
                          <li>Hosting Apps on Netlify, Vercel, or Firebase</li>
                          <li>
                            Final Capstone Project: Build a Full React App
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
                At Aryu Academy, our React JS certification is trusted by
                leading global companies. With our comprehensive training,
                you’ll gain a certification that not only reflects your
                expertise but also carries recognition across industries
                worldwide.
              </div>

              <div className="benefits-courses mt-0 mt-md-5 pt-2">
                Benefits of React JS Certification
              </div>
              <div className="courses-trainig-details mt-0 mt-md-5">
                <ul>
                  <li>
                    Prove your expertise by mastering React JS and showcasing
                    your skills.
                  </li>
                  <li>
                    Stand out by elevating your resume with a trusted
                    certification.
                  </li>
                  <li>
                    Gain credibility as a go-to React JS expert who drives
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
                Aryu Academy’s React JS Training in Chennai. Led by industry
                professionals, this course provides 100% practical training with
                live projects, career guidance, and interview preparation. We
                also offer lifetime support to ensure your growth.
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
                      Can I learn ReactJS in 2 months at Aryu Academy?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes! At Aryu Academy, our step-by-step training and
                      regular practice sessions help you build strong ReactJS
                      skills in just two months
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
                      Is ReactJS still in demand?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Absolutely! Major companies like Facebook, Netflix, and
                      Instagram rely on ReactJS, and it’s among the most
                      sought-after skills in web development.
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
                      What is JSX in React?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      JSX allows you to write HTML-like code within JavaScript,
                      simplifying the process of creating and managing React
                      components.
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
                      . How much JavaScript is required for React?{" "}
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      You should be comfortable with JavaScript ES6 features,
                      such as classes, modules, arrow functions, destructuring,
                      and promises.
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
                      What is the salary of a React developer?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      The salary of a React developer varies by location and
                      experience but typically ranges from $60,000 to $120,000
                      per year in the U.S.
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

export default React_js_development;
