import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s);
console.log(product,0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://api-crud.elcho.dev/api/v1/e43c9-6cf6b-a54b6/bag');
        dispatch({ type: "SET_PRODUCTS", payload: res.data });
      } catch (error) {
        console.error("APIден маалымат алуу катасы:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      {product.length === 0 ? (
        <p>Продукттар табылган жок</p>
      ) : (
        <ul>
          {product?.map((item, index) => (
            <li key={index}>
              <img src={item.url} alt={item.name} width="100" />
              <p>{item.name}</p>
              <p>{item.price} сом</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Product;
