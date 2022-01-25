import Card from './index';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const CardComponent = {
    title : 'Organisms/Card',
    component: Card,
    parameters: {
        actions: {
          handles: ['mouseover'],
        },
    },
} as ComponentMeta<typeof Card>;

 const Template: ComponentStory<typeof Card>  = (args:any) => <Card {...args} />


export const Library = Template.bind({});

Library.args = {
    imgHeight: 300,
    url: 'https://s3-alpha-sig.figma.com/img/9ef8/4879/159f1a8fdf9dafb9b0fd0b3a69170efb?Expires=1643587200&Signature=eTAkUfgVUgo53N3nFnCOYz6Zt5lW-1koFH4gcYDI~f6yBVyc1R5AKw~AFoVBSIXW3DR7119UHPltjMz6w4S9sB0tNhB6gJtenTp-63eGG2EAb-VaoR-398sc4xSle7qZ59XD-4kVnzvDddUbA01~KTb7FLy42DdmQhEfbOb1GVpyZct8FWaTx9rhZ8NlIg-pGx5~JAgPgPX1IfZwrC1Uei06BeN6CmhNrLrgAPPir6liEdjSoHcEE99ksrzXl76pEL9LtQZEkOOjz7~8OE1YqC74QavqpPYCSViyj2TBzn-ZeRaBEAbTBfFNTN~giqnLS7ZNeab~dUvgmwJW84q5sg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    bookName: "Beyond Entrepreneurship",
    writerName: "Jim Collins & Bill Lazier",
    timeRead: "14-minute read",
    width: 350,
    progress: 60,
    inLibrary: true,
}


export const Finished = Template.bind({})

Finished.args = {
    imgHeight: 300,
    url: 'https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1643587200&Signature=BoUWxYui6ZV0fIjTDw1YEfMLmrL-Ll5loq08p9DNVyC8TR7IoS8hTaZdId2qpmgtvVpsb36~sU33JaWVKhmNV4CsrxTy2-MRtEO~wjV4lBzsE353fGMM8lYjsub2dR0YPp6EKBDnkhCl6a6Zka~btq~7nplZh9P7SqmP4s~KjNyHftRC~tOsfQiTLHHJck2r1i03QZMmc4STpabkgy4ubt29YHQ5x2J1ik6knr5djNwXqc6GgjPw6ynXWpVUX5~uz-1GqwvC98n2adilikhEW3gbpcBeArILY~V~zjbdTivTegMC8GX28aMZp1z7QvF3P~aMikDoFWLg6SJ7zrK2mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    bookName: "Being Boss",
    writerName: "Kathleen Shannon and Emily...",
    timeRead: "13-minute read",
    width: 350,
    inLibrary: false,
}

export default CardComponent;