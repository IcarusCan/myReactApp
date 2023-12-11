import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";

const FIREBASE_DOMAIN =
  "https://my-react-e95d7-default-rtdb.asia-southeast1.firebasedatabase.app";

const DetailLayout = (props) => {
  const { quoteId } = useParams();
  const [quoteDetail, setQuoteDetail] = useState({});

  useEffect(() => {
    const getSingleQuote = async (id) => {
      const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${id}.json`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch quote.");
      }

      setQuoteDetail({
        id,
        ...data,
      });
    };

    getSingleQuote(quoteId);
  }, [quoteId]);

  return (
    <>
      <HighlightedQuote text={quoteDetail.text} author={quoteDetail.author} />
    </>
  );
};

export default DetailLayout;
