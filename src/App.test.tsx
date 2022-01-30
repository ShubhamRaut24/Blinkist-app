import renderer from 'react-test-renderer';
import App from './App';
import {ThemeProvider, CssBaseline} from '@mui/material';
import theme from './Themes/main';

test('render the App Component', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
         <CssBaseline />
        <App/>
        </ThemeProvider>
);
  expect(component).toMatchSnapshot();
});
