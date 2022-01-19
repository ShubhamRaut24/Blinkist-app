import BannerComponent from "./index";
import {ComponentStory, ComponentMeta} from '@storybook/react';
export default {
  title: "Molecules/Banner",
  component: BannerComponent,
}as ComponentMeta<typeof BannerComponent>;

const Banner:ComponentStory<typeof BannerComponent>= (args:any) => <BannerComponent {...args} />;

export const BannerComp = Banner.bind({});
BannerComp.args = {
//   src: "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
//   alt: "Not Found",
//   width: "200px",
//   height: "200px",
};