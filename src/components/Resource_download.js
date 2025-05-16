import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import Coursesgirl from "../assests/images/AcademyGoals.png";
import Homeimg from "../assests/images/Software-Training-Institute-in-Chennai.jpg";
import { API_URL } from "../Config.js";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { CAPCHA_URL } from "../Config.js";
function Resource_download() {
  const [displayName, setDisplayName] = useState("");
  let location = useLocation();


  useEffect(() => {
    let name1 = location?.state?.name;

    let a = window.location.href.split("/");
    let name2 = a.slice(-1)[0].split("-").join(' ');

    // console.log(name2.split("-").join(' '));
    console.log(name2);
    

    setDisplayName(name1 ? name1 : name2);
  }, []);

  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    interested_in: "",
    selected_program: "",
    title: displayName,
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    full_name: false,
    email: false,
    phone: false,
    city: false,
    interested_in: false,
    selected_program: false,
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
      title: displayName,
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
  //   if (!formValues.interested_in.trim())
  //     errors.interested_in = "interested_in is required.";
  //   if (!formValues.selected_program.trim())
  //     errors.selected_program = "Internship program is required.";
  //   return errors;
  // };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent form submission

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
  //   if (!formValues.city.trim()) errors.city = " city is required.";
  //   if (!formValues.interested_in.trim())
  //     errors.interested_in = "Please select a option.";

  //   if(formValues.interested_in !="none"){
  //     if (!formValues.selected_program.trim())
  //       errors.selected_program = "Internship program is required.";
  //   }

  //   setFormErrors(errors); // Update errors in state

  //   if (Object.keys(errors).length > 0) {
  //     console.log("Form has errors:", errors);
  //     return; // Stop form submission if errors exist
  //   }

  //   console.log("Form submitted successfully:", formValues);
  //   // Validate the form
  //   // const errors = validateForm();
  //   // if (Object.keys(errors).length > 0) {
  //   //   setFormErrors(errors);
  //   //   return;
  //   // }
  //   const loader = document.getElementById("global-loader");
  //   if (loader) loader.style.display = "flex";
  //   try {
  //     const response = await axios.post(
  //       `${API_URL}/api/v1/free-resources-form `,
  //       formValues
  //     );
  //     console.log("Form submitted successfully:", response.data);

  //     // Optionally, reset form values here
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Your form has been submitted successfully.",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     });

  //     if (response.data.resource_file) {
  //       const fileUrl = `https://backoffice.aryuacademy.com/${response.data.resource_file}`;
  //       // src={`https://backoffice.aryuacademy.com/${item.resource_image}`}

  //       const link = document.createElement("a");
  //       link.href = fileUrl;
  //       link.download = response.data.resource_file; // Suggested filename
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //     }

  //     // if (response.data.resource_file) {
  //     //   try {
  //     //     const fileUrl = `${API_URL}/uploads/${response.data.resource_file}`; // Ensure correct URL
  //     //     console.log("Downloading file from:", fileUrl);

  //     //     const fileResponse = await fetch(fileUrl);

  //     //     if (!fileResponse.ok) {
  //     //       throw new Error("File not found on the server");
  //     //     }

  //     //     const blob = await fileResponse.blob();
  //     //     const blobUrl = window.URL.createObjectURL(blob);

  //     //     const link = document.createElement("a");
  //     //     link.href = blobUrl;
  //     //     link.download = response.data.resource_file; // Set filename
  //     //     document.body.appendChild(link);
  //     //     link.click();
  //     //     document.body.removeChild(link);

  //     //     // ✅ Revoke the Blob URL to free memory
  //     //     window.URL.revokeObjectURL(blobUrl);
  //     //   } catch (error) {
  //     //     console.error("Error downloading file:", error);
  //     //     Swal.fire({
  //     //       title: "Download Failed!",
  //     //       text: "The file is not available on the server.",
  //     //       icon: "error",
  //     //       confirmButtonText: "OK",
  //     //     });
  //     //   }
  //     // }

  //     setFormValues({
  //       full_name: "",
  //       email: "",
  //       phone: "",
  //       city: "",
  //       interested_in: "",
  //       selected_program: "",
  //       title: name1,
  //     });
  //   } catch (error) {
  //     console.error("Error submitting the form:", error);

  //     // Swal.fire({
  //     //   title: "Oops!",
  //     //   text: "There was an error submitting your form. Please try again.",
  //     //   icon: "error",
  //     //   confirmButtonText: "OK",
  //     // });

  //     setFormValues({
  //       full_name: "",
  //       email: "",
  //       phone: "",

  //       message: "",
  //     });
  //     // setFormErrors({});
  //   } finally {
  //     if (loader) loader.style.display = "none"; // Hide loader

  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    if (!formValues.city.trim()) errors.city = "City is required.";
    if (!formValues.interested_in.trim())
      errors.interested_in = "Please select an option.";

    if (
      formValues.interested_in !== "none" &&
      !formValues.selected_program.trim()
    ) {
      errors.selected_program = "Internship program is required.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const loader = document.getElementById("global-loader");
    if (loader) loader.style.display = "flex";

    const startTime = Date.now(); // Record start time

    try {
      const response = await axios.post(
        `${API_URL}/api/v1/free-resources-form`,
        formValues
      );

      // Ensure loader stays visible for at least 500ms
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(500 - elapsedTime, 0);

      setTimeout(() => {
        if (loader) loader.style.display = "none";
      }, remainingTime);

      console.log("Form submitted successfully:", response.data);

      Swal.fire({
        title: "Thank you!",
        text: "Your PDF is downloaded.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // if (response.data.resource_file) {
      //   const fileUrl = `https://backoffice.aryuacademy.com/${response.data.resource_file}`;
      //   window.open(fileUrl, "_blank");
      // }
      // if (response.data.resource_file) {
      //   const fileUrl = `https://backoffice.aryuacademy.com/${response.data.resource_file}`;

      //   const link = document.createElement("a");
      //   link.href = fileUrl;
      //   link.setAttribute("download", ""); // Forces download
      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link);
      // }
      // if (response.data.resource_file) {
      //   const fileUrl = `https://backoffice.aryuacademy.com/${response.data.resource_file}`;
      //   window.location.href = fileUrl;
      // }
      if (response.data.resource_file) {
        const fileUrl = `https://backoffice.aryuacademy.com/${response.data.resource_file}`;
        window.open(fileUrl, "_blank");
      }

      
      
      
      

      setFormValues({
        full_name: "",
        email: "",
        phone: "",
        city: "",
        interested_in: "",
        selected_program: "",
        title: displayName || "",
      });

      setFormErrors({});
    } catch (error) {
      console.error("Error submitting the form:", error);

      Swal.fire({
        title: "Oops!",
        text: "There was an error submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
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
  return (
    <>
      <section>
        <Header />
        <section>
          <div className="pt-5 video-bg-image">
            <div className=" text-center type-of-course ">
              Free
              <span className="type-of-course-create "> Resources</span>
            </div>
          

          <div className="pt-1 ">
            <div className=" text-center type-of-course-resource ">
              Kindly fill the form to download the
              <span className=" type-of-course-create-resource">
                {" "}
                {displayName}
              </span>
            </div>
          </div>
          </div>
          <section>
            <div className="d-flex justify-content-evenly mt-2">
              <div className="col-6  col-xl-4 col-xxl-6 d-none d-xl-block ">
                <div className=" ">
                  <img
                    src={Homeimg}
                    className="free-resource-image "
                    alt=" Woman holding a laptop with an 88% chart, symbolizing success at Aryu Academy, a software training institute in Chennai"
                  />
                </div>
              </div>
              <div className="col-12 col-xl-8 col-xxl-6  form-algin mt-5 pt-md-5">
                <div className="intership-form ">
                  <div className="styled-form  p-md-5" onSubmit={handleSubmit}>
                    <div className="form-flex mt-1 ">
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

                    <div className="form-flex  mt-2 ">
                      <div className="form-group">
                        <label className="label-inter">Interested in</label>
                        <div className="custom-radio-group d-flex align-items-center">
                          <label className="radio-label mx-2">
                            <input
                              type="radio"
                              name="interested_in"
                              value="course"
                              className="custom-radio"
                              onChange={handleInputChange}
                              checked={formValues.interested_in === "course"}
                            />
                            Course
                          </label>

                          <label className="radio-label mx-2">
                            <input
                              type="radio"
                              name="interested_in"
                              value="internship"
                              className="custom-radio"
                              onChange={handleInputChange}
                              checked={
                                formValues.interested_in === "internship"
                              }
                            />
                            Internship
                          </label>

                          <label className="radio-label mx-2">
                            <input
                              type="radio"
                              name="interested_in"
                              value="none"
                              className="custom-radio"
                              onChange={handleInputChange}
                              checked={formValues.interested_in === "none"}
                            />
                            None
                          </label>
                        </div>
                        {formErrors.interested_in && (
                          <p className="text-danger">
                            {formErrors.interested_in}
                          </p>
                        )}
                      </div>

                      {formValues.interested_in !== "none" && (
                        <div className="form-group">
                          <label
                            className="label-inter"
                            htmlFor="selectprogram"
                          >
                            Select Program
                          </label>
                          <div className="custom-dropdown">
                            <select
                              id="selectprogram"
                              name="selected_program"
                              onKeyUp={handleKeyUp}
                              value={formValues.selected_program}
                              onChange={handleInputChange}
                              className={`custom-select px-3 ${
                                formErrors.selected_program
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
                              <option value="video_editor">
                                Video Editing
                              </option>
                              {/* <option value="full_stack_developer">
                                Full Stack Developer
                              </option> */}
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
                                digital marketing
                              </option>
                              <option value="seo">SEO</option>
                              <option value="smm">
                                Social media marketing
                              </option>
                              {/* <option value="creo">Creo</option> */}
                            </select>
                            <span className="dropdown-arrow">&#9660;</span>
                          </div>
                        </div>
                      )}
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
                      onClick={handleSubmit}
                      className={`submit-btn-intership mt-2 mb-2${
                        !captchaValue ? "disabled-btn" : ""
                      }`}
                      disabled={!captchaValue}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="mt-5">
          <Footer></Footer>
        </section>
      </section>
    </>
  );
}

export default Resource_download;

// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer.js";
// import Homeimg from "../assests/images/Software-Training-Institute-in-Chennai.jpg";
// import { API_URL } from "../Config.js";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useLocation } from "react-router-dom";

// function ResourceDownload() {
//   const location = useLocation();
//   const [formValues, setFormValues] = useState({
//     full_name: "",
//     email: "",
//     phone: "",
//     city: "",
//     interested_in: "",
//     selected_program: "",
//   });

//   // State to manage form errors
//   const [formErrors, setFormErrors] = useState({});

//   // Extract resource name from URL
//   const urlParts = window.location.href.split("/");
//   const name1 = decodeURIComponent(urlParts.slice(-1)[0]);

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user starts typing
//     setFormErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let errors = {};

//     // Validation rules
//     if (!formValues.full_name.trim()) errors.full_name = "Full name is required.";
//     if (!formValues.email.trim()) {
//       errors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
//       errors.email = "Email is invalid.";
//     }
//     if (!formValues.phone.trim()) errors.phone = "Phone number is required.";
//     if (!formValues.city.trim()) errors.city = "City is required.";
//     if (!formValues.interested_in.trim()) errors.interested_in = "Please select an option.";
//     if (!formValues.selected_program.trim()) errors.selected_program = "Select a program.";

//     setFormErrors(errors);

//     if (Object.keys(errors).length > 0) return;

//     try {
//       const response = await axios.post(`${API_URL}/api/v1/free-resources-form`, formValues);
//       console.log("Form submitted successfully:", response.data);

//       Swal.fire({
//         title: "Success!",
//         text: "Your form has been submitted successfully.",
//         icon: "success",
//         confirmButtonText: "OK",
//       });

//       setFormValues({
//         full_name: "",
//         email: "",
//         phone: "",
//         city: "",
//         interested_in: "",
//         selected_program: "",
//       });
//     } catch (error) {
//       console.error("Error submitting the form:", error);
//       // Swal.fire({
//       //   title: "Oops!",
//       //   text: "There was an error submitting your form. Please try again.",
//       //   icon: "error",
//       //   confirmButtonText: "OK",
//       // });
//       setFormValues({
//         full_name: "",
//         email: "",
//         phone: "",
//         city: "",
//         interested_in: "",
//         selected_program: "",
//       });
//     }
//   };

//   return (
//     <>
//       <Header />
//       <section className="pt-5 text-center">
//         <div className="type-of-course">
//           Free <span className="type-of-course-create">Resources</span>
//         </div>
//         <div className="education-about">
//           Kindly fill the form to download
//           <span className="education-about-tail"> {name1 || "this resource"}</span>
//         </div>
//       </section>

//       <section className="d-flex justify-content-evenly mt-2">
//         <div className="d-none d-lg-block">
//           <img src={Homeimg} className="image-head" alt="Software Training" />
//         </div>

//         <div className="form-align mt-5">
//           <div className="intership-form">
//             <form className="styled-form p-md-5" onSubmit={handleSubmit}>
//               <div className="form-flex mt-4">
//                 <div className="form-group">
//                   <label className="label-inter" htmlFor="full_name">Full Name</label>
//                   <input
//                     type="text"
//                     id="full_name"
//                     name="full_name"
//                     placeholder="Enter your full name"
//                     value={formValues.full_name}
//                     onChange={handleInputChange}
//                     className={`form-input px-3 ${formErrors.full_name ? "border border-danger" : ""}`}
//                   />
//                   {formErrors.full_name && <p className="text-danger">{formErrors.full_name}</p>}
//                 </div>

//                 <div className="form-group">
//                   <label className="label-inter" htmlFor="email">Email</label>
//                   <input
//                     type="text"
//                     id="email"
//                     name="email"
//                     placeholder="Enter your email"
//                     value={formValues.email}
//                     onChange={handleInputChange}
//                     className={`form-input px-3 ${formErrors.email ? "border border-danger" : ""}`}
//                   />
//                   {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
//                 </div>
//               </div>

//               <div className="form-flex mt-4">
//                 <div className="form-group">
//                   <label className="label-inter" htmlFor="phone">Phone</label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     placeholder="Enter your phone"
//                     value={formValues.phone}
//                     onChange={handleInputChange}
//                     className={`form-input px-3 ${formErrors.phone ? "border border-danger" : ""}`}
//                   />
//                   {formErrors.phone && <p className="text-danger">{formErrors.phone}</p>}
//                 </div>

//                 <div className="form-group">
//                   <label className="label-inter" htmlFor="city">City</label>
//                   <input
//                     type="text"
//                     id="city"
//                     name="city"
//                     placeholder="Enter your city"
//                     value={formValues.city}
//                     onChange={handleInputChange}
//                     className={`form-input px-3 ${formErrors.city ? "border border-danger" : ""}`}
//                   />
//                   {formErrors.city && <p className="text-danger">{formErrors.city}</p>}
//                 </div>
//               </div>

//               <div className="form-group mt-4">
//                 <label className="label-inter">Interested in</label>
//                 <div className="custom-radio-group d-flex align-items-center">
//                   {["course", "internship", "none"].map((option) => (
//                     <label key={option} className="radio-label mx-2">
//                       <input
//                         type="radio"
//                         name="interested_in"
//                         value={option}
//                         className="custom-radio"
//                         onChange={handleInputChange}
//                         checked={formValues.interested_in === option}
//                       />
//                       {option.charAt(0).toUpperCase() + option.slice(1)}
//                     </label>
//                   ))}
//                 </div>
//                 {formErrors.interested_in && <p className="text-danger">{formErrors.interested_in}</p>}
//               </div>

//               <div className="form-group mt-4">
//                 <label className="label-inter" htmlFor="selected_program">Select Program</label>
//                 <select
//                   id="selected_program"
//                   name="selected_program"
//                   value={formValues.selected_program}
//                   onChange={handleInputChange}
//                   className={`custom-select px-3 ${formErrors.selected_program ? "border border-danger" : ""}`}
//                 >
//                   <option value="" disabled>Select Program</option>
//                   <option value="ui">UI/UX Designer</option>
//                   <option value="graphic_design">Graphic Designer</option>
//                   <option value="web_dev">Web Development</option>
//                 </select>
//                 {formErrors.selected_program && <p className="text-danger">{formErrors.selected_program}</p>}
//               </div>

//               <button type="submit" className="submit-btn-intership mt-3">Send</button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default ResourceDownload;
