import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShareBtn from '../../images/shareIcon.svg';
import FavoriteBtn from '../../images/blackHeartIcon.svg';
import copyToClipboard from '../../helpers/copyToClipboard';

const DoneFoodCard = ({
  recipe: { id, type, area, category, alcoholicOrNot, name, image, doneDate, tags },
  index,
  removeFromFavorite,
  path,
}) => {
  const isMeal = type === 'comida';
  const isDone = path.includes('feitas');
  const pathType = isMeal ? 'comidas' : 'bebidas';

  return (
    <div>
      <Link to={`/${pathType}/${id}`}>
        <img
          src={image}
          alt={name}
          data-testid={`${index}-horizontal-image`}
          style={{ width: '30vw' }}
        />
      </Link>
      {isMeal && <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>}
      {!isMeal && <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>}
      <Link to={`/${pathType}/${id}`}>
        <p data-testid={`${index}-horizontal-name`}>{name}</p>
      </Link>
      <button type="button" onClick={(e) => copyToClipboard(pathType, id, e.target)}>
        <img data-testid={`${index}-horizontal-share-btn`} src={ShareBtn} alt="share-btn" />
      </button>
      {isDone && (
        <div>
          <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
          {isMeal &&
            tags
              .slice(0, 2)
              .map((tagName) => (
                <p data-testid={`${index}-${tagName}-horizontal-tag`}>{tagName}</p>
              ))}
        </div>
      )}

      {!isDone && (
        <button type="button" onClick={() => removeFromFavorite(type, id)}>
          <img data-testid={`${index}-horizontal-favorite-btn`} src={FavoriteBtn} alt="share-btn" />
        </button>
      )}
    </div>
  );
};

export default DoneFoodCard;

DoneFoodCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
  removeFromFavorite: PropTypes.func,
  path: PropTypes.string.isRequired,
};

DoneFoodCard.defaultProps = {
  removeFromFavorite: () => {},
};
