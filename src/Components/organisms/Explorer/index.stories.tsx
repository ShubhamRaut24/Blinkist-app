import ExploreComponent from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';


export default {
    title: "Organisms/Explore",
    component: ExploreComponent,
  }as ComponentMeta<typeof ExploreComponent>;
  
  const template: ComponentStory<typeof ExploreComponent> = (args:any) => <ExploreComponent {...args} />;
  export const Explore = template.bind({});
  Explore.args = {};