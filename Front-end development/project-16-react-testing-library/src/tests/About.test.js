import React from 'react';
import renderWithRouter from '../helper/renderWithRouter';
import App from '../App';

test('The "About" page should display information about Pokédex', () => {
  const { getByText } = renderWithRouter(<App />, { route: '/about' });
  expect(getByText(/About Pokédex/i)).toBeInTheDocument();
});

test('The page must contain an heading h2 with the text About Pokédex', () => {
  const { getByText } = renderWithRouter(<App />, { route: '/about' });
  const h2 = getByText(/About Pokédex/i);
  expect(h2.tagName).toBe('H2');
});

test('The page must contain two paragraphs with text about Pokédex;', () => {
  const { container } = renderWithRouter(<App />, { route: '/about' });
  const p = container.getElementsByTagName('p');
  expect(p.length).toBe(2);
});

test('The page should contain the following image of a Pokédex', () => {
  const { getByRole } = renderWithRouter(<App />, { route: '/about' });
  const img = getByRole('img');
  const src =
    'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  expect(img.src).toBe(src);
});
