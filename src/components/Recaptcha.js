import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPCHA_URL } from "../Config.js";

function Recaptcha() {
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    console.log("Captcha value:", value);
  };
  return (
    <div className="recaptacha-login mt-2">
      <ReCAPTCHA
        // sitekey="6Ldx8NkqAAAAAJ0LUcESfSBnOmJo4qCu_HM3LyyR"
        sitekey={CAPCHA_URL}
        onChange={handleCaptchaChange}
      />
    </div>
  );
}

export default Recaptcha;
