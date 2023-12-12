import { useParams } from "react-router-dom";

const DetailPage = (props) => {
  const params = useParams();

  return (
    <>
      <h1> DETAIL PAGE</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default DetailPage;
