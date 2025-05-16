import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import "../assests/css/courses.css";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer.js";

// images

import Coursesimage from "../assests/images/courses-banner-Img/Video-Editing-course-in-Chennai.png";
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
import ogimg from "../assests/images/metaogImg/videoEditor.webp";

//tools
import capcut from "../assests/images/tools/capcut.svg";
import davinci from "../assests/images/tools/davinci.svg";
import ae from "../assests/images/tools/ae.svg";
import { useNavigate } from "react-router-dom";
function Video_editor() {
  useEffect(() => {
    // Set page title
    document.title = "Video Editing Course In Chennai";

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
      "Become a pro with our Video Editing Course in Chennai. Learn top software, color grading, transitions, effects and mobile editing. Start learning today!."
    );
    setMetaTag(
      "keywords",
      "Video Editing Course In Chennai, Video Editing Training In Chennai"
    );

    // Set Open Graph meta tags
    setMetaTag("og:title", "Video Editing Course In Chennai", true);
    setMetaTag(
      "og:description",
      "Become a pro with our Video Editing Course in Chennai. Learn top software, color grading, transitions, effects and mobile editing. Start learning today!",
      true
    );
    setMetaTag("og:image", ogimg, true);
    setMetaTag("og:url", window.location.href, true);

    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag("twitter:title", "Video Editing Course In Chennai", true);
    setMetaTag(
      "twitter:description",
      "Become a pro with our Video Editing Course in Chennai. Learn top software, color grading, transitions, effects and mobile editing. Start learning today!",
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
                <span className="live-projects-text">Video Editing Course</span>
                <br></br>
                <span className="live-projects-text">in Chennai </span>
              </h1>
              <h2 className="live-projects-text">
                {` \{ 2 Months Course + 1 Month Internship \} `}
              </h2>
              <hr className="border-white w-75"></hr>
              <div className="courses-description pt-3">
                Get Video Editing Course In Chennai at Aryu Academy for your
                next-level career!
              </div>
              <div>
                <div className="d-flex  align-items-center  gap-3 mt-5 ">
                  <div className="courses-call">
                    <FaPhoneAlt className="call-icon" />
                  </div>
                  <div>
                    <div className="courses-number pt-1">
                      Have any questions? Give us a call
                    </div>
                    <a href="tel:+918122869706" className="courses-number">
                      +91 8122869706
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
            <Coursesform type={"video_editor"}></Coursesform>
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
            <div className="d-flex justify-content-between  flex-wrap-reverse flex-xl-nowrap">
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
                  Our Video Editing course equips you with essential skills to
                  create professional videos. You’ll start by learning the
                  fundamentals of video editing, including resolution, frame
                  rate, and aspect ratio, followed by hands-on training in top
                  tools like Adobe Premiere Pro, After Effects, and CapCut.
                </div>
                <div className="courses-trainig-details mt-4">
                  As you progress, you’ll master key techniques such as cutting,
                  trimming, and arranging clips, adding transitions, syncing
                  audio, and using advanced effects like color grading and
                  motion graphics. The course also covers mobile video editing
                  for social media and the use of green screen (chroma keying)
                  and slow-motion effects.
                </div>
                <div className="courses-trainig-details mt-4">
                  By the end of the course, you’ll have the expertise to edit
                  high-quality videos for various platforms, from social media
                  clips to short films. Build your portfolio, gain confidence in
                  your editing abilities, and be ready to take on professional
                  video editing projects.
                </div>
              </div>
              <div className="about-training-image pt-0 pt-md-5  pt-xl-0">
                <img
                  className="mt-md-3 training-iamge"
                  src={Coursesimage}
                  alt="Video Editing course at Aryu Academy in Chennai, teaching skills to create and edit high-quality video content."
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
                  src={capcut}
                  alt="CapCut tools used in Aryu Academy’s Video Editing course for editing videos and creating engaging video content."
                  className="tool-used-image"
                />
                <img
                  src={davinci}
                  alt="DaVinci Resolve tools used in Aryu Academy’s Video Editing course for color grading and professional video editing."
                  className="tool-used-image"
                />
                <img
                  src={ae}
                  alt="Adobe After Effects tools used in Aryu Academy’s Video Editing course for creating motion graphics and visual effects."
                  className="tool-used-image"
                />
                {/* <img src={PHP} alt="php" className="tool-used-image" />
                <img
                  src={WordPress}
                  alt="wordpress"
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
        <section className="d-flex justify-content-center mt-0 mt-xl-5  d-none d-lg-flex">
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
                          Introduction to Video Editing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    {/* <div className="list-line mx-2"></div> */}
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Understanding Video Editing & its Importance</li>
                          <li>Overview of Video Editing Process</li>
                          <li>
                            Basic Concepts: Resolution, Frame Rate, and Aspect
                            Ratio
                          </li>
                          <li>
                            Exploring Different Types of Cuts (Jump Cut, Match
                            Cut, etc.)
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
                          Video Editing Tools and Basics
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Introduction to Popular Editing Software (Adobe
                            Premiere Pro, After Effects, CapCut)
                          </li>
                          <li>Navigating Software Interfaces and Workspaces</li>
                          <li>
                            Basic Editing Techniques: Cutting, Trimming, and
                            Arranging Clips
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
                          Audio and Visual Editing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Importance of Audio in Video Editing (Syncing and
                            Background Music)
                          </li>
                          <li>
                            Audio Editing Techniques (Noise Removal, Sound
                            Effects
                          </li>
                          <li>
                            Enhancing Visuals through Color Grading and
                            Correction
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
                          Advanced Editing Techniques
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Using Keyframes for Animation</li>
                          <li>Adding Effects and Motion Graphics</li>
                          <li>Advanced Transitions for Seamless Edits</li>
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
                          Mobile Video Editing and Social Media Content
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Mobile Editing Tools (CapCut)</li>
                          <li>Quick Edits for Social Media Platforms</li>
                          <li>Creating Engaging Short Videos</li>
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
                          Working with Advanced Effects
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Using Green Screen (Chroma Keying)</li>
                          <li>Speed Ramping and Slow Motion Effects</li>
                          <li>Exploring Advanced Transitions and Effects</li>
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
                          Portfolio Building
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Compiling Edited Videos for a Portfolio</li>
                          <li>Showcasing Best Works</li>
                          <li>Highlighting Different Editing Styles</li>
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
                          Final Project and Presentation
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Editing a Full-Length Video (Promo or Short Film)
                          </li>
                          <li>Preparing and Presenting the Final Project</li>
                          <li>Receiving Feedback and Refining Edits</li>
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
                          Career in Video Editing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Job Roles and Career Opportunities in Video Editing
                          </li>
                          <li>
                            Freelancing Tips and Best Platforms (YouTube, Vimeo)
                          </li>
                          <li>
                            Building an Online Presence and Showcasing Work
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
                          Course Wrap-Up
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Final Q&A Session</li>
                          <li>Certificate Distribution and Closing Remarks</li>
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
                At Aryu Academy, our Video Editor certification is trusted by
                leading global companies. With our comprehensive training,
                you’ll gain a certification that not only reflects your
                expertise but also carries recognition across industries
                worldwide.
              </div>

              <div className="benefits-courses mt-0 mt-md-5 pt-2">
                Benefits of Video Editing Certification
              </div>
              <div className="courses-trainig-details mt-0 mt-md-5">
                <ul>
                  <li>
                    Prove your expertise by mastering Video Editor and
                    showcasing your skills.
                  </li>
                  <li>
                    Stand out by elevating your resume with a trusted
                    certification.
                  </li>
                  <li>
                    Gain credibility as a go-to Video Editor expert who drives
                    results.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={Certification}
                alt="Get an Industry-Recognized Certification in Video Editing from ARYU Academy – 6-Month Course Completion"
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
                Aryu Academy’s Video Editing Training in Chennai. Led by
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
                      What skills will I learn in a video editing course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      In a video editing course, you will learn skills such as:
                      <ul>
                        <li>Cutting and trimming video clips</li>
                        <li>Adding transitions and effects</li>
                        <li>Color grading and correction</li>
                        <li>Audio editing and mixing</li>
                        <li>Working with multi-camera footage</li>
                        <li>Adding text, titles, and captions</li>
                        <li>
                          Exporting and rendering videos for various platforms
                          (YouTube, Instagram, etc.)
                        </li>
                      </ul>
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
                      Is video editing a good career?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Yes, video editing is a promising career, with
                      opportunities in industries like film, television,
                      advertising, digital media, YouTube, and content creation.
                      The increasing demand for video content in marketing and
                      social media further boosts the need for skilled editors.
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
                      What job opportunities are available after completing a
                      video editing course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      After completing a video editing course, you can pursue
                      roles such as:
                      <ul>
                        <li>Video Editor</li>
                        <li>Film Editor</li>
                        <li>Content Creator</li>
                        <li>Motion Graphics Designer</li>
                        <li>Video Producer</li>
                        <li>Social Media Content Manager</li>
                        <li>YouTube Video Editor</li>
                        <li>Post-production Specialist</li>
                      </ul>
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
                      How can I build a portfolio as a video editor?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      During the course, you'll work on various projects that
                      you can showcase in your portfolio. Include a mix of
                      personal projects, client work, and class assignments to
                      demonstrate your skills.
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
                      What types of videos will I edit during the course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      You will work on different types of videos, including:
                      <ul>
                        <li>YouTube videos</li>
                        <li>Promotional videos</li>
                        <li>Music videos</li>
                        <li>Short films</li>
                        <li>Vlogs</li>
                        <li>Corporate videos</li>
                        <li>Event videos</li>
                        <li>Social media videos</li>
                      </ul>
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

export default Video_editor;
