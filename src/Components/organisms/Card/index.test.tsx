
import Card from '.';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

const props = {
    imgHeight:240,
    url:"https://s3-alpha-sig.figma.com/img/7a8d/2547/2a61cffee838cf588c90ce1fcfaedae7?Expires=1643587200&Signature=ekBIi7OlQPO21GI~8fPDOuOQ4nlCLyPuEP43UqRCQWyy6xtlmyoBlWm8mFVqvI~nXLT-zqA7mD~HHYsjrKefAJwQXn0C8KZmkePdKiCIIU3R~uprBblEYnzMf9X4lqtwkeQ-StYxP7evEzqJVoF0ZiYbWsrCuU-r2Hh-BuBswc9CKNSXsr240OGQUTNCBkpXLalMv1G5B8uMcGigrQZG3wNsyLn3Lhc7jAgkefLSuLIONUtnaPkNvQ6DFsoSTv5sPChSDGMi1GApj6LUBbp3Jy66ps6TMDAGXXQmIjRkbPqzlVBZxgrnnZ0EBwu8iVeznR56CdqArTLCbgCDnMop3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    bookName:"Bring Your Human to Work",
    writerName:"Erica Keswin",
    timeRead : "19-minute read",
    progress:60,
    width:280,
    inLibrary:true,
    libraryHandler:false,
    cardId:1
}

test('Card', () => {
    const component = renderer.create(
        <Router>
            
                <Card {...props}></Card>
           
        </Router>
    );
    expect(component).toMatchSnapshot();

    
    
});
