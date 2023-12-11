import CityList from './City/CityList';
import HotelList from './Hotel/HotelList';
import TypeList from './Type/TypeList';

import cityData from './city.json';
import propertyType from './type.json';
import hotelList from './hotel_list.json';

import './Content.css';

function Content() {
  return (
    <div className="bodycontent">
      <div className="bodycontent-container">
        <div className="destination-city">
          <CityList cityData={cityData} />
        </div>

        <div className="destination-type">
          <h2> Browse by property type</h2>
          <div className="property-list">
            <TypeList propertyType={propertyType} />
          </div>
        </div>

        <div className="destination-hotel">
          <h2> Homes guests love</h2>
          <div className="hotel-list">
            <HotelList hotelList={hotelList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
