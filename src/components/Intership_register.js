import React, { useState } from "react";
import "../assests/css/intership_register.css";
// import Roundgirl from "../assests/images/roundgirl.svg";
import Formimage from "../assests/images/Aryu-Academy's-internship-registration.webp";
import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import Recaptcha from "./Recaptcha.js";
import { CAPCHA_URL } from "../Config.js";

function Intership_register() {
  // const [formValues, setFormValues] = useState({
  //   firstName: "",
  //   email: "",
  //   phone: "",
  //   place: "",
  //   qualification: "",
  //   program: "",
  // });

  // const [formErrors, setFormErrors] = useState({});

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   setFormErrors({ ...formErrors, [name]: "" }); // Clear the error when user types
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const errors = {};

  //   // Validate fields
  //   if (!formValues.firstName.trim()) errors.firstName = "Full Name is required";
  //   if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email))
  //     errors.email = "Valid Email is required";
  //   if (!formValues.phone.trim() || !/^\d{10}$/.test(formValues.phone))
  //     errors.phone = "Valid Phone number is required";
  //   if (!formValues.place.trim()) errors.place = "Place is required";
  //   if (!formValues.qualification.trim())
  //     errors.qualification = "Qualification is required";
  //   if (!formValues.program.trim()) errors.program = "Program selection is required";

  //   if (Object.keys(errors).length > 0) {
  //     setFormErrors(errors);
  //   } else {
  //     console.log("Form submitted successfully!", formValues);
  //     // Submit the form data
  //   }
  // };

  // const [formValues, setFormValues] = useState({
  //   full_name: "",
  //   email: "",
  //   phone: "",
  //   place: "",
  //   qualification: "",
  //   internship_program: "",
  // });

  // // State to manage form errors
  // const [formErrors, setFormErrors] = useState({});

  // // Handle input change
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await axios.post(
  //     `${API_URL}/api/v1/internship-enquiry`
  //   );

  // };

  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    place: "",
    qualification: "",
    internship_program: "",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    full_name: false,
    email: false,
    phone: false,
    place: false,
    qualification: false,
    internship_program: false,
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
  //   if (!formValues.full_name.trim())
  //     errors.full_name = "Full name is required.";
  //   if (!formValues.email.trim()) {
  //     errors.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
  //     errors.email = "Email is invalid.";
  //   }
  //   if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
  //   if (!formValues.place.trim()) errors.place = "Place is required.";
  //   if (!formValues.qualification.trim())
  //     errors.qualification = "Qualification is required.";
  //   if (!formValues.internship_program.trim())
  //     errors.internship_program = "Internship program is required.";
  //   return errors;
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    let errors = {};

    // Validation rules
    if (!formValues.full_name.trim())
      errors.full_name = "Full name is required.";
    if (!formValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
    if (!formValues.place.trim()) errors.place = "Place is required.";
    if (!formValues.qualification.trim())
      errors.qualification = "Qualification is required.";
    if (!formValues.internship_program.trim())
      errors.internship_program = "Internship program is required.";

    setFormErrors(errors); // Update errors in state

    if (Object.keys(errors).length > 0) {
      console.log("Form has errors:", errors);
      return; // Stop form submission if errors exist
    }

    console.log("Form submitted successfully:", formValues);
    // Validate the form
    // const errors = validateForm();
    // if (Object.keys(errors).length > 0) {
    //   setFormErrors(errors);
    //   return;
    // }
    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "flex";

    const startTime = Date.now();
    try {
      const response = await axios.post(
        `${API_URL}/api/v1/internship-enquiry`,
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
        place: "",
        qualification: "",
        internship_program: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);

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

  return (
    <section>
      <div className="">
        <div className=" text-center type-of-course ">
          Enquire About Our
          <span className="type-of-course-create "> Course/Internship</span>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between inetship-image mt-2">
          <div className="col-6 col-xl-4 col-xxl-6 d-flex justify-content-center d-none d-lg-block">
            <img
              src={Formimage}
              alt="Person holding books with a thumbs-up, showcasing Aryu Academy's offers and career training."
              className="roundgirl-img mr-4 mx-5"
            />
          </div>
          <div className="col-12 col-xl-8 col-xxl-6 form-algin">
            <div className="intership-form">
              <div className="styled-form  p-md-5" onSubmit={handleSubmit}>
                <div className="form-flex ">
                  <div className="form-group">
                    <label className="label-inter" htmlFor="firstName">
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
                        formErrors.full_name ? "border border-danger" : ""
                      }`}
                    />
                  </div>
                  <div className="form-group ">
                    <label className="label-inter" htmlFor="email">
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
                <div className="form-flex mt-2 ">
                  <div className="form-group">
                    <label className="label-inter" htmlFor="phone">
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
                    <label className="label-inter" htmlFor="place">
                      Place
                    </label>
                    <input
                      type="text"
                      id="place"
                      name="place"
                      onKeyUp={handleKeyUp}
                      value={formValues.place}
                      onChange={handleInputChange}
                      placeholder="Enter your Place"
                      className={`form-input px-3 ${
                        formErrors.place ? "border border-danger" : ""
                      }`}
                    />
                  </div>
                </div>
                {/* <div className="form-flex  mt-4 ">
                  <div className="form-group">
                    <label className="label-inter" htmlFor="qualiction">
                      Qualification
                    </label> */}
                {/* <input
                      type="text"
                      id="qualiction"
                      name="qualification"
                      value={formValues.qualification}
                      onChange={handleInputChange}
                      onKeyUp={handleKeyUp}
                      placeholder="Enter your Qualification"
                      className={`form-input px-3 ${
                       formErrors.qualification ? "border border-danger" : ""
                      }`}
                    /> */}
                <div className="form-flex  mt-2 ">
                  <div className="form-group">
                    <label className="label-inter" htmlFor="qualiction">
                      Program Type
                    </label>
                    <div className="custom-dropdown">
                      <select
                        id="qualification"
                        name="qualification"
                        value={formValues.qualification}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                        className={`custom-select px-3 ${
                          formErrors.qualification ? "border border-danger" : ""
                        }`}
                      >
                        <option value="">Select a Program</option>
                        <option value="course">Course</option>
                        <option value="internship">Internship</option>
                      </select>
                      <span className="dropdown-arrow">&#9660;</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="label-inter" htmlFor="selectprogram">
                      Select Program
                    </label>
                    <div className="custom-dropdown">
                      <select
                        id="selectprogram"
                        name="internship_program"
                        onKeyUp={handleKeyUp}
                        value={formValues.internship_program}
                        onChange={handleInputChange}
                        className={`custom-select px-3 ${
                          formErrors.internship_program
                            ? "border border-danger"
                            : ""
                        }`}
                      >
                        <option value="" disabled selected>
                          Select Program
                        </option>
                        <option value="ui">UI/UX desginer</option>
                        <option value="graphic_desginer">
                          Graphic desginer
                        </option>
                        <option value="video_editor">Video Editing</option>
                        <option value="full_stack_developer">
                          Full Stack Developer
                        </option>
                        <option value="mern_stack_developer">
                          Mern Stack Developer
                        </option>
                        <option value="python_developer">
                          Python Developer
                        </option>
                        <option value="react_native_developer">
                          React Native
                        </option>
                        <option value="laravel">Laravel</option>
                        {/* <option value="php_mysql">PHP & MySQL</option> */}
                        {/* <option value="codelegniter">CodeIgniter</option> */}
                        <option value="wordpress">Wordpress</option>
                        <option value="webflow">Webflow</option>
                        <option value="shopify">Shopify</option>
                        <option value="digital_marketing">
                          Digital marketing
                        </option>
                        <option value="seo">SEO</option>
                        <option value="smm">Social Media Marketing</option>
                        <option value="ui_frontend">
                          UI/FrontEnd Development
                        </option>
                        <option value="react_js">React JS</option>
                        <option value="manual_testing">Manual Testing</option>

                        {/* <option value="creo">Creo</option> */}
                      </select>
                      <span className="dropdown-arrow">&#9660;</span>
                    </div>
                  </div>
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
                {/* <Recaptcha></Recaptcha> */}
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className={`submit-btn-intership mt-2 ${
                    !captchaValue ? "disabled-btn" : ""
                  }`}
                  disabled={!captchaValue}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intership_register;
