import React from 'react';
import PropTypes from 'prop-types';

const FilterButtons = ({ initialRecipes, recipes, setFunc }) => {
  const filterByCategory = (category) => {
    switch (category) {
      case 'All':
        setFunc(initialRecipes);
        break;
      case 'Food':
        setFunc(recipes.filter((recipe) => recipe.type === 'comida'));
        break;
      case 'Drinks':
        setFunc(recipes.filter((recipe) => recipe.type === 'bebida'));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        key="All"
        onClick={() => filterByCategory('All')}
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        key="Food"
        onClick={() => filterByCategory('Food')}
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        key="Drinks"
        onClick={() => filterByCategory('Drinks')}
      >
        Drinks
      </button>
    </div>
  );
};

export default FilterButtons;

FilterButtons.propTypes = {
  initialRecipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFunc: PropTypes.func.isRequired,
};
