import React from "react";
import classes from "./Handy.module.css";
import { handyData, handyFeatures, handyApp } from "../../helpers/handyData";
import handyImg from "../../assets/handy.png";
import Heading from './../Heading/Heading';

const Handy = () => {
  return (
    <div className={classes.product__container}>
      <div className={classes.handy__container}>
      <Heading name="TP HANDY" type="TIJ Printer"/>
        {/* <div className={classes.tij__type__heading__container}>
          <h3 className={classes.tij__type__heading}>
            <span>TP HANDY</span> TIJ Printer
          </h3>
          <button className={classes.product__broucher__btn} href="/">
            Download Broucher
          </button>
        </div> */}
        {/* ---------------- Info Container -------------------- */}
        <div className={classes.handy__info__container}>
          <div className={classes.handy__model}>
            <h4 className={classes.handy__model__heading}>
              {handyData[0].model}
            </h4>
            <li>
              <b>Type:</b>
              {handyData[0].type}
            </li>
            <li>
              <b>Operating System:</b>
              {handyData[0].os}
            </li>
            <li>
              <b>Dimension:</b>
              {handyData[0].dimension}
            </li>
            <li>
              <b>Weight:</b>
              {handyData[0].weight}
            </li>
            <li>
              <b>CPU:</b>
              {handyData[0].cpu}
            </li>
            <li>
              <b>Interface:</b>
              {handyData[0].interface}
            </li>
            <li>
              <b>Battery:</b>
              {handyData[0].battery}
            </li>
            <li>
              <b>Adapter:</b>
              {handyData[0].adapter}
            </li>
            <li>
              <b>Conditions:</b>
              {handyData[0].condition}
            </li>
            <li>
              <b>Ink Type:</b>
              {handyData[0].ink_type}
            </li>
            <li>
              <b>Ink Colors:</b>
              {handyData[0].ink_color}
            </li>
          </div>
          {/* --------------- Features ------------------ */}
          <div className={classes.handy__features__container}>
            <h4 className={classes.handy__model__heading}>Features</h4>
            <li>
              <b>Available Languages:</b>
              {handyFeatures[0].language}
            </li>
            <li>
              <b>Content:</b>
              {handyFeatures[0].print_content}
            </li>
            <li>
              <b>Print Distance:</b>
              {handyFeatures[0].distance}
            </li>
            <li>
              <b>Print Resolution:</b>
              {handyFeatures[0].resolution}
            </li>
            <li>
              <b>Maximum Print Height:</b>
              {handyFeatures[0].height}
            </li>
          </div>
          {/* ---------------- Features end ------------------------ */}
        </div>
        {/* ---------------- Info Container end ------------------ */}
        {/* ---------------- Image Container ---------------------- */}
        <div className={classes.handy__img__container}>
          <img src={handyImg} alt="tij" className={classes.handy__img} />
          <div className={classes.applicable__products__container}>
            <h4 className={classes.handy__model__heading}>
              Applicable Products
            </h4>
            {handyApp.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </div>
        </div>
        {/* ------------- Image Container End ---------------- */}
      </div>
    </div>
  );
};

export default Handy;
