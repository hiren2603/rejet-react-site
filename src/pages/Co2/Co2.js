import React from 'react'
import classes from './Co2.module.css'
import laserImg from "../../assets/co2.png";
import { Co2laserData, commonSpace, applications, benifits } from "../../helpers/co2Data";
import samples from "../../assets/co2_samples.png";
import { Heading, ProductButton } from '../../components';

const Co2 = () => {
  return (
    <div className={classes.product__container}>
      <h1 className={classes.product__heading}>CO2 Laser Marking System</h1>
      <div className={classes.co2__laser__container}>
        <Heading name='PETMARK' type='Flying Laser' />
        <div className={classes.co2__info__container}>
          <div className={classes.co2__model}>
            <h4 className={classes.co2__model__heading}>
              {Co2laserData[0].model}
            </h4>
            <li>
              <b>Laser Power:</b>
              {Co2laserData[0].power}
            </li>
            <li>
              <b>Marking Speed:</b>
              {Co2laserData[0].mark_speed}
            </li>
            <li>
              <b>Marking Area:</b>
              {Co2laserData[0].mark_area}
            </li>
            <li>
              <b>Machine Speed:</b>
              {Co2laserData[0].machine_speeed}
            </li>
          </div>
          <div className={classes.co2__model}>
            <h4 className={classes.co2__model__heading}>
              {Co2laserData[1].model}
            </h4>
            <li>
              <b>Laser Power:</b>
              {Co2laserData[1].power}
            </li>
            <li>
              <b>Marking Speed:</b>
              {Co2laserData[1].mark_speed}
            </li>
            <li>
              <b>Marking Area:</b>
              {Co2laserData[1].mark_area}
            </li>
            <li>
              <b>Machine Speed:</b>
              {Co2laserData[1].machine_speeed}
            </li>
          </div>
          <div className={classes.common__spaci}>
            <h4 className={classes.co2__model__heading}>
              Other Spacifications
            </h4>
            <li>
              <b>Laser Type:</b>
              {commonSpace[0].type}
            </li>
            <li>
              <b>Electrical Requirement:</b>
              {commonSpace[0].power_supply}
            </li>
            <li>
              <b>Operating Temperature:</b>
              {commonSpace[0].temp}
            </li>
            <li>
              <b>Humidity:</b>
              {commonSpace[0].humidity}
            </li>
            <li>
              <b>Wave Length:</b>
              {commonSpace[0].wave_length}
            </li>
            <li>
              <b>Laser Source:</b>
              {commonSpace[0].laser_source}
            </li>
            <li>
              <b>Depth of Engraving:</b>
              {commonSpace[0].depth}
            </li>
            <li>
              <b>Marking Format:</b>
              {commonSpace[0].format}
            </li>
            <li>
              <b>Language Ability:</b>
              {commonSpace[0].languages}
            </li>
            <li>
              <b>Gross Power:</b>
              {commonSpace[0].gross_pow}
            </li>
            <li>
              <b>Gross Weight:</b>
              {commonSpace[0].weight}
            </li>
          </div>
        </div>
        <div className={classes.co2__img__container}>
          <img src={laserImg} alt="co2" className={classes.co2__img} />
          <div className={classes.button__container}>
            <ProductButton />
          </div>
        </div>
        {/* ---------------- Sample Container ---------------------- */}
        <div className={classes.co2__sample__container}>
          <h4 className={classes.co2__model__heading}>Print Samples</h4>
          <img src={samples} alt="samples" />
          <div className={classes.applicable__products__container}>
            <h4 className={classes.co2__model__heading}>
              Applicable Products
            </h4>
            {
              applications.map((item, index) => { return <li key={index}>{item}</li> })
            }
          </div>
        </div>
        <div className={classes.benifits__container}>
          <h4 className={classes.co2__model__heading}>Benifits</h4>
          <ul>
            <li>{benifits[0].marking}</li>
            <li>{benifits[0].efficiency}</li>
            <li>{benifits[0].power}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Co2
