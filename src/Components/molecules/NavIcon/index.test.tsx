import React from 'react';
import { render, screen } from "@testing-library/react";
import NavIconComponent from ".";
import AddIcon from '@mui/icons-material/Add';


test('render the nav icon as well as label', () => {
  render(<NavIconComponent label='blinkist' leftIcon={<AddIcon />}/>);
  const linkElement = screen.getByTestId('nav-icon')
  expect(linkElement.textContent).toBe('blinkist');
});


test('Left icon', () => {
    render(<NavIconComponent label='blinkist' leftIcon={<AddIcon data-testid='left-icon'/>}/>);
    const linkElement = screen.getByTestId('left-icon')
    expect(linkElement).toBeInTheDocument();
});

test('Right icon', () => {
    render(<NavIconComponent label='blinkist' rightIcon={<AddIcon data-testid='right-icon'/>}/>);
    const linkElement = screen.getByTestId('right-icon')
    expect(linkElement).toBeInTheDocument();
});
