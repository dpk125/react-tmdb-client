import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, action }) => (
  <a className="btn" onClick={() => action()}>
    {children}
  </a>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
};
