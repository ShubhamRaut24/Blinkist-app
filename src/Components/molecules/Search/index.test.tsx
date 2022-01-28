import React from 'react';
import {fireEvent, render, screen } from '@testing-library/react';
import Search from '.';
import {BrowserRouter as Router} from 'react-router-dom'

const SearchComponent = (books:any)=>{   
    return(
        <Router>
            <Search books={books}/>
        </Router>
    )
}

test('it should render input box', () => {
  render(<Search />);
  const linkElement = screen.getByPlaceholderText('Search by title or author');
  expect(linkElement).toBeInTheDocument();
});

test('it should render filtered result of length 2 for Employee search',  async () => {
    let response = await fetch('http://localhost:3000/books');
    let books = await response.json();
    render(SearchComponent(books));
    const inputElement = screen.getByPlaceholderText('Search by title or author');
    // fireEvent.change(inputElement as HTMLInputElement, { target: { value : 'Employee'}})
    fireEvent.keyUp(inputElement as HTMLInputElement, { target: { value : 'Employee'}})
    const filteredData = screen.queryAllByTestId('result')
    expect(filteredData.length).toBe(2);
});
