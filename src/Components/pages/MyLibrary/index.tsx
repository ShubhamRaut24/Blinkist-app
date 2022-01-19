/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect} from 'react';
import {Container, Box, Grid} from '@mui/material';
import Typography from '../../atoms/Typography';
import {Theme} from '../../../Themes/theme';
import Tab from '../../molecules/tabs';
import Card from '../../organisms/Card';
import CircularProgress from '@mui/material/CircularProgress';
import HeaderComponent from '../../organisms/Header';
import Footer from '../../organisms/Footer';
const MyLibrary = () =>{
    const [data, setData] = useState({
        currentlyReading : [],
        finishedBook: []
    });
    const tabData = [
        { 
          'value': 'reading',
          'label': 'Currently reading',
        },
        { 
          'value': 'finished',
          'label': 'Finished',
        }
    ]
    const [currState, setCurrState] = useState(tabData[0].value);
    useEffect(() => {
        const processor = async () => {
            let response = await fetch('/Data/db.json');
            let data = await response.json();
            setData(data.book);
        };
        processor();
    }, []);
    const handleState = (state:string) => {
        setCurrState(state);
    }

    const cards = () => {

        if(data == null){
            return  <CircularProgress />
        }
        else {
            if(currState === 'reading'){
                return data.currentlyReading.map((currData:any) => {
                    return <Card 
                        key={currData.id}
                        imgHeight= {250}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {300}
                        inLibrary= {true}
                        progress= {currData.progress}
                    />
                })
            }else{
                return data.finishedBook.map((currData:any) => {
                    return <Card 
                        key={currData.id}
                        imgHeight= {250}
                        url= {currData.url}
                        bookName= {currData.name}
                        writerName= {currData.writerName}
                        timeRead= {currData.timeRead}
                        width= {300}
                        inLibrary= {false}
                        progress= {currData.progress}
                        
                    />
                })
            }
        }
    }


    

    return (
        <Container>
           
            <Typography   variant1="h4" theme={Theme} sx={{display:'flex',justifyContent: 'start',color:'#03314B', fontWeight:'700', font:'Cera Pro'}} >
                My Library
            </Typography>
            <Tab stateHandler={handleState} tabData={tabData}/>
            <Grid spacing={2} sx={{display: 'flex', justifyContent: 'start', alignItems: 'center', flexWrap: 'wrap'}}>
                { 
                    cards()
                }
            </Grid>
           
            
        </Container>
    );
}

export default MyLibrary;