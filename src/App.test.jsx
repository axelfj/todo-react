import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('adds a todo and toggles its completion', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Add a to do');
  fireEvent.change(input, { target: { value: 'Review security updates' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  const note = screen.getByText('Review security updates');
  expect(note).toBeInTheDocument();
  expect(input).toHaveValue('');
  fireEvent.click(note);
  expect(note).toHaveStyle({ textDecoration: 'line-through' });
  fireEvent.click(note);
  expect(note).toHaveStyle({ textDecoration: 'none' });
});
