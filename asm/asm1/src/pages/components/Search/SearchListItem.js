const SearchListItem = ({
  name,
  distance,
  tag,
  type,
  description,
  free_cancel,
  price,
  rate,
  rate_text,
  image_url,
}) => {
  return (
    <div className="search-list-item">
      <div className="search-list-item__pic">
        <img alt={name} src={image_url} />
      </div>

      <div className="search-list-item__detail">
        <div className="item__header">
          <h2>{name}</h2>
          <div className="rating">
            <p className="rate_text">{rate_text}</p>
            <p className="rate">{rate}</p>
          </div>
        </div>

        <div className="item__inf">
          <div>
            <p className="inf inf-distance">{distance} from center</p>
            <p className="inf inf-tag">
              <span>{tag}</span>
            </p>
            <p className="inf inf-description">{description}</p>
            <p className="inf inf-type">{type}</p>
          </div>

          <div className="inf-price">
            <p>${price}</p>
            <p>Includes taxes and fees</p>
          </div>
        </div>

        <div className="item__checking">
          <div className="free-cancel">
            {free_cancel ? (
              <div>
                <p>Free cancellation</p>
                <p>You can cancel later, so lock in this great price today!</p>
              </div>
            ) : (
              <></>
            )}
          </div>

          <button className="btn btn-avail">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
