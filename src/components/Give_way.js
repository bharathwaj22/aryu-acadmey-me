import React, { useEffect, useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import Coursesgirl from "../assests/images/AcademyGoals.png";
import Giveway from "../assests/images/big-giveaway-of-the-day.png";
import Ogiveway from "../assests/images/big-giveaway-of-the-day-og.png";
import insta from "../assests/images/insta-logo-aryu.png";

import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPCHA_URL } from "../Config.js";
import confetti from "canvas-confetti";
import { Modal, Button } from "react-bootstrap";

function Give_way() {
  useEffect(() => {
    // Set page title
    document.title =
      "Hurry! Aryu Family’s Free Course Giveaway Closing Soon!";

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
      "We’re celebrating 50K followers on Instagram with a Free Course Giveaway —but not for long! Win a Full Stack Development Course worth ₹50K. Enter now!"
    );
    setMetaTag(
      "keywords",
      "1st Big Giveaway of the Day – Free Course for 1 Lucky Winner"
    );

    // Set Open Graph meta tags
    setMetaTag(
      "og:title",
      "Hurry! Aryu Family’s Free Course Giveaway Closing Soon!",
      true
    );
    setMetaTag(
      "og:description",
      "We’re celebrating 50K followers on Instagram with a Free Course Giveaway —but not for long! Win a Full Stack Development Course worth ₹50K. Enter now!",
      true
    );
    setMetaTag("og:image", Ogiveway, true);
    setMetaTag("og:url", window.location.href, true);

    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag(
      "twitter:title",
      "Hurry! Aryu Family’s Free Course Giveaway Closing Soon!",
      true
    );
    setMetaTag(
      "twitter:description",
      "We’re celebrating 50K followers on Instagram with a Free Course Giveaway —but not for long! Win a Full Stack Development Course worth ₹50K. Enter now!",
      true
    );
    setMetaTag("twitter:image", Ogiveway, true);
  }, []);

  // >>>>>>>>>>>>>>>>>>>>>>
  // const deadlineRef = useRef(Date.now() + 2 * 24 * 60 * 60 * 1000);
  // const deadlineRef = useRef(Date.now() + 10 * 1000); // 30 seconds
  // const deadlineRef = useRef(null);
  // const [timeLeft, setTimeLeft] = useState({});
  // console.log("time:", timeLeft);

  // const [showForm, setShowForm] = useState(true);

  const [displayName, setDisplayName] = useState("");
  let location = useLocation();

  // timier

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showForm, setShowForm] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const deadlineRef = useRef(null);

  const fetchDeadline = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/countdown`);
      const data = response.data;

      if (data.start_time && data.duration_seconds) {
        const startTimeTimestamp = new Date(data.start_time).getTime();
        const durationMs = data.duration_seconds * 1000;
        const deadline = startTimeTimestamp + durationMs;

        setStartTime(data.start_time);
        localStorage.setItem("giveawayDeadline", deadline);
        return deadline;
      } else {
        console.warn("Incomplete deadline data from API.");
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch deadline:", error);
      return null;
    }
  };

  useEffect(() => {
    let interval;

    const initializeTimer = async () => {
      const deadline = await fetchDeadline();

      if (!deadline) {
        setShowForm(false);
        localStorage.removeItem("giveawayDeadline");
        return;
      }

      deadlineRef.current = deadline;

      interval = setInterval(() => {
        const now = Date.now();
        const distance = deadlineRef.current - now;

        if (distance <= 0) {
          clearInterval(interval);
          setShowForm(false);
          localStorage.removeItem("giveawayDeadline");
        } else {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((distance / (1000 * 60)) % 60);
          const seconds = Math.floor((distance / 1000) % 60);
          setTimeLeft({ days, hours, minutes, seconds });
        }
      }, 1000);
    };

    initializeTimer();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let name1 = location?.state?.name;

    let a = window.location.href.split("/");
    let name2 = a.slice(-1)[0].split("-").join(" ");

    // console.log(name2.split("-").join(' '));
    console.log(name2);

    setDisplayName(name1 ? name1 : name2);
  }, []);
  const buttonRef = useRef(null);

  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    date_of_birth: "",
    qualification: "",
    graduate: "",
    father_occupation: "",
    help_you: "",
    agree:"",
    // title: displayName,
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    full_name: false,
    email: false,
    phone: false,
    city: false,
    date_of_birth: false,
    qualification: false,
    graduate: false,
    father_occupation: false,
    help_you: false,
    agree:false,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value ,type, checked} = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
      title: displayName,
      [name]: type === 'checkbox' ? checked : value,

    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let errors = {};

  //   // Validation rules
  //   if (!formValues.full_name.trim())
  //     errors.full_name = "Full name is required.";
  //   if (!formValues.email.trim()) {
  //     errors.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
  //     errors.email = "Email is invalid.";
  //   }
  //   if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
  //   if (!formValues.city.trim()) errors.city = "City is required.";
  //   if (!formValues.date_of_birth.trim())
  //     errors.date_of_birth = "Please select an date.";
  //   if (!formValues.qualification.trim())
  //     errors.qualification = "Please select an qualification.";
  //   // if (
  //   //   formValues.interested_in !== "none" &&
  //   //   !formValues.selected_program.trim()
  //   // ) {
  //   //   errors.selected_program = "Internship program is required.";
  //   // }

  //   setFormErrors(errors);
  //   if (Object.keys(errors).length > 0) return;

  //   const loader = document.getElementById("global-loader");
  //   if (loader) loader.style.display = "flex";

  //   const startTime = Date.now(); // Record start time

  //   try {
  //     const response = await axios.post(`${API_URL}/api/v1/giveaway-form`, {
  //       name: formValues.full_name,
  //       email: formValues.email,
  //       phone: formValues.phone,
  //       city: formValues.city,
  //       dob: formValues.date_of_birth,
  //       qualification: formValues.qualification,
  //     });

  //     // Ensure loader stays visible for at least 500ms
  //     const elapsedTime = Date.now() - startTime;
  //     const remainingTime = Math.max(500 - elapsedTime, 0);

  //     setTimeout(() => {
  //       if (loader) loader.style.display = "none";
  //     }, remainingTime);

  //     console.log("Form submitted successfully:", response.data);

  //     Swal.fire({
  //       title: "Thank you!",
  //       text: "Your form has been submitted successfully.",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });

  //     setFormValues({
  //       full_name: "",
  //       email: "",
  //       phone: "",
  //       city: "",
  //       date_of_birth: "",
  //       qualification: "",
  //     });

  //     setFormErrors({});
  //   } catch (error) {
  //     console.error("Error submitting the form:", error);

  //     Swal.fire({
  //       title: "Oops!",
  //       text: "There was an error submitting your form. Please try again.",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {};

    // Basic validations
    if (!formValues.full_name.trim())
      errors.full_name = "Full name is required.";

    if (!formValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid.";
    }

    // if (!formValues.phone.trim()) errors.phone = "Phone number is required.";

    if (!formValues.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10,}$/.test(formValues.phone.trim())) {
      errors.phone = "Please enter a valid phone number with at least 10 digits.";
    }
    

    if (!formValues.city.trim()) errors.city = "City is required.";

    if (!formValues.date_of_birth.trim())
      errors.date_of_birth = "Please select a date.";

    if (!formValues.qualification.trim())
      errors.qualification = "Please select a qualification.";
    if (!formValues.graduate.trim())
      errors.graduate = "Please select a graduate.";

    if (!formValues.father_occupation.trim())
      errors.father_occupation = "Please select a qualification.";
    // if (!formValues.help_you.trim())
    //   errors.help_you = "Please select a qualification.";
    if (!formValues.help_you.trim()) {
      errors.help_you = "Please describe how we can help you.";
    } else {
      const words = formValues.help_you.trim().split(/\s+/).filter(word => word.length > 0);
      if (words.length < 100) {
        errors.help_you = "Please enter at least 100 words.";
      }
    }
    
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "flex";

    const startTime = Date.now();

    try {
      const response = await axios.post(`${API_URL}/api/v1/giveaway-form`, {
        name: formValues.full_name,
        email: formValues.email,
        phone: formValues.phone,
        city: formValues.city,
        dob: formValues.date_of_birth,
        qualification: formValues.qualification,
        graduate: formValues.graduate,
        father_occupation: formValues.father_occupation,
        help_you: formValues.help_you,
      });
      console.log("submission form:", response);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);

      setTimeout(() => {
        Swal.fire({
          title: "Thank you!",

          text: "🎉 You're in! Your form has been submitted successfully. Best of luck — we’ll announce the winner soon on our Social Media pages!",        
          icon: "success",
          confirmButtonText: "OK",
        });

        const rect = buttonRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        // Trigger confetti blast at button location
        confetti({
          particleCount: 500,
          spread: 100,
          origin: {
            x: x / window.innerWidth,
            y: y / window.innerHeight,
          },
          gravity: 0.8,
        });

        // Reset form
        setFormValues({
          full_name: "",
          email: "",
          phone: "",
          city: "",
          date_of_birth: "",
          qualification: "",
          graduate: "",
          father_occupation: "",
          help_you: "",
          agree:"",
        });

        setFormErrors({});
      }, remainingTime);
    } catch (error) {
      console.error("Error submitting the form:", error);

      Swal.fire({
        title: "Oops!",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);
      setTimeout(() => {
        if (loader) loader.style.display = "none";
      }, remainingTime);
    }
  };

  const handleKeyUp = (event) => {
    const { name } = event.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error message for the specific field
    }));
  };
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  const { name } = useParams();

  //   ballons effect

  // useEffect(() => {
  //     const container = document.querySelector(".confetti-container");

  //     const createConfetti = () => {
  //       const confetti = document.createElement("div");
  //       confetti.classList.add("confetti");

  //       const size = Math.random() * 8 + 6; // 6px to 14px
  //       confetti.style.width = `${size}px`;
  //       confetti.style.height = `${size * 0.4}px`;
  //       confetti.style.left = `${Math.random() * 100}%`;
  //       confetti.style.backgroundColor = getRandomColor();
  //       confetti.style.animationDuration = `${Math.random() * 2 + 3}s`;
  //       confetti.style.opacity = Math.random();

  //       container.appendChild(confetti);

  //       setTimeout(() => {
  //         confetti.remove();
  //       }, 5000);
  //     };

  //     const getRandomColor = () => {
  //       const colors = ["#FFC107", "#03A9F4", "#E91E63", "#8BC34A", "#FF5722", "#9C27B0"];
  //       return colors[Math.floor(Math.random() * colors.length)];
  //     };

  //     const interval = setInterval(createConfetti, 200);

  //     return () => clearInterval(interval);
  //   }, []);

  useEffect(() => {
    const container = document.querySelector(".confetti-container");

    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      const size = Math.floor(Math.random() * 8) + 6;
      const left = Math.random() * window.innerWidth;

      confetti.style.width = `${size}px`;
      confetti.style.height = `${size * 0.6}px`;
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.left = `${left}px`;
      confetti.style.animationDuration = `${Math.random() * 3 + 4}s`;
      confetti.style.opacity = Math.random();
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 7000);
    };

    const getRandomColor = () => {
      const colors = [
        "#FF5733",
        "#FFC300",
        "#DAF7A6",
        "#33FFCE",
        "#FF33A8",
        "#8E44AD",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const interval = setInterval(createConfetti, 150);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Bomb blast effect on page load
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, []);

  // timer

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = Date.now();
  //     const distance = deadlineRef.current - now;

  //     if (distance <= 0) {
  //       clearInterval(interval);
  //       setShowForm(false);
  //     } else {
  //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  //       const minutes = Math.floor((distance / (1000 * 60)) % 60);
  //       const seconds = Math.floor((distance / 1000) % 60);
  //       setTimeLeft({ days, hours, minutes, seconds });
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  //   const fullText = `
  //     <ul>
  //   <li>Only 1 lucky winner will be selected.</li>
  //   <li>The winner must be ready to commit to a 90-day learning period.</li>
  //   <li>The course is only available offline.</li>
  //   <li>The winner must follow us on Instagram and YouTube to be eligible.</li>
  // </ul>
  //   `;

  return (
    <>
      <section>
        <Header />
        <section className="fade-in">
          <div className="confetti-container" aria-hidden="true"></div>
          <div className="pt-3 video-bg-image">
            <h1 className="text-center heading-giveway">
              Free Course Giveaway by Aryu Family
            </h1>
            <h2 className=" text-center type-of-course ">
              Your Chance to Win a Premium
              <a
                href="/full-stack-development-course-in-chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-cancel"
              >
                <span className="type-of-course-create ">
                  {" "}
                  Full Stack Development Course!
                </span>
              </a>
            </h2>

            <div className="pt-1 d-flex justify-content-center">
              <div className=" text-center type-of-course-giveway ">
                We’re celebrating 50K followers on Instagram{" "}
                <span>
                  <a
                    href="https://www.instagram.com/aryuacademyofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={insta} alt="Instagram" />
                  </a>
                </span>{" "}
                with a Full Stack Development Course giveaway worth ₹50K for one
                of our amazing followers! This course covers everything from
                scratch, so don’t miss out! Fill out the form below to enter.
              </div>
            </div>
          </div>

          {showForm ? (
            <section className="position-relative mt-4">
              <section>
                <div className="text-center mb-3 timer-box fade-in">
                  <h4 className="fw-bold calendar-top-title">
                    Hurry Up! Giveaway Ending Soon
                  </h4>
                  <div className="calendar-countdown d-flex justify-content-center gap-3 mt-4 flex-wrap">
                    <div className="calendar-block">
                      <div className="calendar-top">{timeLeft.days}</div>
                      <div className="calendar-bottom">Days</div>
                    </div>
                    <div className="calendar-block">
                      <div className="calendar-top">{timeLeft.hours}</div>
                      <div className="calendar-bottom">Hours</div>
                    </div>
                    <div className="calendar-block">
                      <div className="calendar-top">{timeLeft.minutes}</div>
                      <div className="calendar-bottom">Minutes</div>
                    </div>
                    <div className="calendar-block">
                      <div className="calendar-top">{timeLeft.seconds}</div>
                      <div className="calendar-bottom">Seconds</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-evenly mt-2">
                  <div className="col-12  col-xl-5 col-xxl-6  ">
                    <div className="give-way-img-wrapper ">
                      <img
                        src={Giveway}
                        className="give-way-img"
                        alt=" Giveaway of the day! Win a ₹50K-worth Full Stack Course from Aryu Academy to celebrate 50K followers on Instagram."
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-7 col-xxl-6  form-algin mt-5 ">
                    <div className="giveaway-form ">
                      <form
                        className="styled-form  p-md-4"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-flex  ">
                          <div className="form-group">
                            <label
                              className="label-inter-all"
                              htmlFor="firstName"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="full_name"
                              placeholder="Enter your Full name"
                              onKeyUp={handleKeyUp}
                              value={formValues.full_name}
                              onChange={handleInputChange}
                              className={`form-input px-3 ${
                                formErrors.full_name
                                  ? "border border-danger"
                                  : ""
                              }`}
                            />
                          </div>
                          <div className="form-group ">
                            <label className="label-inter-all" htmlFor="email">
                              Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              onKeyUp={handleKeyUp}
                              value={formValues.email}
                              onChange={handleInputChange}
                              placeholder="Enter Your Email"
                              className={`form-input px-3 ${
                                formErrors.email ? "border border-danger" : ""
                              }`}
                            />
                          </div>
                        </div>
                        <div className="form-flex ">
                          <div className="form-group">
                            <label className="label-inter-all" htmlFor="phone">
                              Phone
                            </label>
                            <div className="input-group ">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone"
                                onKeyUp={handleKeyUp}
                                value={formValues.phone}
                                onChange={handleInputChange}
                                className={`form-input-phone px-3 ${
                                  formErrors.phone ? "border border-danger" : ""
                                }`}
                              />
                            </div>
                          </div>

                          <div className="form-group d-flex flex-column ">
                            <label className="label-inter-all" htmlFor="place">
                              City
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              onKeyUp={handleKeyUp}
                              value={formValues.city}
                              onChange={handleInputChange}
                              placeholder="Enter your city"
                              className={`form-input px-3 ${
                                formErrors.city ? "border border-danger" : ""
                              }`}
                            />
                          </div>
                        </div>

                        <div className="form-flex  ">
                          <div className="form-group">
                            <label className="label-inter-all">
                              First Graduate
                            </label>
                            <div className="custom-radio-group d-flex align-items-center">
                              <label className="radio-label mx-2">
                                <input
                                  type="radio"
                                  name="graduate"
                                  value="yes"
                                  className="custom-radio"
                                  onChange={handleInputChange}
                                  checked={formValues.graduate === "yes"}
                                />
                                YES
                              </label>
                              <label className="radio-label mx-2">
                                <input
                                  type="radio"
                                  name="graduate"
                                  value="no"
                                  className="custom-radio"
                                  onChange={handleInputChange}
                                  checked={formValues.graduate === "no"}
                                />
                                NO
                              </label>
                            </div>
                          </div>
                          <div className="form-group d-flex flex-column ">
                            <label
                              className="label-inter-all"
                              htmlFor="occuption"
                            >
                              Father's Occuption
                            </label>
                            <input
                              type="text"
                              id="occuption"
                              name="father_occupation"
                              onKeyUp={handleKeyUp}
                              value={formValues.father_occupation}
                              onChange={handleInputChange}
                              placeholder="Enter Occuption"
                              className={`form-input px-3 ${
                                formErrors.father_occupation
                                  ? "border border-danger"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>

                        <div className="form-flex ">
                          <div className="form-group">
                            <label className="label-inter-all" htmlFor="dob">
                              Date Of Birth
                            </label>
                            <div className="input-group ">
                              <input
                                type="date"
                                id="dob"
                                name="date_of_birth"
                                placeholder="Enter your birth date"
                                onKeyUp={handleKeyUp}
                                value={formValues.date_of_birth}
                                onChange={handleInputChange}
                                className={`form-input-phone px-3 ${
                                  formErrors.date_of_birth
                                    ? "border border-danger"
                                    : ""
                                }`}
                              />
                            </div>
                          </div>

                          <div className="form-group d-flex flex-column ">
                            <label
                              className="label-inter-all"
                              htmlFor="qualication"
                            >
                              Qualification
                            </label>
                            <input
                              type="text"
                              id="qualication"
                              name="qualification"
                              onKeyUp={handleKeyUp}
                              value={formValues.qualification}
                              onChange={handleInputChange}
                              placeholder="Enter your Qualification"
                              className={`form-input px-3 ${
                                formErrors.qualification
                                  ? "border border-danger"
                                  : ""
                              }`}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-column ">
                          <label className="label-inter" htmlFor="text">
                            Tell us in 100 words why you are a good fit for this
                            giveaway.
                          </label>
                          <textarea
                            id="text"
                            name="help_you"
                            value={formValues.help_you}
                            onChange={handleInputChange}
                            onKeyUp={handleKeyUp}
                            placeholder="Type your message here...."
                            className={`form-textarea-download px-3 ${
                              formErrors.help_you ? "border border-danger" : ""
                            }`}
                          ></textarea>
                        </div>
                        <p className="text-danger">{formErrors.help_you}</p>

                        <div className=" mt-1">
                          <div className="">
                            <div className="input-group align-items-start">
                              <input
                                type="checkbox"
                                id="agree"
                                name="agree"
                                onKeyUp={handleKeyUp}
                                checked={formValues.agree}
                                onChange={handleInputChange}
                                className={`checkbox-label me-2 mt-1 ${
                                  formErrors.agree ? "border border-danger" : ""
                                }`}
                              />

                              <label
                                htmlFor="agree"
                                className="label-inter-all mb-0"
                              >
                                I agree to the disclaimer and terms and
                                conditions.
                                {/* <button
                                  type="button"
                                  className="btn btn-link p-0 text-decoration-underline"
                                  onClick={handleShow}
                                >
                                  Read More
                                </button> */}
                              </label>
                            </div>
                          </div>
                          <ul className="description-giveway mt-1">
                            <li>Only 1 lucky winner will be selected.</li>
                            <li>
                              The winner must be ready to commit to a 90-day
                              learning period.
                            </li>
                            <li>The course is only available offline.</li>
                            <li>
                              The winner must follow us on Instagram and YouTube
                              to be eligible.
                            </li>
                          </ul>
                          {!formValues.agree && (
                            <div className="text-danger pb-1">
                              Please agree the terms and conditions.
                            </div>
                          )}

                          {/* Centered Bootstrap Modal */}
                          <Modal show={showModal} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                              <Modal.Title>Disclaimer:</Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{ whiteSpace: "pre-wrap" }}>
                              <ul>
                                <li>Only 1 lucky winner will be selected.</li>
                                <li>
                                  The winner must be ready to commit to a 90-day
                                  learning period.
                                </li>
                                <li>The course is only available offline.</li>
                                <li>
                                  The winner must follow us on Instagram and
                                  YouTube to be eligible.
                                </li>
                              </ul>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>

                        <div className="recaptacha-login">
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
                          type="submit"
                          ref={buttonRef}
                          // onClick={handleSubmit}
                          className={`submit-btn-intership mt-2 mb-2${
                            !captchaValue ? "disabled-btn" : ""
                          }`}
                          disabled={!captchaValue || !formValues.agree}
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          ) : (
            <div className="text-center fade-in mt-5">
              <img
                src={Giveway}
                alt="Giveaway Ended"
                className="no-giveaway"

                // style={{ maxHeight: "400px" }}
              />
              <h2 className="mt-4 text-center calendar-no-give-title">
                🎉 The Giveaway Has Ended!
              </h2>
              <div className="text-center heading-giveway">
                Thank you to everyone who participated. Stay tuned for more
                exciting giveaways and announcements on our Instagram!
              </div>
            </div>
          )}
        </section>
        <section className="mt-5">
          <Footer></Footer>
        </section>
      </section>
    </>
  );
}

export default Give_way;
