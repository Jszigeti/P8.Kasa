import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function UserRating({ currentProperty }) {
  const filledStars = Array.from(
    { length: 5 },
    (_, i) => i < currentProperty.rating
  );

  return (
    <div className="user-rating">
      {filledStars.map((filled, i) => (
        <span key={i}>
          {filled ? (
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
