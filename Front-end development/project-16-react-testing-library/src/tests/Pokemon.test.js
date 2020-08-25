import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';
import pokemons from '../data';

test('A card with the information of a specific Pokémon must be returned', () => {
  const { getByTestId } = renderWithRouter(<App />);
  expect(getByTestId('pokemon-name')).toBeInTheDocument();
  expect(getByTestId('pokemonType')).toBeInTheDocument();
  expect(getByTestId('pokemon-weight')).toBeInTheDocument();
});

test('The correct name of the Pokémon should appear on the screen', () => {
  const { getByTestId } = renderWithRouter(<App />);
  expect(getByTestId('pokemon-name').innerHTML).toBe(pokemons[0].name);
  expect(getByTestId('pokemonType').innerHTML).toBe(pokemons[0].type);
});

test('The average weight of the Pokémon must be displayed with text in the desired format', () => {
  const { getByTestId } = renderWithRouter(<App />);

  const value = pokemons[0].averageWeight.value;
  const measurementUnit = pokemons[0].averageWeight.measurementUnit;
  expect(getByTestId('pokemon-weight')).toHaveTextContent(
    `Average weight:${value}${measurementUnit}`,
  );
});

test('The image must contain a src and alt attribute', () => {
  const { getByRole } = renderWithRouter(<App />);
  const img = getByRole('img');
  expect(img.src).toBe(pokemons[0].image);
  expect(img.alt).toBe(`${pokemons[0].name} sprite`);
});

test('The Pokémon displayed on the Pokédex must contain a navigation link to view details of this Pokémon', () => {
  const { getByText } = renderWithRouter(<App />);
  expect(getByText(/More Details/i).href).toMatch(`/pokemons/${pokemons[0].id}`);
});

test('When clicking on the pokémon navigation link, the application should be redirected to the pokemon details page', () => {
  const { history, getByText } = renderWithRouter(<App />);
  fireEvent.click(getByText(/More Details/i));
  expect(history.location.pathname).toBe(`/pokemons/${pokemons[0].id}`);
});

test('Favorite Pokémon should display a star icon', () => {
  const { getByText, getAllByRole } = renderWithRouter(<App />);
  fireEvent.click(getByText(/More Details/i));
  fireEvent.click(getByText(/Pokémon favoritado/i));
  const icon = getAllByRole('img')[1];
  expect(icon.src).toMatch('/star-icon.svg');
  expect(icon.alt).toBe('Pikachu is marked as favorite');
});
