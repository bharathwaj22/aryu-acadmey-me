import React from 'react'
import comingsoon from '../assests/images/comingsoon.jpg'
import "../assests/css/webinars.css"

import Header from '../components/Header'
import Footer from '../components/Footer'
import "../assests/css/videos_resources.css"

import Uximage from "../assests/images/demandcourses/uiux.svg";
import { GoArrowUpRight } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function Webinars() {
  return (
    <div>
        <Header/>
        <div>
          {/* <img className='coming-soon' src={comingsoon} alt="" /> */}
          <div className='video-bg-image text-center'>
            <div className="type-of-course-create ">WEBINARS</div>
            
          </div>

          <section>
            <div className="d-flex justify-content-center mt-5 mb-5">
             <div>
             <div className="ui-ux-webinars  position-relative  pb-3 align-content-center ">
              <img
                className="course-image"
                src={Uximage}
                alt=" Explore in-demand courses at Aryu Academy, offering practical UI/UX design skills for the digital age!"
              />
              <div className='webinar-date d-flex align-content-center justify-content-around pt-1 '>
              <FaCalendarAlt className='mt-1'/>
              <div>22/07/2025</div>
              </div>
              <div className='webinar-location d-flex align-content-center justify-content-around pt-1 '>
              <FaLocationDot className='mt-1'/>
              <div>Chennai</div>
              </div>
              <div className=" mt-3  ">
                <div className="webinar-name">UI/UX Design Webinar</div>
                <div className="mt-1 d-flex align-items-center">
                  {/* <IoTimer className="timer" /> */}
                  
                </div>
                <button
                  className=" text-webinars"
                  // onClick={() => handleNavigation("ui")}
                >
                  Register Now
                  {/* <GoArrowUpRight className="arrow-icon mx-1" /> */}
                </button>
              </div>
            </div>
             </div>
              
          
              </div>
          </section>
        </div>
        <Footer/>
    </div>
  )
}

export default Webinars