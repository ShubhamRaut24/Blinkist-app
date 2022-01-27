
import NavIconComponent from '.';
import renderer from 'react-test-renderer';
import {RocketLaunchOutlined} from '@mui/icons-material';



test('renders Text passed from prop', () => {
    const component = renderer.create(
    <NavIconComponent lable="rocket" leftIcon={<RocketLaunchOutlined/>} />
    );
  
  expect(component).toMatchSnapshot();
});
