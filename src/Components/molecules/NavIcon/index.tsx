import {Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import {useState} from 'react';
const NavIconComponent = (props: any)=>{
    const [hoverState, setHoverState] = useState(false);
   
    const  hoverStateHandler = ()=>{
        setHoverState(!hoverState)
    }
    return(
        <Box data-testid='nav-icon' sx={{display: 'flex', alignItems: 'center', justifyContent: 'left', width: 'auto', margin: '10px 10px 5px 0px'}} >
                {props.leftIcon ? props.leftIcon : ''}
                <Typography data-testid='tp' pl={1} onMouseEnter={hoverStateHandler} onMouseLeave={hoverStateHandler} sx={{color:`${hoverState ?'blue ' : '#6D787E'}`}}>
                    {props.label}
                </Typography>
                {props.rightIcon ? props.rightIcon : ''}
        </Box>
    )
}

export default NavIconComponent;