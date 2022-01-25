import {Container, Box} from '@mui/material';
import Typography from '../../atoms/Typography';
import Icon from '../../atoms/Icons';
import {ArrowForward} from '@mui/icons-material';
import Button from '../../atoms/Button';
import Image from '../../atoms/Images';
import Tab from '../../molecules/tabs';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import theme from '../../../Themes/main'
import {makeStyles} from '@mui/styles'

const useStyle = makeStyles({
    topHeading: {
        margin: `${theme.spacing(3)} 0`
    },
    mainParent: {
        display: 'flex',
        justifyContent: 'space-between', 
        marginBottom: theme.spacing(5)
    },
    parent: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(4)
    },
    aim: {
        marginBottom: theme.spacing(4)
    },
    writerName: {
        color: 'gray', 
        fontWeight: 'bold', 
        marginBottom: theme.spacing(4)
    },
    timeInfo: {
        display: 'flex',
        alignItems: 'center'
    },
    alarmIcon: {
        paddingRight: theme.spacing(0),
        marginTop: theme.spacing(0)
    },
    time: {
        color: theme.palette.textcolor.light, 
        fontSize: theme.spacing(3) 
    },
    clickables: {
        fontWeight: '700', 
        display: 'flex',
    },
    statusBox: {
        margin: `0 ${theme.spacing(4)} 0 0`        
    },
    status: {
        margin: `0 ${theme.spacing(4)} 0 0`,
    },
    forward: {
        color:'gray', 
        margin: `0 ${theme.spacing(4)} 0 0` 
    },
    footer: {
        marginBottom: '260px', 
        borderBottom: '1px solid lightGrey', 
        padding: `${theme.spacing(4)} 0px`
    }
});

const BookInfoComponent = ({library, setLibrary}:any)=>{
    const classes = useStyle();
    const { bookId } = useParams();
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
    const [bookData, setBookData] = useState<any>(null);
    const [currentlyReadingStatus, setcurrentlyReadingStatus] = useState<boolean>(true);
    const handleState = (state:any) => {
        setCurrState(state);
    }
    const checkInLibrary = ()=>{
        for(let curr of library.currentlyReading){
            console.log(curr.id,bookId)
            if(curr.id === bookId){
                setcurrentlyReadingStatus(true)
                return;
            }
        }
        setcurrentlyReadingStatus(false);
    }
    useEffect(() =>{
        const processor = async (bookId: any) => {
            let response = await fetch(`http://localhost:3000/books/${bookId}`);
            const bookData = await response.json();
            setBookData(bookData);
        }
        checkInLibrary();
        processor(bookId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const libraryStatusHandler = async (event:any) => {
        console.log("hello")
        try{
            let index = library.currentlyReading.findIndex((curr:any) => curr.id === bookId);
            let currData = library.currentlyReading[index];
            library.currentlyReading.splice(index, 1);
            library.finishedBook.push({"id" : currData.id});
            setLibrary(library);
            let res = await  fetch("http://localhost:3000/library/", {
                method: "PUT",
                body: JSON.stringify(library),
                headers: {
                "Content-Type": "application/json"
                }
            });
            checkInLibrary();
            return await res.json();
        }catch(err){
            setLibrary(library);
        }
    }
    const moreInfo = ()=>{
        if(currState === tabData[0].value){
            return(
                <Typography>
                    {bookData.synopics}
                </Typography>
            )
        }else if(currState === tabData[1].value){
            return(
                <Typography>
                    {bookData.for}  
                </Typography>
            )
        }else if(currState === tabData[2].value){
            return(
                <Typography>
                    {bookData.about_author}       
                </Typography>
            )
        }
    }
    return(
        !bookData 
                ?
        <CircularProgress />
            :
        <Container>
            <Typography className={classes.topHeading} sx={{display:'flex',jusstifyContent:'start', fontSize:'18px'}}>
                Get the key ideas from
            </Typography>
            <Box className={classes.mainParent}>
                <Box className={classes.parent}>
                    <Box>
                        <Typography className={classes.name} variant1='h4' sx={{display:'flex',jusstifyContent:'start',color:'#03314B' }}>
                            {bookData.name}
                        </Typography>
                        <Typography className={classes.aim} sx={{display:'flex',jusstifyContent:'start',fontSize:'20px' ,fontWeight:'550',fontFamily:'Cera Pro',color:'#03314B' }} >
                            {bookData.aim}
                        </Typography>
                        <Typography className={classes.writerName} sx={{display:'flex',jusstifyContent:'start'}} >
                            {bookData.writerName}
                        </Typography>
                        <Box className={classes.timeInfo}
                            sx={{
                            }}
                        >
                            <Icon icon={<AccessTimeIcon className={classes.alarmIcon}  />} />
                            <Typography  className={classes.time}   variant1="body">
                                {bookData.timeRead}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.clickables}>
                        <Button children='Read now' size='medium' variant='outlined' color='success' className={classes.statusBox}/>
                        {currentlyReadingStatus 
                            ?
                            <Button children= 'Finished Reading' size='medium' variant='contained' color='success' onClick={libraryStatusHandler} classesName={classes.status}/>
                            :
                            ''
                        }
                        <Button children='Send to Kindle' size='medium' className={classes.forward} endIcon={<ArrowForward />}/>
                    </Box>
                </Box>
                <Box>
                    <Image height='300' width='280' src= {bookData.url}/>
                </Box>
            </Box>
            <Box className={classes.footer}>
                <Tab stateHandler={handleState} tabData={tabData}/>
                <Box sx={{height: '100px'}}>
                    {moreInfo()}
                </Box>
            </Box>
        </Container>

    );
}

export default BookInfoComponent;