import {Container, Box} from '@mui/material'
import Input from '../../atoms/Input';
import {Search} from '@mui/icons-material';
import Card from '../../organisms/Card';
import Typography from '../../atoms/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import theme from '../../../Themes/main'
import Banner1 from '../../molecules/Banner1';

const useStyles = makeStyles({
    input: {
        margin: `${theme.spacing(5)} 0px`,
        height: theme.spacing(6),
        width: '100%',
        maxWidth: '658px',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    heading: {
        fontWeight: '700',
        marginTop: '75px',
        display:'flex',
        jusstifyContent:'start',
        color:"#03314B",
        fontSize:'24px'
    },
    main: {
        display: 'flex', 
        flexWrap: 'wrap', 
        alignItems: 'center'
    }
});


const EntrepreneurComp = ({books, setBooks, data, setData, library, setLibrary, ...props}:any)=>{
    const classes = useStyles();
    const checkInLibrary = (bookId:any)=>{
        let checker = (curr:any) => {
            for(let currData of curr){
                if(currData.id === bookId){
                    return {status: true, progress : currData.progress};
                }
            }
            return {status: false};
        }
        let inCurrRead = checker(library.currentlyReading)
        return inCurrRead.status ? inCurrRead : checker(library.finishedBook);
    }

    const libraryHandler = async (bookId:any, setBookStatus:any) => {
        
            library.currentlyReading.push({
                "id" : bookId,
                "progress" : 0
            });
            setLibrary(library);
            setBookStatus(true);
            let res = await  fetch("http://localhost:3000/library/", {
              method: "PUT",
              body: JSON.stringify(library),
              headers: {
                "Content-Type": "application/json"
              }
            });
            return await res.json();
          
    }
    return (
        <Container sx={{marginBottom:'100px'}}>
           
            <Banner1/>
            <Input className={classes.input} startIcon={<Search />} placeholder="Search by title or author" sx={{display:'flex',jusstifyContent:'start'}} />
            <Box>
                {
                data.map((curr:any)=>{
                    return <Box data-testid='container'>
                        <Typography className={classes.heading} sx={{}}>
                            {curr.heading}
                        </Typography>
                        <Box className={classes.main}>
                            {  
                                !library ?
                                 <CircularProgress data-testid='circular-progress' /> :
                                    curr.books.map((currData:any) => {
                                        currData = books[currData.id];
                                        const inLibrary = checkInLibrary(currData.id)
                                        return <Card 
                                            cardId={currData.id}
                                            key={currData.id}
                                            imgHeight= {240}
                                            url= {currData.url}
                                            bookName= {currData.name}
                                            writerName= {currData.writerName}
                                            timeRead= {currData.timeRead}
                                            width= {280}
                                            inLibrary= {inLibrary.status}
                                            progress={inLibrary.progress}
                                            libraryHandler={libraryHandler}
                                        />
                                    })
                            }
                        </Box>
                    </Box>
                })
            }
            </Box>
        </Container>
    );
}

export default EntrepreneurComp;