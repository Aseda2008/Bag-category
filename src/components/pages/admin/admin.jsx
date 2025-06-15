import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import s from './admin.module.scss';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");
const dispatch = useDispatch()
  const setProduct = () => {
    if (!name || !url || !price) {
      toast.error('❌ Бардык талааларды толтур!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      const data = { name, price, url };
      dispatch({type:"ADD_PRODUCT",payload:data})
      toast.success('✅ Продукт ийгиликтүү кошулду!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });

      setName("");
      setPrice("");
      setUrl("");
    }
  };

  return (
    <div className={s.admin}>
      <h1>Admin Panel</h1>
      <form className={s.form} onSubmit={setProduct}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Save Product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Admin;
