import React from 'react';
import BookCard from ".";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'
const props = {
    id: 0,
    imgHeight: 240,
    url: '/assets/book.png',
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 280,
    inLibrary: false,
    libraryHandler:false,
    cardId:1
};

test('BookCard component', () => {
    const component = renderer.create(
        <BrowserRouter>
            <BookCard {...props}></BookCard>
        </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
});