import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByName } from '../actions';

const SearchPlanet = ({ filteringByName }) => (
  <div>
    <label htmlFor="search">
      Procurar
      <input
        data-testid="name-filter"
        type="text"
        name="search"
        onChange={(event) => {
          filteringByName(event.target.value);
        }}
      />
    </label>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  filteringByName: (name) => dispatch(filterByName(name)),
});

export default connect(null, mapDispatchToProps)(SearchPlanet);

SearchPlanet.propTypes = {
  filteringByName: PropTypes.func.isRequired,
};
