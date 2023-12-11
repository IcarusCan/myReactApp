import React, { useState, useContext, useEffect } from "react";
import MovieList from "../Movies/MovieList";
import MovieDetail from "../Movies/MovieDetail";
import RequestContext from "../../store/request-context";
import useHttp from "../../Hooks/useHttp";
import styles from "./ResultList.module.css";
import { API_KEY } from "../../Env/api-key";

const ResultList = (props) => {
  // Use the context
  const reqCtx = useContext(RequestContext);
  // Use the custom hook for fetching data
  const { sendRequest: fetchData } = useHttp();
  // State variable for result list rendering
  const [resultLists, setResultLists] = useState([]);
  // State variable for movie detail
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieDetailData, setMovieDetailData] = useState({
    id: null,
    name: "",
    release_date: "",
    vote_average: null,
    overview: "",
    backdrop: "",
  });

  useEffect(() => {
    // Variable for prevent race codition during fetch data
    let ignore = false;

    // Function handler for structuring the search's result data
    const transformSearchData = (data) => {
      let resultList = [];
      let resultItem = {
        id: null,
        type: "searchResult",
        name: "",
        release_date: "",
        vote_average: null,
        overview: "",
        backdrop: "",
        poster_path: "",
      };

      // Structuring the result item
      data.results
        .filter((item) => item.backdrop_path !== null)
        .forEach((element) => {
          resultItem = {
            ...resultItem,
            id: element.id,
            name: element.name || element.title,
            release_date: element.release_date || element.first_air_date,
            vote_average: element.vote_average,
            overview: element.overview,
            backdrop: element.backdrop_path,
            poster_path: element.poster_path,
          };

          resultList.push(resultItem);
        });

      // Update the result list
      setResultLists(resultList);
      setShowMovieDetail(false);
    };

    // Get the movie id that is used to fetch detail data
    if (!ignore && props.onSearchList.query.trim().length !== 0) {
      fetchData(
        {
          url: `https://api.themoviedb.org/3/search/movie?query=${props.onSearchList.query}&api_key=${API_KEY}&language=en-US`,
        },
        transformSearchData
      );
    } else if (!ignore && props.onSearchList.reset) {
      setResultLists([]);
    }

    return () => {
      ignore = true;
    };
  }, [fetchData, props.onSearchList]);

  // Function handler for showing movie detail
  const movieClickHandler = (e) => {
    // Check if the img is clicked
    const isClicked = e.target.closest("img");
    if (!isClicked) {
      return;
    }

    // Get the movie ID and search in the list
    const movie_id = +e.target.dataset.movieId;
    const resultIndex = resultLists.findIndex((item) => item.id === movie_id);

    // Then update the state variable for movie detail rendering
    setMovieDetailData({
      ...movieDetailData,
      id: resultLists[resultIndex].id,
      name: resultLists[resultIndex].name,
      release_date: resultLists[resultIndex].release_date,
      vote_average: resultLists[resultIndex].vote_average,
      overview: resultLists[resultIndex].overview,
      backdrop: `${reqCtx.img_base_url}${resultLists[resultIndex].backdrop}`,
    });

    // Checking condition for showing the movie detail
    if (!movieDetailData.id || movieDetailData.id === movie_id) {
      setShowMovieDetail((prevShowed) => !prevShowed);
    }
  };

  return (
    <div className={styles.resultLists}>
      <h3>Search Result</h3>
      <div className={styles.results} onClick={movieClickHandler}>
        <MovieList
          list={resultLists}
          imgBasePath={reqCtx.img_base_url}
          forSearch={true}
        />
        {showMovieDetail ? <MovieDetail movieData={movieDetailData} /> : <></>}
      </div>
    </div>
  );
};

export default ResultList;
