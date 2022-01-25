import Image from '../../atoms/Images/index';
import Typography from '../../atoms/Typography/index';
// import Bannerimage from "./BannerImg.png";
import {Box,} from '@mui/material';



const BannerComponent = ({heading, discription, img}:any) =>{
    return (
        <Box sx={{
                backgroundColor : '#F1F6F4',
                width: 'auto',
                display: 'flex',
                padding: '4.93%',
                boxSizing: 'border-box',
                justifyContent: 'center'
            }}>

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Typography variant1="h4" sx={{fontWeight: 'bold', width: '300px'}}>
                    {heading}
                </Typography>
                <Typography  sx={{ fontWeight: 'bold', color: '#6D787E'}}>
                    {discription}
                </Typography>
            </Box>
            <Image 
                src={img}
            />
        </Box>
    );
}

export default BannerComponent;