import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ path, food }) => (
  <div>
    {path.includes('comidas') && (
      <div data-testid="video">
        <iframe
          title={food.strYoutube}
          width="420"
          height="315"
          src={food.strYoutube.replace('watch?v=', 'embed/')}
        />
      </div>
    )}
  </div>
);

export default Video;

Video.propTypes = {
  food: PropTypes.objectOf(PropTypes.string).isRequired,
  path: PropTypes.string.isRequired,
};
