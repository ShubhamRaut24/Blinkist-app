import React from 'react';
import ProgressBar from ".";

import renderer from 'react-test-renderer';


test('ProgressBar', () => {
    const component = renderer.create(
   
            <ProgressBar></ProgressBar>
       
    );
    expect(component).toMatchSnapshot();
});