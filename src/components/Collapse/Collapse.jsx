import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, content }) {
  // Create a state representing the opening and closing of the collapse
  const [isOpen, setIsOpen] = useState(false);

  //Function to change state
  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse-container">
      {/* State changes on click */}
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
        <FontAwesomeIcon
          icon={faChevronUp}
          style={{ color: "#ffffff" }}
          className={`collapse-arrow ${isOpen ? "open" : "closed"}`}
        />
      </button>
      <div className={`collapse-content ${isOpen ? "open" : "closed"}`}>
        {isOpen && content}
      </div>
    </div>
  );
}

export default Collapse;
