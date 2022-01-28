import { createTheme } from "@mui/material";



export const Theme = createTheme({
  palette: {
    success:{
      main: '#11cb5f',
    },
    primary: { 
      main: '#ffffff',
      contrastText: '#11cb5f'
    },
    background: {
      default: "#394764"
    }
  },
  typography: {
    fontFamily: 'Cera Pro',
    h1:{
      fontWeight: 'bold'
    },
    h5: {
      fontWeight: 'bold',
      fontSize: '33px'
    }
  }

});