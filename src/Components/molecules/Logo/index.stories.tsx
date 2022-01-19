import Logo from '.';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const LogoComponent = {
    title : 'Molecules/Logo',
    component: Logo
} as ComponentMeta<typeof Logo>;

export const LogoComp: ComponentStory<typeof Logo>  = (args:any) => <Logo {...args} />

LogoComp.args = {
    height: 30,
    url: '/assets/logo.png',
    name: 'Blinkist'
}

export default LogoComponent;