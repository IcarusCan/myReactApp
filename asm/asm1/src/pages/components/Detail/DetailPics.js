const DetailPics = ({ photos }) => {
  return (
    <>
      {photos.map((photo, index) => (
        <img key={index} alt={photo} src={photo} />
      ))}
    </>
  );
};

export default DetailPics;
