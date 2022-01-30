import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import Tabs from '.';
import tabTheme from '../../../Themes/tabsTheme';
import { ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom'

const tabData = [
    { 
      'value': 'category',
      'label': 'Explore by category',
    },
    { 
      'value': 'recent',
      'label': 'See recently added titles'
    }
]


test('it should render 2 tabw for 2 length data', () => {
  render(
    <BrowserRouter>
    <ThemeProvider theme={tabTheme}>
  <Tabs tabData={tabData}/>
  </ThemeProvider>
  </BrowserRouter>);
  const tabsElement = screen.getAllByTestId(/tab-/);
  expect(tabsElement.length).toBe(2);
});


const mockCallback = jest.fn();

it("this should have green indicator color for currently reading tab by default", ()=>{
  render(
  <BrowserRouter>
  <ThemeProvider theme={tabTheme}>
  <Tabs tabData={tabData} stateHandler={mockCallback }/>
  </ThemeProvider>
  </BrowserRouter>);
  const tabsElement = screen.getByTestId('tab-recent');
  // fireEvent.change(tabsElement, {newValue: 'recent'});
  fireEvent.click(tabsElement);
})