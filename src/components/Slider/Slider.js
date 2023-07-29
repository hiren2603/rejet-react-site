import React, {useState, useEffect, useRef} from 'react';
import classes from './Slider.module.css'
import { slides } from '../../helpers/SlideData'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const delay = 2500;
const Slider = () => {
  const length = slides.length-1;
  const [slideIdx, setSlideIdx] = useState(0);
  const timeoutRef = useRef(null);

  // Timing Function
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideIdx((prevSlideIdx) =>
          prevSlideIdx === length ? 0 : prevSlideIdx + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [slideIdx, length]);

  const nextSlide = ()=>{
    if(slideIdx === length){
      setSlideIdx(0);
      console.log(slideIdx)
    }else{
      setSlideIdx(slideIdx +1)
    }
  }
  const prevSlide = ()=>{
    if(slideIdx === 0){
      setSlideIdx(length);
    }else{
      setSlideIdx(slideIdx -1)
    }
  }

  return(
    <div className={classes.slider__wrapper}>
      <div className={classes.left__icon__container}
        onClick={prevSlide}
      ><FaChevronLeft /></div>
      
        {
          slides.map((slide,idx)=>(
          <div className={idx === slideIdx ? `${classes.image__container}` : `${classes.image__container__hidden}`} key={idx} style={{backgroundImage: `url(${slide.bg})`}}>
            <h1 className={classes.img__title}>
              {slide.title} <span className={classes.img__info}>{slide.info}</span>
            </h1>
          {/* <img src={slide.image} alt="" className={classes.slide__image}/> */}
          {/* <h1 className={classes.img__info}>{slide.info}</h1> */}
          </div>
          ))
        }
      
      <div className={classes.right__icon__container}
      onClick={nextSlide}
      ><FaChevronRight/></div>
    </div>
  )
};

export default Slider;
