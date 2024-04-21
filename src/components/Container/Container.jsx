import Card from "../Card/Card";
import { propertiesDatas } from "../../api/api";

function Container() {
  return (
    <main id="card-list">
      {/* Create a card for each property */}
      {propertiesDatas.map((property) => (
        <Card propertiesDatasObj={property} key={property.id} />
      ))}
    </main>
  );
}

export default Container;
