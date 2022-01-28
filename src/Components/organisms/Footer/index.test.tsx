import Footer from '.';
import renderer from 'react-test-renderer';


test('Footers', () => {
    const component = renderer.create(
        <Footer />
    );
  
  expect(component).toMatchSnapshot();
});

