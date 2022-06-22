import React, {useEffect, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const getToDigString = (num: number) => num < 10 ? '0' + num : num;

const Example = (props: any) => {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setData(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    let h = getToDigString(data.getHours());
    let m = getToDigString(data.getMinutes());
    let s = getToDigString(data.getSeconds());


    return (
        <div>
            <div>{`${h}:${m}:${s}`}</div>
        </div>
    );
};


export default {
    title: 'ReactKABZDA/Clock',
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example/>;

export const ExampleStories = Template.bind({});



