
import BlankComponent from '.'
import renderer from 'react-test-renderer';

test('Blank Component', () => {
    const component = renderer.create(
            <BlankComponent/>
    );
    expect(component).toMatchSnapshot();
});