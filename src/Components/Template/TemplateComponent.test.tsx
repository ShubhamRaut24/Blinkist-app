import renderer from 'react-test-renderer';
import TemplateComponent from './TemplateComponent';

test('renders Template Component', () => {
    const component = renderer.create(
   
        <TemplateComponent></TemplateComponent>
   
);
  expect(component).toMatchSnapshot();
});
