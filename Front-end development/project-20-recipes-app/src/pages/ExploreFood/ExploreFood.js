import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BottomMenu, Header, Loading } from '../../components';
import { getFoodByRandom } from '../../services/api';
import ExploreFoodContainer from './styles';

const ExploreFood = ({ match: { path } }) => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const page = path.includes('comidas');

  let pathFood = 'bebidas';
  let type = 'cocktail';
  let key = 'Drink';
  let title = 'Explorar Bebidas';

  if (page) {
    pathFood = 'comidas';
    type = 'meal';
    key = 'Meal';
    title = 'Explorar Comidas';
  }

  useEffect(() => {
    getFoodByRandom(type).then((resp) => {
      setFood(resp[0]);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;
  return (
    <ExploreFoodContainer>
      <Header pageTitle={title} />
      <Link to={`/explorar/${pathFood}/ingredientes`} data-testid="explore-by-ingredient">
        Por Ingredientes
      </Link>
      {page && (
        <Link to="/explorar/comidas/area" data-testid="explore-by-area">
          Por Local de Origem
        </Link>
      )}
      <Link to={`/${pathFood}/${food[`id${key}`]}`} data-testid="explore-surprise">
        Me Surpreenda!
      </Link>
      <BottomMenu />
    </ExploreFoodContainer>
  );
};

export default ExploreFood;

ExploreFood.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
