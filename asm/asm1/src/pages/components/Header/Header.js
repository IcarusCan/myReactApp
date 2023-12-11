import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './Header.css';

// Handler for Search button
// Change to /search when clicked
const onSearchBtnHandler = e => {
  e.preventDefault();
  // Get the current location (current link address)
  const currentLocation = window.location.origin;
  window.location.replace(`${currentLocation}/search`);
};

// Format the date following DD-MM-YYYY
const formatDate = date => {
  return date.toLocaleDateString('en-GB');
};

function Header() {
  // State for showing modal DatePicker
  const [showModal, setShowModal] = useState(false);
  const [selectedDates, setSelectedDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // Handler for clicking on Input form
  const onShowModal = () => {
    setShowModal(prevShow => {
      return !prevShow;
    });
  };

  // Handler for selecting on DatePicker
  const handleSelect = ranges => {
    setSelectedDates([ranges.selection]);
    setShowModal(false);
  };

  return (
    <div className="homepage_header">
      <div className="homepage_header_container">
        <div className="header_info">
          <h1> A lifetime of discounts? It's Genius.</h1>
          <p>
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account
          </p>
          <button className="btn btn-register">Sign in / Register</button>
        </div>

        <div className="search_box">
          <form className="search_form">
            <div className="search_item">
              <div>
                <i className="fa fa-bed" />
              </div>
              <input
                id="whereToGo"
                type="text"
                placeholder="Where are you going?"
              />
            </div>

            <div className="search_item">
              <div>
                <i className="fa fa-calendar" />
              </div>
              <input
                id="dateToGo"
                type="text"
                placeholder="01-10-2023 to 12-10-2023"
                value={`${formatDate(
                  selectedDates[0].startDate
                )} to ${formatDate(selectedDates[0].endDate)}`}
                onClick={onShowModal}
                // Prevent user typing the input
                readOnly
              />
            </div>

            <div className="search_item">
              <div>
                <i className="fa fa-female" />
              </div>
              <input
                id="personToGo"
                type="text"
                placeholder="2 adults · 0 children · 1 room"
              />
            </div>

            <button className="btn btn-search" onClick={onSearchBtnHandler}>
              Search
            </button>
          </form>
          {/* Showing the modal here */}
          {showModal && (
            <div className="date-modal">
              <DateRange
                editableDateInputs={false}
                moveRangeOnFirstSelection={false}
                retainEndDateOnFirstSelection={true}
                className="date"
                minDate={new Date()}
                onChange={handleSelect}
                ranges={selectedDates}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
