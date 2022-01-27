import { LinearProgress } from '@mui/material';


const barStyled =
{ height: '15px', 
  opacity: '0.5', 
  borderRadius: '0px 0px 10px 10px', 
  backgroundColor: '#DFE8F6'
}

const ProgressBarComponent = ({value, ...props}:any) => {
    return (
            <LinearProgress value={value} {...props} sx={barStyled} variant="determinate" />
    )
}

export default ProgressBarComponent;