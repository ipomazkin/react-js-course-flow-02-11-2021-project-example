import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export function NewsPage() {
  return (
    <div className="">
      <h2>Hot News:</h2>
      <ul>
        <li><Link to="/news/1?hello=Kitty" state={{ test: 123 }}>Kotiyky</Link></li>
        <li><Link to="/news/2" state={"hello"}>Sobachky</Link></li>
        <li><Link to="/news/3">Slonyky</Link></li>
        <li><Link to="/news/abrakadabra">Wrong Link</Link></li>
      </ul>
    </div>
  );
}

NewsPage.propTypes = {};
