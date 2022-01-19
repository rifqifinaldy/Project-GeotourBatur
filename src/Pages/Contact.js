import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <div className="mt-3 mb-5 text-center">
        <div className="title">
          <h4>Let's Chat with Us</h4>
          <h2>Contact</h2>
          <hr />
        </div>
      </div>
      <Container>
        <Row>
          <Col md="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.426397889791!2d115.33241981454967!3d-8.260285285283823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1f50278715f2b%3A0x57e5286538741c8b!2sJl.%20Raya%20Kintamani%2C%20Batur%20Sel.%2C%20Kec.%20Kintamani%2C%20Kabupaten%20Bangli%2C%20Bali!5e0!3m2!1sid!2sid!4v1642433670488!5m2!1sid!2sid"
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen=""
              title="google-maps-frame"
              loading="lazy"
            ></iframe>
          </Col>
          <Col className="info">
            <h4>Active Hour</h4>
            <hr />
            <span>Weekdays / 09:00 - 18:00</span> <br />
            <span>Weekend / 07:00 - 18:00</span>
            <h4>Office</h4>
            <hr />
            <span>
              Jl. Raya Kintamani, Batur Sel., Kec. Kintamani, Kabupaten Bangli,
              Bali 80652
            </span>
            <h4>More Info</h4>
            <hr />
            <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
            <span>+6282121988204 (Rinjani)</span> <br />
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            <span>geotourbatur1926@gmail.com</span> <br />
            <hr className="hr-contact" />
            <div className="d-flex justify-content-around">
              <h6 className="d-inline">Social Media : </h6>
              <div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/Geotourbatur"
                >
                  <FontAwesomeIcon icon={faFacebook} className="me-2" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/geotour_batur/"
                >
                  <FontAwesomeIcon icon={faInstagram} className="me-2" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/company/geotour-batur/"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCT7HeIizjLXRfs29Ypj5mAQ"
                >
                  <FontAwesomeIcon icon={faYoutube} className="me-2" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
