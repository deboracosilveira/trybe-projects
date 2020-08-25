import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getFoodsByName } from '../../services/api';
import RecContainer from './sytles';

const Recomendations = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const [recomendations, setRecomendations] = useState([]);
  const recType = type === 'meal' ? 'cocktail' : 'meal';
  const recKey = type === 'meal' ? 'Drink' : 'Meal';

  useEffect(() => {
    getFoodsByName(recType, '').then((resp) => {
      setRecomendations(resp);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h3>Recommendations</h3>
      <RecContainer>
        {recomendations.slice(0, 6).map((recomendation, index) => (
          <RecContainer.RecCard key={recomendation[`str${recKey}`]}>
            <RecContainer.Name data-testid={`${index}-recomendation-title`}>
              {recomendation[`str${recKey}`]}
            </RecContainer.Name>
            <RecContainer.RecImg
              data-testid={`${index}-recomendation-card`}
              src={recomendation[`str${recKey}Thumb`]}
              alt={recomendation[`str${recKey}`]}
            />
          </RecContainer.RecCard>
        ))}
      </RecContainer>
    </div>
  );
};

export default Recomendations;

Recomendations.propTypes = {
  type: PropTypes.string.isRequired,
};
