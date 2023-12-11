import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MoviesList = (props) => {
  return (
    <ul className={classes["movie-list"]}>
      {props.movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
