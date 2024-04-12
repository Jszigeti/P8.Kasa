import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse-container">
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
