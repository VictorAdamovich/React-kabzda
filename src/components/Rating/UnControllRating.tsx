import React, {useState} from 'react';


type StarProps = {
    selected: boolean
    setValue: () => void
}


export function UnControllRating() {
    let [value, setValue] = useState<number>(0);
    return (
        <div>
            <Star selected={value > 0} setValue={()=>setValue(1)}/>
            <Star selected={value > 1} setValue={()=>setValue(2)}/>
            <Star selected={value > 2} setValue={()=>setValue(3)}/>
            <Star selected={value > 3} setValue={()=>setValue(4)}/>
            <Star selected={value > 4} setValue={()=>setValue(5)}/>
        </div>
    );
}

function Star(props: StarProps) {
    return <span onClick={() => props.setValue()}>{props.selected === true ?<b>Star </b> :'Star' }</span>;
}