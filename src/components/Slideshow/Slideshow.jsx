import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Slideshow({ currentProperty }) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    setSlide(slide === currentProperty.pictures.length - 1 ? 0 : slide + 1);
  }

  function prevSlide() {
    setSlide(slide === 0 ? currentProperty.pictures.length - 1 : slide - 1);
  }

  return (
    <section className="carrousel">
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ color: "#ffffff" }}
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      {currentProperty.pictures.map((pic, i) => {
        return (
          <img
            src={pic}
            alt={pic.title}
            key={i}
            className={slide === i ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{ color: "#ffffff" }}
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicator">
        {`${slide + 1}/${currentProperty.pictures.length}`}
      </span>
    </section>
  );
}

export default Slideshow;
