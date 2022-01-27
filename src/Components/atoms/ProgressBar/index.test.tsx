import React from 'react';
import ProgressBar from ".";

import renderer from 'react-test-renderer';

const barStyled =
{ height: '15px', 
  opacity: '0.5', 
  borderRadius: '0px 0px 10px 10px', 
  backgroundColor: '#DFE8F6'
}

test('ProgressBar', () => {
    const component = renderer.create(
   
            <ProgressBar value={60} sx={barStyled} variant="determinate"></ProgressBar>
       
    );
    expect(component).toMatchSnapshot();
});