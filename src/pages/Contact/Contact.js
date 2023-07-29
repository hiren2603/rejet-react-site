import React from "react";
import classes from "./Contact.module.css";
import { Form, Map } from "./../../components";
import radhe from "../../assets/radhe.png";
import { RiWhatsappLine, RiMailLine, RiGlobalLine } from "react-icons/ri";


const Contact = () => {
  return (
    <div className={classes.product__container}>
      <div className={classes.contact__page__container}>
          <h2 className={classes.address__title}>Locations</h2>
          <h2 className={classes.inquiry__title}>Inquiries</h2>
          <div className={classes.ho__container}>
            <h2 className={classes.ho__title}>Head Office</h2>
            <img src={radhe} alt="logo" className={classes.address__logo} />
            <p> Plot No. 36, Survey No. 277/1, Opp. Kaneria Oil Industries, Rani Industrial Area, Shapar (Veraval) 360024–Rajkot,  (Gujarat) India</p>
          </div>
          <div className={classes.branches__container}>
          <h2 className={classes.branch__title}> Branches</h2>
            <p>Ahmedabad</p>
            <p>Surat</p>
            <p>Vapi</p>
            <p>Gandhidham</p>
            <p>Morvi</p>
          </div>
          <div className={classes.contact__container}>
              <p><RiWhatsappLine size={24} color={'green'} className={classes.whatsapp} /><b>Call:</b>+91 99099-81123</p>
              <p><RiMailLine size={24} color={'red'} className={classes.mail} /><b>Email:</b>info@rejettech.com</p>
              <p><RiGlobalLine size={24} color={'blue'} className={classes.globe} /><b>Web:</b>www.rejettech.com</p>
          </div>         
      </div>
      <Map/>
      <div className={classes.contact__page__form__container}>
      <Form className={classes.contact__page__form}/> 
      </div>
    </div>
  );
};

export default Contact;
