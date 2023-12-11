import Type from './Type';

const TypeList = ({ propertyType }) => {
  return (
    <>
      {/* Scan the props to render list */}
      {propertyType.map((data, index) => (
        <div key={index} className="property-item">
          <Type name={data.name} count={data.count} image={data.image} />
        </div>
      ))}
    </>
  );
};

export default TypeList;
