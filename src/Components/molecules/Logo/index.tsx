import {Box} from '@mui/material';
import Typography from '../../atoms/Typography/index';
import Image from '../../atoms/Images/index'
const LogoComponent = ({height=26, url, name, ...props}:any) => {
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >

            <Image height={height} {...props} alt="blinkist" component="img" src={url}/>

            <Typography 
                sx={{
                    fontWeight: 'bold',
                    fontSize: '18px'
                }}
            >
                {name}
            </Typography>
        </Box>
        
    );
}

export default LogoComponent;