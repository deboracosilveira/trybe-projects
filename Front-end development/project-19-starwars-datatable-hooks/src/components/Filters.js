import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { numericValues, setNumericValues } = useContext(StarWarsContext);

  // Exclusão do filtro desejado
  const deleteFilter = (col) => {
    setNumericValues(numericValues.filter(({ column }) => column !== col));
  };

  return (
    <div>
      <p>Filtros</p>
      {numericValues.map((filter) => (
        <div key={filter.column} data-testid="filter">
          <button onClick={() => deleteFilter(filter.column)} type="button">
            X
          </button>
          <p>{`${filter.column} | ${filter.comparison} | ${filter.value}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Filters;
