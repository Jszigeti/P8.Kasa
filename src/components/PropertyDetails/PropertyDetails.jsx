import PropertyInfo from "../PropertyInfo/PropertyInfo";
import UserInfo from "../UserInfo/UserInfo";

function PropertyDetails({ currentProperty }) {
  return (
    <section className="property-details">
      <PropertyInfo currentProperty={currentProperty} />
      <UserInfo currentProperty={currentProperty} />
    </section>
  );
}

export default PropertyDetails;
