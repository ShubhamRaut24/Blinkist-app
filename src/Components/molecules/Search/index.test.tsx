
import SearchComponent from '.';
import renderer from 'react-test-renderer';

const bookData = {
    "id": 0,
    "name": "Bring Your Human to Work",
    "url": "https://s3-alpha-sig.figma.com/img/7a8d/2547/2a61cffee838cf588c90ce1fcfaedae7?Expires=1643587200&Signature=ekBIi7OlQPO21GI~8fPDOuOQ4nlCLyPuEP43UqRCQWyy6xtlmyoBlWm8mFVqvI~nXLT-zqA7mD~HHYsjrKefAJwQXn0C8KZmkePdKiCIIU3R~uprBblEYnzMf9X4lqtwkeQ-StYxP7evEzqJVoF0ZiYbWsrCuU-r2Hh-BuBswc9CKNSXsr240OGQUTNCBkpXLalMv1G5B8uMcGigrQZG3wNsyLn3Lhc7jAgkefLSuLIONUtnaPkNvQ6DFsoSTv5sPChSDGMi1GApj6LUBbp3Jy66ps6TMDAGXXQmIjRkbPqzlVBZxgrnnZ0EBwu8iVeznR56CdqArTLCbgCDnMop3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "timeRead": "13-minute read",
    "writerName": "Erica Keswin",
    "synopics": "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    "for": "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    "about_author": "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    "aim": "Turning Your Business into an Enduring Great Company"

}


test('renders Text passed from prop', () => {
    const component = renderer.create(
    <SearchComponent books={bookData}   />
    );
  
  expect(component).toMatchSnapshot();
});
