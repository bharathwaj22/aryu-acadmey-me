import { lazy } from "react";
import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../components/Home.js";
import About from "../components/About.js";

import Contact from "../components/Contact.js";

// import Sitemap from "../components/Sitemap.js";
import Error from "../components/Error.js";
// courses page

import Courses from "../coursespages/Digital_marketing.js";
import Ui_desgin from "../coursespages/Ui_desgin.js";
import Graphic_desgin from "../coursespages/Graphic_desgin.js";
import Video_editor from "../coursespages/Video_editor.js";
import Word_press from "../coursespages/Word_press.js";
import Word_flow from "../coursespages/Word_flow.js";
import Shopify from "../coursespages/Shopify.js";
import Seo from "../coursespages/Seo.js";
import Smm from "../coursespages/Smm.js";
import Full_stack_development from "../coursespages/Full_stack_development.js";
import Mern_stack_development from "../coursespages/Mern_stack_development.js";
import Python_coruses from "../coursespages/Python.js";
import Php_mysql from "../coursespages/Php_mysql.js";
import Laravel from "../coursespages/Laravel.js";
import Codelegniter from "../coursespages/Codelgniter.js";
import React_native from "../coursespages/React_native.js";
import Creo from "../coursespages/Creo.js";
import Aryu_policy from "../components/Policy.js";
import Aryu_terms from "../components/Terms.js";
import Aryu_refund from "../components/Refund.js";
import Sitemap from "../components/Sitemapfooter.js";
import Coming_soon from "../components/Coming_soon.js";
import Interview_tips from "../resources/Interview_tips.js";
import Webinars from "../resources/Webinars.js";
import Course_road_map from "../resources/Course_road_map.js";
import Resource_download from "../components/Resource_download.js";
import E_books from "../resources/E_books.js";
import Free_resource from "../components/Free_resource.js";
import Give_way from "../components/Give_way.js";
import Ui_front_development from "../coursespages/Ui_front_development.js";
import React_js_development from "../coursespages/React_js_development.js";
import Software_testing from "../coursespages/Software_testing.js";

// const Contact = lazy(()=>import('../components/Contact'))
// const Home = lazy(()=>import('../components/Home'))

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      {/* sitemap */}
      {/* <Route path="/sitemap" element={<Sitemap />} /> */}
      {/* Web and app develpment */}
      <Route
        path="/full-stack-development-course-in-chennai"
        element={<Full_stack_development />}
      />
      <Route
        path="/mern-stack-development-course-in-chennai"
        element={<Mern_stack_development />}
      />
      <Route path="/python-course-in-chennai" element={<Python_coruses />} />
      <Route
        path="/react-native-course-in-chennai"
        element={<React_native />}
      />
      {/* php Framework */}
      <Route path="/laravel-course-in-chennai" element={<Laravel />} />
      <Route path="/php-mysql-course-in-chennai" element={<Php_mysql />} />
      <Route path="/codeigniter-course-in-chennai" element={<Codelegniter />} />
      <Route path="*" element={<Error />} />

      {/* front end */}
      <Route
        path="/ui-frontend-development-course-in-chennai"
        element={<Ui_front_development />}
      />
      <Route
        path="/react-js-development-course-in-chennai"
        element={<React_js_development />}
      />
      <Route
        path="/manual-testing-course-in-chennai"
        element={<Software_testing />}
      />

      {/* Digital marketing */}
      <Route
        path="/digital-marketing-course-in-chennai"
        element={<Courses />}
      />
      <Route path="/seo-course-in-chennai" element={<Seo />} />
      <Route
        path="/social-media-marketing-course-in-chennai"
        element={<Smm />}
      />
      {/* web desgin */}
      <Route path="/ui-ux-desginer-course-in-chennai" element={<Ui_desgin />} />
      <Route
        path="/graphic-desgin-course-in-chennai"
        element={<Graphic_desgin />}
      />
      <Route
        path="/video-editing-course-in-chennai"
        element={<Video_editor />}
      />
      {/* CMS */}
      <Route path="/wordpress-course-in-chennai" element={<Word_press />} />
      <Route path="/webflow-course-in-chennai" element={<Word_flow />} />
      <Route path="/shopify-course-in-chennai" element={<Shopify />} />

      {/* Creo */}
      <Route path="/creo-course-in-chennai" element={<Creo />} />
      {/* terms and policy */}
      <Route path="/privacy-policy" element={<Aryu_policy />} />

      {/* contidion */}
      <Route path="/terms-condition" element={<Aryu_terms />} />

      {/* refund */}
      <Route path="/refund-policy" element={<Aryu_refund />} />

      {/* site map */}

      <Route path="/html-sitemap" element={<Sitemap />} />

      {/* coming soon */}

      <Route path="/coming-soon" element={<Coming_soon />} />

      {/* resources map */}
      <Route path="/interview-tips" element={<Interview_tips />} />
      <Route path="/webinars" element={<Webinars />} />

      <Route path="/course-road-map" element={<Course_road_map />} />

      <Route path="/Ebooks" element={<E_books />} />

      {/* resource download */}

      <Route path="/resource-download/:id" element={<Resource_download />} />
      <Route path="/free-resource" element={<Free_resource />} />
      <Route path="/free-course-giveaway" element={<Give_way />} />
    </Routes>
  );
}

export default Router;
