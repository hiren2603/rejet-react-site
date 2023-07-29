import React from "react";
import classes from "./Map.module.css";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const Map = () => {
  return (
    <div className={classes.product__container}>
      <h2 className={classes.map__title}>Find Us On Map</h2>
      <span className={classes.title__devider}></span>
      <div className={classes.map__container}>
        <iframe
          title="map"
          samesite="None"
          secure="true"
          loading="lazy"
          allowFullScreen
          src={API_KEY}
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

// <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
// src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJq8A_Pl41WDkR4c5m7IpmRK0&key=AIzaSyDaE3eYhs4Y67lge06jzExKmuyVMdai4hI"></iframe>
