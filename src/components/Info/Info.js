import React from 'react'
import classes from './Info.module.css'
import Button from '../Button/Button'
import certificate from '../../assets/certificate.png'

const Info = () => {
    return (
        <div className={classes.info__container}>
            <div className={classes.title__container}>
                <h1 className={classes.info__title}>About Us</h1>
                <span className={classes.title__devider}></span>
            </div>
            <div className={classes.info__img__container}>
                <img src={certificate} alt="info" className={classes.cert__img} />
            </div> 
            <div className={classes.info__content__container}>
                <p className={classes.info__content}>
                Our story began in 2011. Back then we were roadster and service provider of Continuous ink jet printer with a single area of the market. Now we are manufacturer of CIJ Printer,Laser Machine and TIJ Printer. 
                </p>
                <p className={classes.info__content}>
                Today, we are privileged to connect with hundreds of customers everyday with exceptional products and more than 5 branches. Today Radhe Enterprise is fastest growing company engaged in providing total service & consumable supports to all users of inkjet printers like <b> Markem Image, Domino, Hitachi, Videojet & Willett. </b> We are having head office at Rajkot(Gujarat) and branch offices in <b> Ahmedabad, Surat, Morbi, Gandhidham, Vapi. </b>Recently we have started our own manufacturing of “RE-Jet” CIJ Printer, Laser Machine, and TIJ Printer Machine.
                </p>
                <p className={classes.info__content}>
                We have always believed in serving the best product possible. It’s our goal for all of our products to be grown under the highest standards of quality, using ethical sourcing practices.
                </p>
                <div className={classes.info__button__container}>
                    <Button />
                </div>
            </div> 
        </div>
    )
}

export default Info
