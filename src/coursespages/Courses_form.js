import React, { useState } from "react";
import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
// import Recaptcha from "../"

import { CAPCHA_URL } from "../Config.js";
import ReCAPTCHA from "react-google-recaptcha";







function Courses_form({ type }) {
  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    course: type || "",
    qualification: "",
    // course:"Digital marketing",
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    full_name: false,
    email: false,
    phone: false,
    qualification: false,
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
    if (!formValues.qualification.trim()) {
        errors.qualification = "Qualification is required.";
    }

    // Update the state with errors
    setFormErrors({
        full_name: !!errors.full_name,
        email: !!errors.email,
        phone: !!errors.phone,
        qualification: !!errors.qualification,
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
        `${API_URL}/api/v1/course-enquiry
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
      });

      setFormValues({
        full_name: "",
        email: "",
        phone: "",
        qualification: "",
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
  return (
    <>
      <div>
        <div className="courses-intership-box">
          <div className="courses-intership-form  px-4 pt-1">
            <div className=" say-courses ">
              Start Your
              <span className="hello-courses"> Corporate Career</span>
            </div>
            <hr></hr>

            <div className="d-flex flex-column">
              <input
                type="text"
                id="firstName"
                name="full_name"
                value={formValues.full_name}
                onChange={handleInputChange}
                placeholder="Enter your Full name"
                className={`form-courses px-3 ${
                  formErrors.full_name ? "border border-danger" : ""
                }`}
                onKeyUp={handleKeyUp}
              />
            </div>
            <div className="d-flex flex-column mt-4">
              <input
                type="number"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                placeholder="Enter your number"
                required
                className={`form-courses px-3 ${
                  formErrors.phone ? "border border-danger" : ""
                }`}
                onKeyUp={handleKeyUp}
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
                  formErrors.email ? "border border-danger" : ""
              }`}
              onKeyUp={handleKeyUp}
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
                  formErrors.qualification ? "border border-danger" : ""
                }`}
                onKeyUp={handleKeyUp}
              />
            </div>
            {/* <div className="d-flex flex-column mt-4">
                      <input
                        type="file"
                        id="email"
                        name="firstName"
                        placeholder="Enter your Qualification"
                        required
                        className="form-courses align-content-center "
                      />
                    </div> */}
          
          <div className="recaptacha-login mt-1">
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
              // className="apply-btn-courses mt-2"
              className={`apply-btn-courses mt-2 ${
                !captchaValue ? "disabled-btn" : ""
              }`}
              disabled={!captchaValue}
            >
              Enquire Now 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses_form;
