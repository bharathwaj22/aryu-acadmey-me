import React, { useState, useEffect } from "react";
import "../assests/css/popupImage.css";
import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
import { CAPCHA_URL } from "../Config.js";
import ReCAPTCHA from "react-google-recaptcha";
import Mobile_popup from "../assests/images/aboutUs/home-popup-image-mobile.svg";

const PopupModal = ({ onClose }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phn_no: "",

    description: "",
    // course:"Digital marketing",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phn_no: false,
    description: false,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formValues);
  console.log(formErrors);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = {}; // Initialize an empty object to store errors

    // Validate each field
    if (!formValues.name.trim()) {
      errors.name = "Full name is required.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formValues.phn_no.trim()) {
      errors.phn_no = "phn_no number is required.";
    }
    if (!formValues.description.trim()) {
      errors.description = "description is required.";
    }

    // Update the state with errors
    setFormErrors({
      name: !!errors.name,
      email: !!errors.email,
      phn_no: !!errors.phn_no,
      description: !!errors.description,
    });

    // If there are errors, prevent form submission
    if (Object.keys(errors).length > 0) {
      return;
    }
    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "flex";

    const startTime = Date.now();
    try {
      console.log("hello", formValues);
      const response = await axios.post(
        `${API_URL}/api/v1/freeconslutaion
      `,
        formValues
      );

      console.log("Form submitted successfully:", response.data);
      // Optionally, reset form values here
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);

      setTimeout(() => {
        if (loader) loader.style.display = "none";
      }, remainingTime);

      Swal.fire({
        title: "Success!",
        text: "Your form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Close the popup after alert is dismissed
        onClose(); // <-- This will close the modal
      });

      setFormValues({
        name: "",
        email: "",
        phn_no: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      // SweetAlert2 ferror alert
      // Swal.fire({
      //   title: "Oops!",
      //   text: "There was an error submitting your form. Please try again.",
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });
    }
  };

  const handleKeyUp = (e) => {
    const { name, value } = e.target;

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };

  // useEffect(() => {

  //   confetti({
  //     particleCount: 200,
  //     spread: 120,
  //     origin: { y: 0.6 },
  //   });
  // }, []);
  return (
    <div className="popup-overlay-home">
      <div className="confetti-container-open" aria-hidden="true"></div>

      <div className="popup-box-home">
        <div className="only-mobile">
          <img src={Mobile_popup} className="mobile-popup-image" />
        </div>
        <div className="close-button-home" onClick={onClose}>
          &times;
        </div>

        <div className="all-popup-home-dlexx">
          <div className="form-home-popup">
            <form>
              <div
                className={`floating-label-group ${
                  formErrors.name ? "border border-danger" : ""
                }`}
              >
                <input
                  type="text"
                  id="fullName"
                  required
                  placeholder=" "
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyUp}
                />

                <label for="fullName">
                  Full Name<span class="required">*</span>
                </label>
              </div>
              <div
                className={`floating-label-group ${
                  formErrors.email ? "border border-danger" : ""
                }`}
              >
                <input
                  type="text"
                  id="email"
                  required
                  placeholder=" "
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyUp}
                />
                <label for="email">
                  Email<span class="required">*</span>
                </label>
              </div>
              <div
                className={`floating-label-group ${
                  formErrors.phn_no ? "border border-danger" : ""
                }`}
              >
                <input
                  type="text"
                  id="mobile"
                  required
                  placeholder=" "
                  name="phn_no"
                  value={formValues.phn_no}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyUp}
                />
                <label for="mobile">
                  Phone Number<span class="required">*</span>
                </label>
              </div>

              <div
                className={`floating-label-group ${
                  formErrors.description ? "border border-danger" : ""
                }`}
              >
                <select
                  id="course"
                  required
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  onKeyUp={handleKeyUp}
                >
                  <option value="" disabled selected hidden></option>
                  <option value="ui">UI/UX desginer</option>
                  <option value="graphic_desginer">Graphic desginer</option>
                  <option value="video_editor">Video Editing</option>
                  <option value="full_stack_developer">
                    Full Stack Developer
                  </option>
                  <option value="mern_stack_developer">
                    Mern Stack Developer
                  </option>
                  <option value="python_developer">Python Developer</option>
                  <option value="react_native_developer">React Native</option>
                  <option value="laravel">Laravel</option>
                  {/* <option value="php_mysql">PHP & MySQL</option> */}
                  {/* <option value="codelegniter">CodeIgniter</option> */}
                  <option value="wordpress">Wordpress</option>
                  <option value="webflow">Webflow</option>
                  <option value="shopify">Shopify</option>
                  <option value="digital_marketing">Digital marketing</option>
                  <option value="seo">SEO</option>
                  <option value="smm">Social Media Marketing</option>
                  <option value="ui_frontend">UI/FrontEnd Development</option>
                  <option value="react_js">React JS</option>
                  <option value="manual_testing">Manual Testing</option>
                </select>
                <label for="course">
                  Course you are interested in<span class="required">*</span>
                </label>
              </div>
              <div className="recaptacha-login ">
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

              <div className="d-flex justify-content-end">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  // className="apply-btn-courses mt-2"
                  className={`apply-btn-courses mt-2 ${
                    !captchaValue ? "disabled-btn" : ""
                  }`}
                  disabled={!captchaValue}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
