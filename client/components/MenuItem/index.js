import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ backgroundImage, name, path }) => {
  return (
    <div className="col-sm-4">
      <Link to={path}>
        <div className="menu-item"
             style={{ backgroundImage: `url('${backgroundImage}')` }}>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
};

MenuItem.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
