import React from 'react'
import classes from './Applications.module.css'
import {Video} from '../../components'

const Applications = () => {
    return (
        <>
        <h2 className={classes.video__gallery__title}>Applications of RE200 Inkjet Printers</h2>
        <div className={classes.video__wraper}>
            <Video />
        </div>

        </>
    )
}

export default Applications
