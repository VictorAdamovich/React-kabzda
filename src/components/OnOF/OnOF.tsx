import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

export const OnOffNoMemo = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'

    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'

    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'


    };

    const onClicked = () => {
        setOn(true);
        props.onChange(true);
    };
    const offClicked = () => {
        setOn(false);
        props.onChange(false);
    };

    return (
        <div>
            <div style={onStyle} onClick={() => onClicked()}>On</div>
            <div style={offStyle} onClick={() => offClicked()}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export const OnOff= React.memo(OnOffNoMemo);

