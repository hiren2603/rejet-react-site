import React from 'react'
import classes from './Uv.module.css'
import { uvData, uvApps, uvFeatures } from './../../helpers/uvData';
import uvImg from "../../assets/uv.png";
import samples from '../../assets/uv_samples.png'
import { Heading, ProductButton } from './../../components';


const Uv = () => {
  return (
    <div className={classes.product__container}>
      <h1 className={classes.product__heading}>UV Laser Marking System</h1>
      <div className={classes.uv__laser__container}>
        <Heading name='UV' type='Flying Laser' />
        <div className={classes.uv__laser__img__container}>
          <img src={uvImg} alt="co2" className={classes.uv__laser__img} />
          <div className={classes.button__container}>
            <ProductButton />
          </div>
           {/* ---------------------- Samples container -------------- */}
           <div className={classes.uv__sample__container}>
              <h4 className={classes.uv__model__heading}>Print Samples</h4>
              <img className={classes.uv__font__sample} src={samples} alt="samples" />
            </div>
            {/* ------------------- Sample Container end --------------- */}
          <div className={classes.uv__applicable__products}>
            <h4 className={classes.uv__laser__model__heading}>
              Applicable Products
            </h4>
            {uvApps.map((item, index) => {
              return <li key={index} className={classes.uv__app__text}> {item}</li>;
            })}
          </div>
        </div>
        <div className={classes.uv__laser__info__container}>
          <div className={classes.uv__laser__model}>
            <h4 className={classes.uv__laser__model__heading}>
              {uvData[0].model}
            </h4>
            <li>
              <b>Laser Model:</b>
              {uvData[0].model}
            </li>
            <li>
              <b>Laser Type:</b>
              {uvData[0].type}
            </li>
            <li>
              <b>Laser Power:</b>
              {uvData[0].power}
            </li>
            <li>
              <b>Electrical Requirement:</b>
              {uvData[0].electrical_req}
            </li>
            <li>
              <b>Temperature:</b>
              {uvData[0].temp}
            </li>
            <li>
              <b>Humidity:</b>
              {uvData[0].humidity}
            </li>
            <li>
              <b>Cooling Method:</b>
              {uvData[0].cooling}
            </li>
            <li>
              <b>Wavelengths:</b>
              {uvData[0].wavelength}
            </li>
            <li>
              <b>Marking Area:</b>
              {uvData[0].mark_area}
            </li>
            <li>
              <b>Software:</b>
              {uvData[0].software}
            </li>
            <li>
              <b>Depth of Engraving:</b>
              {uvData[0].depth}
            </li>
            <li>
              <b>Laser Source:</b>
              {uvData[0].source}
            </li>
            <li>
              <b>Laser Guide:</b>
              {uvData[0].laser_guide}
            </li>
            <li>
              <b>Marking Speed:</b>
              {uvData[0].mark_speed}
            </li>
            <li>
              <b>Marking Formate:</b>
              {uvData[0].format}
            </li>
            <li>
              <b>Language Support:</b>
              {uvData[0].language}
            </li>
          </div>
        </div>
        <div className={classes.uv__features__container}>
          <h2 className={classes.features__heading}>Features</h2>
          {
            uvFeatures.map((item, index) => {
              return <li key={index} className={classes.uv__feature__list}>{item}</li>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Uv
