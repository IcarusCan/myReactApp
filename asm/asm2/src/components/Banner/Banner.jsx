import React, { useContext } from "react";
import styles from "./Banner.module.css";
import RequestContext from "../../store/request-context";

const Banner = (props) => {
  // Use context in this component
  const reqCtx = useContext(RequestContext);

  // Whether the fetching process is finished?
  // Check if the data is ready for using
  if (reqCtx.isLoading) {
    return <></>;
  }

  // Random chosing a banner image
  let randomIndex = Math.floor(
    Math.random() * (reqCtx.fetchData.fetchNetflixOriginals.length - 1)
  );

  // Data for rendering the banner
  const bannerData = {
    name: reqCtx.fetchData.fetchNetflixOriginals[randomIndex].name,
    overview: reqCtx.fetchData.fetchNetflixOriginals[randomIndex].overview,
    backdrop_full_path:
      reqCtx.img_base_url +
      reqCtx.fetchData.fetchNetflixOriginals[randomIndex].backdrop_path,
  };

  return (
    <div className={styles.banner}>
      <div className={styles["hero-img-wrapper"]}>
        <img src={`${bannerData.backdrop_full_path}`} alt="" />
      </div>

      <div className={styles["fill-container"]}>
        <div className={styles.title}>{bannerData.name}</div>

        <div className={styles.actions}>
          <button>Play</button>
          <button>My List</button>
        </div>

        <div className={styles.info}>{bannerData.overview}</div>
      </div>
    </div>
  );
};

export default Banner;
