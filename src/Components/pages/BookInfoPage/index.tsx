import {Container, Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icons';
import {ArrowForward} from '@mui/icons-material';
import Button from '../../atoms/Button';
import Image from '../../atoms/Images';
import Tab from '../../molecules/tabs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useState} from 'react';
import Footer from '../../organisms/Footer';
import HeaderComponent from '../../organisms/Header';


function BookInfoComponent(props:any){
    const tabData = [
        { 
          'value': 'synopsis',
          'label': 'Synopsis',
        },
        { 
          'value': 'audience',
          'label': 'Who is it for?'
        },
        { 
            'value': 'author',
            'label': 'About the author'
          }
    ]
    const [currState, setCurrState] = useState(tabData[0].value);
    const handleState = (state:string) => {
        setCurrState(state);
    }

    const moreInfo = ()=>{
        if(currState === tabData[0].value){
            return(
                <Typography variant1='body2' sx={{fontWeight: '400',font:'Cera Pro', color:"#03314B" , fontSize:'16px'}}>
                    Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
                </Typography>
            )
        }else if(currState === tabData[1].value){
            return(
                <Typography variant1='body2' sx={{fontWeight: '400',font:'Cera Pro', color:"#03314B" , fontSize:'16px'}}>
                    For you    
                </Typography>
            )
        }else if(currState === tabData[2].value){
            return(
                <Typography variant1='body2' sx={{fontWeight: '400',font:'Cera Pro', color:"#03314B" , fontSize:'16px'}}>
                    Author       
                </Typography>
            )
        }
    }

    return(
        <Container>
          
            <Typography variant1='body2' sx={{fontWeight: '400',font:'Cera Pro', color:"#03314B" , fontSize:'16px' ,margin: '20px 0px',display: 'flex',justifyContent: 'start', marginBottom: '40px'}}>
                Get the key ideas from
            </Typography>
            <Box sx={{display: 'flex',justifyContent: 'space-between', marginBottom: '40px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Box>
                        <Typography variant1='h4' sx={{fontWeight: '700',marginBottom: '20px' ,fontSize:'36px',color:"#03314B" ,display: 'flex',justifyContent: 'start'}}>
                            Beyond Entrepreneurship 2.0
                        </Typography>
                        <Typography variant1='subtitle1' sx={{marginBottom: '20px',color:"#03314B" ,display: 'flex',justifyContent: 'start'}}>
                            Turning Your Business into an Enduring Great Company
                        </Typography>
                        <Typography variant1='body1' sx={{color: '#6D787E', fontWeight: '400', marginBottom: '20px' ,display: 'flex',justifyContent: 'start'}}>
                            By Jim Collins and Bill Lazier
                        </Typography>
                        <Box 
                            sx={{display: 'flex',
                            alignItems: 'center'
                            }}
                        >
                            <Icon icon={<AccessTimeIcon sx={{padding: '0px 5px 0px 0px'}}/>} />
                            <Typography sx={{color: "#6D787E", fontSize: "16px" }} variant1="body1">
                                15-minuter read
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{fontWeight: '700', display: 'flex'}}>
                        <Button children='Read now' size='medium' variant='outlined' color='success' sx={{margin: '12px 24px 12px 0px'}}/>
                        <Button children='Finished Reading' size='medium' variant='contained' color='success' sx={{margin: '12px 24px 12px 0px'}}/>
                        <Button children='Send to Kindle' size='medium' sx={{color:'#6D787E', margin: '12px 24px 12px 0px'}} endIcon={<ArrowForward />}/>
                    </Box>
                </Box>
                <Box>
                    <Image height='300' width='280' src= 'https://s3-alpha-sig.figma.com/img/9ef8/4879/159f1a8fdf9dafb9b0fd0b3a69170efb?Expires=1643587200&Signature=eTAkUfgVUgo53N3nFnCOYz6Zt5lW-1koFH4gcYDI~f6yBVyc1R5AKw~AFoVBSIXW3DR7119UHPltjMz6w4S9sB0tNhB6gJtenTp-63eGG2EAb-VaoR-398sc4xSle7qZ59XD-4kVnzvDddUbA01~KTb7FLy42DdmQhEfbOb1GVpyZct8FWaTx9rhZ8NlIg-pGx5~JAgPgPX1IfZwrC1Uei06BeN6CmhNrLrgAPPir6liEdjSoHcEE99ksrzXl76pEL9LtQZEkOOjz7~8OE1YqC74QavqpPYCSViyj2TBzn-ZeRaBEAbTBfFNTN~giqnLS7ZNeab~dUvgmwJW84q5sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
                </Box>
            </Box>
            <Box sx={{marginBottom: '260px', borderBottom: '1px solid lightGrey', padding: '20px 0px'}}>
                <Tab stateHandler={handleState} tabData={tabData}/>
                <Box sx={{height: '100px'}}>
                    {moreInfo()}
                </Box>
            </Box>
            <Footer></Footer>
        </Container>
    );
}

export default BookInfoComponent;