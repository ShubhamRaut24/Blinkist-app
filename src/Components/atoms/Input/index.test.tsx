
import { render, screen } from '@testing-library/react';
import InputComponent from '.';

test('renders Input Component', () => {
  render(<InputComponent />);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});
