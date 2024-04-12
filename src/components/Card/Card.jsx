import { NavLink } from "react-router-dom";

function Card({ propertiesDatasObj }) {
  return (
    <NavLink to={`/card/${propertiesDatasObj.id}`} key={propertiesDatasObj.id}>
      <article>
        <img
          src={propertiesDatasObj.cover}
          alt={`${propertiesDatasObj.title} pict`}
        />
        <h2>{propertiesDatasObj.title}</h2>
      </article>
    </NavLink>
  );
}

export default Card;
