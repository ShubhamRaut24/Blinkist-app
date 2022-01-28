import renderer from 'react-test-renderer';
import App from './App';

test('renders App Component', () => {
    const component = renderer.create(
        <App/>
);
  expect(component).toMatchSnapshot();
});
