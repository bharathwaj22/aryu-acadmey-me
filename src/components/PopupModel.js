import React, { useState, useEffect } from "react";
import "../assests/css/popupImage.css";

import { CAPCHA_URL } from "../Config.js";
import ReCAPTCHA from "react-google-recaptcha";
import confetti from "canvas-confetti";


const PopupModal = ({ onClose }) => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };
//    useEffect(() => {
//       const container = document.querySelector(".confetti-container");
  
//       const createConfetti = () => {
//         const confetti = document.createElement("div");
//         confetti.classList.add("confetti");
  
//         const size = Math.floor(Math.random() * 8) + 6;
//         const left = Math.random() * window.innerWidth;
  
//         confetti.style.width = `${size}px`;
//         confetti.style.height = `${size * 0.6}px`;
//         confetti.style.backgroundColor = getRandomColor();
//         confetti.style.left = `${left}px`;
//         confetti.style.animationDuration = `${Math.random() * 3 + 4}s`;
//         confetti.style.opacity = Math.random();
//         confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  
//         container.appendChild(confetti);
  
//         setTimeout(() => {
//           confetti.remove();
//         }, 7000);
//       };
  
//       const getRandomColor = () => {
//         const colors = [
//           "#FF5733",
//           "#FFC300",
//           "#DAF7A6",
//           "#33FFCE",
//           "#FF33A8",
//           "#8E44AD",
//         ];
//         return colors[Math.floor(Math.random() * colors.length)];
//       };
  
//       const interval = setInterval(createConfetti, 150);
//       return () => clearInterval(interval);
//     }, []);
    useEffect(() => {
      // Bomb blast effect on page load
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
      });
    }, []);
  return (
    <div className="popup-overlay-home">
         <div className="confetti-container-open" aria-hidden="true"></div>

      <div className="popup-box-home">
        <div className="close-button-home" onClick={onClose}>
          &times;
        </div>
        <div className="d-flex justify-content-end">
          <div className="form-home-popup">
            <form>
              <div class="floating-label-group">
                <input type="text" id="fullName" required placeholder=" " />
                <label for="fullName">
                  Full Name<span class="required">*</span>
                </label>
              </div>
              <div class="floating-label-group">
                <input type="text" id="email" required placeholder=" " />
                <label for="email">
                  Email<span class="required">*</span>
                </label>
              </div>
              <div class="floating-label-group">
                <input type="text" id="mobile" required placeholder=" " />
                <label for="mobile">
                  Phone Number<span class="required">*</span>
                </label>
              </div>

              <div class="floating-label-group">
                <select id="course" required>
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
                  //   onClick={handleSubmit}
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
