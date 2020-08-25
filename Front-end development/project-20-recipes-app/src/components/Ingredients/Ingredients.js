import React from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ food, path }) => {
  const keys = Object.keys(food);
  const ingredients = keys.filter((item) => item.includes('strIngredient') && food[item]);

  if (path.includes('in-progress')) {
    return (
      <div>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <div>
            <input type="checkbox" id={index} data-testid={`${index}-ingredient-step`} />
            <label htmlFor={index}>{`${food[ingredient]} - `}</label>
            <span>{food[ingredient.replace('Ingredient', 'Measure')]}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <p key={ingredient} data-testid={`${index}-ingredient-name-and-measure`}>
          {`- ${food[ingredient]} - `}
          <span>{food[ingredient.replace('Ingredient', 'Measure')]}</span>
        </p>
      ))}
    </div>
  );
};

export default Ingredients;

Ingredients.propTypes = {
  food: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};
