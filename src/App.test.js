import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders input field and button', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Search a word');
  const buttonElement = screen.getByText('Search');
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('searches for a word and displays its definition', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Search a word');
  const buttonElement = screen.getByText('Search');
  fireEvent.change(inputElement, { target: { value: 'React' } });
  fireEvent.click(buttonElement);
  const definitionElement = screen.getByText('A JavaScript library for building user interfaces.');
  expect(definitionElement).toBeInTheDocument();
});
