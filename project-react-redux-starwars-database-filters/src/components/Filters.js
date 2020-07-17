import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteFilterByNumericValues } from '../actions';

const Filters = ({ filtersInfo, deleteFilter }) => (
  <div>
    <p>Filtros</p>
    {filtersInfo.map((filter) => (
      <div key={filter.column} data-testid="filter">
        <button onClick={() => deleteFilter(filter.column)} type="button">
          X
        </button>
        <p>{`${filter.column} | ${filter.comparison} | ${filter.value}`}</p>
      </div>
    ))}
  </div>
);


const mapStateToProps = (state) => ({
  filtersInfo: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFilter: (column) =>
    dispatch(deleteFilterByNumericValues(column)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

Filters.propTypes = {
  filtersInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteFilter: PropTypes.func.isRequired,
};
