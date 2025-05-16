import React from 'react'
import comingsoon from '../assests/images/comingsoon.jpg'

import Header from './Header'
import Footer from './Footer'

function Coming_soon() {
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

export default Coming_soon