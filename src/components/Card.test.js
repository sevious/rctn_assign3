import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

const el = {
  image: 'https://via.placeholder.com/150',
  name: 'Test Recipe',
  rating: 4.5,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  id: 1
};

// test('renders the component Card & given props', () => {
//   render(<Card el={el} />);

//   const img = screen.getByTestId(`img-recipe-${el.id}`);
//   expect(img).toHaveAttribute('alt', el.name);
//   expect(img).toHaveAttribute('src', el.image);

//   const text = screen.getByTestId(`title-recipe-${el.id}`);
//   expect(text.innerHTML).toBe(el.name);

//   const rate = screen.getByTestId(`rating-recipe-${el.id}`);
//   expect(Number(rate.innerHTML)).toBe(el.rating);

//   const links = screen.getByTestId(`link-recipe-${el.id}`);
//   expect(links).toHaveProperty('href', `https://dummyjson.com/recipes/${el.id}`)
// });

test('Test Case 2 : img-recipe-n with src and alt', () => {
  render(<Card el={el} />);

  const img = screen.getByTestId(`img-recipe-${el.id}`);
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute('src', el.image);
  expect(img).toHaveAttribute('alt', el.name);
});

test('Test Case 3 : title-recipe-n with innerHTML and toBe', () => {
  render(<Card el={el} />);

  const text = screen.getByTestId(`title-recipe-${el.id}`);
  expect(text).toBeInTheDocument();
  expect(text.innerHTML).toBe(el.name);
});

test('Test Case 4 : rating-recipe-n with innerHTML and toBe', () => {
  render(<Card el={el} />);

  const rate = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(rate).toBeInTheDocument();
  expect(Number(rate.innerHTML)).toBe(el.rating);
});

test('Test Case 5 : link-recipe-n with href', () => {
  render(<Card el={el} />);

  const links = screen.getByTestId(`link-recipe-${el.id}`);
  expect(links).toBeInTheDocument();
  expect(links).toHaveProperty('href', `https://dummyjson.com/recipes/${el.id}`);
  expect(links.innerHTML).toBe('READ MORE');
});
