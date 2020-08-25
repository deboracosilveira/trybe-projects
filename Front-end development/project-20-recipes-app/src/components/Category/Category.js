import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ food, type }) => {
  if (type === 'meal') return <h3 data-testid="recipe-category">{food.strCategory}</h3>;

  return <h3 data-testid="recipe-category">{food.strAlcoholic}</h3>;
};

export default Category;

Category.propTypes = {
  food: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
};
