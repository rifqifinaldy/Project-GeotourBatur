import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import TinySlider from "tiny-slider-react";
import { DataTriviaGeotour } from "./DataTriviaGeotour";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const settings = {
  container: "#gutter",
  gutter: 10,
  lazyload: true,
  nav: false,
  loop: true,
  center: true,
  prevButton: ".previous-slider",
  nextButton: ".next-slider",
  responsive: {
    540: {
      items: 2,
    },
    720: {
      items: 3,
    },
  },
};
const TriviaGeotour = () => {
  const [imgShowClass, setImgShowClass] = useState("d-none");
  const [getImg, setGetImg] = useState();

  const handleShow = () => {
    setImgShowClass("d-none");
  };
  return (
    <div className="wrapper-gallery">
      <div className="title text-center py-3">
        <h4>Geotour Batur Gallery</h4>
        <h2>Trivia Geoutour Batur</h2>
        <hr />
        <small className="text-info">Click to enlarge</small>
      </div>

      <div className={imgShowClass + " wrapper-img-show"}>
        <div className="img-card">
          <Button
            size="sm"
            className="mb-2 btn btn-danger"
            onClick={handleShow}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <img src={getImg} alt="geotour batur trivia" />
        </div>
      </div>
      <FontAwesomeIcon className="previous-slider" icon={faChevronCircleLeft} />
      <FontAwesomeIcon className="next-slider" icon={faChevronCircleRight} />
      <Container className="gallery-slider-wrapper">
        {/* <button className="previous-slider">KES</button> */}
        <TinySlider settings={settings}>
          {DataTriviaGeotour.map((item, i) => (
            <div key={i} className="gallery">
              <img
                src={item.img}
                alt="geotour batur trivia"
                onClick={() => {
                  setGetImg(item.img);
                  setImgShowClass("open-img");
                }}
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </TinySlider>
      </Container>
    </div>
  );
};

export default TriviaGeotour;
