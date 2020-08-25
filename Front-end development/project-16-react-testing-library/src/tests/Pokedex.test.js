import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';
import pokemons from '../data';

const types = [];
pokemons.forEach((pokemon) => {
  if (!types.includes(pokemon.type)) types.push(pokemon.type);
});

describe('When pressing the next button, the page should display the next pokémon in the list', () => {
  test('The button should contain the text `Próximo pokémon`', () => {
    const { getByTestId } = renderWithRouter(<App />);
    expect(getByTestId('next-pokemon')).toHaveTextContent('Próximo pokémon');
  });

  test('Successive button clicks should show the next Pokémon in the list', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);
    pokemons.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeInTheDocument();
      fireEvent.click(getByTestId('next-pokemon'));
    });
  });

  test('Upon reaching the last Pokémon on the list, the Pokédex must return to the first Pokémon at the press of the button', () => {
    const { getByTestId, getByText } = renderWithRouter(<App />);
    for (let i = 0; i < 9; i += 1) {
      fireEvent.click(getByTestId('next-pokemon'));
    }
    expect(getByText('Pikachu')).toBeInTheDocument();
  });
});

test('Pokédex must display only one Pokémon at a time', () => {
  const { getAllByTestId, getByText } = renderWithRouter(<App />);
  expect(getAllByTestId('pokemon-name').length).toBe(1);
  expect(getByText('Encountered pokémons')).toBeInTheDocument();
});

describe('The Pokédex must contain filter buttons', () => {
  test('From the selection of a type button, the Pokédex should only circulate through the Pokémon of that type', () => {
    const { getByTestId, queryAllByTestId, getByText } = renderWithRouter(<App />);

    const next = getByTestId('next-pokemon');
    const buttons = queryAllByTestId('pokemon-type-button');

    types.forEach((type) => {
      const btn = buttons.find((element) => element.textContent === type);
      fireEvent.click(btn);

      expect(btn).toHaveTextContent(type);
      const pokemonByType = pokemons.filter((pokemon) => pokemon.type === type);

      pokemonByType.forEach((pokemon) => {
        expect(getByText(pokemon.name)).toBeInTheDocument();
        if (!next.disabled) {
          fireEvent.click(next);
        }
      });
    });
  });

  test('The button text must be the type name, p. ex. `Psychic`', () => {
    const { queryAllByTestId, getByTestId } = renderWithRouter(<App />);
    const buttons = queryAllByTestId('pokemon-type-button');

    buttons.forEach((button) => {
      fireEvent.click(button);
      const type = button.textContent;
      const pokemonType = getByTestId('pokemonType').textContent;
      expect(pokemonType).toBe(type);
    });
  });
});

describe('The Pokédex must contain a button to reset the filter', () => {
  test('The button text must be `All`', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText('All')).toBeInTheDocument();
  });

  test('After you click it, the Pokédex must circulate again through all pokémons', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);
    fireEvent.click(getByText('All'));
    pokemons.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeInTheDocument();
      fireEvent.click(getByTestId('next-pokemon'));
    });
  });

  test('When the page loads, the selected filter must be `All`', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);
    pokemons.forEach((pokemon) => {
      expect(getByText(pokemon.name)).toBeInTheDocument();
      fireEvent.click(getByTestId('next-pokemon'));
    });
  });
});

test('The `Próximo pokémon` button should be disabled if the filtered list of Pokémon has only one Pokémon', () => {
  const { getByTestId, queryAllByTestId } = renderWithRouter(<App />);
  const next = getByTestId('next-pokemon');
  const buttons = queryAllByTestId('pokemon-type-button');

  types.forEach((type) => {
    const btn = buttons.find((element) => element.textContent === type);
    fireEvent.click(btn);

    const pokemonByType = pokemons.filter((pokemon) => pokemon.type === type);

    pokemonByType.forEach(() => {
      if (pokemonByType.length === 1) {
        expect(next.disabled).toBeTruthy();
      }
    });
  });
});
