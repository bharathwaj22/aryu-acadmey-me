import React from "react";
import "../assests/css/SyllabusPopup.css";
import Coursesgirl from "../assests/images/AcademyGoals.png";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";

// all pdf

import uiPdf from "../assests/pdfs/ARYU-Academy-SEO-Syllabus.pdf";

// import graphicDesignerPdf from "../assets/pdfs/graphic-designer.pdf";
// import videoEditingPdf from "../assets/pdfs/video-editing.pdf";
// import fullStackPdf from "../assets/pdfs/full-stack.pdf";
// import mernStackPdf from "../assets/pdfs/mern-stack.pdf";
// import pythonPdf from "../assets/pdfs/python.pdf";
// import reactNativePdf from "../assets/pdfs/react-native.pdf";
// import laravelPdf from "../assets/pdfs/laravel.pdf";
// import wordpressPdf from "../assets/pdfs/wordpress.pdf";
// import webflowPdf from "../assets/pdfs/webflow.pdf";
// import shopifyPdf from "../assets/pdfs/shopify.pdf";
// import digitalMarketingPdf from "../assets/pdfs/digital-marketing.pdf";
// import seoPdf from "../assets/pdfs/seo.pdf";
// import smmPdf from "../assets/pdfs/smm.pdf";


const SyllabusPopup = ({ onClose }) => {
    const pdfMappings = {
        Ui_Ux_Design: uiPdf,
        graphic_desginer: uiPdf,
        // video_editor: videoEditingPdf,
        // full_stack_developer: fullStackPdf,
        // mern_stack_developer: mernStackPdf,
        // python_developer: pythonPdf,
        // react_native_developer: reactNativePdf,
        // laravel: laravelPdf,
        // wordpress: wordpressPdf,
        // webflow: webflowPdf,
        // shopify: shopifyPdf,
        // digital_marketing: digitalMarketingPdf,
        // seo: seoPdf,
        // smm: smmPdf,
      };

    const [selectedProgram, setSelectedProgram] = useState("");

    const handleDownload = async () => {
      if (!selectedProgram) {
        alert("Please select a program!");
        return;
      }
  
      const pdfUrl = pdfMappings[selectedProgram];
      if (!pdfUrl) {
        alert("PDF not available for this program!");
        return;
      }
  
      // Fetch and download the full PDF
      const pdfBytes = await fetch(pdfUrl).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(pdfBytes);
      const newPdfBytes = await pdfDoc.save();
  
      // Download the PDF
      const blob = new Blob([newPdfBytes], { type: "application/pdf" });
      saveAs(blob, `${selectedProgram}.pdf`);
    };
  return (
    <div className="popup-overlay">
      <div className="popup-container">
      <button className="close-icon-down" onClick={onClose}>
  <AiOutlineClose size={24} />
</button>

        <h2>Download Syllabus</h2>
        <p>Kindly fill the form to download the pdf:</p>

        <div className="d-flex justify-content-center">
          <div>
            <div className="mt-2">
              <img
                src={Coursesgirl}
                alt="This image shows a woman holding documents. Get in touch to start your journey with Aryu Academy today!"
              />
            </div>
          </div>
          <div>
         
            <div className="courses-intership-form  px-4 pt-4">
              <div className="d-flex flex-column">
                <input
                  type="name"
                  id="phone"
                  // name="phone"
                  // value={formValues.phone}
                  // onChange={handleInputChange}
                  // placeholder="Enter your number"
                  // required
                  // className={`form-courses px-3 ${
                  //   formErrors.phone ? "border border-danger" : ""
                  // }`}
                  // onKeyUp={handleKeyUp}
                  className="form-courses px-3"
                  placeholder="Enter your name"
                />
              </div>
              <div className="d-flex flex-column ">
                <input
                  type="text"
                  id="email"
                  //     name="email"
                  //     value={formValues.email}
                  //     onChange={handleInputChange}
                  //     placeholder="Enter your Email"
                  //     required
                  //     className={`form-courses px-3 ${
                  //       formErrors.email ? "border border-danger" : ""
                  //   }`}
                  //   onKeyUp={handleKeyUp}
                  className="form-courses px-3"
                  placeholder="Enter your email"
                />
              </div>
              <div className="d-flex flex-column ">
                <input
                  type="number"
                  // name="qualification"
                  // value={formValues.qualification}
                  // onChange={handleInputChange}
                  // placeholder="Enter your Qualification"
                  // required
                  // className={`form-courses px-3 ${
                  //   formErrors.qualification ? "border border-danger" : ""
                  // }`}
                  // onKeyUp={handleKeyUp}
                  className="form-courses px-3"
                  placeholder="Enter your phone"
                />
              </div>
              <div className="d-flex flex-column ">
                <input
                  type="text"
                  // name="qualification"
                  // value={formValues.qualification}
                  // onChange={handleInputChange}
                  // placeholder="Enter your Qualification"
                  // required
                  // className={`form-courses px-3 ${
                  //   formErrors.qualification ? "border border-danger" : ""
                  // }`}
                  // onKeyUp={handleKeyUp}
                  className="form-courses px-3"
                  placeholder="Enter your city"
                />
              </div>

          

              <div className="form-group">
        <div className="custom-dropdown-download">
          <select
            id="selectprogram"
            className="custom-select-download px-3"
            onChange={(e) => setSelectedProgram(e.target.value)}
          >
            <option value="" disabled selected>
              Select Program
            </option>
            {Object.keys(pdfMappings).map((key) => (
              <option key={key} value={key}>
                {key.replace(/_/g, " ")}
              </option>
            ))}
          </select>
          <span className="dropdown-arrow">&#9660;</span>
        </div>
      </div>

              <button
                //   onClick={handleSubmit}
                type="submit"
                className="apply-btn-courses "
                onClick={handleDownload}
              >
                send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPopup;

// import { useState } from "react";

// const SyllabusPopup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4">Download Syllabus</h2>
//         <p>Click the link below to download the syllabus:</p>
//         <a
//           href="https://www.aryu.in/documents/Aryu-Curriculum-2023.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block mt-4 text-blue-500 underline"
//         >
//           Download Aryu Curriculum 2023
//         </a>
//         <button
//           className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };
