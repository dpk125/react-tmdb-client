import React from 'react';
import PropTypes from 'prop-types';

export const Genre = ({ name, active }) => (
  <div className={'list-item' + (active ? ' is-active' : '')}>
    {name}
  </div>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.boolean,
};
