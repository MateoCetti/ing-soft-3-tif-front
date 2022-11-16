import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/pokemon/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders button', ()=>{
  const res = render(<App />);
  const linkElement = res.getByText("Get pokemon");
  expect(linkElement).toBeInTheDocument();
})