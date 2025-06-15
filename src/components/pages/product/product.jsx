import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product)

  return (
    <div>
      <h1>Product List</h1>
      {product.length === 0 ? (
        <p>Продукттар табылган жок</p>
      ) : (
        <ul>
          {res.map((item) => (
              <img src={item.image} alt={item.name} width="100" />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Product;
