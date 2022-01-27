/* eslint-disable testing-library/render-result-naming-convention */


import Banner from ".";
import renderer from 'react-test-renderer/shallow';

test('Banner', () => {
    const shallow = renderer.createRenderer();
    const component = shallow.render(
        
        <Banner
        heading='Explore Books on entrepreneurship'
        discription='Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.'
        img='/assets/banner.png'
    />
      
    );
    expect(component).toMatchSnapshot();

});