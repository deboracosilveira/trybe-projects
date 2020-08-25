import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Header, FilterButtons, FoodInfoCard } from '../../components';

const DoneRecipes = ({
  match: {
    path,
  },
}) => {
  // const initialDoneRecipes = JSON.parse(localStorage.doneRecipes);
  // const [doneRecipes, setDoneRecipes] = useState(initialDoneRecipes);

  return (
    <div>
      <Header pageTitle="Receitas Feitas" />
      {/* <FilterButtons
        initialRecipes={initialDoneRecipes}
        recipes={doneRecipes}
        setFunc={setDoneRecipes}
      />
      <div>
        {doneRecipes.map((recipe, index) => (
          <FoodInfoCard recipe={recipe} index={index} path={path} />
        ))}
      </div> */}
      <h1>Página em construção</h1>
    </div>
  );
};

export default DoneRecipes;

DoneRecipes.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
