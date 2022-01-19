import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Whatsapp = () => {
  return (
    <div>
      <a
        style={{ color: "white" }}
        href="https://api.whatsapp.com/send?phone=+6282121988204"
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
