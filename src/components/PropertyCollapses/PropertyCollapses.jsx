import Collapse from "../Collapse/Collapse";

function PropertyCollapses({ currentProperty }) {
  // Create a list with each of the equipment listed in the data
  const equipmentsList = currentProperty.equipments.map((equip, i) => {
    return <li key={i}>{equip}</li>;
  });

  return (
    <section className="property-collapses">
      <Collapse title="Description" content={currentProperty.description} />
      <Collapse title="Équipements" content={equipmentsList} />
    </section>
  );
}

export default PropertyCollapses;
