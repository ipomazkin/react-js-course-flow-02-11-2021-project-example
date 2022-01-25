import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom'

export function Header() {
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
    </div>
  );
}

Header.propTypes = {};
