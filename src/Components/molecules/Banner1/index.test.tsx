import React from 'react';
import Banner1 from ".";

import renderer from 'react-test-renderer';


test('Banner', () => {
    const component = renderer.create(
            <Banner1></Banner1>
    );
    expect(component).toMatchSnapshot();
});