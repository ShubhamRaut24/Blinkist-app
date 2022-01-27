
import { render, screen } from '@testing-library/react';
import IconComponent from '.';

test('renders Icon', () => {
  render(<IconComponent icon="hello"/>);
  const iconElement = screen.getByText('hello');
  expect(iconElement).toBeInTheDocument();
});
