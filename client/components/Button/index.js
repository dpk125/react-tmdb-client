import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ children, action }) => (
  <a className="btn" onClick={() => action()}>
    {children}
  </a>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  action: PropTypes.func.isRequired,
};
