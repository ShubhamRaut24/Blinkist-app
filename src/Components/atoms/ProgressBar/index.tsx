import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from "../../../Themes/theme";

const barStyled =
{ height: '20px', 
  opacity: '0.5', 
  borderRadius: '0px 0px 10px 10px', 
  backgroundColor: '#DFE8F6'
}

const ProgressBarComponent = ({theme, ...props}:any) => {
    return (
        <ThemeProvider theme={Theme}>
            <LinearProgress {...props} sx={barStyled} variant="determinate" />
        </ThemeProvider>
    )
}

export default ProgressBarComponent;