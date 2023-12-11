import React from "react";
import QuoteForm from "../quotes/QuoteForm";

const NewQuoteLayout = (props) => {
  const addQuoteHandler = async (formData) => {
    // Save to Realtime database
    await fetch(
      "https://my-react-e95d7-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuoteLayout;
