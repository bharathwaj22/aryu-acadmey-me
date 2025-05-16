// import React from "react";
// import "../assests/css/home.css";
// import Header from "../components/Header.js";
// import "@devnomic/marquee/dist/index.css";
// // import { useEffect,useState } from "react";
// // import Marquee from 'react-marquee-line'
// // import Marquee from "react-fast-marquee";

// function Home() {

//   return (
//     <>
//       <section className="">
//         <Header></Header>
//         <section>
//         <div className="d-flex flex-wrap pt-5 mt-5">
//           <div className="col-12 col-md-8">
//             <div className=" d-flex align-items-center justify-content-center">
//               <div>
//                 <div className="home-title ">
//                   Helping you become outstanding by Making Tech <span className="danger">Unforgettable</span>
//                 </div>
//                 <div className="mt-5">
//                   Create, deliver and sell transformative online courses
//                   effortlessly{" "}
//                 </div>

//               <div className="d-flex gap-4 mt-4">
//               <div className="for-education">For education providers</div>
//               <div className="for-learn">For learners</div>
//               </div>
//             </div>
//             </div>

//           </div>
//           <div className="col-12 col-md-4 "></div>
//         </div>
//         </section>
//         <section>
//       <div className="bg-black p-4 text-white">one</div>

//       {/* <Marquee className="gap-[3rem] [--duration:5s]" speed={30} gradient={false} pauseOnHover={true}>
//         <div>Content 1</div>
//         <div>Content 2</div>
//         <div>Content 3</div>
//       </Marquee> */}
//     </section>
//       </section>
//     </>
//   );
// }

// export default Home;

import React from "react";
import "../assests/css/float.css";
import "../assests/css/home.css";
import Header from "../components/Header.js";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { Carousel } from "react-responsive-carousel";
import { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import { Marquee } from "@devnomic/marquee";

import Iamge1 from "../assests/images/vscode-postman-androidstudio.webp";
import Image5 from "../assests/images/Semrush-tool.webp";
import Image6 from "../assests/images/Hostinger-webmail-tool.webp";
import Image7 from "../assests/images/Meta-Ads-tool.webp";
import Image8 from "../assests/images/Google-Ads-tool.webp";
import Image9 from "../assests/images/Google-Search-Console-tool.webp";
import Image10 from "../assests/images/Figma-tool.webp";
import Image11 from "../assests/images/Ubersuggest-tool.webp";
import Image12 from "../assests/images/Creo-CAD-Software-tool.webp";
import Image13 from "../assests/images/AutoCAD-tool.webp";
// import Image14 from "../assests/images/image 14.webp";
// import Image15 from "../assests/images/image 15.webp";
// import Image16 from "../assests/images/image 16.webp";
import Image17 from "../assests/images/Google-Analytics-tool.webp";
import Image18 from "../assests/images/Razorpay-tool.webp";
import Featuresimg from "../assests/images/Mr.Y-coding-expert.svg";
import Homeimg from "../assests/images/Software-Training-Institute-in-Chennai.jpg";
import Aryusir from "../assests/images/aryusir.jpg";

// gif
import Webgif from "../assests/gif/web.gif";
import DevelopmentGif from "../assests/gif/development.gif";
import Phpgif from "../assests/gif/php.gif";
import Cmdgif from "../assests/gif/cmd.gif";
import Marketgif from "../assests/gif/marketing.gif";
import degin3dgif from "../assests/gif/reactnative.gif";
import { TypeAnimation } from "react-type-animation";

// icons
import { RxDotFilled } from "react-icons/rx";
import { IoTimer } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { FaBook } from "react-icons/fa";
// import { MdLiveTv } from "react-icons/md";
import { ImUserTie } from "react-icons/im";

import { RiTimeZoneFill } from "react-icons/ri";
import { FaHandshakeAngle } from "react-icons/fa6";

// company iamges

import Image25 from "../assests/images/Accenture-logo.webp";

import Image26 from "../assests/images/IBM-logo.webp";

import Image27 from "../assests/images/TCS-Tata-Consultancy-Services-logo.webp";

import Image28 from "../assests/images/Honeywell-logo.webp";

import Image29 from "../assests/images/Hexaware-Technologies-logo.webp";

import Image30 from "../assests/images/HCLTech-logo.webp";

import Image31 from "../assests/images/Deloitte-logo.webp";

import Image32 from "../assests/images/capgemini-logo.webp";

import Image34 from "../assests/images/Microsoft-logo.webp";

import Image33 from "../assests/images/Birlasoft-logo.webp";

import Image35 from "../assests/images/Infosys-logo.webp";

import Image36 from "../assests/images/image36.webp";

import Image37 from "../assests/images/Annalect-Logo.webp";

import Image38 from "../assests/images/iOPEX-Technologies-logo.webp";

import Image39 from "../assests/images/Coforge-logo.webp";

import Image40 from "../assests/images/Mphasis-logo.webp";

import Image41 from "../assests/images/Wipro-logo.webp";

import Image42 from "../assests/images/KPMG-logo.webp";
import Hitachi from "../assests/images/hitachi.webp";
import Changeson from "../assests/images/Hitachi-Energy-logo.webp";
// offer image
import Roundwhite from "../assests/images/roundwhite.webp";
import Roundgirl from "../assests/images/Aryu-Academy's-offers.svg";
// support

import Support1 from "../assests/images/support1.jpeg";

import Support2 from "../assests/images/support2.jpeg";
import Support3 from "../assests/images/support3.jpg";
import Support4 from "../assests/images/support4 .jpg";
import Support8 from "../assests/images/support8.jpg";
import Support9 from "../assests/images/support9.jpg";
import Support7 from "../assests/images/support7.jpg";
import Support10 from "../assests/images/support10.jpg";
import Support12 from "../assests/images/support12.jpg";

// review

import Reviewpic from "../assests/images/reviewpic.webp";
import Soical_videos from "./Soical_videos.js";
import Intership_register from "./Intership_register.js";
import Footer from "./Footer.js";
import Float from "./Float.js";
import { Link } from "react-router-dom";

// demandcourses
import Uximage from "../assests/images/demandcourses/uiux.svg";
import Fullstackimage from "../assests/images/demandcourses/fullstack.svg";
import Wordpressimage from "../assests/images/demandcourses/wordpress.svg";
import Digitalimage from "../assests/images/demandcourses/digital.svg";
import Graphic_desgin_img from "../assests/images/demandcourses/graphicdesgin .svg";
import Video_editor_img from "../assests/images/demandcourses/videoeditor.svg";
import Mern_stack_img from "../assests/images/demandcourses/mernstack.svg";
import Python_desgin_img from "../assests/images/demandcourses/pythondesgin.svg";
import React_native_img from "../assests/images/demandcourses/reactnative.svg";
import php_desgin_img from "../assests/images/demandcourses/phpdesgin.svg";
import Laravel_desgin_img from "../assests/images/demandcourses/laravaldesgin.svg";
import code_lgniter_img from "../assests/images/demandcourses/codeingit.svg";
import Web_flow_img from "../assests/images/demandcourses/webflowdesgin.svg";
import Shopify_img from "../assests/images/demandcourses/shopifydesgin.svg";
import Seo_img from "../assests/images/demandcourses/seodesgin.svg";
import Smm_img from "../assests/images/demandcourses/smmdesgin.svg";
import Creo_img from "../assests/images/demandcourses/creodesgin.svg";
import { useNavigate } from "react-router-dom";
// import { lazy } from "react";
// import { Suspense } from "react";

// const Header = lazy(() =>import ("./Header"));
// const Footer = lazy(() => import("./Footer"));
// const Soical_videos = lazy(() => import("./Soical_videos"));
// const Intership_register = lazy(() => import("./Intership_register"));


function Home() {
  useEffect(() => {
    // Set page title
    document.title =
      "Best software training institute in Chennai | Job Placement";

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
      "Start your IT career with Chennai's best software training institute offering 100% placement, job guarantee courses, expert trainers, and practical training"
    );
    setMetaTag(
      "keywords",
      "Best software training institute in Chennai, Job Placement, Best IT Training Institute in Chennai"
    );

    // Set Open Graph meta tags
    setMetaTag(
      "og:title",
      "Best software training institute in Chennai | Job Placement",
      true
    );
    setMetaTag(
      "og:description",
      "Start your IT career with Chennai's best software training institute offering 100% placement, job guarantee courses, expert trainers, and practical training",
      true
    );
    setMetaTag("og:image", Homeimg, true);
    setMetaTag("og:url", window.location.href, true);

    setMetaTag("twitter:card", "summary_large_image", true);
    setMetaTag(
      "twitter:title",
      "Best Software Training Institute in Chennai | Job Placement",
      true
    );
    setMetaTag(
      "twitter:description",
      "Start your IT career with Chennai's best software training institute offering 100% placement, job guarantee courses, expert trainers, and practical training",
      true
    );
    setMetaTag("twitter:image", Homeimg, true);
  }, []);

  const contentArray = [
    { image: Iamge1, alttag: "vs code" },
    {
      image: Image5,
      alttag:
        "This image shows the Semrush tool used in Aryu Academy to train students in SEO, keyword research, and analytics.",
    },
    {
      image: Image6,
      alttag:
        "This image shows the Hostinger webmail tool used in Aryu Academy to train students in email management & configuration.",
    },
    {
      image: Image7,
      alttag:
        "This image shows the Meta Ads tool used in Aryu Academy to train students in creating and managing Meta ads campaigns.",
    },
    {
      image: Image8,
      alttag:
        " This image shows the Google Ads tool used in Aryu Academy to teach students about creating and managing ad campaigns.",
    },
    {
      image: Image9,
      alttag:
        "This image shows the Google Search Console tool used in Aryu Academy to teach students site performance and SEO.",
    },
    {
      image: Image10,
      alttag:
        "This image shows the Figma tool used in Aryu Academy to train students in designing user interfaces and prototypes.",
    },
    {
      image: Image11,
      alttag:
        "This image shows the Ubersuggest tool used in Aryu Academy to train students in SEO, keyword research, and more.",
    },
    // {
    //   image: Image12,
    //   alttag:
    //     "This image shows the Creo CAD Software used in Aryu Academy to teach students design and modeling techniques.",
    // },
    {
      image: Image13,
      alttag:
        "This image shows the AutoCAD tool used in Aryu Academy to train students in design, drafting, and modeling techniques.",
    },

    {
      image: Image17,
      alttag:
        "This image shows the Google Analytics tool used in Aryu Academy to train students in data analysis and website tracking",
    },
    {
      image: Image18,
      alttag:
        " This image shows the Razorpay tool used in Aryu Academy to train students in online payment processing and integration.",
    },
  ];
  const companyArray = [
    {
      image: Image25,
      name: "The Accenture logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image26,
      name: "The IBM logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image27,
      name: "The TCS Tata Consultancy Services logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image28,
      name: " The Honeywell logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image29,
      name: "The Hexaware Technologies logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image30,
      name: "The HCLTech logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image31,
      name: "The Deloitte logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image32,
      name: "The capgemini logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image34,
      name: "The Microsoft logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Hitachi,
      name: "The Changepond logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Changeson,
      name: "The Hitachi Energy logo stands as proof—Aryu Academy trainees achieve career success!",
    },

    // {image: Image44},
  ];

  const companyArray1 = [
    {
      image: Image33,
      name: "The Birlasoft logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image35,
      name: " The Infosys logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    { image: Image36, name: "" },
    { image: Image37, name: "" },
    {
      image: Hitachi,
      name: "The Changepond logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Changeson,
      name: "The Hitachi Energy logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image38,
      name: "The iOPEX Technologies logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image39,
      name: "The Coforge logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image40,
      name: "The capgemini logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image41,
      name: "The Wipro logo stands as proof—Aryu Academy trainees achieve career success!",
    },
    {
      image: Image42,
      name: "The KPMG logo stands as proof—Aryu Academy trainees achieve career success!",
    },
  ];

  // const responsive = {
  //   mobile: {
  //     breakpoint: { max: 375, min: 0 },
  //     items: 1,  // Show 1 item on mobile
  //     slidesToShow: 1,
  //     centerMode: true,  // Optional, to highlight the current slide
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,  // Show 2 items on tablets
  //     slidesToShow: 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,  // Show 3 items on desktop
  //     slidesToShow: 3,
  //   }
  // }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Support1, Support2, Support3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1365 },
      items: 4,
    },
    smalldesktop: {
      breakpoint: { max: 1365, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 481 },
      items: 2,
    }, 
    //  tablet: {
    //   breakpoint: { max: 481, min: 768 },
    //   items: 2,
    // },
    mintablet: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
    },
    largemobile: {
      breakpoint: { max: 600, min:481 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 481, min: 0 },
      items: 1,
    },
  };

  const reviews = [
    {
      id: 1,
      text: "It was a great place to learn Full Stack Course! The class timings are flexible to fix my schedule. The course covers all the basics I needed. Overall, it’s a good place to learn with friendly staff and convenient timings! Thanks to ARYU Academy!!!",
      name: "Kanimozhi",
      image: Reviewpic,
    },
    {
      id: 2,
      text: "I have no idea about coding, but the full stack course at Aryu Academy makes me believe and transform as an assured web developer. The trainers are so experienced and kind to the students, so this has been a combination of hands-on projects for real-world experience",
      name: "Rahul",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 3,
      text: "	I did my bachlers of B.A literature in Tirunelveli. I don't have any knowledge about full stack. After I joined Aryu academy I have learnt so many things related to full stack. It will be very useful for my future.",
      name: "Adbul",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 4,
      text: "I completed the python level 2 course in aryu academy and i loved their way of teaching and their trainers are very knowledgeable and approachable. 100% recommend aryu academy !",
      name: "LogeshKumar",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 5,
      text: "	I have recently completed the UI/UX Design Course at aryu academy, I must say it was an enriching experience. The comprehensive curriculum, hands-on training and supportive instructors exceeded my expectations. Aryu academy  has provided me the skills and confidence to pursue a successful career in UI/UX Design field. I highly recommend this institute to anyone looking forward to enhance their creative skills.",
      name: "Mike Wilson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 6,
      text: "I have completed UI React. Everyone was very friendly and taught very well. His teaching method was very good and clear. He gave a lots time to do practice. I recommend this institute for those who want to enhance their skills.",
      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
  ];
  const reviews1 = [
    {
      id: 1,
      text: "I have completed Angular course in ARYU academy . Our tutor saran raj very friendly and his way of teaching is easily understandable.Good institute for Learning.]",
      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 2,
      text: "This was my first time taking a course in this format.The instructor spoke very clear and was very knowledgeable and patient.I never took a remote training before but I will highly recommend this type of training.Thank you.",
      name: "Jane Smith",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 3,
      text: "I had completed my UI development React course recently in aryu  academy and the teaching is very good and they treated well all and they always make sure what you need is completed on time and helps to resolve your issues.",
      name: "Alice Johnson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 4,
      text: "I took the C/C++ course at aryu Academy and it was great. Everything was explained in simple words, making it easy to understand. The teachers were really helpful. I'd recommend it to anyone wanting to learn C/C++.",
      name: "Bob Brown",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 5,
      text: "I took UX UI and photoshop course for 2months, the course was well organized, clear and easy to follow and the instructors was very knowledgeable with excellent presentation skills.",
      name: "Mike Wilson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 6,
      text: "This was my first time taking a course in this format.The instructor spoke very clear and was very knowledgeable and patient.I never took a remote training before but I will highly recommend this type of training.Thank you",

      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
  ];
  const reviews2 = [
    {
      id: 1,
      text: "This is a great product! Highly recommend it to everyone.",
      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 2,
      text: "Amazing quality and fast delivery. Will buy again!",
      name: "Jane Smith",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 3,
      text: "I love this product. Worth every penny!",
      name: "Alice Johnson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 4,
      text: "The service was excellent, the product was decent.",
      name: "Bob Brown",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 5,
      text: "I am very satisfied with the product. I would recommend it to others.",
      name: "Mike Wilson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 6,
      text: "This is a great product! Highly recommend it to everyone.",
      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
  ];
  const reviews3 = [
    {
      id: 1,
      text: "This is a great product! Highly recommend it to everyone.",
      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 2,
      text: "Amazing quality and fast delivery. Will buy again!",
      name: "Jane Smith",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 3,
      text: "I love this product. Worth every penny!",
      name: "Alice Johnson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 4,
      text: "The service was excellent, the product was decent.",
      name: "Bob Brown",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 5,
      text: "I am very satisfied with the product. I would recommend it to others.",
      name: "Mike Wilson",
      image: Reviewpic, // Replace with your image source
    },
    {
      id: 6,
      text: "This is a great product! Highly recommend it to everyone.",
      name: "John Doe",
      image: Reviewpic, // Replace with your image source
    },
  ];
  const navigate = useNavigate();

  const routes = {
    ui: "/ui-ux-desginer-course-in-chennai",
    graphic: "/graphic-desgin-course-in-chennai",
    video: "/video-editing-course-in-chennai",
    // full stack
    mern: "/mern-stack-development-course-in-chennai",
    fullstack: "/full-stack-development-course-in-chennai",
    python: "/python-course-in-chennai",
    reactnative: "/react-native-course-in-chennai",
    // php
    php: "/php-mysql-course-in-chennai",
    laraval: "/laravel-course-in-chennai",
    codeigniter: "/codeigniter-course-in-chennai",

    // wordpress
    wordpress: "/wordpress-course-in-chennai",
    wordflow: "/webflow-course-in-chennai",
    shopify: "/shopify-course-in-chennai",

    // marketing,
    marketing: "/digital-marketing-course-in-chennai",
    seo: "/seo-course-in-chennai",
    smm: "/social-media-marketing-course-in-chennai",

    // creo
    creo: "/creo-course-in-chennai",
    contact: "/contact-us",
  };

  const handleNavigation = (key) => {
    if (routes[key]) {
      navigate(routes[key]);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  const targetSectionRef = useRef(null);

  // Function to scroll to the target section
  const scrollToSection = () => {
    targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [loadingall, setLoading] = useState(false);

  return (
    // <Suspense
    //       fallback={
    //         loadingall && (
    //           <div className="loading-overlay">
    //             <div className="spinner"></div>
    //           </div>
    //         )
    //       }
    //     >
      <section className="">
        <Header />
        <section className="p">
          <div className="d-flex flex-wrap pt-5 mt-5">
            <div className="col-12  col-md-7 ">
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  <div >
                    <h1 className="home-title mt-0 mt-md-5">
                      {/* <span className="home-title">Tech </span> */}
                      <span>Best software training </span><br></br>
                      <span>institute in Chennai</span><br></br>
                      <span className="">For Your </span>

                      <TypeAnimation
                        sequence={[
                          "Career ",
                          "Growth",
                          "Success",

                          100,
                          "",
                          500,
                        ]}
                        className="forgetable-desgin"
                        speed={-50}
                        repeat={Infinity}
                        cursor={true}
                      />

                      {/* <Float></Float> */}
                    </h1>
                    {/* <Float></Float> */}

                    {/* <div>
                      <span className="home-title">Tech </span>
                      <TypeAnimation
                        sequence={["Unforgettable", 100, "", 500]}
                        className="forgetable-desgin"
                        speed={50}
                        repeat={Infinity}
                        cursor={true}
                      />
                    </div> */}
                    {/* <span className="danger mx-3">Unforgettable</span> */}
                  </div>
                  <div className="mt-4  online-course">
                    We’re not a course-selling institute; we’re a software
                    company sharing live experiences to help people improve
                    their skills.
                  </div>
                  <div className="d-flex gap-4 mt-4 for-ed-learn">
                    <div className="for-education" onClick={scrollToSection}>
                      For Internship
                    </div>
                    <div
                      className="for-learn"
                      onClick={() => handleNavigation("contact")}
                    >
                      For Enquiry
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 d-none d-md-block">
              <div>
                <div className="image-head">
                  <img
                    src={Homeimg}
                    loading="lazy"
                    alt=" Woman holding a laptop with an 88% chart, symbolizing success at Aryu Academy, a software training institute in Chennai"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-5">
            <Marquee
              className="flex justify-between gap-4 [--duration:5s]"
              speed={30}
              gradient={false}
              pauseOnHover={false}
            >
              {contentArray.map((content, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <img
                    src={content.image}
                    alt={content.alttag}
                    className="w-16 h-16 mx-3"
                    loading="lazy"
                  />
                  <span>{content.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        <section className="coruse">
          <div className="pt-5">
            <h2 className="mt-5 text-center type-of-course mb-0">
              Learn, Experience, and Succeed
            </h2>
            <h3 className="text-center type-of-course-create mt-0">
              Choose Your Platform!
            </h3>
          </div>

          <div className="mt-5 col d-flex flex-wrap flex-lg-row flex-column flip-gap">
            <div className="col ">
              <div className="gif-wb-desg">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-web align-content-center">
                      <div className="col-11 d-flex justify-content-end pt-4 web-desgin-font">
                        DESIGNER COURSE
                      </div>
                      <div className="web-gif">
                        <img
                          src={Webgif}
                          alt="Front Image"
                          style={{ width: "252px", height: "252px" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="head-course-flip">DESIGNER COURSE</div>
                      <div
                        className="submenu-item-flip mt-3"
                        onClick={() => handleNavigation("ui")}
                      >
                        UI/UX Design
                      </div>
                      <div
                        className="submenu-item-flip "
                        onClick={() => handleNavigation("graphic")}
                      >
                        {" "}
                        Graphic Design
                      </div>
                      <div
                        className="submenu-item-flip"
                        onClick={() => handleNavigation("video")}
                      >
                        Video Editor
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="gif-wb-dev">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-web align-content-center">
                      <div className="col-11 d-flex justify-content-end pt-4 web-desgin-font px-1 px-md-0">
                        FULL STACK DEVELOPMENT
                      </div>
                      <div className="dev-gif mx-4">
                        <img
                          src={DevelopmentGif}
                          alt="Front Image"
                          loading="lazy"
                          // style={{ width: "252px", height: "252px" }}
                          // className="development-filp-box"
                        />
                      </div>
                    </div>
                    <div className="flip-card-dev">
                      <div>
                        <div
                          className="head-course-flip "
                          onClick={() => handleNavigation("ui")}
                        >
                          FULL STACK DEVELOPMENT
                        </div>
                        <div
                          className="submenu-item-flip mt-3"
                          onClick={() => handleNavigation("fullstack")}
                        >
                          Full Stack Development
                        </div>
                        <div
                          onClick={() => handleNavigation("mern")}
                          className="submenu-item-flip "
                        >
                          MERN Stack Development
                        </div>
                        <div
                          onClick={() => handleNavigation("python")}
                          className="submenu-item-flip"
                        >
                          Python Fullstack
                        </div>
                        {/* <div
                          onClick={() => handleNavigation("reactnative")}
                          className="submenu-item-flip"
                        >
                          React Native
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="gif-wb-php">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-web align-content-center">
                      <div className="col-11 d-flex justify-content-end pt-4 web-desgin-font">
                        PHP FRAMEWORKS
                      </div>
                      <div className="php-gif mx-5">
                        <img
                          src={Phpgif}
                          alt="Front Image"
                          style={{ width: "201px" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flip-card-php">
                      <div>
                        <div className="head-course-flip">PHP FRAMEWORKS</div>
                        {/* <div
                          onClick={() => handleNavigation("php")}
                          className="submenu-item-flip mt-3"
                        >
                          PHP Development
                        </div> */}
                        <div
                          className="submenu-item-flip mt-3"
                          onClick={() => handleNavigation("laraval")}
                        >
                          Laravel
                        </div>
                        {/* <div
                          className="submenu-item-flip"
                          onClick={() => handleNavigation("codeigniter")}
                        >
                          CodeIgniter
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="  col d-flex flex-wrap flex-lg-row flex-column flip-gap ">
            <div className="col">
              <div className="gif-wb-cms">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-web align-content-center">
                      <div className="col-11 d-flex justify-content-end pt-4 web-desgin-font">
                        CMS
                      </div>
                      <div className="php-gif mx-5">
                        <img
                          src={Cmdgif}
                          alt="Front Image"
                          style={{ width: "201px" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flip-card-cms">
                      <div>
                        <div className="head-course-flip">CMS</div>
                        <div
                          onClick={() => handleNavigation("wordpress")}
                          className="submenu-item-flip mt-3"
                        >
                          WordPress
                        </div>
                        <div
                          onClick={() => handleNavigation("wordflow")}
                          className="submenu-item-flip"
                        >
                          Webflow
                        </div>
                        <div
                          onClick={() => handleNavigation("shopify")}
                          className="submenu-item-flip"
                        >
                          Shopify
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="gif-wb-market">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-web align-content-center">
                      <div className="col-11 d-flex justify-content-end pt-4 web-desgin-font">
                        MARKETING
                      </div>
                      <div className="php-gif mx-5">
                        <img
                          src={Marketgif}
                          alt="Front Image"
                          style={{ width: "201px" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flip-card-mark">
                      <div>
                        <div className="head-course-flip">
                          MARKETING
                        </div>
                        <div
                          onClick={() => handleNavigation("marketing")}
                          className="submenu-item-flip mt-3"
                        >
                          Digital Marketing
                        </div>
                        <div
                          onClick={() => handleNavigation("seo")}
                          className="submenu-item-flip"
                        >
                          SEO
                        </div>
                        <div
                          onClick={() => handleNavigation("smm")}
                          className="submenu-item-flip"
                        >
                          SMM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="gif-wb-3d">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-web align-content-center">
                      <div className="col-11 d-flex justify-content-end pt-4 web-desgin-font">
                        MOBILE APP DEVELOPMENT
                      </div>
                      <div className="php-gif mx-5">
                        <img
                          src={degin3dgif}
                          alt="Front Image"
                          style={{ width: "201px" }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="flip-card-3d">
                      <div>
                        <div className="head-course-flip">
                          MOBILE APP DEVELOPMENT
                        </div>
                        <div
                          onClick={() => handleNavigation("reactnative")}
                          className="submenu-item-flip mt-3"
                        >
                          React Native
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="">
            <h2 className="mt-5 text-center type-of-course ">
              Key <span className="type-of-course-create">Features</span>
            </h2>

            {/* <div className="benefits-line-home d-flex justify-content-center"></div> */}

            {/* <div className=" text-center features-content ">
              You are just a course away from your dream career
            </div> */}
          </div>
          <div className=" d-flex flex-wrap-reverse align-items-center  text-left">
            {/* <div className="  col-12 col-md-7 features-align ">
              <div className=" features-contain mb-0 mt-0">
                <span className="dot-red ">
                  <RxDotFilled />
                </span>
                <span className="key-features">Expert Guidance : </span>
                <span className="key-words">
                  Learn from renowned industry leaders. hdhfyu hdnv kjfd jnffod knfd oijfkjnd kjnfdnf  jhsdidf ijhsod ijfd fjf jhdn fiuhjf fuiohj
                </span>
              </div>
              <div className="features-contain mb-0 mt-0 ">
                <span className="dot-red">
                  <RxDotFilled />
                </span>
                <span className="key-features">Practical Training : </span>
                <span className="key-words">
                  Immerse yourself in 100% hands-on learning experiences.
                </span>
              </div>
              <div className=" features-contain mb-0 mt-0">
                <span className="dot-red ">
                  <RxDotFilled />
                </span>
                <span className="key-features">Expert Guidance : </span>
                <span className="key-words">
                  Learn from renowned industry leaders.
                </span>
              </div>
              <div className="features-contain  ">
                <span className="dot-red">
                  <RxDotFilled />
                </span>

                <span className="key-features">Instructor-Led Sessions: </span>
                <span className="key-words">
                  Benefit from direct instruction and interactive teaching .
                </span>
              </div>
              <div className="features-contain  ">
                <span className="dot-red">
                  <RxDotFilled />
                </span>

                <span className="key-features">Daily Assignments: </span>
                <span className="key-words">
                  Engage with daily tasks designed to solidify your
                  understanding .
                </span>
              </div>
              <div className="features-contain  ">
                <span className="dot-red">
                  <RxDotFilled />
                </span>

                <span className="key-features">Daily Assignments: </span>
                <span className="key-words">
                  Engage with daily tasks designed to solidify your
                  understanding .
                </span>
              </div>
              <div className="features-contain  ">
                <span className="dot-red">
                  <RxDotFilled />
                </span>

                <span className="key-features">Internship Opportunities: </span>
                <span className="key-words">
                  Gain real-world experience with valuable internship
                  placements.
                </span>
              </div>
              <div className="features-contain  ">
                <span className="dot-red">
                  <RxDotFilled />
                </span>

                <span className="key-features">
                  Certification Opportunities:{" "}
                </span>
                <span className="key-words">
                  Achieve professional certifications to showcase your
                  expertise.
                </span>
              </div>
            </div> */}
            <div className="col-12 col-md-7 features-align">
              <ul className="features-contain">
                <li className="features-item">
                  <span className="key-features">
                    Personalized Mentorship:{" "}
                  </span>
                  <span className="key-words">
                    Receive one-on-one guidance from experts tailored to your
                    goals.
                  </span>
                </li>
                <li className="features-item">
                  <span className="key-features">
                    Programmer Expert-Led Sessions:
                  </span>
                  <span className="key-words">
                    Benefit from direct instruction and interactive learning.{" "}
                  </span>
                </li>
                <li className="features-item">
                  <span className="key-features">Daily Assignments: </span>
                  <span className="key-words">
                    Engage with daily tasks designed to solidify your
                    understanding.
                  </span>
                </li>
                <li className="features-item">
                  <span className="key-features">
                    Internship Opportunities:
                  </span>
                  <span className="key-words">
                    Gain real-world experience with valuable internship
                    Opportunity.
                  </span>
                </li>
                <li className="features-item">
                  <span className="key-features">
                    Certification Opportunities:{" "}
                  </span>
                  <span className="key-words">
                    Achieve professional certifications to showcase your
                    expertise.
                  </span>
                </li>
                <li className="features-item">
                  <span className="key-features">
                    Networking Opportunities:{" "}
                  </span>
                  <span className="key-words">
                    Connect with industry leaders and professionals to expand
                    your network.
                  </span>
                </li>
              </ul>
            </div>

            <div className=" mt-0 col-12 col-md-5  d-flex flex-wrap">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={Featuresimg}
                  alt="This image shows Mr. Y, a coding expert at Aryu Academy, surrounded by technology icons, symbolizing expertise."
                  className="w-100 lap-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="demand-courses">
          <div className="">
            <h2 className="mt-5 text-center type-of-course ">
              In-Demand <span className="type-of-course-create">Courses</span>
            </h2>
            {/* <div className=" text-center features-content ">
              You are just a course away from your dream career
            </div> */}
          </div>
          <Carousel
            showArrows={true}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            responsive={responsive}
            className="carousal-responsive"
          >
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                loading="lazy"
                src={Uximage}
                alt=" Explore in-demand courses at Aryu Academy, offering practical UI/UX design skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">UI/UX Design</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">2 Months</span>
                  <span className="course-duration ms-1">+ 1 Month Internship</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("ui")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>

            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Fullstackimage}
                alt="Explore in-demand courses at Aryu Academy, offering practical Digital Marketing skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Full Stack Development</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">3 Months</span>
                  <span className="course-duration ms-1">+ 2 Months Internship</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("fullstack")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Wordpressimage}
                alt="Explore in-demand courses at Aryu Academy, offering practical WordPress skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">WordPress</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">1 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("wordpress")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                loading="lazy"
                src={Digitalimage}
                alt="Explore in-demand courses at Aryu Academy, offering practical Full Stack Development skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Digital Marketing</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">2 Months</span>
                  <span className="course-duration ms-1">+ 1 Month Internship</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("marketing")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Graphic_desgin_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical Graphic Design skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Graphic Design</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("graphic")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Video_editor_img}
                alt=" Explore in-demand courses at Aryu Academy, offering practical Video Editing skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Video Editor</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("video")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Mern_stack_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical Mern stack development skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name-demand">Mern Stack Development</div>

                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("mern")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Python_desgin_img}
                loading="lazy"
                alt="Explore in-demand courses at Aryu Academy, offering practical Python skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Python Fullstack</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">3 Months</span>
                  <span className="course-duration ms-1">+ 2 Months Internship</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("python")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={React_native_img}
                loading="lazy"
                alt="Explore in-demand courses at Aryu Academy, offering practical React Native skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">React Native</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">3 Months</span>
                  <span className="course-duration ms-1">+ 2 Months Internship</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("reactnative")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={php_desgin_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical PHP Development skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">PHP Development</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("php")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Laravel_desgin_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical Laravel skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Laravel</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("laraval")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={code_lgniter_img}
                alt=" Explore in-demand courses at Aryu Academy, offering practical CodeIgniter skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">CodeIgniter</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("codeigniter")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Web_flow_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical CodeIgniter skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Webflow</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("wordflow")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Shopify_img}
                alt=" Explore in-demand courses at Aryu Academy, offering practical Shopify skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Shopify</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("shopify")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Seo_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical SEO skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">SEO</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("seo")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div>
            <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Smm_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical SMM skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">SMM</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("smm")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
            {/* <div className="ui-ux pb-3 align-content-center ">
              <img
                className="course-image"
                src={Creo_img}
                alt="Explore in-demand courses at Aryu Academy, offering practical Creo skills for the digital age!"
              />

              <div className="px-3 mt-3 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="course-name">Creo</div>
                <div className="mt-1 d-flex align-items-center">
                  <IoTimer className="timer" />
                  <span className="course-duration ms-1">Duration:</span>
                  <span className="ms-1">6 Month</span>
                </div>
                <button
                  className="enroll-btn d-flex align-items-center mt-2"
                  onClick={() => handleNavigation("creo")}
                >
                  <span className="text">ENROLL NOW</span>
                  <GoArrowUpRight className="arrow-icon mx-1" />
                </button>
              </div>
            </div> */}
          </Carousel>
          {/* <Carousel
      showArrows={true}
      infinite
      autoPlay
      autoPlaySpeed={3000}
      responsive={responsive}
    >
    
    </Carousel> */}
        </section>
        <section className="company-details pb-5">
          <div className=" mt-5 d-flex flex-column align-items-center justify-content-center">
            <div className="pt-5 w-75 ">
              <div className="text-center type-of-company">
                Our Trainee's Achievements
              </div>
              <div className="text-center d-flex justify-content-center company-content">
                Our trainee's have landed positions in renowned organizations
                worldwide, including leading MNCs, top tech companies, and
                innovative startups.
              </div>
              {/* <hr className="dot-line-main" /> */}
            </div>
          </div>
          {/* list of company hide */}
          {/* <div className="mt-3">
            <Marquee
              className="flex justify-between gap-4 [--duration:5s]"
              speed={40}
              gradient={false}
              pauseOnHover={false}
            >
              {companyArray.map((content, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <div className="company-box mx-3">
                    <img
                      src={content.image}
                      alt={content.name}
                      className="w-16 h-16 "
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="mt-5">
            <Marquee
              className="flex justify-between gap-4 [--duration:5s] "
              speed={40}
              gradient={false}
              pauseOnHover={false}
              direction="ltr"
            >
              {companyArray1.map((content, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <div className="company-box mx-3">
                    <img
                      src={content.image}
                      alt={content.name}
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div> */}
          <div className=" mt-5 d-flex flex-column align-items-center justify-content-center">
            <div className=" w-75 d-flex ">
              <hr class="dot-line" />
              <div class="centered-content text-center pt-1">
                Who Can Benefit From Our Training?
              </div>
              <hr class="dot-line" />
            </div>
          </div>
          <div className="col-12 d-flex flex-xl-row flex-wrap flex-lg-column gap-5 p-5  ">
            <div className="col-12 col-md company-points d-flex gap-2 p-2 align-items-center">
              <div className="company-icon-box align-items-center mx-2">
                <FaBook className="company-icon mx-2" />
              </div>
              <div className="company-points-text">
                Assisting individuals moving from non-IT fields into rewarding
                IT roles.
              </div>
            </div>
            <div className="col-12 col-md company-points d-flex gap-2 p-2 align-items-center">
              <div className="company-icon-box align-items-center mx-2">
                <FaBook className="company-icon mx-2" />
              </div>
              <div className="company-points-text">
                Helping recent graduates and newcomers land their first job in
                tech.
              </div>
            </div>
            <div className="col-12 col-md company-points d-flex gap-2 p-2 align-items-center">
              <div className="company-icon-box align-items-center mx-2">
                <FaBook className="company-icon mx-2" />
              </div>
              <div className="company-points-text">
                Enabling companies to enhance their employee's core skills for
                better project understanding.
              </div>
            </div>
            <div className="col-12 col-md company-points d-flex gap-2 p-2 align-items-center">
              <div className="company-icon-box align-items-center mx-2">
                <FaBook className="company-icon mx-2" />
              </div>
              <div className="company-points-text">
                Supporting professionals who wish to upgrade their skills for
                career growth in IT.
              </div>
            </div>
          </div>
        </section>
        <section className="offers-courses pb-5 mt-5  ">
          <div className="pt-3">
            <div className=" text-center type-of-course ">
              What does Aryu Academy
              <span className="type-of-course-create"> Offers you?</span>
            </div>
            {/* <div className=" text-center features-content ">
              You are just a course away from your dream career
            </div> */}
          </div>
          <div className="col-12 d-flex flex-wrap justify-content-center gap-5  ">
            <div className=" text-center offer-aligin ">
              <div className="image-container">
                <img
                  className="background-image"
                  src={Roundwhite}
                  alt="Roundwhite"
                  loading="lazy"
                />
                <img
                  className="foreground-image"
                  loading="lazy"
                  src={Roundgirl}
                  alt="Person holding books with a thumbs-up, showcasing Aryu Academy's offers and career training."
                />
              </div>
            </div>
            <div className=" offers-align   mt-0 mt-xl-5">
              <div className=" mt-0 mt-xl-5">
                <div className="col-12 d-flex flex-wrap justify-content-center gap-5">
                  <div className="offer-boxes px-4">
                    <div className="offer-icon-box align-items-center  mt-3 ">
                      <FaBook className="offer-icon mx-2" />
                    </div>
                    <div className="offer-box-text mt-3">
                      Affordable, Career-Focused Learning
                    </div>
                    <div className="offer-box-text1 mt-2">
                      Affordable, high-quality training for committed
                      individuals eager to advance careers.
                    </div>
                  </div>
                  <div className="offer-boxes px-4">
                    <div className="offer-icon-box align-items-center  mt-3 ">
                      <ImUserTie className="offer-icon mx-2" />
                    </div>
                    <div className="offer-box-text mt-3">Expert Mentors</div>
                    <div className="offer-box-text1 mt-2">
                      Learn directly from experienced mentors through engaging
                      live sessions.
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-5">
                <div className="col-12 d-flex flex-wrap justify-content-center gap-5">
                  <div className="offer-boxes px-4">
                    <div className="offer-icon-box align-items-center  mt-3 ">
                      <RiTimeZoneFill className="offer-icon mx-2" />
                    </div>
                    <div className="offer-box-text mt-3">
                      Real-Time Projects Experience
                    </div>
                    <div className="offer-box-text1 mt-2">
                      Develop your skills through challenging tasks and live
                      projects.
                    </div>
                  </div>
                  <div className="offer-boxes px-4">
                    <div className="offer-icon-box align-items-center  mt-3 ">
                      <FaHandshakeAngle className="offer-icon mx-2" />
                    </div>
                    <div className="offer-box-text mt-3">
                      Placement Assistance Support
                    </div>
                    <div className="offer-box-text1 mt-2">
                      Our dedicated team is here to guide you from learning to
                      career success.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="infrastructure mt-5">
          <div className="pt-3">
            <div className=" text-center type-of-course ">
              Our
              <span className="type-of-course-create "> Infrastructure</span>
            </div>
            {/* <div className=" text-center features-content ">
              You are Just a course away from your dream career
            </div> */}
          </div>
          <div className="col  d-flex justify-content-center  ">
            <div className="d-flex mt-2 mt-xl-5 flex-wrap support-image-aligin">
              <div className="col-12 col-lg-6 support-padd">
                <div className="support-aryu">
                  <div className="p-5">
                    <h2 className="support-full mb-0 ">360˚ Support</h2>

                    <h2 className="support-text mb-0">We're here to Empower</h2>
                    <h2 className="support-text">Your Career Journey!</h2>

                    <div className="support-content mt-3">
                      At our software training institute in Chennai, we provide
                      live project experience to help you grow as a
                      professional. We offer expert training programs and the
                      support you need to succeed.
                    </div>
                    <button
                      className="support-agent mt-3"
                      onClick={() => handleNavigation("contact")}
                    >
                      Talk to a Support Agent
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex gap-0 gap-lg-3 ">
                <div className="">
                  <div className="support-image d-none d-xl-block">
                    <img
                    loading="lazy"
                      src={Support1}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    />
                    <img
                    loading="lazy"
                      src={Support2}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    />
                    <img
                    loading="lazy"
                      src={Support3}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    />
                   
                  </div>
                  <div className="support-image1 mt-3 d-none d-xl-block">
                    <img
                    loading="lazy"
                      src={Support4}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    />
                    <img
                    loading="lazy"
                      src={Support7}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    />
                    <img
                    loading="lazy"
                      src={Support8}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    />
                    {/* <img
                      src={Support9}
                      alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                    /> */}
                  </div>
                </div>
                <div className="support-image-main ">
                  <img
                  loading="lazy"
                    src={Support10}
                    alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                  />
                  <img
                  loading="lazy"
                    src={Support9}
                    alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                  />
                  <img
                  loading="lazy"
                    src={Support12}
                    alt="This image shows trainers learning at Aryu Academy Infrastructure, highlighting expert training and growth."
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="reviews mt-5">
          <div className="pt-3">
            <div className=" text-center type-of-course ">
              Student
              <span className="type-of-course-create "> Review</span>
            </div>
            <div className=" text-center features-content ">
              Hear from students like you
            </div>
          </div>

         

          <div className="marquee-container d-flex justify-content-evenly mt-5">
            <div className="marquee-item up">
              {reviews.map((review) => (
                <div key={review.id} className="review-box mb-4">
                  <p className="review-text">{review.text}</p>
                  <div className="review-footer gap-3">
                    <img
                      src={review.image}
                      alt={`${review.name}'s profile`}
                      className="review-image"
                    />
                    <p className="review-name mt-2">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="marquee-item down d-none d-lg-block">
              {reviews1.map((review1) => (
                <div key={review1.id} className="review-box mb-4">
                  <p className="review-text">{review1.text}</p>
                  <div className="review-footer gap-3">
                    <img
                      src={review1.image}
                      alt={`${review1.name}'s profile`}
                      className="review-image"
                    />
                    <p className="review-name mt-2">{review1.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="marquee-item up d-none d-md-block">
              {reviews2.map((review2) => (
                <div key={review2.id} className="review-box mb-4">
                  <p className="review-text">{review2.text}</p>
                  <div className="review-footer gap-3">
                    <img
                      src={review2.image}
                      alt={`${review2.name}'s profile`}
                      className="review-image"
                    />
                    <p className="review-name mt-2">{review2.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="marquee-item down d-none d-lg-block">
              {reviews3.map((review3) => (
                <div key={review3.id} className="review-box mb-4">
                  <p className="review-text">{review3.text}</p>
                  <div className="review-footer gap-3">
                    <img
                      src={review3.image}
                      alt={`${review3.name}'s profile`}
                      className="review-image"
                    />
                    <p className="review-name mt-2">{review3.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section className="mt-5">
          <Soical_videos></Soical_videos>
        </section>
        <section className="" ref={targetSectionRef} id="homeRegisterForm">
          <Intership_register></Intership_register>
        </section>
        <section className="mt-5">
          <Footer></Footer>
        </section>
      </section>
    // </Suspense>
  );
}

export default Home;
