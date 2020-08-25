import React from 'react';
import PropTypes from 'prop-types';
import FoodCardContainer from './styles';

const FoodCard = ({ index, thumb, str, id, foodType }) => (
  <FoodCardContainer data-testid={`${index}-recipe-card`}>
    <FoodCardContainer.Link to={`/${foodType}/${id}`}>
      <FoodCardContainer.Img data-testid={`${index}-card-img`} src={thumb} alt={str} />
      <FoodCardContainer.Name data-testid={`${index}-card-name`}>{str}</FoodCardContainer.Name>
    </FoodCardContainer.Link>
  </FoodCardContainer>
);

export default FoodCard;

FoodCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  foodType: PropTypes.string.isRequired,
};
