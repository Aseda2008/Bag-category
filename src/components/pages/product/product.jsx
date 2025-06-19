import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import s from "./product.module.scss";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s);
  
  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  return (
    <div className={s.products}>
      <div className="container">
        <div className={s.product}>
          <h1>Our Available Product</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore.</p>
        </div>

        <div className={s.grid}>
          {product.map((el) => (
            <div className={s.block} key={el.id}>
              <img src={el.url} alt="" />
              <button onClick={() => addToCart(el)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
