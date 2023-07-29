import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from './Card.module.css'

const Card = ({cards}) => {
    // const [hover, setHover] = useState(false);
    // const onHover = () => {
    // setHover(true);
    // };
    // const onLeave = ()=>{
    //     setHover(false)
    // }
    const navigate = useNavigate();
    return (
        <section className={classes.cards__section}>
            <div className={classes.cards__row}>
         {
             cards.map((card, index)=>{
                 return(
                     <div className={classes.card__container} key={index}>
                        <div className={classes.card__img__container} onClick={()=>{
                            navigate(`${card.link}`)
                        }}>
                            <img className={classes.card__img} src={card.image} alt="item" />
                            <Link to={card.link} className={classes.show}>View More</Link>
                        </div>
                        <div className={classes.card__btn__container}>
                            <Link to={card.link} className={classes.card__button}>{card.button}</Link>
                        </div> 
                     </div>
                 )
             })
         }
         </div>   
        </section>
    )
}

export default Card;
