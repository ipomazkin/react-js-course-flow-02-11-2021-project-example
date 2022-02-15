import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setMenuIsOpen } from "../../ducks/settings";

export function Header() {
  const isOpen = useSelector((state) => {
    return state.settings.isMenuOpen
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
        let action = setMenuIsOpen({
          isOpen: !isOpen,
        });
        dispatch(action);
      }}>{isOpen ? 'close menu' : 'open menu'}</button>

      {isOpen && (
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
