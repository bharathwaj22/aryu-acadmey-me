import React from 'react';
import { NavLink } from 'react-router-dom';
import Aryusir from "../assests/images/aryusir.jpg"
// import Featuresimg from "../assests/images/aryuhead.svg";



function Sitemap() {
  return (
    <div className="sitemap-container">
  <h1 className="sitemap-title">Sitemap</h1>
  <div className="sitemap-grid">
    <NavLink to="/home" className="sitemap-box home-box" target="_blank">
      Home
    </NavLink>
    <NavLink to="/about" className="sitemap-box about-box" target="_blank">
      About
    </NavLink>
    <NavLink to="/courses" className="sitemap-box courses-box" target="_blank">
      Courses
    </NavLink>
    <NavLink to="/blog" className="sitemap-box blog-box" target="_blank">
      Blog
    </NavLink>
    <NavLink to="/contact" className="sitemap-box contact-box" target="_blank">
      Contact
    </NavLink>
  </div>
  <div className="mt-5">
  <div className="bg-green-100 text-green-600 p-2 rounded">Green: Completed</div>
  <div className="bg-blue-100 text-blue-600 p-2 rounded">Blue: Update</div>
  <div className="bg-orange-100 text-orange-600 p-2 rounded">Orange: Processing</div>
</div>
{/* <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src={Featuresimg} class="cover-image" />
    </div>
    <img src={Aryusir} class="character" />
  </div>
</a> */}

{/* <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
  <div class="card">
    <div class="wrapper">
      <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" class="cover-image" />
    </div>
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" class="title" />
    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" class="character" />
  </div>
</a> */}

</div>

  );
}

export default Sitemap;
