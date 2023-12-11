import React from "react";

// For context using, create a context first
const RequestContext = React.createContext({
  fetchData: {},
  img_base_url: "",
  isLoading: true,
});

export default RequestContext;
