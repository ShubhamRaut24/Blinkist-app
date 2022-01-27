import React from 'react';
import InputComponent from ".";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import renderer from 'react-test-renderer';
import {Search} from '@mui/icons-material';

const theme = createTheme({
    palette: {
      success:{
        main: '#eb3464',
      }
    }
});

test('Input Component', () => {
    const component = renderer.create(
        <ThemeProvider theme={theme}>
            <InputComponent startIcon={<Search/>}></InputComponent>
       </ThemeProvider>
    );
    expect(component).toMatchSnapshot();
});
