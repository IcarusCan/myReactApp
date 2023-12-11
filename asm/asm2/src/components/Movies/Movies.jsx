import React, { useContext, useState } from "react";
import MovieList from "./MovieList";
import styles from "./Movies.module.css";
import RequestContext from "../../store/request-context";
import MovieDetail from "./MovieDetail";

// Component for render a Header for each movie list
const Header = (props) => {
  let header;
  // Given name for each type of fetching
  if (props.type) {
    if (props.type === "fetchTrending") {
      header = <h2>Xu hướng</h2>;
    } else if (props.type === "fetchNetflixOriginals") {
      header = <></>;
    } else if (props.type === "fetchTopRated") {
      header = <h2>Xếp hạng cao</h2>;
    } else if (props.type === "fetchActionMovies") {
      header = <h2>Hành động</h2>;
    } else if (props.type === "fetchComedyMovies") {
      header = <h2>Hài</h2>;
    } else if (props.type === "fetchHorrorMovies") {
      header = <h2>Kinh dị</h2>;
    } else if (props.type === "fetchRomanceMovies") {
      header = <h2>Lãng mạn</h2>;
    } else if (props.type === "fetchDocumentaries") {
      header = <h2>Tài liệu</h2>;
    }
  }
  return header;
};

const Movies = (props) => {
  // Use the context data in this component for rendering movie list
  const reqCtx = useContext(RequestContext);

  // State variables for show movie detail
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [movieListIndex, setMovieListIndex] = useState(null);
  const [movieDetailData, setMovieDetailData] = useState({
    id: null,
    name: "",
    release_date: "",
    vote_average: null,
    overview: "",
    backdrop: "",
  });

  // Whether the fetching process is finished?
  // Check if the data is ready for using
  if (reqCtx.isLoading) {
    return <></>;
  }

  // Some variables for saving temporary data
  let all_movie_lists = [];
  let poster_list = [];

  // Scan through all data fetched which stored in the context
  for (const key in reqCtx.fetchData) {
    let backdrop_list = [];

    // The data that used for render poster
    if (key === "fetchNetflixOriginals") {
      for (let index = 0; index < 10; index++) {
        const element = reqCtx.fetchData[key][index];
        poster_list.push({
          id: element.id,
          type: key,
          poster_path: element.poster_path,
          name: element.name || element.title,
          release_date: element.release_date || element.first_air_date,
          vote_average: element.vote_average,
          overview: element.overview,
        });
      }

      // and the others data will render movie lists
    } else {
      for (let index = 0; index < reqCtx.fetchData[key].length; index++) {
        const element = reqCtx.fetchData[key][index];
        backdrop_list.push({
          id: element.id,
          type: key,
          backdrop_path: element.backdrop_path,
          name: element.name || element.title,
          release_date: element.release_date || element.first_air_date,
          vote_average: element.vote_average,
          overview: element.overview,
        });
      }
      all_movie_lists.push(backdrop_list);
    }
  }

  // Function handler for display movie detail when clicking on a movie img
  const handleMovieClick = (movieListIndexDataset, e) => {
    // Check if the img is clicked
    const isClicked = e.target.closest("img");
    if (!isClicked) {
      return;
    }

    // Get movie ID from custom dataset
    const movie_id = +e.target.dataset.movieId;

    // Find the corresponding movie in the movie lists
    // then get the detail info of that movie
    const movieIndex = all_movie_lists[movieListIndexDataset].findIndex(
      (item) => item.id === movie_id
    );
    const movieData = all_movie_lists[movieListIndexDataset][movieIndex];

    // Update the state variable for rendering movie detail
    setMovieDetailData({
      ...movieDetailData,
      id: movieData.id,
      name: movieData.name,
      release_date: movieData.release_date,
      vote_average: movieData.vote_average,
      overview: movieData.overview,
      backdrop: `${reqCtx.img_base_url}${movieData.backdrop_path}`,
    });

    // Logic for display the movie detail in correct div
    setMovieListIndex(movieListIndexDataset);
    if (!movieDetailData.id || movieDetailData.id === movie_id) {
      setShowMovieDetail((prevShowed) => !prevShowed);
    }
  };

  // JSX for poster rendering
  const posterContent = (
    <div className={styles.movies}>
      <MovieList list={poster_list} imgBasePath={reqCtx.img_base_url} />
    </div>
  );

  // JSX for movie lists rendering
  const movieListContent = all_movie_lists.map((item, index) => (
    <div
      key={index}
      data-movie-list={index}
      className={styles.movies}
      onClick={handleMovieClick.bind(null, index)}
    >
      <Header type={item[index].type} />
      <MovieList list={item} imgBasePath={reqCtx.img_base_url} />

      {index === movieListIndex && showMovieDetail ? (
        <MovieDetail movieData={movieDetailData} />
      ) : (
        <></>
      )}
    </div>
  ));

  return (
    <div className={styles["movies-container"]}>
      {posterContent}
      {movieListContent}
    </div>
  );
};

export default Movies;
