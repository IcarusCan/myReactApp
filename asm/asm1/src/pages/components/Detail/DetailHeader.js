import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const DetailHeader = ({ name, address, distance, price }) => {
  return (
    <>
      <div className="detail-header-info">
        <h1>{name}</h1>
        <p className="header-address">
          <span>
            {/* Using FA font by individual import */}
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span>{address}</span>
        </p>
        <p className="header-distance">{distance}</p>
        <p className="header-price">{price}</p>
      </div>
      <button className="btn btn-reserve">Reserve or Book Now!</button>
    </>
  );
};

export default DetailHeader;
