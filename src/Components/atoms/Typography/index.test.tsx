
import { render, screen } from '@testing-library/react';
import TypographyComponents from '.';
import { ThemeProvider } from '@mui/material/styles';
import {Theme} from '../../../Themes/theme';
 
test('renders Text passed from prop', () => {

  render(
    <ThemeProvider theme={Theme} >
  <TypographyComponents children="Hello" variant1="h5" />
  </ThemeProvider>
  );
  const typoElement = screen.getByText(/hello/i);
  expect(typoElement).toBeInTheDocument();
});
