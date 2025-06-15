import React from 'react';
import s from './header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { CiMenuBurger } from 'react-icons/ci';
import { useSelector, useDispatch } from 'react-redux'
const Header = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menuOpen);
  let nav = useNavigate()
  return (
    <div className={s.header}>
      <div className={s.container}>
        <h1>Bag</h1>
        <nav className={s.nav}>
          <NavLink to="/" className={({ isActive }) => (isActive ? s.active : '')}>Home</NavLink>
          <NavLink to="/feature" className={({ isActive }) => (isActive ? s.active : '')}>Feature</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? s.active : '')}>About</NavLink>
          <NavLink to="/product" className={({ isActive }) => (isActive ? s.active : '')}>Product</NavLink>
          <button onClick={() => nav("/admin")}>Admin</button>
        </nav>

        <h2
          onClick={() => dispatch({ type: menuOpen ? 'CLOSE_MENU' : 'OPEN_MENU' })}
        >
          {menuOpen ? <GrClose /> : <CiMenuBurger />}
        </h2>
      </div>
    </div>
  );
};

export default Header;
