import React from 'react';
import renderWithRouter from '../helper/renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';

const favIds = [25, 4, 23];
const favoritePokemons = pokemons.filter((pokemon) => favIds.includes(pokemon.id));

test('If the person does not have favorite pokémons, the message `No favorite pokemon found` should appear on the screen.', () => {
  const { getByText } = renderWithRouter(<FavoritePokemons pokemons={[]} />);
  expect(getByText(/No favorite pokemon found/i)).toBeInTheDocument();
});

test('The page should not display any non-favored Pokémon cards.', () => {
  const { queryByText } = renderWithRouter(<FavoritePokemons pokemons={favoritePokemons} />);
  expect(queryByText('Snorlax', 'Dragonair')).not.toBeInTheDocument();
});

test('The page should display all favorite Pokémon cards;', () => {
  const { getAllByTestId } = renderWithRouter(<FavoritePokemons pokemons={favoritePokemons} />);
  expect(getAllByTestId('pokemon-name').length).toBe(3);
});
