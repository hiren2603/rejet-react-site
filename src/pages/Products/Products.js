import React from "react";
import classes from "./Products.module.css";
import { productData } from "../../helpers/productData";

const Products = () => {
  return (
    <div className={classes.products__container}>
      {productData.map((item, index) => {
        return (
          <div className={classes.product__container} key={index} >
            <div className={classes.product__image__container}>
              <img
                src={item.img}
                alt="cij"
                className={classes.product__image}
              />
            </div>
            <div className={classes.product__details__container}>
                <h1 className={classes.product__title}>{item.title}</h1>
              <p className={classes.product__details}>{item.pera_1}</p>
              <p className={classes.product__details}>{item.pera_2}</p>
              {/* <p className={classes.product__details}>{item.pera_3}</p> */}
            </div>
        </div>
        );
      })}
    </div>
  );
};

export default Products;
