import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

import CreateHeadings from './CreateHeadings';
import CreateBody from './CreateBody';

const filter = (data, name, numericValues) => {
  let filteredData = [...data];

  if (numericValues.length >= 1) {
    // setting the order according to user comparison choices
    numericValues.map(({ column, comparison, value }) => {
      switch (comparison) {
        case 'maior que':
          return (filteredData = filteredData.filter(
            (planet) => Number(planet[column]) > Number(value),
          ));
        case 'menor que':
          return (filteredData = filteredData.filter(
            (planet) => Number(planet[column]) < Number(value),
          ));
        case 'igual a':
          return (filteredData = filteredData.filter(
            (planet) => Number(planet[column]) === Number(value),
          ));
        default:
          return false;
      }
    });
  }

  if (name) return data.filter((planet) => planet.name.toUpperCase().includes(name.toUpperCase()));
  return filteredData;
};

const Table = () => {
  const { getPlanets, isLoading, data, name, numericValues } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <table>
        <CreateHeadings dados={Object.keys(data[0])} />
        <CreateBody dados={filter(data, name, numericValues)} />
      </table>
    </div>
  );
};

export default Table;
