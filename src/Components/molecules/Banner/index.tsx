import Image from '../../atoms/Images/index';
import Typography from '../../atoms/Typography/index';
// import Bannerimage from "./BannerImg.png";
import {Box,} from '@mui/material';
const BannerComponent = ({heading, discription, img}:any) =>{
    return (
        <Box sx={{
                backgroundColor : '#F1F6F4',
                width: 'auto',
                height:'264px',
                display: 'flex',
                padding: '4.93%',
                boxSizing: 'border-box',
                justifyContent: 'center',
                position: 'absolute',
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '0%',
                
            }}>

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center',width: '319px',height:'90px', top:'45px',left:'45px',position:'absolute' }}>
                <Typography variant1="h4" sx={{fontWeight: 'bold',color: '#03314B',size:'36px'}}>
                Explore Books on entrepreneurship
                </Typography>
                <Box sx={{width: '461px',height:'69px', top:'150px',left:'45px',}}>
                <Typography variant1="subtitle2"  sx={{ fontWeight: 'normal', color: '#6D787E', size:'18px',lineheight:'23px', position:'absolute',fontfamily: 'Cera Pro',}}>
                Everything you need to know about thriving on a 
                shoestring budget, making your first million, and hiring
                right from the start.
                </Typography>
                </Box>
            </Box>
           <Image src={'/assets/banner.png'}>
               
           </Image>
           
           
        </Box>
    );
}

export default BannerComponent;