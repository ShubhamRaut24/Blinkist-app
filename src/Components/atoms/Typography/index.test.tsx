import React from 'react';
import { render, screen } from '@testing-library/react';
import TypographyComponents from '.';

test('renders learn react link', () => {
  render(<TypographyComponents children="Hello" />);
  const typoElement = screen.getByText(/hello/i);
  expect(typoElement).toBeInTheDocument();
});
