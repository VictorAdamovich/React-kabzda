import React, {useEffect, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {DigitalClockView} from '../components/Clock/DigitalClockView';

const getToDigString = (num: number) => num < 10 ? '0' + num : num;

const Example = (props: any) => {
    const [data, setData] = useState(new Date());
    const [analog, setAnalog] = useState<boolean>(false);

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


    return (<>
            <button onClick={() => setAnalog(false)}>Digital</button>
            <button onClick={() => setAnalog(true)}>Analog</button>

            {analog
                ? <div>
                    анолог
                </div>
                : <DigitalClockView h={h} m={m} s={s}/>
            }
        </>
    );
};


export default {
    title: 'ReactKABZDA/ClockDigital',
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example/>;

export const ExampleStories = Template.bind({});



