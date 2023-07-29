import React from "react";
import { desktopData, features, applications } from "../../helpers/desktopData";
import desktopImg from "../../assets/desktop.png";
import samples from '../../assets/desktop_samples.png';
import classes from "./Desktop.module.css";
import { Heading, ProductButton } from '../../components'

const Desktop = () => {
  return (
    <div className={classes.product__container}>
      <h1 className={classes.product__heading}>Desktop Laser Marking System</h1>
      <div className={classes.desktop__laser__container}>
        <Heading name='PLUTO' type='Desktop Laser' />
        <div className={classes.desktop__laser__info__container}>
          <div className={classes.desktop__laser__model}>
            <h4 className={classes.desktop__laser__model__heading}>
              {desktopData[0].model}
            </h4>
            <li>
              <b>Laser Model:</b>
              {desktopData[0].model}
            </li>
            <li>
              <b>Laser Type:</b>
              {desktopData[0].type}
            </li>
            <li>
              <b>Laser Power:</b>
              {desktopData[0].power}
            </li>
            <li>
              <b>Electrical Requirement:</b>
              {desktopData[0].electrical_req}
            </li>
            <li>
              <b>Load:</b>
              {desktopData[0].load}
            </li>
            <li>
              <b>Temperature:</b>
              {desktopData[0].temp}
            </li>
            <li>
              <b>Humidity:</b>
              {desktopData[0].humidity}
            </li>
            <li>
              <b>Wavelengths:</b>
              {desktopData[0].wavelength}
            </li>
            <li>
              <b>Depth of Engraving:</b>
              {desktopData[0].depth}
            </li>
            <li>
              <b>Laser Source:</b>
              {desktopData[0].source}
            </li>
            <li>
              <b>Laser Guide:</b>
              {desktopData[0].laser_guide}
            </li>
            <li>
              <b>Marking Speed:</b>
              {desktopData[0].mark_speed}
            </li>
            <li>
              <b>Marking Area:</b>
              {desktopData[0].mark_area}
            </li>
            <li>
              <b>Machine Speed:</b>
              {desktopData[0].machine_speeed}
            </li>
            <li>
              <b>Marking Formate:</b>
              {desktopData[0].format}
            </li>
            <li>
              <b>Language Support:</b>
              {desktopData[0].language}
            </li>
          </div>
          {/* Feature Container */}
          <div className={classes.desktop__features__container}>
            <h2 className={classes.features__heading}>Features</h2>
            {features.map((item, index) => {
              return (
                <li key={index} className={classes.desktop__feature__list}>
                  {item}
                </li>
              );
            })}
          </div>
          {/* Feature Container Ends */}
        </div>
        <div className={classes.desktop__laser__img__container}>
          <img
            src={desktopImg}
            alt="co2"
            className={classes.desktop__laser__img}
          />
          <div className={classes.button__container}>
            <ProductButton />
          </div>
          
          {/* ---------------- Sample Container ---------------------- */}
          <div className={classes.sample__container}>
            <h4 className={classes.desktop__model__heading}>Print Samples</h4>
            <img src={samples} alt="samples" />
            <div className={classes.desktop__applicable__products}>
              <h4 className={classes.desktop__laser__model__heading}>
                Applicable Products
              </h4>
              {applications.map((item, index) => {
                return (
                  <li key={index} className={classes.desktop__app__text}>
                    {item}
                  </li>
                );
              })}
            </div>
            </div>
          </div>
       
        {/* ---------------- Sample Container end---------------------- */}
      </div>
    </div>
  );
};

export default Desktop;
