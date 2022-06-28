import React, {useEffect, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


const Example = () => {
    const [counter,setCounter]=useState(0)
    console.log('component rendered');

    useEffect(() => {
        console.log('effect occurred');

        return () => {
            console.log('RESET effect'+counter);
        };
    }, [counter]);



    return (<>
            Hello counter:{counter}
            <button onClick={()=>setCounter(counter+1)}>+</button>
        </>
    );
};


export default {
    title: 'ReactKABZDA/ResetEffect',
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example/>;

export const ExampleStories = Template.bind({});



