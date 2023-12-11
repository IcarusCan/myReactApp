import React, { useEffect, useState } from "react";
import RequestContext from "./request-context";
import { API_KEY } from "../Env/api-key";

const defaultApiUrl = "https://api.themoviedb.org/3";
const img_base_url = "https://image.tmdb.org/t/p/original";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&&with_genres=99`,
};

const RequestProvider = (props) => {
  // State variable, keeping the fetching data infomation
  // and some info for using in some component
  const [fetchedData, setFetchedData] = useState({
    fetchData: {},
    img_base_url: img_base_url,
    isLoading: true,
  });

  // useEffect for getting the data from API
  // Run once when starting app, get the whole data for render
  useEffect(() => {
    // Variable for prevent race codition during fetch data
    let ignore = false;

    // Declare a fetch function for using
    const fetchData = async (requestsUrl) => {
      // Prepare the array for fetch data
      let requestArray = [];
      for (const key in requestsUrl) {
        requestArray.push(`${defaultApiUrl}${requestsUrl[key]}`);
      }

      try {
        // Fetch all data in parallel, use Promise.all for waiting the result
        const fetchRequests = requestArray.map((url) => fetch(url));
        const responses = await Promise.all(fetchRequests);

        // Checking the responses for errors
        if (responses.some((response) => !response.ok)) {
          throw new Error("One or more requests failed.");
        }

        // Get the final result in fetching data
        const dataPromises = responses.map((response) => response.json());
        const responseData = await Promise.all(dataPromises);

        // De-structuring the array result into specific type
        const [
          fetchTrending,
          fetchNetflixOriginals,
          fetchTopRated,
          fetchActionMovies,
          fetchComedyMovies,
          fetchHorrorMovies,
          fetchRomanceMovies,
          fetchDocumentaries,
        ] = responseData
          .map((data) => data.results)
          .map((res) => res.filter((item) => item.backdrop_path !== null));

        // Update the state variable
        setFetchedData((prevFetched) => {
          return {
            ...prevFetched,
            fetchData: {
              fetchTrending,
              fetchNetflixOriginals,
              fetchTopRated,
              fetchActionMovies,
              fetchComedyMovies,
              fetchHorrorMovies,
              fetchRomanceMovies,
              fetchDocumentaries,
            },
            isLoading: false,
          };
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    // Call the function to fetch data
    if (!ignore) {
      fetchData(requests);
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <RequestContext.Provider value={fetchedData}>
      {props.children}
    </RequestContext.Provider>
  );
};

export default RequestProvider;
