import React from 'react';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testing PokemonDetails', () => {
  pokemons.forEach((pokemon) => {
    test('It should contain information about the selected Pokémon', () => {
      const { getByText, queryByText, getAllByAltText } = renderWithRouter(<App />, {
        route: `/pokemons/${pokemon.id}`,
      });

      expect(getByText(`${pokemon.name} Details`)).toBeInTheDocument();
      expect(queryByText(/More Details/i)).not.toBeInTheDocument();
      expect(getByText('Summary').tagName).toBe('H2');
      expect(getByText(pokemon.summary)).toBeInTheDocument();
      expect(getByText('Pokémon favoritado?')).toBeInTheDocument();
      expect(getByText(`Game Locations of ${pokemon.name}`)).toBeInTheDocument();

      const pokemonLoc = getAllByAltText(`${pokemon.name} location`);

      pokemon.foundAt.map(({ location, map }) => {
        expect(getByText(location)).toBeInTheDocument();
        expect(pokemonLoc.length).toBeGreaterThan(0);
        return expect(pokemonLoc.some(({ src }) => src === map)).toBeTruthy();
      });
    });
  });
});
