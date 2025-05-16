import React from 'react'
import error from '../assests/images/404error.svg'
// import Header from './Header'
// import Footer from './Footer'
import { NavLink} from "react-router-dom";

const Error = () => {
  return (
    <div>
        {/* <Header/> */}
        <div className="d-flex justify-content-center">
          <img className='error-img' src={error} alt="" />
        </div>
       <div className='d-flex justify-content-center'>
       <NavLink to='/' className="error-text">
       Go to Home
       </NavLink>
       </div>

        {/* <Footer/> */}
    </div>
  )
}

export default Error