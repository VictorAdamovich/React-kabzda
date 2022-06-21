import React, {useEffect, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const generationValue = (): number => {
    console.log('generationValue');
    return 123124124;
};

const Example = (props: any) => {
    // const initValue = useMemo(generationValue,[]);
    console.log('Example1');
    const [counter, setCounter] = useState(generationValue);
//every render
    useEffect(() => {
        document.title = counter.toString();
    });

    // only first render
    useEffect(() => {
        document.title = counter.toString();
    }, []);

    // every count change
    useEffect(() => {
        document.title = counter.toString();
    }, [counter]);

    return (
        <div>
            Hello,{counter}
            <button onClick={() => setCounter((state: number) => state + 1)}>+</button>
        </div>
    );
};


export default {
    title: 'ReactKABZDA/useEffect',
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example/>;

export const UseEffect = Template.bind({});



