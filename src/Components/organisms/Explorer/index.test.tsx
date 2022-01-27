
import ExploreComponent from '.';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';



test('Explore', () => {
    const component = renderer.create(
        <Router>
            
                <ExploreComponent ></ExploreComponent>
           
        </Router>
    );
    expect(component).toMatchSnapshot();

    
    
});
