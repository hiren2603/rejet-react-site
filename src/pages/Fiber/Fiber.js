import React from "react";
import laserImg from "../../assets/fly_fiber.png";
import samples from '../../assets/fiber_samples.png'
import classes from "./Fiber.module.css";
import { fiberData, features, applications } from "../../helpers/fiberData";
import { Heading, ProductButton } from './../../components';

const Fiber = () => {
  return (
    <div className={classes.product__container}>
      <h1 className={classes.product__heading}>Fiber Laser Marking System</h1>
      <div className={classes.fiber__laser__container}>
        <Heading name='BETABEAM' type='Fiber Laser' />
        <div className={classes.fiber__laser__img__container}>
          <img src={laserImg} alt="co2" className={classes.fiber__laser__img} />
          <div className={classes.button__container}>
            <ProductButton />
          </div>
          {/* Sample Container */}
          <div className={classes.sample__container}>
            <h4 className={classes.fiber__model__heading}>Print Samples</h4>
            <img src={samples} alt="samples" className={classes.fiber__sample}/>
            <div className={classes.fiber__applicable__products}>
              <h4 className={classes.fiber__laser__model__heading}>
                Applicable Products
              </h4>
              {applications.map((item, index) => {
                return <li key={index} className={classes.fiber__app__text}> {item}</li>;
              })}
            </div>
          </div>
        </div>
        <div className={classes.fiber__laser__info__container}>
          <div className={classes.fiber__laser__model}>
            <h4 className={classes.fiber__laser__model__heading}>
              {fiberData[0].model}
            </h4>
            <li>
              <b>Laser Model:</b>
              {fiberData[0].model}
            </li>
            <li>
              <b>Laser Type:</b>
              {fiberData[0].type}
            </li>
            <li>
              <b>Laser Power:</b>
              {fiberData[0].power}
            </li>
            <li>
              <b>Electrical Requirement:</b>
              {fiberData[0].electrical_req}
            </li>
            <li>
              <b>Load:</b>
              {fiberData[0].load}
            </li>
            <li>
              <b>Temperature:</b>
              {fiberData[0].temp}
            </li>
            <li>
              <b>Humidity:</b>
              {fiberData[0].humidity}
            </li>
            <li>
              <b>Wavelengths:</b>
              {fiberData[0].wavelength}
            </li>
            <li>
              <b>Depth of Engraving:</b>
              {fiberData[0].depth}
            </li>
            <li>
              <b>Laser Source:</b>
              {fiberData[0].source}
            </li>
            <li>
              <b>Laser Guide:</b>
              {fiberData[0].laser_guide}
            </li>
            <li>
              <b>Marking Speed:</b>
              {fiberData[0].mark_speed}
            </li>
            <li>
              <b>Marking Area:</b>
              {fiberData[0].mark_area}
            </li>
            <li>
              <b>Machine Speed:</b>
              {fiberData[0].machine_speeed}
            </li>
            <li>
              <b>Marking Formate:</b>
              {fiberData[0].format}
            </li>
            <li>
              <b>Language Support:</b>
              {fiberData[0].language}
            </li>
          </div>
        </div>
        <div className={classes.fiber__features__container}>
          <h2 className={classes.fiber__laser__model__heading}>Features</h2>
          {features.map((item, index) => {
            return <li key={index} className={classes.fiber__feature__list}>{item}</li>
          })}
        </div>
      </div>
    </div>
  );
};

export default Fiber;
