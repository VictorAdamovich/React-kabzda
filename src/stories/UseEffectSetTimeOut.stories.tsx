import React, {useEffect, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

const generationValue = (): number => {
    console.log('generationValue');
    return 1;
};

const Example = (props: any) => {
    // const initValue = useMemo(generationValue,[]);
    console.log('Example1');
    const [counter, setCounter] = useState(generationValue);
    const [fake, setFake] = useState(generationValue);


    useEffect(() => {
        setInterval(()=>{
            console.log('tik');
            setCounter(counter+1)
        },1000)

        document.title = counter.toString();
    },[]);


    return (
        <div>
            Hello,{counter}- fake:{fake}
            {/*<button onClick={() => setCounter((state: number) => state + 1)}>Counter</button>*/}
            {/*<button onClick={() => setFake((state: number) => state + 1)}>Fake</button>*/}
        </div>
    );
};


export default {
    title: 'ReactKABZDA/useEffectSetTimeout',
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example/>;

export const UseEffect = Template.bind({});



