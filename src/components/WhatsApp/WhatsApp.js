import React from 'react'
import classes from './Whatsapp.module.css'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsApp = () => {
    return (
        <div className={classes.Whatsapp__container}>
         <a
        href="https://wa.me/+919909981123"
        className={classes.whatsapp_float}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={30} className={classes.whatsapp__icon}/>
      </a>
        </div>
    )
}

export default WhatsApp
