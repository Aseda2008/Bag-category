import React from 'react';
import s from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { CiMenuBurger } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menuOpen);

  return (
    <div className={s.menu}>
      <div className={s.container}>
   <div className={s.top}>
         <h1>Bag</h1>
                <h2
          onClick={() => dispatch({ type: menuOpen ? 'CLOSE_MENU' : 'OPEN_MENU' })}
        >
          {menuOpen ? <GrClose /> : <CiMenuBurger />}
        </h2>
   </div>
        <nav className={s.navMenu}>
          <NavLink to="/" className={({ isActive }) => (isActive ? s.active : '')}>Home</NavLink>
          <NavLink to="/feature" className={({ isActive }) => (isActive ? s.active : '')}>Feature</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? s.active : '')}>About</NavLink>
          <NavLink to="/product" className={({ isActive }) => (isActive ? s.active : '')}>Product</NavLink>
                    <NavLink to="/admin" className={({ isActive }) => (isActive ? s.active : '')}>Admin</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
