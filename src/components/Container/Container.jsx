import Card from "../Card/Card";
import { useEffect, useState } from "react";
import { getProperties } from "../../api/api";

function Container() {
  const [properties, setProperties] = useState([]);

  // Retrieve properties data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProperties();
        setProperties(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des locations:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main id="card-list">
      {/* Create a card for each property */}
      {properties.map((property) => (
        <Card propertiesDatasObj={property} key={property.id} />
      ))}
    </main>
  );
}

export default Container;
