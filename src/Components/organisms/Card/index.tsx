import {Paper, Box} from '@mui/material';
import Image from '../../atoms/Images';
import {MoreHoriz} from '@mui/icons-material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '../../atoms/Typography';
import ProgressBar from '../../atoms/ProgressBar';
import Icon from '../../atoms/Icons';
//import AddIcon from '@mui/icons-material/Add';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NavLink} from 'react-router-dom';
import ButtonComponent from '../../atoms/Button';



const CardComponent = ({imgHeight, url, bookName, writerName, timeRead = "0-minute read", progress, width, inLibrary }: any) => {
    return(
        <Paper elevation={1} sx={{borderRadius: '10px', width: `${width}px`, margin: "10px"}}>
            {/* <NavLink to='/book-info'> */}
                <Image sx={{borderRadius: '10px 10px 0px 0px'}} height={imgHeight} width={width} alt="blinkist" component="img"  src={url}/>
            {/* </NavLink> */}
            <Box sx={{padding: '5px' }}>
                <Typography variant1="subtitle1" sx={{fontWeight: '700',fontSize:'18px',font: 'Cera Pro', color:'#03314B', display:'flex',justifyContent: 'start'}}>
                    {bookName}
                </Typography>
                <Typography variant1="body1" sx={{fontWeight: '500', color: '#6D787E', display:'flex',justifyContent: 'start'  }}>
                    {writerName}
                </Typography>
                <Box 
                    sx={{display: 'flex',
                    alignItems: 'center'
                    }}
                >
                    <Icon sx={{padding: '6px'}} icon={<AccessTimeIcon />} />
                    <Typography sx={{color: "#6D787E", fontSize: "16px" }} variant1="caption3">
                        {timeRead}
                    </Typography>
                </Box>
                
                <Box sx={{display: 'flex',justifyContent: 'end'}}>
                    <Icon sx={{padding: '6px'}} icon={<MoreHoriz />} />   
                </Box>
               
            </Box>
            {inLibrary ? 
                <ProgressBar sx={{borderRadius: '0px 0px 10px 10px'}} width={100} value={progress} color="success"/> :
                <Box sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    height: '60px',
                    borderTop: '1px solid lightGrey',
                    
                }}>
                    {/* <Icon variant="h4" icon={<AddIcon sx={{fontWeight: 'bold', fontSize: '35px',color:'#FFFFFF'}}/>} /> */}
                    <ButtonComponent>
                    <Typography variant1="body1" sx={{fontWeight: '500',fontSize: '19px', color:'#0365F2',display:'flex',justifyContent: 'center'}}>
                        Read again 
                    </Typography>
                    </ButtonComponent>
                </Box>
            }
        </Paper>
    );
}

export default CardComponent;