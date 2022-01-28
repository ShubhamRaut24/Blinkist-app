import React from 'react';
import InputComponent from ".";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import renderer from 'react-test-renderer';
import {Search} from '@mui/icons-material';
import { fireEvent, render, screen } from '@testing-library/react';

const theme = createTheme({
    palette: {
      success:{
        main: '#eb3464',
      }
    }
});

test('Input Components', () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <InputComponent startIcon={<Search/>}></InputComponent>
       </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
});

test('it should render input element', () => {
  render(<InputComponent placeholder="Search by title or author"/>);
  const inputElement = screen.getByPlaceholderText(/Search by title or author/);
  expect(inputElement).toBeInTheDocument();
});


test('should be able to type in input', () => {
    render(<InputComponent placeholder="Search by title or author"/>);
    const inputElement = screen.getByPlaceholderText(/Search by title or author/) ;
    fireEvent.change(inputElement as HTMLInputElement, { target: { value : 'Employee'}})
    expect((inputElement as HTMLInputElement).value).toBe('Employee');
});
