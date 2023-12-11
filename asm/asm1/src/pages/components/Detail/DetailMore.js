const DetailMore = ({ title, description, nine_night_price }) => {
  return (
    <>
      <div className="detail-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="reserve-box">
        <h3>Perfect for a 9-night stay!</h3>
        <p>
          Located in the real heart of Krakow, this property has an excellent
          location score of 9.8!
        </p>
        <p className="nine-night">
          <span>${nine_night_price}</span> (9 nights)
        </p>
        <button className="btn btn-reserve">Reserve or Book Now!</button>
      </div>
    </>
  );
};

export default DetailMore;
