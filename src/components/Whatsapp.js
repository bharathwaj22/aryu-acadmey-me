import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/8122869706"  
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
