import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setMenuIsOpen } from "../../services/store";

export function Header() {
  const isMenuOpen = useSelector((state) => {
    return state.isMenuOpen
  });
  const dispatch = useDispatch();

  return (
    <div className="">
      <ul>
        <li><NavLink className={
          ({ isActive }) => isActive ? 'hello' : ''
        } to="/">Home page</NavLink></li>
        <li><NavLink to="/about">About page</NavLink></li>
        <li><NavLink to="/news">News page</NavLink></li>
        <li><NavLink to="/sdfsdfdsfdsfdssdf">Wrong page</NavLink></li>
      </ul>

      <button onClick={() => {
        let action = setMenuIsOpen(!isMenuOpen);
        dispatch(action);
      }}>{isMenuOpen ? 'close menu' : 'open menu'}</button>

      {isMenuOpen && (
        <div>
          <h2>Menu</h2>
          <ul>
            <li>Menu itme 1</li>
            <li>Menu itme 2</li>
            <li>Menu itme 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {};
