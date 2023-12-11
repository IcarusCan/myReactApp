import { Fragment } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const searchParams = useSearchParams()[0];
  const navigate = useNavigate();
  const location = useLocation();

  const isSortingAscending = searchParams.get("sort")
    ? searchParams.get("sort") === "asc"
    : true;

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const quoteList = sortedQuotes.map((quote) => (
    <QuoteItem
      key={quote.id}
      id={quote.id}
      author={quote.author}
      text={quote.text}
    />
  ));

  const changeSortingHandler = () => {
    navigate(
      `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button type="button" onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>{quoteList}</ul>
    </Fragment>
  );
};

export default QuoteList;
