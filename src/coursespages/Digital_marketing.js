import React, { useEffect, useState } from "react";

import Header from "../components/Header.js";
import "../assests/css/courses.css";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer.js";

// images
import Coursesimage from "../assests/images/courses-banner-Img/Digital-Marketing-course-in-Chennai.png";
//tools
import GoogleAnalytics from "../assests/images/tools/GoogleAnalytics.svg"
import Canva from "../assests/images/tools/canva.svg"
import GoogleAds from "../assests/images/tools/GoogleAds.svg"
import Semrush from "../assests/images/tools/semrush.svg"
import Mailchimp from "../assests/images/tools/mailchimp.svg"
import Googlemybusiness from "../assests/images/tools/Googlemybusiness.svg"

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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from 'sweetalert2';
import Coursesform from '../coursespages/Courses_form.js';
import  digital from '../assests/images/metaogImg/digital.webp'
import { useLocation, useNavigate } from "react-router-dom";
function Courses() {
   useEffect(() => {
      // Set page title
      document.title = "Digital marketing course in Chennai";
  
      // Function to dynamically update meta tags
      const setMetaTag = (name, content, isProperty = false) => {
        let metaTag = document.querySelector(`${isProperty ? 'meta[property="' + name + '"]' : 'meta[name="' + name + '"]'}`);
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
      setMetaTag("description", "Digital Marketing Courses in Chennai at Aryu Academy include SEO, SMM, SEM, content, and email marketing training with practical experience and certification.");
      setMetaTag("keywords", "Digital marketing courses in Chennai, Digital marketing Training in Chennai");
  
      // Set Open Graph meta tags
      setMetaTag("og:title", "Digital marketing course in Chennai", true);
      setMetaTag("og:description", "Digital Marketing Courses in Chennai at Aryu Academy include SEO, SMM, SEM, content, and email marketing training with practical experience and certification.", true);
      setMetaTag("og:image",  digital, true); 
      setMetaTag("og:url", window.location.href, true);

      setMetaTag("twitter:card", "summary_large_image",true);
          setMetaTag("twitter:title", "Digital marketing course in Chennai",true);
          setMetaTag("twitter:description", "Digital Marketing Courses in Chennai at Aryu Academy include SEO, SMM, SEM, content, and email marketing training with practical experience and certification.",true);
          setMetaTag("twitter:image", digital,true);
    }, []);
//   const [formValues, setFormValues] = useState({
//     full_name: "",

//     phone: "",

//     email: "",
//     qualification: "",
//     // courses:"",
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const validateForm = () => {
//     const errors = {};
//     if (!formValues.full_name.trim())
//       errors.full_name = "Full name is required.";
//     if (!formValues.email.trim()) {
//       errors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//       errors.email = "Email is invalid.";
//     }
//     if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
//     if (!formValues.qualification.trim())
//       errors.qualification = "Qualification is required.";
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateForm() || {};

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors); 
//       return;
//     }

//     try {
//       const response = await axios.post(
//         `${API_URL}/api/v1/course-enquiry
// `,
//         formValues
//       );

//       console.log("Form submitted successfully:", response.data);
//       // Optionally, reset form values here
//       setFormValues({
//         full_name: "",
//         email: "",
//         phone: "",
//         place: "",
//         qualification: "",
//       });
//       setFormErrors({});
//     } catch (error) {
//       console.error(
//         "Error submitting the form:",
//         error.response?.data || error.message
//       );
//     }
//   };

// const [formValues, setFormValues] = useState({
//   full_name: "",
//   email: "",
//   phone: "",
  
//   qualification: "",
//   course:"Digital marketing",
  
// });

// State to manage form errors
// const [formErrors, setFormErrors] = useState({});


// Handle input change
// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormValues((prev) => ({
//     ...prev,
//     [name]: value,
//   }));
// };

// Validate form fields
// const validateForm = () => {
//   const errors = {};
//   if (!formValues.full_name.trim()) errors.full_name = "Full name is required.";
//   if (!formValues.email.trim()) {
//     errors.email = "Email is required.";
//   } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//     errors.email = "Email is invalid.";
//   }
//   if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
//   if (!formValues.qualification.trim()) errors.qualification = "Qualification is required.";
 
//   return errors;
// };

// Handle form submission
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Validate the form
//   const errors = validateForm();
//   if (Object.keys(errors).length > 0) {
//     setFormErrors(errors);
//     return;
//   }

//   try {
//     console.log("hello",formValues)
//     const response = await axios.post(`${API_URL}/api/v1/course-enquiry
// `, formValues);

//     console.log("Form submitted successfully:", response.data);
//     // Optionally, reset form values here

//     Swal.fire({
//       title: 'Success!',
//       text: 'Your form has been submitted successfully.',
//       icon: 'success',
//       confirmButtonText: 'OK'
//     });

//     setFormValues({
//       full_name: "",
//       email: "",
//       phone: "",
//       qualification: "",
//     });
// } catch (error) {
//     console.error("Error submitting form:", error);

//     // SweetAlert2 error alert
//     Swal.fire({
//       title: 'Oops!',
//       text: 'There was an error submitting your form. Please try again.',
//       icon: 'error',
//       confirmButtonText: 'OK'
//     });
  
//     setFormValues({
//       full_name: "",
//       email: "",
//       phone: "",
     
//       qualification: "",
     
//     });
//     setFormErrors({});
//   } 
// }; 
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
                {/* Digital Marketing Course */}
                  <span className="live-projects-text">
                  Digital Marketing Course                  </span><br></br>
                
                
                <span className="live-projects-text">in Chennai </span>
              </h1>
              <h2 className="live-projects-text">
              {` \{ 2 Months Course + 1 Month Internship \} `}
              </h2>
              <hr className="border-white w-75"></hr>
              <div className="courses-description pt-3">
              Get a Digital Marketing Course in Chennai at Aryu academy for your next-level career!

              </div>
              <div>
                <div className="d-flex  align-items-center  gap-3 mt-5 ">
                  <div className="courses-call">
                    <FaPhoneAlt className="call-icon" />
                  </div>
                  <div>
                    <div className="courses-number pt-1">
                    Have any questions? Give us a call                   </div>
                    <a href="tel:+918122869706" className="courses-number">
                      +91 8122869706
                    </a>                    </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="courses-intership-box">
                <div className="courses-intership-form  px-4 pt-2">
                  <div className=" say-courses ">
                    Start Your
                    <span className="hello-courses"> Corporate Career</span>
                  </div>
                  <hr></hr>
                  <form className=" " onSubmit={handleSubmit}>
                    <div className="d-flex flex-column">
                      <input
                        type="text"
                        id="firstName"
                        name="full_name"
                        value={formValues.full_name}
                        onChange={handleInputChange}
                        placeholder="Enter your Full name"
                        required
                        className={`form-courses px-3 ${
                          formErrors.full_name ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your number"
                        required
                        className={`form-courses px-3 ${
                          formErrors.phone ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        placeholder="Enter your Email"
                        required
                        className={`form-courses px-3 ${
                          formErrors.email ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <input
                        type="text"
                        name="qualification"
                        value={formValues.qualification}
                        onChange={handleInputChange}
                        placeholder="Enter your Qualification"
                        required
                        className={`form-courses px-3 ${
                          formErrors.qualification ? "border-red-500" : ""
                        }`}
                      />
                    </div>
                   

                    <button type="submit" className="apply-btn-courses mt-4">
                      APPLY NOW
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
            <Coursesform type="digital_marketing"></Coursesform>
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
              <div className="time-duration">Application Ends in</div>

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
                  Master the fundamentals of Digital Marketing with our
                  practical training program designed for beginners and
                  professionals. Learn to create secure, SEO-optimized websites
                  using tools like WordPress. Dive into Search Engine
                  Optimization (SEO) to boost website rankings with on-page,
                  off-page, and technical techniques.
                </div>
                <div className="courses-trainig-details mt-4">
                  Enhance your expertise in Social Media Marketing across
                  platforms like Facebook, Instagram, LinkedIn, and YouTube.
                  Design effective ad campaigns and engage audiences with
                  impactful content. Explore Search Engine Marketing (SEM) to
                  excel in PPC ads, retargeting, and Google Ads management
                </div>
                <div className="courses-trainig-details mt-4">
                  Learn the art of Content Marketing by creating optimized
                  blogs, videos, and infographics. Develop successful Email
                  Marketing campaigns to connect with your audience.
                </div>
                <div className="courses-trainig-details mt-4">
                  Gain hands-on experience with real-world projects and tools
                  like Google Analytics and Canva. Complete the course as a
                  certified digital marketing professional ready to achieve
                  measurable results.
                </div>
              </div>
              <div className="about-training-image pt-0 pt-md-5 ">
                <img
                  className="mt-0 mt-md-3 training-iamge"
                  src={Coursesimage}
                  alt="Digital Marketing course at Aryu Academy in Chennai, teaching SEO, SMM, and strategies to boost online business growth."
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
                <img src={GoogleAnalytics} alt="Google Analytics tools used in Aryu Academy’s Digital Marketing course for tracking website traffic and user behavior." className="tool-used-image" />
                <img src={Canva} alt=" Canva tools used in Aryu Academy’s Digital Marketing course for creating engaging social media and marketing designs." className="tool-used-image" />
                <img src={GoogleAds} alt="Google Ads tools used in Aryu Academy’s Digital Marketing course for running paid advertising campaigns on Google." className="tool-used-image" />
                <img src={Semrush} alt="SEMrush tools used in Aryu Academy’s Digital Marketing course for SEO research, keyword analysis, & competitor tracking." className="tool-used-image" />
                <img
                  src={Mailchimp}
                  alt="Mailchimp tools used in Aryu Academy’s Digital Marketing course for email marketing automation and audience engagement."
                  className="tool-used-image"
                />
                <img
                  src={Googlemybusiness}
                  alt="Google My Business tools in Aryu Academy’s Digital Marketing course for optimizing local business presence & visibility."
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
                          Introduction to Digital Marketing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    {/* <div className="list-line mx-2"></div> */}
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Overview of Digital Marketing.</li>
                          <li>Importance of Digital Marketing</li>
                          <li>Types of Digital Marketing</li>
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
                          Website Development
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Website Development</li>
                          <li>Tools: WordPress, HTML/Static Sites, Blogs</li>
                          <li>Domain & Hosting</li>
                          <li>SSL & C Panel Introduction</li>
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
                          Search Engine Optimization (SEO)
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Types of SEO</li>
                          <li>White Hat SEO</li>
                          <li>Organic SEO</li>
                          <li>Site Analysis & Optimization</li>
                          <li>On-Page SEO</li>
                          <li>Technical SEO</li>
                          <li>Off-Page SEO</li>
                          <li>
                            SEO Tools: Google Search Console, Google Analytics,
                            Bing Toolbox, Yandex Webmaste
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
                          Search Engine Marketing (SEM)
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>PPC (Pay-Per-Click) Advertising</li>
                          <li>Google Ads Setup & Types of Ads</li>
                          <li>Search Ads, Display Ads, Video Ads</li>
                          <li>Remarketing and Retargeting</li>
                          <li>Manual & Automated Bidding</li>
                          <li>
                            Google Ads Certifications: Display, Search, Video,
                            Shopping Ads
                          </li>
                          <li>Microsoft Advertising & Social Media Ads</li>
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
                          Certifications
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Google Certifications: Display, Search, Video,
                            Analytics
                          </li>
                          <li>
                            Hubspot Certifications: Content, Digital Marketing,
                            SEO, Inbound Marketing
                          </li>
                          <li>Microsoft Ads Certification</li>
                          <li>
                            LinkedIn Certifications: Digital Advertising
                            Specialist, SEO Expert
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
                          Email Marketing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Email Marketing</li>
                          <li>
                            Types of Email Campaigns: Promotional,
                            Transactional, and Drip Campaigns
                          </li>
                          <li>Building and Managing Email Lists</li>
                          <li>Tools: Mailchimp, HubSpot, SendGrid</li>
                          <li>Crafting Effective Email Copy and CTAs</li>
                          <li>Email Personalization and Automation</li>
                          <li>
                            Analyzing Campaign Performance (Open Rates, CTR,
                            Bounce Rates)
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
                          Content Marketing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Content Marketing</li>
                          <li>
                            Types of Content: Blogs, Articles, Infographics,
                            Videos
                          </li>
                          <li>Content Optimization & SEO Integration</li>
                          <li>Tools: SemRush, Moz, KWfinder, Ubersuggest</li>
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
                          Social Media Marketing
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Introduction to Social Media Marketing</li>
                          <li>
                            Platforms: Facebook, Instagram, Twitter, LinkedIn,
                            Pinterest, YouTube
                          </li>
                          <li>
                            Social Media Strategies & Influencer Marketing
                          </li>
                          <li>Content Design & Management</li>
                          <li>
                            Advertising: Facebook Ads, LinkedIn Ads, Twitter Ads
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
                          Digital Marketing Tools
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>
                            Cloudflare CDN, Screaming Frog, Microsoft Clarity
                          </li>
                          <li>SEO Plugins: Yoast Premium, SEO Pane</li>
                          <li>
                            Analytics Tools: Yandex Metrica, Google Analytics,
                            Google Tag Manager
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
                          Challenges & Real-World Projects
                        </Typography>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography className="text-drop-details">
                        <ul>
                          <li>Challenge-Based Training</li>
                          <li>Site Structuring Challenge</li>
                          <li>
                            Competitor Analysis & Site Optimization Challenge
                          </li>
                          <li>
                            Real-World SEM, SEO, and Email Marketing Projects
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
                At Aryu Academy, our Digital Marketing certification is trusted
                by leading global companies. With our comprehensive training,
                you’ll gain a certification that not only reflects your
                expertise but also carries recognition across industries
                worldwide.
              </div>

              <div className="benefits-courses mt-0 mt-md-5 pt-2">
                Benefits of Digital marketing Certification
              </div>
              <div className="courses-trainig-details mt-0 mt-md-5">
                <ul>
                  <li>
                    Prove your expertise by mastering Digital Marketing and
                    showcasing your skills.
                  </li>
                  <li>
                    Stand out by elevating your resume with a trusted
                    certification.
                  </li>
                  <li>
                    Gain credibility as a go-to Digital Marketing expert who
                    drives results.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img src={Certification} alt="Get an Industry-Recognized Certification in Digital Marketing from ARYU Academy – 6-Month Course Completion." className="student-certificate" />
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
                Aryu Academy’s Digital Marketing Training in Chennai. Led by
                industry professionals, this course provides 100% practical
                training with live projects, career guidance, and interview
                preparation. We also offer lifetime support to ensure your
                growth.
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-center benefits-complete-box mt-4 pt-2 ">
                  <div className="completed-count-about-course">Resume Building</div>
                  <div className="completed-name-about text-center">
                  Build a professional resume
                  </div>
                </div>
                <div className="text-center benefits-complete-box mt-4 pt-2 ">
                  <div className="completed-count-about-course">Portfolio Creation</div>
                  <div className="completed-name-about text-center">
                  Create an impactful portfolio
                  </div>
                </div>
                <div className="text-center benefits-complete-box mt-4 pt-2 ">
                  <div className="completed-count-about-course">Mock Interviews</div>
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
                      Is Digital Marketing a Good Career?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Yes! Digital marketing is a great career because more and more businesses need to be online. There are lots of jobs available, and you can work in many industries like tech, e-commerce, or entertainment. Plus, the pay can be good and there’s room for growth.
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
                       How to Choose a Digital Marketing Course with Hands-on Projects?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Pick a course that gives you real projects to work on. You should get to practice things like SEO, social media marketing, and running ads. Look for a course that has live projects or case studies, so you can apply what you learn to real situations.
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
                       What Are the Benefits of Digital Marketing Training?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Digital marketing training will help you learn how to attract customers online. You'll understand how to use tools like Google Analytics and social media platforms. You'll also stay up-to-date with the latest trends. Most importantly, it prepares you for a job in digital marketing, helping you grow your career.
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
                      How Effective is the Online Training Program?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Online programs are a great option because they let you learn at your own pace. Many programs include videos, quizzes, and assignments that make learning interactive. Plus, some courses have live sessions and mentor support to help you learn better.
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
                      Will Aryu Academy Help Me Get a Job After the Course?
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                    Yes, Aryu Academy offers comprehensive job assistance after completing the course! They provide resume support, conduct mock interviews, and offer career counseling to prepare you for job opportunities. Additionally, you’ll receive guidance on building a strong portfolio, showcasing your skills and projects. Aryu Academy also connects you with companies looking to hire digital marketers, increasing your chances of landing your ideal job.
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

export default Courses;
