import React from 'react';
import { render, screen } from "@testing-library/react";
import Banner1 from ".";


test('Banners Heading', () => {
    render(<Banner1 />);
    const Element = screen.getByTestId('banner11');
    expect(Element).toBeInTheDocument();
  });