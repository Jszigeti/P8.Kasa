import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Slideshow({ currentProperty }) {
  // Create a state determining the active slide
  const [slide, setSlide] = useState(0);

  // Function increasing the state value by 1
  function nextSlide() {
    setSlide(slide === currentProperty.pictures.length - 1 ? 0 : slide + 1);
  }

  // Function decreasing the state value by 1
  function prevSlide() {
    setSlide(slide === 0 ? currentProperty.pictures.length - 1 : slide - 1);
  }

  return (
    <section className="carrousel">
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ color: "#ffffff" }}
        className={
          // Hide the arrow if the number of slides is less than 2
          currentProperty.pictures.length < 2 ? "hidden" : "arrow arrow-left"
        }
        onClick={prevSlide}
      />
      {/* Retrieves the list of images to display in the slideshow */}
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
        className={
          // Hide the arrow if the number of slides is less than 2
          currentProperty.pictures.length < 2
            ? "arrow hidden"
            : "arrow arrow-right"
        }
        onClick={nextSlide}
      />
      {/* Active slide number indicator */}
      <span
        className={
          // Hide the indicator if the number of slides is less than 2
          currentProperty.pictures.length < 2 ? "indicator hidden" : "indicator"
        }
      >
        {`${slide + 1}/${currentProperty.pictures.length}`}
      </span>
    </section>
  );
}

export default Slideshow;
