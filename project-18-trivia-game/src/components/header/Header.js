import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

const Header = ({ name, gravatarEmail, score, assertions }) => {
  localStorage.state = JSON.stringify({ player: { name, gravatarEmail, score, assertions } });

  return (
    <div className="header">
      <p data-testid="header-player-name">Player: {name}</p>
      <p data-testid="header-score">Score: {score}</p>
      <img
        className="header-profile-picture"
        data-testid="header-profile-picture"
        alt={name}
        src={gravatarEmail}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  gravatarEmail: state.loginReducer.gravatarEmail,
  score: state.loginReducer.score,
  assertions: state.loginReducer.assertions,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  gravatarEmail: PropTypes.string.isRequired,
  assertions: PropTypes.number.isRequired,
};
