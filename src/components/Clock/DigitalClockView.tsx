import React from 'react';

type DigitalClockViewType = {
    h: number
    m: number
    s: number
}
export const DigitalClockView = ({h, m, s}: any) => {

    return (
        <div>
            <div>{`${h}:${m}:${s}`}</div>
        </div>

    );
};