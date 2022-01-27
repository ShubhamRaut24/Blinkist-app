
import { render, screen } from '@testing-library/react';
import ButtonComponent from '.';

test('renders Text passed from prop', () => {
  render(<ButtonComponent children="Hello" />);
  const typoElement = screen.getByRole('button');
  expect(typoElement).toBeInTheDocument();
});
