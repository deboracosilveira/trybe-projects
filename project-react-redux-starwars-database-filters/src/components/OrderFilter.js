import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByOrder } from '../actions';

const columnOptions = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'residents',
  'films',
  'created',
  'edited',
];

class OrderFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: '',
      sort: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  inputRadio(value) {
    return (
      <div>
        <input
          type="radio"
          data-testid="column-sort-input"
          name="sort"
          value={value}
          onClick={(event) => this.handleChange(event, 'sort')}
        />
        <label htmlFor="sort">{value}</label>
      </div>
    );
  }

  render() {
    const { column, sort } = this.state;
    return (
      <div>
        <p>Ordem</p>
        <select
          value={column}
          data-testid="column-sort"
          onChange={(event) => this.handleChange(event, 'column')}
        >
          <option value="">selecionar</option>
          {columnOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {this.inputRadio('ASC')}
        {this.inputRadio('DESC')}
        <button
          data-testid="column-sort-button"
          onClick={() => this.props.filteringByOrder(column, sort)}
        >
          Filtrar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  filteringByOrder: (column, sort) => dispatch(filterByOrder(column, sort)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderFilter);

OrderFilter.propTypes = {
  filteringByOrder: PropTypes.func.isRequired,
};
