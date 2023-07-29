import React from 'react'
import { cijProducts } from '../../helpers/InkjetDetail'
import classes from './Table.module.css'

const Table = () => {
    return (
        <>
        {cijProducts.map((cij, index)=>{
            return(
                <div className={classes.product__description__container} key={index}>
                <h2 className={classes.table__title}>Product Details</h2>
                <table className={classes.spacification__table}>
                <tbody>
                    <tr className={classes.space__table__row}>
                        <td>Brand</td>
                        <td>{cij.brand}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Model/Type</td>
                        <td>{cij.model}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Power Supply</td>
                        <td>{cij.power}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Humidity</td>
                        <td>{cij.humidity}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Nozzle Orifice</td>
                        <td>{cij.nozel}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Operating Temperature</td>
                        <td>{cij.temp} &deg;C</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Printing Performance</td>
                        <td>{cij.performance}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Printing direction</td>
                        <td>{cij.direction}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Max Print Lines</td>
                        <td>{cij.lines}</td> 
                    </tr>
                    <tr className={classes.space__table__row}>
                        <td>Print Distance</td>
                        <td>{cij.distance}</td> 
                    </tr>
                </tbody>
                </table>
            </div>
            )
        })}
        
        </>
    )
}

export default Table
