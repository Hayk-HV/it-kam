import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName={s.activeLink} className={s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName={s.activeLink} className={s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' activeClassName={s.activeLink} className={s.item}>Users</NavLink>
      </div>
      <div className={s.item}>
        <a className={s.item}>News</a>
      </div>
      <div className={s.item}>
        <a className={s.item}>Music</a>
      </div>
      <div className={s.item}>
        <a className={s.item}>Settings</a>
      </div>
    </div>
  )
}

export default Navbar;