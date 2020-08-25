import React, { useContext } from 'react';

import StarWarsContext from '../context/StarWarsContext';

const SearchPlanet = () => {
  const { handleChange, setName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="search">
        Procurar
        <input
          data-testid="name-filter"
          type="text"
          name="search"
          onChange={(event) => {
            handleChange(event, setName);
          }}
        />
      </label>
    </div>
  );
};

export default SearchPlanet;
