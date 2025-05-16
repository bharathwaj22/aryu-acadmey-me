import React from "react";
import Header from "./Header";
import "../assests/css/about.css";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

// icons
import { PiVideoConferenceFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

// image
import Book1 from "../assests/images/book1.webp";
import Book2 from "../assests/images/book2.webp";
import aboutAryu from "../assests/images/aboutUs/About-Aryu-Academy-Institute.jpg";
import mrY from "../assests/images/aboutUs/About-Mr.Y-Traineer.jpg";
import std1 from "../assests/images/aboutUs/About-enquiry-contact-form.svg";
import std2 from "../assests/images/aboutUs/About-internship-registration-form.svg";
import Yuvaraj from "../assests/images/aboutUs/Yuvaraj-CEO-Aryu-Academy.png";
import Aruna from "../assests/images/aboutUs/Aruna-MD-Aryu-Academy.svg";
import Kanimozhi from "../assests/images/aboutUs/Kanimozhi-Trainer-Aryu_Academy.svg";
// import About_bg_line from "../assests/images/aboutUs/about-bg-line.svg"

function About() {
  const navigate = useNavigate();

  const routes = {
    ui: "/ui-desgin-course-in-chennai",
    graphic: "/graphic-desgin-course-in-chennai",
    video: "/video-editor-course-in-chennai",
    // full stack
    mern: "/Full-stack-development-course-in-chennai",
    fullstack: "/Full-stack-development-course-in-chennai",
    python: "/python-course-in-chennai",
    reactnative: "/react-native-course-in-chennai",
    // php
    php: "/php-mysql-course-in-chennai",
    laraval: "/laravel-course-in-chennai",
    codeigniter: "/codeigniter-course-in-chennai",

    // wordpress
    wordpress: "/wordpress-course-in-chennai",
    wordflow: "/wordflow-course-in-chennai",
    shopify: "/shopify-course-in-chennai",

    // marketing,
    marketing: "/digital-marketing-course-in-chennai",
    seo: "/seo-course-in-chennai",
    smm: "/smm-course-in-chennai",

    // creo
    creo: "/creo-course-in-chennai",
    contact: "/contact-us",
  };

  const handleNavigation = (key) => {
    if (routes[key]) {
      navigate(routes[key]);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const homeRegisterForm = () => {
    navigate("/");

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
        <section>
          <div className="pt-5">
            <h1 className=" text-center type-of-course ">
              About
              <span className="type-of-course-create "> Us</span>
            </h1>
          </div>
          <div className="about-us text-center pt-5">
            <h2 className="what-we">WHAT WE DO</h2>
            <div className="pt-1">
              <h3 className=" text-center education-about ">
                Education
                <span className=" education-about-tail"> Tailored to You</span>
              </h3>
            </div>
          </div>
          <div className="about-us-content text-center d-flex gap-3 justify-content-center flex-wrap pt-5">
            <div className="live-support pt-3 p-3">
              <div className="d-flex justify-content-center">
                <div className="icon-container-about">
                  <PiVideoConferenceFill className="insta-about" />
                </div>
              </div>
              <p className="pt-4 learm-about">Learn From Anywhere</p>
              <p className="learn-about-details">
                {" "}
                Access flexible, online training that fits into your schedule,
                wherever you are.
              </p>
            </div>
            <div className="live-support pt-3 p-3">
              <div className="d-flex justify-content-center">
                <div className="icon-container-about">
                  <FaGraduationCap className="insta-about" />
                </div>
              </div>
              <p className="pt-4 learm-about">Expert Instructors</p>
              <p className="learn-about-details">
                Expert guidance and support at every stage of your learning.{" "}
              </p>
            </div>
            <div className="live-support pt-3 p-3">
              <div className="d-flex justify-content-center">
                <div className="icon-container-about">
                  <PiVideoConferenceFill className="insta-about" />
                </div>
              </div>
              <p className="pt-4 learm-about">24/7 Live Support</p>
              <p className="learn-about-details">
                Enjoy 24/7 support from our team, making sure you stay on track.
              </p>
            </div>
          </div>
        </section>
        <section className="welcome-aryu mt-5 pb-5">
          <div className="pt-5 d-flex justify-content-center gap-3  flex-wrap flex-xl-nowrap">
            <div className="aryu-webpage d-flex gap-3 justify-content-center">
              <div className="aryu-web-div">
                <img
                  src={aboutAryu}
                  alt="Mr. Y trains trainees at Aryu Academy Institute, fostering a supportive and inclusive learning environment."
                />
              </div>
              <div>
                <div className="aryu-web-div1 pt-4 ">
                  {/* <div className="completed-count-about">Simplify</div> */}
                  <div className="completed-count-about">Simplify</div>

                  <div className="completed-name-about text-center">
                  Your Training
                  </div>
                </div>
                <div className="aryu-web-div2 mt-3">
                  <img
                    src={mrY}
                    alt=" Mr. Y trains trainees at Aryu Academy Institute, fostering a supportive and inclusive learning environment."
                  />
                </div>
              </div>
            </div>
            <div className="aryu-webpage">
              <h2 className="what-we">About Our INSTITUTE</h2>
              <div className="">
                <h3 className="  education-about ">
                  Welcome to
                  <span className=" education-about-tail"> Aryu Academy</span>
                </h3>
              </div>
              <p className="learn-about-details mt-1">
                We are not just any ordinary academy or institution that sells
                courses. Aryu Academy, a sister concern of Aryu Technologies, is
                a software company that shares real-world experience and
                knowledge from real-time programming experts, helping students
                tackle challenges and achieve career success.
              </p>
              <div className="book-div d-flex gap-3 mt-3">
                <div className="d-flex align-items-center book-text gap-3">
                  <img src={Book1} alt="book1" className="book-image" />
                  <div>
                    <div className="book-details ">30% Theory</div>
                    <div className="book-time">Learn, Understand, and Grow</div>
                  </div>
                </div>
                <div className="d-flex align-items-center book-text gap-3">
                  <img src={Book2} alt="book1" className="book-image" />
                  <div>
                    <div className="book-details "> 70% Practical</div>
                    <div className="book-time">Apply, Practice, and Achieve</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex gap-3">
                {/* <div className="empty-aryu-box mt-1"></div> */}
                <div>
                  <div className="d-flex gap-2 align-items-center">
                    <IoIosCheckmarkCircle className="click-icon" />
                    <p className="mb-0 click-text">
                      Simplify complex concepts.
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <IoIosCheckmarkCircle className="click-icon" />
                    <p className="mb-0 click-text">
                      Engage in practical coding.{" "}
                    </p>
                  </div>
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <IoIosCheckmarkCircle className="click-icon" />
                    <p className="mb-0 click-text">
                      Offer step-by-step guidance.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="mt-4">
                <button className="about-btn">about more</button>
              </div> */}
            </div>
          </div>
        </section>
        <section className="about-completed ">
          <div className="d-flex justify-content-center ">
            <div className="d-flex justify-content-around  mobile-about">
              <div className="text-center about-complete-box mt-4 pt-2 ">
                <div className="completed-count-about">100+</div>
                <div className="completed-name-about text-center">
                  Successfully Trained
                </div>
              </div>
              <div className="about-border"></div>
              <div className="text-center about-complete-box mt-4 pt-2">
                <div className="completed-count-about">5k+</div>
                <div className="completed-name-about text-center">
                  Classes Completed
                </div>
              </div>
              <div className="about-border"></div>
              <div className="text-center about-complete-box mt-4 pt-2">
                <div className="completed-count-about">99.9%</div>
                <div className="completed-name-about text-center">
                  Satisfaction Rate
                </div>
              </div>
              <div className="about-border"></div>
              <div className="text-center about-complete-box mt-4 pt-2">
                <div className="completed-count-about">50+</div>
                <div className="completed-name-about text-center">
                  Industry Experts
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-expert">
          <div className="about-us text-center pt-5">
            <p className="what-we ">
              <LuBookText className="fs-6" />
              <span className="mt-4 mx-1">Our Instructors</span>
            </p>
            <div className="pt-1">
              <div className=" text-center education-about ">
                Meet Our Industry
              </div>
              <div className=" text-center education-about ">Experts</div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-wrap gap-5 instructor-respone">
              <div>
                <div class="circle-container">
                  <div class="running-line"></div>
                  <img
                    Src={Yuvaraj}
                    alt="Yuvaraj-CEO-Aryu-Academy"
                    class="center-circle"
                  ></img>
                </div>
                <div className="text-center mt-3">
                  <div className="instructor-name">Mr Y</div>
                  <div className="instructor-role">Your Coding Friend</div>
                  <a
                    href="https://www.linkedin.com/in/yuvaraj-thangaraj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} className="linkedin-icon mt-4" />
                  </a>
                </div>
              </div>
              <div>
                <div class="circle-container">
                  <div class="running-line"></div>
                  <img
                    src={Aruna}
                    alt="Aruna-MD-Aryu-Academy"
                    class="center-circle"
                  ></img>
                </div>
                <div className="text-center mt-3">
                  <div className="instructor-name">Aruna V</div>
                  <div className="instructor-role">Tech Lead</div>
                  <div className="instructor-role"> {`\( Aryu \)`}</div>
                  <a
                    href="https://www.linkedin.com/in/aruna-v-a142108a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} className="linkedin-icon mt-1" />
                  </a>
                </div>
              </div>
              <div>
                <div class="circle-container">
                  <div class="running-line"></div>
                  <img
                    src={Kanimozhi}
                    alt="Kanimozhi-Trainer-Aryu_Academy"
                    class="center-circle"
                  ></img>
                </div>
                <div className="text-center mt-3">
                  <div className="instructor-name">Kanimozhi T</div>
                  <div className="instructor-role">Senior Fullstack Developer</div>
                  <div className="instructor-role"> {`\( Aryu \)`}</div>

                  <a
                    href="https://www.linkedin.com/in/kanimozhi-t-43a81220a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} className="linkedin-icon mt-1" />
                  </a>
                </div>
              </div>
              {/* <div>
                <div class="circle-container">
                  <div class="running-line"></div>
                  <div class="center-circle"></div>
                </div>
                <div className="text-center mt-3">
                  <div className="instructor-name">Hirmar Ubunti</div>
                  <div className="instructor-role">Instructor</div>
                  <a
                    href="https://www.linkedin.com/in/hirmar-ubunti"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={30} className="linkedin-icon mt-2" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="mt-5">
          <div className="d-flex justify-content-center  ">
            <div className="d-flex  flex-wrap flex-xl-nowrap gap-3">
              <div className="popular-courses  p-md-5 d-flex justify-items-center ">
                <div className=" ">
                  <p className="popular-head">
                    <LuBookText className="fs-6" />
                    <span className="mt-4 mx-1">Popular Courses</span>
                  </p>
                  <div className="pt-1 popular-details">
                    Get The Best Courses & Upgrade Your Skills
                  </div>
                  <button className="join-btn mt-3" onClick={homeRegisterForm}>
                    Join With Us
                    <FaArrowRight className="ml-2 mx-1" />
                  </button>

                  <img
                    src={std1}
                    className="std-img-about"
                    alt="This image shows a smiling person inviting trainees to fill out the enquiry contact form for more information."
                  />
                </div>
              </div>

              <div className="popular-courses d-flex p-md-5 justify-content-between">
                <div>
                  <p className="popular-head ">
                    <LuBookText className="fs-6" />
                    <span className="mt-4 mx-1">Popular Courses</span>
                  </p>
                  <div className="pt-1 popular-details">
                    Clarify Your Queries and Learn More{" "}
                  </div>
                  <button
                    className="join-btn  mt-3"
                    onClick={() => handleNavigation("contact")}
                  >
                    Connect with Us
                    <FaArrowRight className="ml-2 mx-1" />
                  </button>

                  <img
                    src={std2}
                    className="std-img-about-bha"
                    alt="This image shows a smiling man working on a laptop, showcasing the internship registration form."
                  />
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

export default About;
