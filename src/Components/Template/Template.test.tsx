/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Template from './TemplateComponent';
import {BrowserRouter} from 'react-router-dom';

const router = ()=>{
    return (
        <BrowserRouter>
            <Template />
        </BrowserRouter>
    )
}

describe('Template', () => {
    let response, data, library: any, books: any;
    beforeAll(async ()=> {
        response = await fetch('http://localhost:3000/extra');
        data = await response.json();
        response = await fetch('http://localhost:3000/library');
        library = await response.json();
        response = await fetch('http://localhost:3000/books');
        books = await response.json();

    })

    test('should render circular bar if data is empty', () => {
        render(router());
        const linkElement = screen.getByTestId('circular-progress');
        expect(linkElement).toBeInTheDocument()
    });
    
    // test('should not render circular bar if data is not empty', async () => {
    //     render(router());
    //     await new Promise((r) => setTimeout(r, 4000));
    //     const linkElement = screen.queryByTestId('circular-progress');
    //     expect(linkElement).not.toBeInTheDocument()
    // });
    // test('handle-explore button should be clickable', () => {
    //     render(router());
    //     const linkElement = screen.getByTestId('handle-explore');
    //     fireEvent.click(linkElement);
    //     const exploreBoxElement = screen.queryByTestId('explore-box');
    //     expect(exploreBoxElement).toBeInTheDocument()
    // });
});

jest.setTimeout(30000);