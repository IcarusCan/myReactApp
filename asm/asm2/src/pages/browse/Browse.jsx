import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Movies from "../../components/Movies/Movies";

function Browse() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Banner />
        <Movies />
      </div>
    </div>
  );
}

export default Browse;
