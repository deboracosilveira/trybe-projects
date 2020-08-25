import React from 'react';
import renderWithRouter from '../helper/renderWithRouter';
import NotFound from '../components/NotFound';

test('The page must contain an heading h2 with the text `Page requested not found 😭`', () => {
  const { getByText } = renderWithRouter(<NotFound />);
  expect(getByText(/Page requested not found/i)).toBeInTheDocument();
});

test('The page should display a certain image', () => {
  const { queryAllByRole } = renderWithRouter(<NotFound />);
  const img = queryAllByRole('img');
  expect(img[1].src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
