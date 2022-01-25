import MyLibrary from '../pages/MyLibrary/index';
import EntrepreneurPage from '../pages/EntrepreneurPage';
import Header from '../../Components/organisms/Header';
import BookInfo from '../../Components/pages/BookInfoPage';
import Footer from '../../Components/organisms/Footer';
import {Box, Container} from '@mui/material';
import Explore from '../../Components/organisms/Explorer';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Blank from '../../Components/atoms/Blank';

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
            let data = await response.json();
            setData(data); 
            response = await fetch('http://localhost:3000/library');
            let library = await response.json();
            setLibrary(library);
            response = await fetch('http://localhost:3000/books');
            let books = await response.json();
            setBooks(books);
        };
        processor();
    }, []);

    return (
        (!data || !library || !books) 
        ?
        <Container sx={{display: 'flex', justifyContent:'center', alignItems: 'center', height: '100vh'}}>
        <CircularProgress /> 
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
                    <Footer sx={{
                        height:'270px',
                        width:'100%', 
                        backgroundColor: '#F1F6F4',
                        display: 'flex',
                        position: 'sticky',
                        top: '100vh',
                        padding: '24px 0px',
                        marginTop: '24px'
                    }} />
                   
                    {exploreOption ? <Explore /> : ''}
                    
                </Box>
            </Router>
            {blankStatus ? <Blank/> : '' }
        </Box>
    )
}

export default TemplateComponent;