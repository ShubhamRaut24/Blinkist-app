import renderer from 'react-test-renderer';
import App from './App';

test('render the App Component', () => {
    const component = renderer.create(
        <App/>
);
  expect(component).toMatchSnapshot();
});
