import React from 'react'
import classes from './Heading.module.css'
import broucher from './../../assets/broucher.pdf'

const Heading = ({name, type}) => {
    return (
        <div className={classes.laser__type__heading__container}>
          <h3 className={classes.laser__type__heading}>
            <span>{name}</span> {type}
          </h3>
         <a className={classes.product__broucher__btn} href={broucher} color='transparent' target="_blank" rel="noreferrer" download>
            Download Broucher
          </a>
        </div>
    )
}

export default Heading
