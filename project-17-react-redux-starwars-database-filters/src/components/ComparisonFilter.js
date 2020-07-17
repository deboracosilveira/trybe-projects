import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByNumericValues } from '../actions';

// Gambiarra pro CC
const options = ['maior que', 'menor que', 'igual a'];

class ComparisonFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      comparison: '',
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.filter = this.filter.bind(this);
  }

  handleChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  availableFilters() {
    const { filtersInfo } = this.props;
    const columnOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    let availableFilters = columnOptions;
    filtersInfo.forEach(({ column }) => {
      availableFilters = availableFilters.filter((element) => element !== column);
    });
    return availableFilters;
  }

  filter() {
    const { column, comparison, number } = this.state;
    const { filteringByNumericValues } = this.props;
    filteringByNumericValues(column, comparison, number);
  }

  render() {
    const columnOptions = this.availableFilters();
    const { column, comparison, number } = this.state;
    return (
      <div>
        <select
          value={column}
          data-testid="column-filter"
          onChange={(event) => this.handleChange(event, 'column')}
        >
          <option value="">selecionar</option>
          {columnOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
        <select
          value={comparison}
          data-testid="comparison-filter"
          onChange={(event) => this.handleChange(event, 'comparison')}
        >
          <option value="">selecionar</option>
          {options.map((option) => (<option key={option} value={option}>{option}</option>))}
        </select>
        <input
          value={number}
          type="number"
          data-testid="value-filter"
          onChange={(event) => this.handleChange(event, 'number')}
        />
        <button data-testid="button-filter" onClick={() => this.filter()}>Filtrar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filtersInfo: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  filteringByNumericValues: (column, comparison, number) =>
    dispatch(filterByNumericValues(column, comparison, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonFilter);

ComparisonFilter.propTypes = {
  filteringByNumericValues: PropTypes.func.isRequired,
  filtersInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};
