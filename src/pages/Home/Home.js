import React from 'react'
import classes from './Home.module.css'
import { Cards } from './../../helpers/cardData'
import { Slider, Card, Info, Form } from '../../components'

const Home = () => {
    return (
        <div className={classes.home__wrapper}>
            <Slider />
            <Card cards={Cards}/>
            <Info />
            <Form />
        </div>
    )
}

export default Home
