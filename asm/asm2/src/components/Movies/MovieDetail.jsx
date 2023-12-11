import React, { useState, useEffect } from "react";
import useHttp from "../../Hooks/useHttp";
import styles from "./MovieDetail.module.css";
import { API_KEY } from "../../Env/api-key";

const MovieDetail = (props) => {
  // Use the custom hook for fetching data
  const { sendRequest: fetchData } = useHttp();
  // State variable store video key info
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    // Variable for prevent race codition during fetch data
    let ignore = false;

    // Function handler for video data after fetching
    const transformVideoData = (data) => {
      let key = "";

      // Get the result that contain the Trailer type
      const trailerResult = data.results
        .filter((el) => el.site === "YouTube" && el.type === "Trailer")
        .filter(
          (res) =>
            res.official === true &&
            (res.name.includes("Trailer") ||
              res.name.includes(props.movieData.name))
        );

      if (trailerResult.length !== 0) {
        // Choose the 1st result in list
        key = trailerResult[0].key;
      } else {
        // If no Trailer then
        // Get the result that contain the Teaser type
        const teaserResult = data.results
          .filter((el) => el.site === "YouTube" && el.type === "Teaser")
          .filter(
            (res) =>
              res.official === true &&
              (res.name.includes("Teaser") ||
                res.name.includes(props.movieData.name))
          );

        if (teaserResult.length !== 0) {
          // Choose the 1st result in list
          key = teaserResult[0].key;
        }
      }

      // Update variable use for display the video
      setVideoKey(key);
    };

    // Get the movie id that is used to fetch detail data
    if (!ignore && props.movieData.id) {
      fetchData(
        {
          url: `https://api.themoviedb.org/3/movie/${props.movieData.id}/videos?api_key=${API_KEY}`,
        },
        transformVideoData
      );
    }

    return () => {
      ignore = true;
    };
  }, [fetchData, videoKey, props.movieData.name, props.movieData.id]);

  return (
    <div className={styles["movie-detail"]}>
      <div className={styles.info}>
        <div className={styles.header}>
          <h2>{props.movieData.name}</h2>
        </div>

        <div className={styles.voting}>
          <p>Release Date: {props.movieData.release_date}</p>
          <p>Vote: {`${props.movieData.vote_average} / 10`}</p>
        </div>

        <div className={styles.overview}>
          <p>{props.movieData.overview}</p>
        </div>
      </div>

      <div className={styles.video}>
        {videoKey.length !== 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={`${props.movieData.name} Official Video Trailer`}
          ></iframe>
        ) : (
          //  Render as backdrop img if there is no video
          <img src={props.movieData.backdrop} alt="" />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
