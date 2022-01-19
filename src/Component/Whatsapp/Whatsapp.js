import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Whatsapp = () => {
  return (
    <div>
      <a
        style={{ color: "white" }}
        href="https://api.whatsapp.com/send?phone=+6282121988204&text=Hi,%your%20en%20su%20web%20y%20necesito%20consultar%20sobre..."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp}/>
      </a>
    </div>
  );
};

export default Whatsapp;
