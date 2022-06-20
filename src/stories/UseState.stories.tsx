import React, {useMemo, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const generationValue = (): number => {
    console.log('generationValue');
    return 123124124;
};

const Example = (props: any) => {
    // const initValue = useMemo(generationValue,[]);
    console.log('Example1');
    const [counter, setCounter] = useState(generationValue);
    return (
        <div>
            <button onClick={() => setCounter((state:number)=> state+1)}>+</button>
            {counter}
        </div>
    );
};


export default {
    title: 'ReactKABZDA/useState',
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example/>;

export const ExampleStories = Template.bind({});



