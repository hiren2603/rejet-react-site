import React from 'react'
import { visions } from '../../helpers/VisionMission';
import classes from './Vision.module.css'


const Vision = () => {
    return (
        <>
            {visions.map((vision, index)=>{
                return(
                    <div className={classes.vision} key={index}>
                        <img className={classes.vision__img} src={vision.image} alt="vision" />
                        <div className={classes.vision__content}>
                            <h1 className={classes.vision__title}>{vision.title}</h1>
                            <p className={classes.vision__info}>
                            {vision.info}
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
        
    )
}

export default Vision
