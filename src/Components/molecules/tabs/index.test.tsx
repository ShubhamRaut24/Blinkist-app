import React from 'react'
import Tabs from '.';
import renderer from 'react-test-renderer';



const tabData = [
    { 
      'value': 'category',
      'label': 'Explore by category',
    },
    { 
      'value': 'recent',
      'label': 'recently added'
    },
    { 
        'value': 'popular',
        'label': 'See popular titles'
      }
]

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {}
   

test('renders Tab', () => {
    const component = renderer.create(
    <Tabs textColor= 'primary' indicatorColor= 'success' tabData= {tabData} value="recent"  onChange={handleChange}/>
    );
  
  expect(component).toMatchSnapshot();
});
