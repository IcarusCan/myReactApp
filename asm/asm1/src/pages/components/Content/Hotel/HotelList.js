import Hotel from './Hotel';

const HotelList = ({ hotelList }) => {
  return (
    <>
      {/* Scan the props to render list */}
      {hotelList.map((data, index) => (
        <div key={index} className="hotel-item">
          <Hotel
            name={data.name}
            city={data.city}
            price={data.price}
            rate={data.rate}
            type={data.type}
            image_url={data.image_url}
          />
        </div>
      ))}
    </>
  );
};

export default HotelList;
