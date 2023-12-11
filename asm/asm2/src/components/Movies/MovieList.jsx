import React from "react";
import styles from "./MovieList.module.css";

const MovieList = (props) => {
  // CSS styles for re-use this component in Search
  const movieListStyles = props.forSearch
    ? `${styles["movie-list"]} ${styles["search-list"]}`
    : `${styles["movie-list"]}`;

  // Rendering content
  const content = (
    <div className={movieListStyles}>
      {props.list.length !== 0 ? (
        props.list.map((item) => (
          <div
            key={item.id}
            className={
              // If item obj content poster_path -> render item as poster
              item.poster_path
                ? `${styles.item}`
                : `${styles.item} ${styles.backdrop}`
            }
          >
            {
              // Render as poster for Original data and Search data
              item.type === "fetchNetflixOriginals" ||
              item.type === "searchResult" ? (
                <img
                  src={`${props.imgBasePath}${item.poster_path}`}
                  alt=""
                  data-movie-id={item.id}
                />
              ) : (
                <img
                  src={`${props.imgBasePath}${item.backdrop_path}`}
                  alt=""
                  data-movie-id={item.id}
                />
              )
            }
          </div>
        ))
      ) : (
        <p>No Results!</p>
      )}
    </div>
  );

  return <>{content}</>;
};

export default MovieList;
