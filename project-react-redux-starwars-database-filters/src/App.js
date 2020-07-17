import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlanetsAPI } from './actions';
import './App.css';

import SearchPlanet from './components/SearchPlanet';
import ComparisonFilter from './components/ComparisonFilter';
import Filters from './components/Filters';
import Table from './components/Table';
import OrderFilter from './components/OrderFilter';

class App extends Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchPlanet />
          <OrderFilter />
          <ComparisonFilter />
          <Filters />
        </header>
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(fetchPlanetsAPI()),
});

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
  getPlanets: PropTypes.func.isRequired,
};
