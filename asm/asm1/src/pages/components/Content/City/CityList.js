import City from './City';

const CityList = ({ cityData }) => {
  return (
    <>
      {/* Scan the props to render list */}
      {cityData.map((data, index) => (
        <div key={index} className="city-list">
          <City name={data.name} subText={data.subText} image={data.image} />
        </div>
      ))}
    </>
  );
};

export default CityList;
