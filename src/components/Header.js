import Aryulogo from "../assests/images/aryuheader.svg";
import "../assests/css/header.css";
import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // popup
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  // const handlePopupClick = (e) => {
  //   // Prevent the click from propagating to the parent
  //   e.stopPropagation();
  // };

  // const handleOutsideClick = (e) => {
  //   // Close popup if the click happens outside the popup content
  //   if (!e.target.closest(".popup")) {
  //     setPopupOpen(false);
  //   }
  // };
  // const handleMouseLeave = () => {
  //   setTimeout(() => setPopupOpen(false), 200); // 200ms delay
  // };
  const location = useLocation();

  // Define all submenu paths
  const submenuPaths = [
    "/ui-ux-desginer-course-in-chennai",
    "/graphic-desgin-course-in-chennai",
    "/video-editing-course-in-chennai",
    "/full-stack-development-course-in-chennai",
    "/mern-stack-development-course-in-chennai",
    "/python-course-in-chennai",
    "/react-native-course-in-chennai",
    "/php-mysql-course-in-chennai",
    "/laravel-course-in-chennai",
    "/codeigniter-course-in-chennai",
    "/wordpress-course-in-chennai",
    "/webflow-course-in-chennai",
    "/shopify-course-in-chennai",
    "/digital-marketing-course-in-chennai",
    "/seo-course-in-chennai",
    "/social-media-marketing-course-in-chennai",
    // "/creo-course-in-chennai",
    "/ui-frontend-development-course-in-chennai",
    "/react-js-development-course-in-chennai",
    "/manual-testing-course-in-chennai",
  ];

  // Check if current location matches any submenu path
  const isCoursesActive = submenuPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  // const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);
  // const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const [courseSubmenu, setCourseSubmenu] = useState(false);
  const [webdesignSubmenu, setWebdesignSubmenu] = useState(false);
  const [webDevSubmenu, setwebDevSubmenu] = useState(false);
  const [phpSubmenu, setPhpSubmenu] = useState(false);
  const [digiMarketingSubmenu, setDigiMarketingSubmenu] = useState(false);
  const [d3DesignSubmenu, set3dDesignSubmenu] = useState(false);
  const [cmsSubmenu, setCmsSubmenu] = useState(false);
  return (
    <>
      <section className="sticky-top">
        <div className="d-flex header-aryu align-items-center px-4">
          <div className="col-6 d-flex align-items-center">
            <NavLink to="/">
              <img src={Aryulogo} alt="logo" className="mr-2" />
            </NavLink>
            {/* <div className="aryu-name">ARYU</div>
            <div className="aryu-small mt-2 ml-2">Academy</div> */}
          </div>
          <div className="col-6 d-flex   justify-content-evenly d-none d-lg-flex  ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "aryu-name active-link" : "aryu-name"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "aryu-name active-link" : "aryu-name"
              }
            >
              About
            </NavLink>

            <nav>
              <NavLink
                className={({ isActive }) =>
                  isCoursesActive ? "aryu-name active-link" : "aryu-name"
                }
                onMouseEnter={togglePopup}
              >
                Courses <IoIosArrowDown className="arrow-icon-head" />
              </NavLink>

              <div
                className={`submenu ${isPopupOpen ? "open" : ""}`}
                onMouseLeave={() => setPopupOpen(false)}
              >
                <div className="header-div">
                  <div className="head-course-heading">DESIGNER COURSE</div>
                  <Link
                    to="/ui-ux-desginer-course-in-chennai"
                    className="submenu-item mt-4"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }
                  >
                    UI/UX Design
                  </Link>
                  <Link
                    to="/graphic-desgin-course-in-chennai"
                    className="submenu-item"
                  >
                    Graphic Design
                  </Link>
                  <Link
                    to="/video-editing-course-in-chennai"
                    className="submenu-item"
                  >
                    Video Editor
                  </Link>
                </div>
                <div>
                  <div className="head-course-heading">
                    FULL STACK DEVELOPMENT
                  </div>
                  <Link
                    to="/full-stack-development-course-in-chennai"
                    className="submenu-item mt-4"
                  >
                    Full Stack Development
                  </Link>
                  <Link
                    to="/mern-stack-development-course-in-chennai"
                    className="submenu-item "
                  >
                    MERN Stack Development
                  </Link>
                  <Link to="/python-course-in-chennai" className="submenu-item">
                    Python Fullstack
                  </Link>
                  {/* <Link to="/react-native-course-in-chennai" className="submenu-item">
                    React Native
                  </Link> */}
                </div>
                {/* frontend */}

                  <div>
                  <div className="head-course-heading">FrontEnd Development</div>
                  {/* <Link to="/php-mysql-course-in-chennai" className="submenu-item mt-4">
                    PHP Development
                  </Link> */}
                  <Link
                    to="/ui-frontend-development-course-in-chennai"
                    className="submenu-item mt-4"
                  >
                    UI / FrontEnd development 
                  </Link>
                   <Link
                    to="/react-js-development-course-in-chennai"
                    className="submenu-item "
                  >
                    React JS development 
                  </Link>
                  {/* <Link to="/codeigniter-course-in-chennai" className="submenu-item">
                    CodeIgniter
                  </Link> */}

                  <div className="head-course-heading mt-2">
                    Software Testing
                  </div>

                  <Link
                    to="/manual-testing-course-in-chennai"
                    className="submenu-item"
                  >
                    Manual Testing
                  </Link>
                </div>

                {/* lavral */}
                <div>
                  <div className="head-course-heading">PHP FRAMEWORKS</div>
                  {/* <Link to="/php-mysql-course-in-chennai" className="submenu-item mt-4">
                    PHP Development
                  </Link> */}
                  <Link
                    to="/laravel-course-in-chennai"
                    className="submenu-item mt-4"
                  >
                    Laravel
                  </Link>
                  {/* <Link to="/codeigniter-course-in-chennai" className="submenu-item">
                    CodeIgniter
                  </Link> */}

                  <div className="head-course-heading mt-2">
                    MOBILE APP DEVELOPMENT
                  </div>

                  <Link
                    to="/react-native-course-in-chennai"
                    className="submenu-item"
                  >
                    React Native
                  </Link>
                </div>

                <div>
                  <div className="head-course-heading">CMS</div>
                  <Link
                    to="/wordpress-course-in-chennai"
                    className="submenu-item mt-4"
                  >
                    WordPress
                  </Link>
                  <Link
                    to="/webflow-course-in-chennai"
                    className="submenu-item"
                  >
                    Webflow
                  </Link>
                  <Link
                    to="/shopify-course-in-chennai"
                    className="submenu-item"
                  >
                    Shopify
                  </Link>
                </div>
                <div>
                  <div className="head-course-heading"> MARKETING</div>
                  <Link
                    to="/digital-marketing-course-in-chennai"
                    className="submenu-item mt-4"
                  >
                    Digital Marketing
                  </Link>
                  <Link to="/seo-course-in-chennai" className="submenu-item">
                    SEO
                  </Link>
                  <Link
                    to="/social-media-marketing-course-in-chennai"
                    className="submenu-item"
                  >
                    Social Media Marketing
                  </Link>
                </div>
                {/* <div>
                  <div className="head-course-heading">3D DESIGNING</div>
                  <Link to="/creo-course-in-chennai" className="submenu-item mt-4">
                    Creo
                  </Link>
                </div> */}
              </div>
            </nav>
            <NavLink
              to="/free-resource"
              className={({ isActive }) =>
                isActive ? "aryu-name active-link" : "aryu-name"
              }
            >
              Resource{" "}
            </NavLink>
            <NavLink
              to="https://blog.aryuacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={({ isActive }) =>
                isActive ? "aryu-name active-link" : "aryu-name"
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "aryu-name active-link" : "aryu-name"
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="col-6 d-flex justify-content-end d-lg-none">
            <BiMenuAltRight
              size={24}
              className="menu-icon"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ x: -100, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mobile-menu d-lg-none px-4"
          >
            <NavLink to="/" className="mobile-aryu-list">
              Home
            </NavLink>
            
            <NavLink to="/about-us" className="mobile-aryu-list">
              About
            </NavLink>
            

            {/* Courses Dropdown */}
            <NavLink
              onClick={() => setCourseSubmenu(!courseSubmenu)}
              className="mobile-aryu-list d-flex justify-content-between"
            >
              Courses{" "}
              <span>
                {courseSubmenu ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            </NavLink>
            {courseSubmenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="coursesubmenu d-flex flex-column ms-4"
              >
                {/* Web Design */}
                <NavLink
                  onClick={() => {
                    setWebdesignSubmenu(!webdesignSubmenu);
                    setwebDevSubmenu(false);
                    setPhpSubmenu(false);
                    setCmsSubmenu(false);
                    setDigiMarketingSubmenu(false);
                    set3dDesignSubmenu(false);
                  }}
                  className="mobile-aryu-inside d-flex justify-content-between"
                >
                  Designer Course
                  <span>
                    {webdesignSubmenu ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </NavLink>
                {webdesignSubmenu && (
                  <div className="coursesubmenu d-flex flex-column mx-4">
                    <NavLink
                      to="/ui-ux-desginer-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      UI/UX Design
                    </NavLink>
                    <NavLink
                      to="/graphic-desgin-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Graphic Design
                    </NavLink>
                    <NavLink
                      to="/video-editing-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Video Editing
                    </NavLink>
                  </div>
                )}

                {/* Web Development */}
                <NavLink
                  onClick={() => {
                    setWebdesignSubmenu(false);
                    setwebDevSubmenu(!webDevSubmenu);
                    setPhpSubmenu(false);
                    setCmsSubmenu(false);
                    setDigiMarketingSubmenu(false);
                    set3dDesignSubmenu(false);
                  }}
                  className="mobile-aryu-inside d-flex justify-content-between"
                >
                  Full Stack Development
                  <span>
                    {webDevSubmenu ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </NavLink>
                {webDevSubmenu && (
                  <div className="coursesubmenu d-flex flex-column ms-2">
                    <NavLink
                      to="/full-stack-development-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Full Stack Development
                    </NavLink>
                    <NavLink
                      to="/mern-stack-development-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      MERN Stack Development
                    </NavLink>
                    <NavLink
                      to="/python-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Python Fullstack
                    </NavLink>
                    {/* <NavLink
                      to="/react-native-course-in-chennai"
                      className="aryu-name-name"
                    >
                      React Native
                    </NavLink> */}
                  </div>
                )}

                {/* PHP Frameworks */}
                <NavLink
                  onClick={() => {
                    setWebdesignSubmenu(false);
                    setwebDevSubmenu(false);
                    setPhpSubmenu(!phpSubmenu);
                    setCmsSubmenu(false);
                    setDigiMarketingSubmenu(false);
                    set3dDesignSubmenu(false);
                  }}
                  className="mobile-aryu-inside d-flex justify-content-between"
                >
                  PHP Frameworks{" "}
                  <span>
                    {phpSubmenu ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </NavLink>
                {phpSubmenu && (
                  <div className="coursesubmenu d-flex flex-column ms-2">
                    {/* <NavLink to="/php-mysql-course-in-chennai" className="aryu-name-name">
                      PHP Development
                    </NavLink> */}
                    <NavLink
                      to="/laravel-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Laravel
                    </NavLink>
                    {/* <NavLink to="/codeigniter-course-in-chennai" className="aryu-name-name">
                      CodeIgniter
                    </NavLink> */}
                  </div>
                )}

                {/* CMS */}
                <NavLink
                  onClick={() => {
                    setWebdesignSubmenu(false);
                    setwebDevSubmenu(false);
                    setPhpSubmenu(false);
                    setCmsSubmenu(!cmsSubmenu);
                    setDigiMarketingSubmenu(false);
                    set3dDesignSubmenu(false);
                  }}
                  className="mobile-aryu-inside d-flex justify-content-between"
                >
                  CMS{" "}
                  <span>
                    {cmsSubmenu ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </NavLink>
                {cmsSubmenu && (
                  <div className="coursesubmenu d-flex flex-column ms-2">
                    <NavLink
                      to="/wordpress-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      WordPress
                    </NavLink>
                    <NavLink
                      to="/webflow-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Webflow
                    </NavLink>
                    <NavLink
                      to="/shopify-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Shopify
                    </NavLink>
                  </div>
                )}

                {/* Digital Marketing */}
                <NavLink
                  onClick={() => {
                    setWebdesignSubmenu(false);
                    setwebDevSubmenu(false);
                    setPhpSubmenu(false);
                    setCmsSubmenu(false);
                    setDigiMarketingSubmenu(!digiMarketingSubmenu);
                    set3dDesignSubmenu(false);
                  }}
                  className="mobile-aryu-inside d-flex justify-content-between"
                >
                   Marketing{" "}
                  <span>
                    {digiMarketingSubmenu ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </NavLink>
                {digiMarketingSubmenu && (
                  <div className="coursesubmenu d-flex flex-column ms-2">
                    <NavLink
                      to="/digital-marketing-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Digital Marketing
                    </NavLink>
                    <NavLink
                      to="/seo-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      SEO
                    </NavLink>
                    <NavLink
                      to="/social-media-marketing-course-in-chennai"
                      className="mobile-aryu-inside-word"
                    >
                      Social Media Marketing
                    </NavLink>
                  </div>
                )}

                {/* 3D Designing */}
                <NavLink
                  onClick={() => {
                    setWebdesignSubmenu(false);
                    setwebDevSubmenu(false);
                    setPhpSubmenu(false);
                    setCmsSubmenu(false);
                    setDigiMarketingSubmenu(false);
                    set3dDesignSubmenu(!d3DesignSubmenu);
                  }}
                  className="mobile-aryu-inside d-flex justify-content-between"
                >
                  Mobile App Development <span>{d3DesignSubmenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                </NavLink>
                {d3DesignSubmenu && (
                  <div className="coursesubmenu d-flex flex-column ms-2">
                  <NavLink to="/react-native-course-in-chennai" className="mobile-aryu-inside-word">
                    React Native
                  </NavLink>
                  </div>
                )}
              </motion.div>
            )}
            <NavLink to="/free-resource" className="mobile-aryu-list">
            Resource
            </NavLink>
            <NavLink to="https://blog.aryuacademy.com/"
              target="_blank"
              rel="noopener noreferrer" className="mobile-aryu-list">
              Blog
            </NavLink>

            <NavLink to="/contact-us" className="mobile-aryu-list">
              Contact
            </NavLink>
          </motion.div>
        )}
      </section>
    </>
  );
}

export default Header;

//     <section>
//       <div className="d-flex header-aryu align-items-center px-4">
//         <div className="col-6 d-flex align-items-center">
//           <img src={Aryulogo} alt="logo" className="mr-2" />
//           <div className="aryu-name">ARYU</div>
//           <div className="aryu-small mt-2 ml-2">Academy</div>
//         </div>
//         <div className="col-6 d-flex justify-content-end">
//           <button className="menu-icon" onClick={toggleMenu}>
//             <FaBars size={24} />
//           </button>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="mobile-menu">
//           <div className="aryu-name">Home</div>
//           <div className="aryu-name">About</div>
//           <div className="aryu-name">Courses</div>
//           <div className="aryu-name">Blog</div>
//           <div className="aryu-name">Contact</div>
//         </div>
//       )}
//     </section>
//   );
// }
