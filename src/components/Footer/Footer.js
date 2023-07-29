import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md'
import classes from './Footer.module.css'
import radhe from '../../assets/radhe.png'

const Footer = () => {
    return (
        <>
        <div className={classes.footer__container}>
            <div className={classes.footer__quick__links}>
            <h1 className={classes.footer_heading}>Quick Links</h1>
            <span className={classes.footer__devider}></span>
                <Link className={classes.footer__links} to='/'>Home</Link>
                <Link className={classes.footer__links} to='/about'>About</Link>
                <Link className={classes.footer__links} to='/applications'>Applications</Link>
                <Link className={classes.footer__links} to='/ewest-mgmt'>E-Waste Management</Link>
                <Link className={classes.footer__links} to='/contact'>Contact</Link>
            </div>
            <div className={classes.footer__products__links}>
            <h1 className={classes.footer_heading}>Products</h1>
            <span className={classes.footer__devider}></span>
                <Link className={classes.footer__links} to='/products/inkjet'>Inkjet</Link>
                <Link className={classes.footer__links} to='/products/laser/co2'>Co2</Link>
                <Link className={classes.footer__links} to='/products/laser/fiber'>Fiber</Link>
                <Link className={classes.footer__links} to='/products/laser/desktop'>Desktop</Link>
                <Link className={classes.footer__links} to='/products/laser/uv'>UV</Link>
                <Link className={classes.footer__links} to='/products/thermal'>TIJ</Link>
            </div>
            <div className={classes.footer__contacts__links}>
            <h1 className={classes.footer_heading}>Contact Us</h1>
            <span className={classes.footer__devider}></span>
                <a className={classes.footer__links} href="tel:990-998-1123">Call: 99099 81123</a> 
                <a className={classes.footer__links} href="mailto:info@rejettech.com">E-mail: info@rejettech.com</a>
                <Link className={classes.location__link} target="_blank" to="/">
                    <MdOutlineLocationOn className={classes.footer__icon}/>
                    Find Us On Map
                </Link> 
            </div>
            <div className={classes.footer__location}>
                <h1 className={classes.footer_heading}>Location</h1>
                <span className={classes.footer__devider}></span>
                <img className={classes.footer__logo} src={radhe} alt="logo" />
                <p> Plot No. 36, Survey No. 277/1,</p>
                <p>Opp. Kaneria Oil Industries,</p>
                <p>Rani Industrial Area,</p> 
                <p>Shapar (Veraval) 360024–Rajkot,</p>
                <p> (Gujarat), India</p>
            </div>
        </div>
        <div className={classes.dev__container}>
                <p className={classes.dev}>Copyright © 2021 Radhe Enterprise</p>
                <p className={classes.dev}> Developed By Gravity Infotech</p>
            </div>
        </>
    )
}

export default Footer
