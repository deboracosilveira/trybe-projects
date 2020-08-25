import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

// Gambiarra pro CC
const options = ['maior que', 'menor que', 'igual a'];

const createSelectTag = (name, testid, handler, setFunc, arr) => (
  <select value={name} data-testid={testid} onChange={(event) => handler(event, setFunc)}>
    <option value="">selecionar</option>
    {arr.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const createInputTag = (value, testid, handler, setFunc) => (
  <input
    value={value}
    type="number"
    data-testid={testid}
    onChange={(event) => handler(event, setFunc)}
  />
);

const ComparisonFilter = () => {
  const {
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleChange,
    numericValues,
    setNumericValues,
  } = useContext(StarWarsContext);

  // Definição de todos os filtros que estão sendo usados
  const handleNumericValues = (col, comp, val) => {
    setNumericValues([...numericValues, { column: col, comparison: comp, value: val }]);
  };

  const showAvailableFilters = () => {
    const columnOptions = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    let availableFilters = columnOptions;
    numericValues.forEach((el) => {
      availableFilters = availableFilters.filter((element) => element !== el.column);
    });
    return availableFilters;
  };

  const filter = () => {
    handleNumericValues(column, comparison, value);
  };

  const columnOptions = showAvailableFilters();
  return (
    <div>
      {createSelectTag(column, 'column-filter', handleChange, setColumn, columnOptions)}
      {createSelectTag(comparison, 'comparison-filter', handleChange, setComparison, options)}
      {createInputTag(value, 'value-filter', handleChange, setValue)}
      <button data-testid="button-filter" type="button" onClick={() => filter()}>
        Filtrar
      </button>
    </div>
  );
};

export default ComparisonFilter;
