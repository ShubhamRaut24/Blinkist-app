import FooterComponent from '.';
import renderer from 'react-test-renderer';




test('renders Footer Component', () => {
    const component = renderer.create(
        <FooterComponent />
    );
  
  expect(component).toMatchSnapshot();
});