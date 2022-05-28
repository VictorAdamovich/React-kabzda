import React from 'react';


type ControlledOnOffPropsType={
    on:boolean
    setOn:(On:boolean)=>void
}


export const ControlledOnOff = (props:ControlledOnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'

    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'


    };

    return (
        <div>
            <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
            <div style={offStyle} onClick={() => props.setOn(false)}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

