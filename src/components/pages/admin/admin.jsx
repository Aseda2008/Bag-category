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
  const dispatch = useDispatch();

  const setProduct = async (e) => {
    e.preventDefault();

    if (!name || !url || !price) {
      toast.error('❌ Бардык талааларды толтур!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    const data = { name, price, url };

    try {
      await axios.post('https://api-crud.elcho.dev/api/v1/e43c9-6cf6b-a54b6/bag', data);
      dispatch({ type: "ADD_PRODUCT", payload: data });
      toast.success('✅ Продукт ийгиликтүү кошулду!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
      setName("");
      setPrice("");
      setUrl("");
    } catch (error) {
      toast.error('❌ Сервердеги ката, кайра аракет кылыңыз!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
      console.error(error);
    }
  };

  return (
    <div className={s.admin}>
      <h1>Admin Panel</h1>
      <form className={s.form} onSubmit={setProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
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
