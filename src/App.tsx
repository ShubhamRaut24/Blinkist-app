import {ThemeProvider, CssBaseline} from '@mui/material';
import React from 'react';
import './App.css';
import  Template  from './Components/Template/TemplateComponent';
import theme from './Themes/main';



// eslint-disable-next-line @typescript-eslint/no-unused-vars



function App() {
  return (
    <div data-testid="App1" className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Template />
    </ThemeProvider>

    </div>
  );
}

export default App;
