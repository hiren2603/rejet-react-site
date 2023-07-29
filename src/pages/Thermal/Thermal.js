import React from "react";
import TIJImg from "../../assets/TIJ.png";
import samples from '../../assets/tij_samples.png'
import classes from "./Thermal.module.css";
import {
  tijData,
  commonSpace,
  features,
  applications,
} from "../../helpers/tijData";
import { Heading ,Handy, ProductButton } from "../../components";

const TIJ = () => {
  return (
    <div className={classes.product__container}>
      <h1 className={classes.product__heading}>Thermal Inkjet Printers</h1>
      <div className={classes.tij__container}>
      <Heading name="TP 01/02" type="TIJ Printers"/>
      
        {/* ---------------- Info Container -------------------- */}
        <div className={classes.tij__info__container}>
          <div className={classes.tij__model}>
            <h4 className={classes.tij__model__heading}>{tijData[0].model}</h4>
            <li>
              <b>Dimension:</b>
              {tijData[0].dimension}
            </li>
            <li>
              <b>Weight:</b>
              {tijData[0].weight}
            </li>
          </div>
          <div className={classes.tij__model}>
            <h4 className={classes.tij__model__heading}>{tijData[1].model}</h4>
            <li>
              <b>Dimension:</b>
              {tijData[1].dimension}
            </li>
            <li>
              <b>Weight:</b>
              {tijData[1].weight}
            </li>
          </div>
          <div className={classes.common__spaci}>
            <h4 className={classes.tij__model__heading}>
              Other Spacifications
            </h4>
            <li>
              <b>Display:</b>
              {commonSpace[0].display}
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
              <b>Resolution:</b>
              {commonSpace[0].resolution}
            </li>
            <li>
              <b>Print Speed:</b>
              {commonSpace[0].print_speed}
            </li>
            <li>
              <b>Density:</b>
              {commonSpace[0].density}
            </li>
            <li>
              <b>Throw Distance:</b>
              {commonSpace[0].throw_distance}
            </li>
          </div>
          {/* --------------- Features ------------------ */}
          <div className={classes.tij__features__container}>
            <h4 className={classes.tij__model__heading}>Features</h4>
            <li>
              <b>Printability:</b>
              {features[0].printability}
            </li>
            <li>
              <b>Database:</b>
              {features[0].data_format}
            </li>
            <li>
              <b>External Connections:</b>
              {features[0].connections}
            </li>
            <li>
              <b>Memory:</b>
              {features[0].memory}
            </li>
            <li>
              <b>Languages:</b>
              {features[0].languages}
            </li>
            <li>
              <b>Printable Characters:</b>
              {features[0].printable_characters}
            </li>
            <li>
              <b>Ink Solutions:</b>
              {features[0].ink_solutions}
            </li>
            <li>
              <b>Supported Ink Colors:</b>
              {features[0].ink_colours}
            </li>
          </div>
          {/* ---------------- Features end ------------------------ */}
        </div>
        {/* ---------------- Info Container end ------------------ */}
        {/* ---------------- Image Container ---------------------- */}
        <div className={classes.tij__img__container}>
          <img src={TIJImg} alt="tij" className={classes.tij__img} />
          <div className={classes.button__container}>
            <ProductButton />
          </div>
          <div className={classes.tij__sample__container}>
            <h4 className={classes.tij__model__heading}>Print Samples</h4>
            <img src={samples} alt="samples" />
          </div>
          <div className={classes.applicable__products__container}>
            <h4 className={classes.tij__model__heading}>Applicable Products</h4>
            {applications.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </div>
        </div>
        {/* ------------- Image Container End ---------------- */}
      </div>
        <Handy />
    </div>
  );
};

export default TIJ;
