import React from "react";
import inkjet from "../../assets/inkjet.png";
import samples from "../../assets/font_sample.png";
import { Heading, ProductButton, Table } from "../../components";
import Products from "../Products/Products";
import classes from "./Inkjet.module.css";

const Inkjet = () => {
  return (
    <div className={classes.product__container}>
      <h1 className={classes.product__heading}>Continuous Inkjet Printers</h1>
      <div className={classes.inkjet__container}>
        <Heading name='RE 200' type='Inkjet Printer' />
        {/* ------------------- Image Container ----------------------- */}
        <div className={classes.inkjet__img__container}>
          <img
            className={classes.inkjet__main__img}
            src={inkjet}
            alt="inkjet"
          />
          <div className={classes.button__container}>
            <ProductButton />
          </div>
          {/* ---------------- Sample Container ---------------------- */}

          <div className={classes.sample__container}>
            <h4 className={classes.sample__img__heading}>Print Samples</h4>
            <img className={classes.font__sample} src={samples} alt="samples" />
          </div>
        </div>

        {/* ------------------ Feature Section ---------------- */}
        
      <div className={classes.features__container}>
      <h2 className={classes.features__heading}>Features & Spacifications</h2>
      <ul className={classes.feature__lists}>
        <h4 className={classes.feature__sub__heading}>Key Benifits</h4>
        <li>Proven World Class Platform</li>
        <li>Easy to use and Easy to Leave with</li>
        <li>Inks are Suitable for wide range of Applications</li>
      </ul>
      <ul className={classes.feature__lists}>
        <h4 className={classes.feature__sub__heading}>Suitable Materials</h4>
        <li> Plascic, Composite Board, Paper, Metal </li>
        <li> Glass, Foil, Tiles </li>
      </ul>
      <ul className={classes.feature__lists}>
        <h4 className={classes.feature__sub__heading}>Standered Features</h4>
        <li>print Delay, Repeat Printing, Reverse - Inverse</li>
        <li>Product Counter, User Clock, Change Hight/Weight</li>
        <li>Serial Number Printing, USB Logo Input</li>
      </ul>
      <ul className={classes.feature__lists}>
        <h4 className={classes.feature__sub__heading}>Ink System</h4>
        <li>
          <b>Ink Viscosity Control</b>: Automatic Viscometer
        </li>
        <li>
          <b>Ink Bleed Control</b>: Automatic Start-Up/Shut-Down
        </li>
        <li>
          <b>Ink & Make Up</b>: Automatic metered
        </li>
        <li>
          <b>Nozel Auto Flush System: </b> Automatic at Start/Shutdown Time
        </li>
      </ul>
      <ul className={classes.feature__lists}>
        <h4 className={classes.feature__sub__heading}>Data Input</h4>
        <li>RS232 PCMCIA, USB</li>
      </ul>
      <ul className={classes.feature__lists}>
        <h4 className={classes.feature__sub__heading}>Cabinet</h4>
        <li>Standered Finish L Grained 304 stainless steel</li>
        <li>
          <b>Ip Rating: </b>IpS3 (1997)
        </li>
        <li>
          <b>Conduit Length: </b>3 to 6 meters
        </li>
        <li>
          <b>Dimensions: </b>446mm X 221mm X 647mm
        </li>
      </ul>
    </div>
      </div>
      <Table />
      <Products/>
    </div>
  );
};

export default Inkjet;
