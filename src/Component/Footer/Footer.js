import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#264653"
          fillOpacity="1"
          d="M0,160L80,154.7C160,149,320,139,480,154.7C640,171,800,213,960,213.3C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="footer p-3">
        <Row>
          <Col className="logo p-5" sm="12" md="4">
            <span>GEOTOUR </span>
            <span>BATUR</span>
          </Col>
          <Col sm="12" md="2">
            <strong>Address</strong>
            <p>
              Jl. Raya Kintamani, Batur Sel., Kec. Kintamani, Kabupaten Bangli,
              Bali 80652
            </p>
          </Col>
          <Col sm="12" md="2">
            <strong>Contact</strong>
            <br />
            <ul className="list-unstyled">
              <li>(+62) 82121988204</li>
              <li>geotourbatur@gmail.com</li>
            </ul>
          </Col>
          <Col sm="12" md="2">
            <strong>Social Media</strong>
            <ul className="list-unstyled">
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/geotour_batur/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/Geotourbatur"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="2">
            <strong>Others</strong>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="link">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/information-center" className="link">
                  Information Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
