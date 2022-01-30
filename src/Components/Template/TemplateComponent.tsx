import MyLibrary from '../pages/MyLibrary/index';
import EntrepreneurPage from '../pages/EntrepreneurPage';
import Header from '../organisms/Header';
import BookInfo from '../pages/BookInfoPage';
import Footer from '../organisms/Footer';
import {Box, Container} from '@mui/material';
import Explore from '../organisms/Explorer';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Blank from '../atoms/Blank';

const TemplateComponent = () => {
    const [exploreOption, setExploreOption] = useState<boolean>(false);
    const [blankStatus, setBlankStatus] = useState<boolean>(false);
    const handleExploreMenu = () => {
        setExploreOption(!exploreOption);
        setBlankStatus(!exploreOption);
    };
    const [books, setBooks] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [library, setLibrary] = useState<any>(null);
    useEffect(() => {
        const processor = async () => {
            let response = await fetch('http://localhost:3000/extra');
            let data1 = await response.json();
            setData(data1); 
            response = await fetch('http://localhost:3000/library');
            let library1 = await response.json();
            setLibrary(library1);
            response = await fetch('http://localhost:3000/books');
            let books1 = await response.json();
            setBooks(books1);
        };
        processor();
    }, []);

    return (
        (!data || !library || !books) 
        ?
        <Container sx={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
        <CircularProgress data-testid='circular-progress' /> 
        </Container>
        :
        <Box>
            <Router>
                <Header 
                    url= '/assets/logo.png'
                    name= 'Blinkist'
                    handleExploreMenu={handleExploreMenu}
                    exploreOption={exploreOption}
                    books={books}
                    blankStatus={blankStatus}
                    setBlankStatus={setBlankStatus}
                />
                <Box sx={{position: 'absolute', top: '93px', width: '100%'}}>
                    <Routes>
                        <Route path="/EntrepreneurPage" element={ <EntrepreneurPage books={books} setBooks={setBooks} data={data} setData={setData} library={library} setLibrary={setLibrary} />  }  />
                        <Route path="book-info/:bookId" element={<BookInfo library={library} setLibrary={setLibrary}/>} />
                        <Route path="/" element={<MyLibrary books={books} setBooks={setBooks} library={library} setLibrary={setLibrary}/>}/>
                        <Route
                            path="*"
                            element={
                                <div style={{ padding: "1rem" }}>
                                    <p>There's nothing here!</p>
                                </div>
                            }
                        />
                    </Routes>
                    <Footer  />
                   
                    {exploreOption ? <Explore data-testid='explore-box' /> : ''}
                    
                </Box>
            </Router>
            {blankStatus ? <Blank/> : '' }
        </Box>
    )
}

export default TemplateComponent;