import React, { useEffect, useState } from "react";
import QuoteList from "../quotes/QuoteList";
import NoQuotesFound from "../quotes/NoQuotesFound";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuotesLayout = (props) => {
  const [status, setStatus] = useState("pending");
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    const fetchQuotesHandler = async () => {
      try {
        setStatus("pending");
        const response = await fetch(
          "https://my-react-e95d7-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        const loadedQuotes = [];
        for (const key in data) {
          loadedQuotes.push({
            id: key,
            ...data[key],
            // author: data[key].author,
            // text: data[key].text,
          });
        }
        setQuotesList(loadedQuotes);
        setStatus("loaded");
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchQuotesHandler();
  }, []);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "loaded" && quotesList.length === 0) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotesList} />;
};

export default QuotesLayout;
