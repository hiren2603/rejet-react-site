import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Button.module.css'

const Button = () => {
    return (
        <div className={classes.button__container}>
         <button className={classes.info__btn}><Link to="/about">Read More</Link></button>   
        </div>
    )
}

export default Button
