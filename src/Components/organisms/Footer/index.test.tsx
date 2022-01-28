import Footer from '.';
import renderer from 'react-test-renderer';


test('Footer', () => {
    const component = renderer.create(
        <Footer />
    );
  
  expect(component).toMatchSnapshot();
});

