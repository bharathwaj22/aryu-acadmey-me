import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import "../assests/css/courses.css";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer.js";

// images

import Coursesimage from "../assests/images/courses-banner-Img/Python-course-in-Chennai.png";
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
import ogimg from "../assests/images/metaogImg/py.webp";

//tools
import Django from "../assests/images/tools/Django.svg";
import Flask from "../assests/images/tools/Flask.svg";
import VisualStudioCode from "../assests/images/tools/VisualStudioCode.svg";
import Git from "../assests/images/tools/Git.svg";
import Postman from "../assests/images/tools/Postman.svg";
import BeautifulSoup from "../assests/images/tools/BeautifulSoup.svg";
import { useNavigate } from "react-router-dom";

function Python_coruses() {
  useEffect(() => {
    // Set page title
    document.title = "Python course in chennai";

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
      "Join Aryu Academy's Full Stack Python Course in Chennai to become a coding expert and build dynamic web apps with live projects and expert-led training."
    );
    setMetaTag(
      "keywords",
      "Python course in chennai, Python training in chennai"
    );

    // Set Open Graph meta tags
    setMetaTag("og:title", "Python course in chennai", true);
    setMetaTag(
      "og:description",
      "Join Aryu Academy's Full Stack Python Course in Chennai to become a coding expert and build dynamic web apps with live projects and expert-led training.",
      true
    );
    setMetaTag("og:image", ogimg, true);
    setMetaTag("og:url", window.location.href, true);

    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:title", "Python course in chennai", true);
    setMetaTag(
      "twitter:description",
      "JJoin Aryu Academy's Full Stack Python Course in Chennai to become a coding expert and build dynamic web apps with live projects and expert-led training.",
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
                <span className="live-projects-text">
                  Python Full Stack Development Course
                </span>
                <br></br>
                <span className="live-projects-text"> in Chennai </span>
              </h1>

              <h2 className="live-projects-text">
                {` \{ 3 Months Course + 2 Months Internship \} `}
              </h2>
              <hr className="border-white w-75"></hr>
              <div className="courses-description pt-3">
                Get a Python course in Chennai at Aryu Academy for your
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
            <Coursesform type={"python"}></Coursesform>
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
            <div className="d-flex justify-content-between flex-wrap-reverse flex-xl-nowrap">
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
                  Our Full Stack Python course in Chennai course offers a
                  hands-on, in-depth learning experience for aspiring
                  developers. You will start with Python fundamentals—covering
                  syntax, data types, operators, and control structures—before
                  advancing to more complex concepts like object-oriented
                  programming and error handling.
                </div>
                <div className="courses-trainig-details mt-4">
                  In the Django module, you will learn to build dynamic web
                  applications, from setting up projects and routing URLs to
                  creating models, handling forms, and working with databases.
                  Practical exercises and real-world examples will solidify your
                  skills.
                </div>
                <div className="courses-trainig-details mt-4">
                  Throughout the course, you’ll work on building a final
                  project, applying everything you’ve learned to create a fully
                  functional web application. By the end, you’ll be
                  well-equipped to build scalable, robust websites using Python
                  and Django, ready to take on professional development
                  challenges.
                </div>
              </div>
              <div className="about-training-image pt-0 pt-md-5 ">
                <img
                  className="mt-md-3 training-iamge"
                  src={Coursesimage}
                  alt="Python course at Aryu Academy in Chennai, teaching programming skills for data analysis, web development, & automation."
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
                  src={VisualStudioCode}
                  alt="Visual Studio Code tools used in Aryu Academy’s Python course for writing and debugging code"
                  className="tool-used-image"
                />
                <img
                  src={Git}
                  alt="Git tools used in Aryu Academy’s Python course for version control and collaboration on projects."
                  className="tool-used-image"
                />
                <img
                  src={Postman}
                  alt="Postman tool used in Aryu Academy’s Python course for testing APIs and ensuring smooth communication."
                  className="tool-used-image"
                />
                <img
                  src={Django}
                  alt="Django tools used in Aryu Academy’s Python course for building robust web applications and backend systems."
                  className="tool-used-image"
                />
                <img
                  src={Flask}
                  alt="Flask tools used in Aryu Academy’s Python course for creating lightweight web applications and APIs."
                  className="tool-used-image"
                />
                <img
                  src={BeautifulSoup}
                  alt="php"
                  className="Beautiful Soup tools used in Aryu Academy’s Python course for web scraping and data extraction from HTML content."
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
                    Interview Readiness
                  </div>
                  <div className="daily-text-description mt-4">
                    Feel prepared and confident for interviews in multinational
                    companies. Our corporate-simulated training builds the
                    expertise and poise you need to shine in competitive job
                    markets.
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
                          Introduction to Python and Basic Syntax
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    {/* <div className="list-line mx-2"></div> */}
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>What is Python?</li>
                          <li>Why Python?</li>
                          <li>Features of Python</li>
                          <li>Python Installation and Setup</li>
                          <li>Python IDEs (IDLE, VSCode)</li>
                          <li>
                            Python Basics: Syntax, Variables, Data Types,
                            Comments, Keywords, and Identifiers
                          </li>
                          <li>
                            Operators: Arithmetic, Comparison, Assignment,
                            Logical, Bitwise, Membership, and Identity
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
                          Module 2:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          Control Structures and Loops
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Conditional Statements: if, else, elif, Nested if?{" "}
                          </li>
                          <li>Loops: for, while</li>
                          <li>Control Flow in Loops: break, continue, pass</li>
                          <li>
                            Hands-On Practice with Tasks Using Control
                            Structures
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
                          Data Structures and Strings
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Lists and Tuples: Operations and Methods</li>
                          <li>Sets and Dictionaries: Operations and Methods</li>
                          <li>Strings: Manipulation and Methods</li>
                          <li>
                            Practical Exercises Involving Lists, Tuples, Sets,
                            Dictionaries, and Strings
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
                          Functions and Error Handling
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Functions: Defining, Calling, Arguments (default,
                            keyword, variable-length)
                          </li>
                          <li>Return Statement and Lambda Functions</li>
                          <li>Scope and Lifetime of Variables</li>
                          <li>
                            Error Handling: try, except, finally, Raising
                            Exceptions
                          </li>
                          <li>
                            Tasks Combining Functions and Exception Handling
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
                          Module 5:
                        </Typography>
                        <Typography component="span" className="text-drop mt-1">
                          File Handling and Modules
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            File Handling: Reading, Writing, and File Methods
                          </li>
                          <li>Working with CSV Files</li>
                          <li>
                            Modules: Importing, Creating, and Using Custom
                            Modules
                          </li>
                          <li>Installing and Using Packages (pip)</li>
                        </ul>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              <div className="">
                <div className="javascript ">
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
                          Object-Oriented Programming (OOP)
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to OOP: Classes and Objects</li>
                          <li>Constructor and Destructor</li>
                          <li>
                            Inheritance: Single, Multiple, Multilevel,
                            Hierarchical, and Hybrid
                          </li>
                          <li>Polymorphism and Encapsulation</li>
                          <li>Task: Building an OOP-Based Project</li>
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
                          Databases and Django Basics
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Databases: SQLite, MySQL</li>
                          <li>CRUD Operations in Databases </li>
                          <li>Introduction to Django: Overview, MVC Pattern</li>
                          <li>Setting Up a Django Project</li>
                          <li>URL Routing and Views in Django</li>
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
                          Django Templates and Forms
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Templates: Inheritance, Static Files</li>
                          <li>Django Forms: Creation and Validation</li>
                          <li>
                            Practical Session: Basic Django Project with
                            Templates and Forms
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
                          Django Models and Advanced Concepts
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Models: Creating and Managing Models</li>
                          <li>Database Migrations in Django</li>
                          <li>Integrating Models with Forms</li>
                          <li>
                            Adding Dynamic Features to Django Applications
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
                          Final Project and Deployment
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Building a Complete Web Application with Django
                          </li>
                          <li>
                            Incorporating CRUD Operations, Templates, and Forms
                          </li>
                          <li>
                            Final Touches: Enhancing UI and Adding Advanced
                            Features
                          </li>
                          <li>Deployment of the Final Project</li>
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
                At Aryu Academy, our Python certification is trusted by leading
                global companies. With our comprehensive training, you’ll gain a
                certification that not only reflects your expertise but also
                carries recognition across industries worldwide.
              </div>

              <div className="benefits-courses mt-0 mt-md-5 pt-2">
                Benefits of Python Certification
              </div>
              <div className="courses-trainig-details mt-0 mt-md-5">
                <ul>
                  <li>
                    Prove your expertise by mastering Python and showcasing your
                    skills.
                  </li>
                  <li>
                    Stand out by elevating your resume with a trusted
                    certification.
                  </li>
                  <li>
                    Gain credibility as a go-to Python expert who drives
                    results.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={Certification}
                alt="Get an Industry-Recognized Certification in Python from ARYU Academy – 6-Month Course Completion."
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
                Aryu Academy’s Full Stack Development Course Training in Chennai. Led
                by industry professionals, this course provides 100% practical
                training with live projects, career guidance, and interview
                preparation. We also offer lifetime support to ensure your
                growth.{" "}
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
                      Is Python useful for data science and machine learning?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Absolutely! Python is the most popular language for data
                      science and machine learning due to its extensive
                      libraries like NumPy, Pandas, and TensorFlow.
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
                      What kind of career opportunities can I expect after
                      learning Python?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Python opens doors to roles like:
                      <ul>
                        <li>Python Developer</li>
                        <li>Data Analyst</li>
                        <li>Machine Learning Engineer</li>
                        <li>Web Developer</li>
                        <li>Software Engineer</li>
                      </ul>
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
                      Will the course help me build a portfolio?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes! By working on real-world projects during the course,
                      you’ll create a portfolio that showcases your Python
                      skills to potential employers.
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
                      Do I get a certificate after completing the Python course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, upon successful completion, you’ll receive a
                      certification that validates your Python expertise.
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
                      What support will I receive during the course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      You’ll have access to:
                      <ul>
                        <li>One-on-one mentoring</li>
                        <li>Live Q&A sessions</li>
                        <li>Discussion forums</li>
                        <li>Lifetime access to course materials</li>
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

export default Python_coruses;
