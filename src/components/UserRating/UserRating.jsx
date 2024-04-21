import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function UserRating({ currentProperty }) {
  // Creates an array with five indexes and compares it to the rating property
  const ratedStars = Array.from(
    { length: 5 },
    (_, i) => i < currentProperty.rating
  );

  return (
    <div className="user-rating">
      {/* Generate a solid star if the value is true and an empty star if the value is false */}
      {ratedStars.map((rated, i) => (
        <span key={i}>
          {rated ? (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#ff6060" }}
              className="star"
            />
          ) : (
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "#e3e3e3" }}
              className="star"
            />
          )}
        </span>
      ))}
    </div>
  );
}

export default UserRating;
