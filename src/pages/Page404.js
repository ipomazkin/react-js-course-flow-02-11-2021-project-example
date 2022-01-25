import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <div className="">
      <h1>404</h1>
      <p>Page not found.</p>
      <div>
        <Link to="/">Back to the home page</Link>
      </div>
    </div>
  );
}

Page404.propTypes = {};
