import React, { useState, useEffect } from "react";
import "../assests/css/social_videos.css";
import Thumb1 from "../assests/thumbiamges/thumb1.svg";
import Thumb2 from "../assests/thumbiamges/thumb2.svg";
import Thumb3 from "../assests/thumbiamges/thumb3.svg";
import Thumb4 from "../assests/thumbiamges/thumb4.svg";
// media icon
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Soical_videos() {
  const [selectedPlatform, setSelectedPlatform] = useState("instagram");
  //  adding video and thumbnail
  // const videos = {
  //   instagram: [
  //     { id: 1, thumbnail: Thumb1, url: "https://www.instagram.com/p/xyz1" },
  //     { id: 2, thumbnail: Thumb2, url: "https://www.instagram.com/p/xyz2" },
  //     { id: 3, thumbnail: Thumb3, url: "https://www.instagram.com/p/xyz3" },
  //     { id: 4, thumbnail: Thumb4, url: "https://www.instagram.com/p/xyz4" },
  //   ],
  //   facebook: [
  //     {
  //       id: 1,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.facebook.com/video1",
  //     },
  //     {
  //       id: 2,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.facebook.com/video2",
  //     },
  //     {
  //       id: 3,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.facebook.com/video3",
  //     },
  //     {
  //       id: 4,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.facebook.com/video4",
  //     },
  //   ],
  //   youtube: [
  //     {
  //       id: 1,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.youtube.com/watch?v=abc1",
  //     },
  //     {
  //       id: 2,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.youtube.com/watch?v=abc2",
  //     },
  //     {
  //       id: 3,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.youtube.com/watch?v=abc3",
  //     },
  //     {
  //       id: 4,
  //       thumbnail: "https://via.placeholder.com/150",
  //       url: "https://www.youtube.com/watch?v=abc4",
  //     },
  //   ],
  // };
  //   };
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <div className="pt-3">
        <div className=" text-center type-of-course ">
          Our
          <span className="type-of-course-create "> Socials</span>
        </div>
        {/* <div className=" text-center features-content ">
          You are just a course away from your dream career{" "}
        </div> */}
      </div>
      <div className="social-icons mt-5">
        <div className="social-list d-flex justify-content-evenly">
          <div className="icon-container-media">
            <a
              href="https://youtube.com/@aryuacademyofficial?si=YvCK3p2aDx6tQXgA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="insta-media"
                // onClick={() => setSelectedPlatform("youtube")}
              />
            </a>
          </div>
          <div className="border-media"></div>
          <div className="icon-container-media">
            <a
              href="https://www.instagram.com/aryuacademyofficial/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="insta-media"
                // onClick={() => setSelectedPlatform("instagram")}
              />
            </a>
          </div>
          <div className="border-media"></div>
          <div className="icon-container-media">
            <a
              href="http://facebook.com/aryuacademyofficial "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="insta-media"
                onClick={() => setSelectedPlatform("facebook")}
              />
            </a>
          </div>
          <div className="border-media"></div>
          <div className="icon-container-media">
            <a
              href="https://www.linkedin.com/company/aryuacademyofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="insta-media"
                onClick={() => setSelectedPlatform("linkedin")}
              />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="video-gallery  p-5">
        {videos[selectedPlatform].map((video) => (
          //
          <div className="video-item ">
            <img
              src={video.thumbnail}
              // alt={`Thumbnail for video ${video.id}`}
              className="thumbnail"
              onClick={() => window.open(video.url, "_blank")}
            />
          </div>
        ))}
      </div> */}
      {/* <div className="video-gallery p-5">
        {videos[selectedPlatform].map((video, index) => (
          <div
            className={`video-item ${index === 0 ? "show-mobile" : ""}`}
            key={video.id}
          >
            <img
              src={video.thumbnail}
              className="thumbnail"
              onClick={() => window.open(video.url, "_blank")}
            />
          </div>
        ))}
      </div> */}
      <div className="video-gallery pt-3">
        {/* <a
          href="https://youtube.com/shorts/WqdlYEB4cEk?si=7euFXPLwCpUDQf7S"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <img src={Thumb1} alt="Instagram Thumbnail" />
        </a>
        <a
          href="https://youtube.com/shorts/vB0T1-la5p8?si=PxUQqmfIa-LPvhLS  "
          target="_blank"
          rel="noopener noreferrer"
          className="d-none d-lg-block"
        >
          <img src={Thumb2} alt="Instagram Thumbnail" />
        </a>
        <a
          href="https://youtube.com/shorts/BUzWdYaqJEc?si=HxlCJrXjZtJQY6bP  "
          target="_blank"
          rel="noopener noreferrer"
          className="d-none d-md-block"
        >
          <img src={Thumb3} alt="Instagram Thumbnail" />
        </a>
        <a
          href="https://youtube.com/shorts/MEWCl7FSBfg?si=OquBn8zoFA9IyWc6 "
          target="_blank"
          rel="noopener noreferrer"
          className="d-none d-md-block"
        >
          <img src={Thumb4} alt="Instagram Thumbnail" />
        </a> */}
        {/* <blockquote
        className="instagram-media"
        // data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DFC1bSLPnUL/?utm_source=ig_embed&amp;utm_campaign=loading"
        // data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "30px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "100px",
          minWidth: "100px",
          padding: "0",
          width: "99.375%",
        }}
      ></blockquote> */}
        
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/reel/DFC1bSLPnUL/?utm_source=ig_embed&amp;utm_campaign=loading"
          ></blockquote>
        
        
          <blockquote
            className="instagram-media d-none d-lg-block"
            data-instgrm-permalink="https://www.instagram.com/reel/DFNE9bwPaIY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          ></blockquote> 
        
        
          <blockquote
            className="instagram-media d-none d-lg-block"
            data-instgrm-permalink="https://www.instagram.com/reel/DDWlzEsv1Q-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          ></blockquote>
        
        
          <blockquote
            className="instagram-media d-none d-xl-block"
            data-instgrm-permalink="https://www.instagram.com/reel/DGFvwKnIav7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          ></blockquote>
        
      </div>
    </div>
  );
}

export default Soical_videos;
