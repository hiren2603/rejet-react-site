import React from 'react'
import classes from './ProductButton.module.css'
import { Link } from 'react-router-dom'

const ProductButton = () => {
    return (
        <>
          <Link to="/applications" className={classes.product__button}>
            View In Actions
          </Link>  
        </>
    )
}

export default ProductButton
