import { useCallback, useState } from "react";

// Custom hook for fetching data
const useHttp = () => {
  // State variable store fetching status
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  // Function declaration for fetching the data
  // useCallback to optimize
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    // Update state variables
    setIsLoading(true);
    setHttpError(null);

    try {
      const options = {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      };

      // Fetch the data
      const response = await fetch(requestConfig.url, options);

      // Checking condition
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      // Apply the function to the data result got from fetch
      applyData(data);
    } catch (error) {
      console.log(error.message);
      setHttpError(error.message);
    }

    // Update state variables
    setIsLoading(false);
  }, []);

  // Return the object that content the using function and state
  return {
    isLoading,
    httpError,
    sendRequest,
  };
};

export default useHttp;
