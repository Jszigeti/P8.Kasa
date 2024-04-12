function PropertyTitle({ currentProperty }) {
  return (
    <>
      <h1 className="property-title">{currentProperty.title}</h1>
      <p className="property-location">{currentProperty.location}</p>
    </>
  );
}

export default PropertyTitle;
