import PropertyTag from "../PropertyTag/PropertyTag";
import PropertyTitle from "../PropertyTitle/PropertyTitle";

function PropertyInfo({ currentProperty }) {
  return (
    <div>
      <PropertyTitle currentProperty={currentProperty} />
      <PropertyTag currentProperty={currentProperty} />
    </div>
  );
}

export default PropertyInfo;
