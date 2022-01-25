import BannerComponent from "./index";
import {ComponentStory, ComponentMeta} from '@storybook/react';

const Banner = {
  title: "Molecules/Banner",
  component: BannerComponent,
}as ComponentMeta<typeof BannerComponent>;

export const Template: ComponentStory<typeof BannerComponent>  = (args:any) => <BannerComponent {...args} />

Template.args = {
    heading: 'Explore Books on entrepreneurship',
    discription: 'Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.',
    img: '/assets/banner.png'
}

export default Banner