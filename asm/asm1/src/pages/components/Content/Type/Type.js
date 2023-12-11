const Type = ({ name, count, image }) => {
  return (
    <>
      <img src={image} alt={name} />
      <div className="property-describe">
        <h3>{name}</h3>
        <p>{count} hotels</p>
      </div>
    </>
  );
};

export default Type;
