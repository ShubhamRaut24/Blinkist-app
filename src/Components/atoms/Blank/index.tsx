import {Box} from '@mui/material';
import theme from '../../../Themes/main'
const BlankComponent = ()=>{
    return (
    <Box sx={{position: 'absolute', top: '80px', left: 0, right: 0, height: '100vh', overflowY: 'hidden', backgroundColor: theme.palette.textcolor.light, opacity: '0.5'}} data-testid="blank">
    A
    </Box>)
}

export default BlankComponent;