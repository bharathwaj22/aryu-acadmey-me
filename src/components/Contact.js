import React, { useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import Header from "../components/Header.js";
import Footer from "./Footer.js";

// import {Fallba}
import "../assests/css/contact.css";

// const Header=lazy(()=>("./Header"))
// import Header from "./Header";
// const Footer=lazy(()=>("./Footer"))
// import Footer from "./Footer.js";

// icon
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdAccessTime } from "react-icons/md";

import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPCHA_URL } from "../Config.js";

// const Header = lazy(() =>import ("./Header"));
// const Footer = lazy(() => import("./Footer"));

function Contact() {
  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    full_name: false, // No errors initially
    email: false,
    phone: false,
    message: false,
  });
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

  //   return errors;
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Move this to the start

    let errors = {}; // Initialize an empty object to store errors

    // Validate each field and store error messages
    if (!formValues.full_name.trim()) {
      errors.full_name = "Full name is required.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formValues.phone.trim()) {
      errors.phone = "Phone number is required.";
    }
    if (!formValues.message.trim()) {
      errors.message = "Message is required.";
    }

    // Update state with errors
    setFormErrors({
      full_name: !!errors.full_name, // Store `true` if error exists
      email: !!errors.email,
      phone: !!errors.phone,
      message: !!errors.message,
    });

    // Stop form submission if there are errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Proceed with form submission logic (e.g., API call)
    console.log("Form submitted successfully", formValues);

    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "flex";

    const startTime = Date.now();
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/contact-enquiry
  `,
        formValues
      );
      console.log("Form submitted successfully:", response.data);
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);

      setTimeout(() => {
        if (loader) loader.style.display = "none";
      }, remainingTime);
      
      // Optionally, reset form values here

      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      setFormValues({
        full_name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      // SweetAlert2 error alert
      // Swal.fire({
      //   title: "Oops!",
      //   text: "There was an error submitting your form. Please try again.",
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });

      setFormValues({
        full_name: "",
        email: "",
        phone: "",
        message: "",
      });
      // setFormErrors({});
    }
  };

  const handleKeyUp = (event) => {
    const { name, value } = event.target;

    // Update formErrors dynamically
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() !== "" ? false : true, // Remove error if input is valid
    }));
  };
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  // const [loading, setLoading] = useState(false);
  return (
    // <Suspense
    //   fallback={
    //     loading && (
    //       <div className="loading-overlay">
    //         <div className="spinner"></div>
    //       </div>
    //     )
    //   }
    // >
      <section className="">
        <Header />
        <section className="contact-section">
          <div className="d-flex flex-wrap flex-xl-nowrap justify-content-between">
            <div className="contact-details ">
              <div className="mt-5  type-of-course ">
                Contact <span className="type-of-course-create">Us</span>
              </div>
              <div className="contact-details-text mt-3">
                Let us know your queries, feedbacks and enquiries. We are here
                to support you 24/7
              </div>
              <div>
                <div className="d-flex align-items-center  gap-4 mt-3">
                  <div className="icon-container-contact">
                    <FiPhone className="insta-contact" />
                  </div>
                  <div>
                    <div className="contact-call ">Give us a call</div>
                    <a href="tel:+918122869706" className="contact-number">
                      +91 8122869706
                    </a>{" "}
                  </div>
                </div>
              </div>
              <hr className="w-75"></hr>
              <div>
                <div className="d-flex align-items-center  gap-4 mt-3">
                  <div className="icon-container-contact">
                    <MdOutlineMail className="insta-contact" />
                  </div>
                  <div>
                    <div className="contact-call ">Write to us</div>
                    <a
                      href="mailto:info@aryuacademy.com"
                      className="contact-number"
                    >
                      info@aryuacademy.com
                    </a>
                  </div>
                </div>
              </div>
              <hr className="w-75"></hr>
              <div>
                <div className="d-flex align-items-center  gap-4 mt-3">
                  <div className="icon-container-contact">
                    <GrLocation className="insta-contact" />
                  </div>
                  <div>
                    <div className="contact-call ">Visit us in Chennai @</div>
                    <div className="contact-number">
                    <a
                      href="https://www.google.com/maps/place/ARYU+ACADEMY/@13.072178,80.2171,14z/data=!4m6!3m5!1s0x17d61bbb0f3f96d:0x8334512f5fca845a!8m2!3d13.0721781!4d80.2171001!16s%2Fg%2F11y66z3t0y?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-number"
                      
                    >
                      No 33/14, Ground floor, Jayammal St, Ayyavoo Colony,
                      Aminjikarai, Chennai, Tamil Nadu 600029
                    </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-75"></hr>
              <div>
                <div className="d-flex  align-items-center  gap-4 mt-3 ">
                  <div className="icon-container-contact">
                    <MdAccessTime className="insta-contact" />
                  </div>
                  <div>
                    <div className="contact-call ">Hours of Operation</div>
                    <div className="contact-number">
                      Monday - Friday: 10:00 AM - 05:00 PM Sunday & Saturday:
                      10:00 AM - 05:00 PM
                    </div>
                  </div>
                </div>
              </div>
              <hr className="w-75"></hr>
            </div>

            <div className="contact-intership-box">
              <div className="contact-intership p-2 p-md-5">
                <div className=" say-contact ">
                  Say<span className="hello-contact"> Hello !</span>
                </div>
                <div className="contact-form-text mt-3">
                  A Fresh Approach to Learning
                </div>
                <hr></hr>

                <div className="d-flex flex-column">
                  <label className="label-inter" htmlFor="firstName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="full_name"
                    placeholder="Enter your Full name"
                    value={formValues.full_name}
                    onChange={handleInputChange}
                    className={`form-control px-3 ${
                      formErrors.full_name ? "border border-danger" : ""
                    }`}
                    onKeyUp={handleKeyUp}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="label-inter" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your number"
                    onKeyUp={handleKeyUp}
                    className={`form-control px-3 ${
                      formErrors.phone ? "border border-danger" : ""
                    }`}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="label-inter" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email"
                    onKeyUp={handleKeyUp}
                    className={`form-control px-3 ${
                      formErrors.email ? "border border-danger" : ""
                    }`}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <label className="label-inter" htmlFor="text">
                    How can I help you?
                  </label>
                  <textarea
                    id="text"
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    onKeyUp={handleKeyUp}
                    placeholder="Type your message here...."
                    className={`form-textarea px-3 ${
                      formErrors.message ? "border border-danger" : ""
                    }`}
                  ></textarea>
                </div>
                <div className="recaptacha-login mt-2">
                  <ReCAPTCHA
                    sitekey={CAPCHA_URL}
                    onChange={handleCaptchaChange}
                  />
                  {!captchaValue && (
                    <div className="text-danger mt-2">
                      Please complete the CAPTCHA.
                    </div>
                  )}
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className={`send-btn-intership mt-2 ${
                    !captchaValue ? "disabled-btn" : ""
                  }`}
                  disabled={!captchaValue}
                >
                  SEND MAIL
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5">
          <Footer></Footer>
        </section>
      </section>
    // </Suspense>
  );
}

export default Contact;
