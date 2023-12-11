import { Link } from 'react-router-dom';

const Hotel = ({ name, city, price, rate, type, image_url }) => {
  return (
    <>
      <img alt={name} src={image_url} />
      <div className="hotel-describe">
        <Link to="/detail">
          <h3>{name}</h3>
        </Link>
        <p className="hotel-city">{city}</p>
        <p className="hotel-price"> Starting from ${price}</p>
        <p className="hotel-score">
          <span className="rate">{rate}</span>
          <span className="rate_text">{type}</span>
        </p>
      </div>
    </>
  );
};

export default Hotel;
