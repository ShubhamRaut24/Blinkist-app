import React from 'react';
import ExploreComponent from ".";
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'


test('BookCard', () => {
    const component = renderer.create(
        <BrowserRouter>
            <ExploreComponent ></ExploreComponent>
        </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
});