function PropertyTag({ currentProperty }) {
  return (
    <div className="tags-container">
      {currentProperty.tags.map((tag, i) => {
        return (
          <div key={i} className="tags">
            <span>{tag}</span>
          </div>
        );
      })}
    </div>
  );
}

export default PropertyTag;
