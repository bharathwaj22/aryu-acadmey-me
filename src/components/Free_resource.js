// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer.js";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { API_URL } from "../Config.js";

// function Free_resource() {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/api/v1/free-resources`,
//       );
//       setData(response.data);

//       console.log(response.data);
//     } catch (error) {
//       console.error("error fetching data", error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const navigate = useNavigate();
//   // const name = "ppp"; // Name to pass

//   const goToNextPage = (name) => {
//     const formattedTitleName = name
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-") // Remove all special characters and replace with hyphen
//       .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
//       .replace(/^-+|-+$/g, ""); // Trim hyphens from the start and end
//     //   navigate(`/resource-download/${gd}`, { state: { name } }); // Passing name as state
//     navigate(`/resource-download/${formattedTitleName}`, { state: { name } }); // Passing name as state
//   };
//   return (
//     <>
//       <section>
//         <Header />
//         <section>
//           <div className="pt-5">
//             <div className=" text-center type-of-course ">
//               Free
//               <span className="type-of-course-create "> Resources</span>
//             </div>
//           </div>

//           <section className="p-3 d-flex justify-content-center">
//             {/* {data.map((e) => {
//             <div>
//                 <img src={"e.photo"} alt=""></img>
//                 <div>Name:{e.name}</div>
//             </div>
//              })} */}
//             <div className="d-flex flex-wrap gap-5 justify-content-start algin-free-resource">
//               {/* <div className="text-center">
//                 <img className="resource-image"onClick={()=>goToNextPage(name)} src={""} alt=""></img>
//                 <div className="daily-report-text mt-2">Name:{name}</div>
//              </div> */}
//               {data?.map((item) => (
//                 <div key={item.id} className="free-box">
//                   <img
//                     className="resource-image"
//                     onClick={() => goToNextPage(item.name)}
//                     src={item.resource_image}
//                   />
//                   <div className="daily-report-text text-center mt-3">
//                     {item.title}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </section>
//         <section className="mt-5">
//           <Footer></Footer>
//         </section>
//       </section>
//     </>
//   );
// }

// export default Free_resource;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../Config.js";
import { RiDownloadCloudFill } from "react-icons/ri";

function FreeResource() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const loader = document.getElementById("global-loader");
      if (loader) loader.style.display = "flex";
      let isMounted = true;

      try {
        const response = await axios.get(`${API_URL}/api/v1/free-resources`);
        console.log("API Response:", response.data); // Debugging API response
        if (isMounted) setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (isMounted) setError("Failed to load resources.");
      } finally {
        setLoading(false);

        const remainingTime = 500;
        setTimeout(() => {
          if (loader) loader.style.display = "none";
        }, remainingTime);
      }
      return () => {
        isMounted = false;
      };
    };

    fetchData();
  }, []);

  const goToNextPage = (name, slug) => {
    console.log(name);
    console.log(slug);

    if (!slug) {
      console.error("Resource name is missing!");
      return;
    }

    const formattedTitleName = slug
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Remove special characters, replace with hyphen
      .replace(/-+/g, "-") // Replace multiple hyphens with a single hyphen
      .replace(/^-+|-+$/g, ""); // Trim hyphens from start & end

    navigate(`/resource-download/${formattedTitleName}`, { state: { name } });
  };

  console.log(data);

  return (
    <>
      <Header />
      <section className="pt-5 video-bg-image">
        <div className="text-center type-of-course">
          Free <span className="type-of-course-create">Resources</span>
        </div>
      </section>

      <section className=" d-flex justify-content-center mt-3">
        {/* {loading ? (
          <p>Loading resources...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : ( */}
        <div className="d-flex flex-wrap gap-5 algin-free-resource mb-2 mt-5">
          {data.map((item) => {
            // const slugName = item.slug // Fallback if name is missing
            // const resourceName = item.name // Fallback if name is missing
            return (
              <div
                key={item.id}
                className="free-box   "
              >
                <div className="d-flex  gap-3">
                  {" "}
                  <div className="resource-image">
                    <img
                      // onClick={() => goToNextPage(item.title, item.slug)}
                      src={`https://backoffice.aryuacademy.com/${item.resource_image}`}
                      // src={item.resource_image}
                      alt={item.title || "Resource"}
                    />
                  </div>
                  <div className="w-100">
                    <div className="daily-report-land  mt-1 mt-md-4">
                      {item.title || "Untitled"}
                    </div >
                    <div className=" pad-download-button">
                      <button
                        className="download-free-map"
                        onClick={() => goToNextPage(item.title, item.slug)}
                      >
                        Download Now
                        <RiDownloadCloudFill className="download-icon-free mx-2" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-end download-div">
                  <button className="download-free-map"onClick={() => goToNextPage(item.title, item.slug)}>Download Now
                  <RiDownloadCloudFill className="download-icon-free mx-2" />

                  </button>
                  </div> */}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default FreeResource;
