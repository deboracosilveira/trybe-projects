import React from 'react';

import './App.css';
import Provider from './context/Provider';

import SearchPlanet from './components/SearchPlanet';
import ComparisonFilter from './components/ComparisonFilter';
import Filters from './components/Filters';
import Table from './components/Table';
// import OrderFilter from './components/OrderFilter';

const App = () => (
  <Provider>
    <div className="App">
      <header className="App-header">
        <SearchPlanet />
        {/* <OrderFilter /> */}
        <ComparisonFilter />
        <Filters />
      </header>
      <Table />
    </div>
  </Provider>
);

export default App;
