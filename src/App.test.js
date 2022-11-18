// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import App from './App';
import InputComponent from './inputComponent';
import Navbar from './Navbar'

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Pokedex/i);
  expect(title).toBeInTheDocument();
});

test('renders button', ()=>{
  const res = render(<InputComponent />);
  const text = res.getByText("Ingrese el nombre del pokemon");
  expect(text).toBeInTheDocument();
})

test('Check navbar color', ()=>{
  const res = render(<Navbar />);
  const navbar = res.container.querySelector("#my-navbar");
  expect(navbar).toBeInTheDocument();
  expect(navbar).toHaveClass("bg-danger")
})