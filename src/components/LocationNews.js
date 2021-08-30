import "../App.css";

const LocationNews = () => {
  return (
    <div className="locationnews">
      <h3>Location News</h3>
      <div className="locationbox">
        <p>Get Location News</p>
        <form action="">
          <input
            type="text"
            placeholder="Enter Your Location"
            required={true}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default LocationNews;
