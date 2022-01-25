import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import  mainTheme  from "../../../Themes/main";

const barStyled =
{ height: '15px', 
  opacity: '0.5', 
  borderRadius: '0px 0px 10px 10px', 
  backgroundColor: '#DFE8F6'
}

const ProgressBarComponent = ({value = 0, theme, ...props}:any) => {
    return (
       
            <LinearProgress value={value} {...props} sx={barStyled} variant="determinate" />
      
    )
}

export default ProgressBarComponent;