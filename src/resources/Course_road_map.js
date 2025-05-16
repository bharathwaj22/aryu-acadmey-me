import React from 'react'
import comingsoon from '../assests/images/comingsoon.jpg'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Course_road_map() {
  return (
    <div>
        <Header/>
        <div className="d-flex justify-content-center">
          <img className='coming-soon' src={comingsoon} alt="" />
        </div>
        <Footer/>
    </div>
  )
}

export default Course_road_map