const SearchPopup = () => {
  return (
    <div className="search-popup">
      <div>
        <h2>Search</h2>
      </div>

      <form className="search-form-input">
        <div>
          <label htmlFor="destination">Destination</label>
          <input id="destination" name="destination" type="text" />
        </div>

        <div>
          <label htmlFor="check-in-date">Check-in Date</label>
          <input
            id="check-in-date"
            name="check-in-date"
            type="text"
            placeholder="06/24/2022 to 06/24/2022"
          />
        </div>

        <div className="search-input-options">
          <p>Option</p>

          <div className="options-input">
            <div>
              <label htmlFor="min">Min price per night</label>
              <input id="min" name="min" type="number" />
            </div>

            <div>
              <label htmlFor="max">Max price per night</label>
              <input id="max" name="max" type="number" />
            </div>

            <div>
              <label htmlFor="adult">Adult</label>
              <input id="adult" name="adult" type="number" placeholder="1" />
            </div>

            <div>
              <label htmlFor="children">Children</label>
              <input
                id="children"
                name="children"
                type="number"
                placeholder="0"
              />
            </div>

            <div>
              <label htmlFor="room">Room</label>
              <input id="room" name="room" type="number" placeholder="1" />
            </div>
          </div>
        </div>

        <button className="btn btn-search-detail">Search</button>
      </form>
    </div>
  );
};

export default SearchPopup;
