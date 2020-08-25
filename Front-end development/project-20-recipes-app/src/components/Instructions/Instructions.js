import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ instructions }) => (
  <div>
    <h3>Instructions</h3>
    <div data-testid="instructions">{instructions}</div>
  </div>
);

export default Instructions;

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};
