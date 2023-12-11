const City = ({ name, subText, image }) => {
  return (
    <div className="city-info">
      <div className="city-describe">
        <h3>{name}</h3>
        <p>{subText}</p>
      </div>
      <img src={image} alt={subText} />
    </div>
  );
};

export default City;
