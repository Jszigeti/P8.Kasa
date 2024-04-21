function Banner({ banner, lineOne, lineTwo }) {
  return (
    <div id="banner">
      <img src={banner} alt="Banner" />
      <div>
        {/* Allows you to separate text when switching to mobile mode */}
        <h1>{lineOne}</h1>
        <h2>{lineTwo}</h2>
      </div>
    </div>
  );
}

export default Banner;
