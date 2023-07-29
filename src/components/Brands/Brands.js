import React,{useEffect, useRef} from 'react'
import classes from  './Brands.module.css'
import {brands} from '../../helpers/clientsData'

const delay = 2500;
const length = brands.length;

function Brands() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === length - 4 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={classes.brands__section__container}>
    <div className={classes.brands__title__container}>
      <h1 className={classes.brands__title}>Our Clients</h1>
      <span className={classes.title__devider}></span>
    </div>
    <div className={classes.slideshow}>
      <div className={classes.slideshowSlider}
        style={{ transform: `translateX(${-index * 210}px` }}>
        {brands.map((brand, index) => (
          <div key={index} className={classes.slide__img__container}>
          <img className={classes.slide}
            src={brand}
            alt="clients"
           />
         </div>
        ))}
      </div>

      <div className={classes.slideshowDots}>
        {brands.map((_, idx) => (
          <div
            key={idx}
            className={index === idx ? `${classes.slideshowDot__active}` : `${classes.slideshowDot}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Brands;