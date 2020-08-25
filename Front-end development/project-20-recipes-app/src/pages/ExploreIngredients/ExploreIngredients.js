import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BottomMenu, Header, Loading } from '../../components';
import { getIngredientsList, getURLIngredientsImg } from '../../services/api';
import ExploreIngredientsContainer from './styles';

const ExploreIngredients = ({ match: { path } }) => {
  const [loading, setLoading] = useState(true);
  const [ingredientsName, setIngredientsName] = useState([]);
  const page = path.includes('comidas');
  const pathIngredient = page ? 'comidas' : 'bebidas';
  const type = page ? 'meal' : 'cocktail';
  const ingredientNameKey = page ? 'strIngredient' : 'strIngredient1';

  useEffect(() => {
    getIngredientsList(type).then((resp) => {
      setIngredientsName(resp.slice(0, 12));
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <ExploreIngredientsContainer>
      <Header pageTitle="Explorar Ingredientes" />
      {ingredientsName.map((ingredient, index) => (
        <Link
          to={{ pathname: `/${pathIngredient}`, searchByIngredient: ingredient[ingredientNameKey] }}
          key={ingredient[ingredientNameKey]}
          data-testid={`${index}-ingredient-card`}
        >
          <img
            data-testid={`${index}-card-img`}
            src={getURLIngredientsImg(type, ingredient[ingredientNameKey])}
            alt={`${ingredient[ingredientNameKey]}`}
          />
          <p data-testid={`${index}-card-name`}>{ingredient[ingredientNameKey]}</p>
        </Link>
      ))}
      <BottomMenu />
    </ExploreIngredientsContainer>
  );
};

export default ExploreIngredients;

ExploreIngredients.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
