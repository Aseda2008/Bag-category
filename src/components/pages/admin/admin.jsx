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
  const [category, setCategory] = useState(""); // ✅ useState туура

  const dispatch = useDispatch();

  const setProduct = (e) => {
    e.preventDefault(); // ✅ форма жүктөлбөшү үчүн

    if (!name || !url || !price || !category) {
      toast.error('❌ Бардык талааларды толтур!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      const data = { name, price, url, category };
      dispatch({ type: "ADD_PRODUCT", payload: data });

      toast.success('✅ Продукт ийгиликтүү кошулду!', {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        transition: Bounce,
      });

      // Форманы тазалоо
      setName("");
      setPrice("");
      setUrl("");
      setCategory("");
    }
  };

  return (
    <div className={s.admin}>
      <h1>Admin Panel</h1>
      <form className={s.form}>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="water resistant">water resistant</option>
          <option value="charging system">charging system</option>
          <option value="artificial leather">artificial leather</option>
          <option value="modern clothes">modern clothes</option>
        </select>
        <button onClick={setProduct}>Save Product</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Admin;
