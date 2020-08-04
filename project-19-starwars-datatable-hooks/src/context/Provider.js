import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const Provider = (props) => {
  const [isLoading, setIsLoading] = useState(true); // Estado para mensagem de carregamento
  const [data, setData] = useState([]); // Estado para os dados

  const [name, setName] = useState(''); // Estado para atualização do input name

  const [column, setColumn] = useState(''); // Estado para atualização do select column
  const [comparison, setComparison] = useState(''); // Estado para atualização do select comparison
  const [value, setValue] = useState(''); // Estado para atualização do input value
  const [numericValues, setNumericValues] = useState([]); // Estado para atualizar valores numericos

  // Chamada da API
  const handleDataSuccess = (response) => {
    setData(response.results);
    setIsLoading(false);
  };
  const handleDataFailure = (error) => {
    setIsLoading(false);
    return error;
  };

  const fetchPlanets = () => {
    if (!isLoading) return null;

    setIsLoading(true);

    getPlanets().then(handleDataSuccess, handleDataFailure);
    return null;
  };

  // Definição do valores para filtar pelo nome, coluna, comparação e numero futuramente
  const handleChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const contextValue = {
    isLoading,
    data,
    getPlanets: fetchPlanets,
    handleChange,
    name,
    setName,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    numericValues,
    setNumericValues,
  };

  const { children } = props;

  return <StarWarsContext.Provider value={contextValue}>{children}</StarWarsContext.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
