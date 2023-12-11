import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../../components/Search/SearchForm";
import ResultList from "../../components/Search/ResultList";

const Search = () => {
  // State variable store searching data
  const [searchData, setSearchData] = useState({
    query: "",
    reset: false,
  });

  // Function handler for update the query data for searching
  const searchMovieHandler = (key) => {
    setSearchData((prevData) => {
      return { ...prevData, query: key };
    });
  };

  // Function handler for reset the searching
  const resetMovieResultHandler = () => {
    setSearchData((prevData) => {
      return { ...prevData, query: "", reset: true };
    });
  };

  return (
    <div className="app">
      <Navbar />
      <div className="search">
        <SearchForm
          onSearchForm={searchMovieHandler}
          onResetResult={resetMovieResultHandler}
        />
        <ResultList onSearchList={searchData} />
      </div>
    </div>
  );
};

export default Search;
