import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Theme } from "../../../Themes/theme";
import {ComponentStory, ComponentMeta} from '@storybook/react';
import ButtonComponent from "./index";



export default {
  title: "Atoms/Button",
  component: ButtonComponent,
}as ComponentMeta<typeof ButtonComponent>;

const ButtonTemplate:ComponentStory<typeof ButtonComponent> = (args:any) => (
  <ButtonComponent {...args}>{args.children}</ButtonComponent>
);

export const primaryButton = ButtonTemplate.bind({});
primaryButton.args = {
    variant: 'outlined',
    children: 'Read now',
    color: 'primary'
};

export const SecondaryButton = ButtonTemplate.bind({});
SecondaryButton.args = {
    variant: 'contained',
    color: 'success',
    children: 'Finished Reading'
};