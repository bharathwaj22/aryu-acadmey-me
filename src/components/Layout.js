import React from "react";
import Scroll_btn from "./Scroll.js";
import WhatsAppButton from "../components/Whatsapp.js"; 

const Layout = ({ children }) => {
  return (
    <div>
      
      {children} 
      <div className="">
        <Scroll_btn/>
        <WhatsAppButton />  

    </div>
    </div>
  );
};
export default Layout;