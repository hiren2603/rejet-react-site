import React from "react";
import classes from "./About.module.css";
import certificate from "../../assets/certificate.png";
import lion from '../../assets/makeinindia.png'

import { Vision } from "../../components";

// import AppWrapper from '../Appwrapper/Appwrapper'

const About = () => {
  return (
    <div className={classes.product__container}>
      <div className={classes.about__container}>
            <div className={classes.title__container}>
                <h3 className={classes.page__title}>About Us</h3>
            </div>
        <div className={classes.about__content__container}>
          <p className={classes.about__content}>
          Our story began in 2011. Back then we were roadster and service provider of Continuous ink jet printer with a single area of the market. Now we are manufacturer of CIJ Printer,Laser Machine and TIJ Printer. 
          </p>
          <p className={classes.about__content}>
          Today, we are privileged to connect with hundreds of customers everyday with exceptional products and more than 5 branches. Today Radhe Enterprise is fastest growing company engaged in providing total service & consumable supports to all users of inkjet printers like <b> Markem Image, Domino, Hitachi, Videojet & Willett. </b> We are having head office at Rajkot(Gujarat) and branch offices in <b> Ahmedabad, Surat, Morbi, Gandhidham, Vapi. </b>Recently we have started our own manufacturing of “RE-Jet” CIJ Printer, Laser Machine, and TIJ Printer Machine.
          </p>
          <p className={classes.about__content}>
          We have always believed in serving the best product possible. It’s our goal for all of our products to be grown under the highest standards of quality, using ethical sourcing practices.
          </p>
          <p className={classes.about__content}>
          The quality of our consumable and service conforms strictly to the highest global standards and this is borne out by the ever-increasing satisfied customer base. We also provide original spares. We are also selling new inkjet printer machine, laser marking machine, TIJ printer and TTO printer for the increasing demand in this batch coding industry.
          </p>
        </div>
        <div className={classes.about__image__container}>
          <img src={certificate} alt="cf" className={classes.ce__img} />
          <img src={lion} className={classes.mi__img} alt='make-in-india' />
        </div>
      </div>
        <div className={classes.vision__mission__container}>
        <div className={classes.vision__mission__heading}>
          <h1 className={classes.vision__mission__title}>Vision & Mission</h1>
          <span className={classes.vision__devider}></span>
        </div>
          {/* Vision */}
          <Vision />
          {/* Mission */}
        </div>
    </div>
  );
};

export default About;
