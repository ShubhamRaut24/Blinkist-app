import React from 'react';
import LogoComponent from ".";
import renderer from 'react-test-renderer';


test('Logo Component', () => {
    const component = renderer.create(
            <LogoComponent height= '30' url= '/assets/logo.png' name= 'Blinkist'></LogoComponent>
    );
    expect(component).toMatchSnapshot();
});